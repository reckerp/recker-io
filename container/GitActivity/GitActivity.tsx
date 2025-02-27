"use client";
import React, { useState, useEffect } from 'react';
import { Heading, AnimatedSection } from "../../components";
import "./GitActivity.css";
import { FaCodeBranch, FaGitAlt, FaExclamationCircle, FaPlus, FaGithub, FaBook, FaStar } from 'react-icons/fa';

interface ContributionDay {
    date: Date;
    count: number;
    intensity: number;
}

interface Month {
    month: number;
    label: string;
}

interface GitHubStats {
    commits: number;
    pullRequests: number;
    reviews: number;
    issues: number;
}

interface RecentActivity {
    type: string;
    repo: string;
    title: string;
    url: string;
    createdAt: string;
}

interface Repository {
    name: string;
    description: string;
    url: string;
    stars: number;
    updatedAt: string;
}

// Function to calculate intensity level (0-4) based on contribution count
const getIntensityLevel = (count: number, maxCount: number): number => {
    if (count === 0) return 0;
    if (maxCount <= 0) return 0;
    
    const ratio = count / maxCount;
    if (ratio < 0.25) return 1;
    if (ratio < 0.5) return 2;
    if (ratio < 0.75) return 3;
    return 4;
};

const GitActivity: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [contributionData, setContributionData] = useState<ContributionDay[]>([]);
    const [activityStats, setActivityStats] = useState<GitHubStats>({
        commits: 0,
        pullRequests: 0,
        reviews: 0,
        issues: 11
    });
    const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
    const [recentRepos, setRecentRepos] = useState<Repository[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch GitHub data
    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true);
                
                // Fetch contribution data
                const contributionsResponse = await fetch('https://github-contributions-api.jogruber.de/v4/reckerp?y=last');
                if (!contributionsResponse.ok) {
                    throw new Error('Failed to fetch GitHub contributions');
                }
                
                const contributionsData = await contributionsResponse.json();
                
                // Process contributions data
                const contributions: ContributionDay[] = [];
                let maxContributions = 0;
                
                // Check if the API response has the expected structure
                if (!contributionsData.contributions || !Array.isArray(contributionsData.contributions)) {
                    console.error('Unexpected API response structure:', contributionsData);
                    throw new Error('Unexpected API response format');
                }
                
                // Find max contributions for scaling
                contributionsData.contributions.forEach((day: any) => {
                    if (day && typeof day.count === 'number' && day.count > maxContributions) {
                        maxContributions = day.count;
                    }
                });
                
                // Convert to our format with intensity levels
                contributionsData.contributions.forEach((day: any) => {
                    if (day && day.date && typeof day.count === 'number') {
                        contributions.push({
                            date: new Date(day.date),
                            count: day.count,
                            intensity: getIntensityLevel(day.count, maxContributions)
                        });
                    }
                });
                
                setContributionData(contributions);
                
                // Using the values from the screenshot you shared
                const stats: GitHubStats = {
                    commits: 74,      // 74% commits
                    reviews: 1,       // 1% code reviews
                    pullRequests: 15, // 15% pull requests
                    issues: 10        // 10% issues
                };
                
                setActivityStats(stats);
                
                // Fetch recent activity and repositories
                try {
                    // Fetch recent events
                    const eventsResponse = await fetch('https://api.github.com/users/reckerp/events/public');
                    if (eventsResponse.ok) {
                        const eventsData = await eventsResponse.json();
                        
                        // Process events data
                        const activities: RecentActivity[] = [];
                        
                        eventsData.slice(0, 5).forEach((event: any) => {
                            let activity: RecentActivity | null = null;
                            
                            if (event.type === 'PushEvent' && event.payload.commits && event.payload.commits.length > 0) {
                                activity = {
                                    type: 'commit',
                                    repo: event.repo.name,
                                    title: event.payload.commits[0].message,
                                    url: `https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`,
                                    createdAt: event.created_at
                                };
                            } else if (event.type === 'PullRequestEvent') {
                                activity = {
                                    type: 'pull_request',
                                    repo: event.repo.name,
                                    title: event.payload.pull_request.title,
                                    url: event.payload.pull_request.html_url,
                                    createdAt: event.created_at
                                };
                            } else if (event.type === 'IssuesEvent') {
                                activity = {
                                    type: 'issue',
                                    repo: event.repo.name,
                                    title: event.payload.issue.title,
                                    url: event.payload.issue.html_url,
                                    createdAt: event.created_at
                                };
                            } else if (event.type === 'CreateEvent' && event.payload.ref_type === 'repository') {
                                activity = {
                                    type: 'repository',
                                    repo: event.repo.name,
                                    title: `Created repository ${event.repo.name}`,
                                    url: `https://github.com/${event.repo.name}`,
                                    createdAt: event.created_at
                                };
                            }
                            
                            if (activity) {
                                activities.push(activity);
                            }
                        });
                        
                        setRecentActivity(activities);
                    }
                    
                    // Fetch repositories
                    const reposResponse = await fetch('https://api.github.com/users/reckerp/repos?sort=updated&per_page=5');
                    if (reposResponse.ok) {
                        const reposData = await reposResponse.json();
                        
                        // Process repos data
                        const repos: Repository[] = reposData.map((repo: any) => ({
                            name: repo.name,
                            description: repo.description || '',
                            url: repo.html_url,
                            stars: repo.stargazers_count,
                            updatedAt: repo.updated_at
                        }));
                        
                        setRecentRepos(repos);
                    }
                } catch (apiError) {
                    console.error('Error fetching GitHub API data:', apiError);
                    // Don't set error state here, as we still have the contribution data
                }
                
                setLoading(false);
            } catch (err) {
                console.error('Error fetching GitHub data:', err);
                setError('Failed to load GitHub data. Please try again later.');
                setLoading(false);
            }
        };
        
        fetchGitHubData();
    }, []);

    // Function to format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    // Function to render recent activity - simplified to just show 1 item
    const renderRecentActivity = () => {
        if (!recentActivity || recentActivity.length === 0) {
            return (
                <div className="app__gitactivity-recent">
                    <h4 className="app__gitactivity-recent-title">Latest Activity</h4>
                    <div className="app__gitactivity-no-data">No recent activity found</div>
                </div>
            );
        }

        const latestActivity = recentActivity[0];
        
        return (
            <div className="app__gitactivity-recent">
                <h4 className="app__gitactivity-recent-title">Latest Activity</h4>
                <div className="app__gitactivity-recent-item">
                    <div className="app__gitactivity-recent-icon">
                        {latestActivity.type === 'PushEvent' ? <FaCodeBranch /> : 
                         latestActivity.type === 'PullRequestEvent' ? <FaGitAlt /> : 
                         latestActivity.type === 'IssuesEvent' ? <FaExclamationCircle /> : 
                         latestActivity.type === 'CreateEvent' ? <FaPlus /> : <FaGithub />}
                    </div>
                    <div className="app__gitactivity-recent-content">
                        <a href={latestActivity.url} className="app__gitactivity-recent-link" target="_blank" rel="noopener noreferrer">
                            {latestActivity.repo}
                        </a>
                        <div className="app__gitactivity-recent-meta">
                            <span>{latestActivity.type.replace('Event', '')}</span>
                            <span>{formatDate(latestActivity.createdAt)}</span>
                        </div>
                        <div className="app__gitactivity-recent-description">
                            {latestActivity.title && latestActivity.title.length > 60 
                              ? `${latestActivity.title.substring(0, 60)}...` 
                              : latestActivity.title}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Function to render recent repositories - simplified to just show 1
    const renderRecentRepos = () => {
        if (!recentRepos || recentRepos.length === 0) {
            return (
                <div className="app__gitactivity-recent">
                    <h4 className="app__gitactivity-recent-title">Recent Repository</h4>
                    <div className="app__gitactivity-no-data">No repositories found</div>
                </div>
            );
        }

        const topRepo = recentRepos[0];
        
        return (
            <div className="app__gitactivity-recent">
                <h4 className="app__gitactivity-recent-title">Recent Repository</h4>
                <div className="app__gitactivity-recent-item">
                    <div className="app__gitactivity-recent-icon">
                        <FaBook />
                    </div>
                    <div className="app__gitactivity-recent-content">
                        <a href={topRepo.url} className="app__gitactivity-recent-link" target="_blank" rel="noopener noreferrer">
                            {topRepo.name}
                        </a>
                        <div className="app__gitactivity-recent-meta">
                            <span className="app__gitactivity-recent-repo">{formatDate(topRepo.updatedAt)}</span>
                            <span className="app__gitactivity-recent-stars">
                                <FaStar style={{ marginRight: '3px' }} /> {topRepo.stars}
                            </span>
                        </div>
                        <div className="app__gitactivity-recent-description">
                            {topRepo.description && topRepo.description.length > 60 
                              ? `${topRepo.description.substring(0, 60)}...` 
                              : topRepo.description || 'No description available'}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Function to render the heatmap
    const renderHeatmap = () => {
        if (loading) {
            return <div className="app__gitactivity-loading">Loading activity data</div>;
        }
        
        if (error) {
            return <div className="app__gitactivity-error">{error}</div>;
        }

        if (contributionData.length === 0) {
            return <div className="app__gitactivity-empty">No contribution data available</div>;
        }

        // Calculate total contributions
        const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0);

        // Group data by week and month
        const weeks: (ContributionDay | null)[][] = [];
        let currentWeek: (ContributionDay | null)[] = [];
        let currentDate = new Date(contributionData[0].date);
        const firstDay = currentDate.getDay();
        
        // Add empty cells for the first week
        for (let i = 0; i < firstDay; i++) {
            currentWeek.push(null);
        }
        
        contributionData.forEach((day) => {
            const dayDate = new Date(day.date);
            
            if (dayDate.getDay() === 0 && currentWeek.length > 0) {
                weeks.push([...currentWeek]);
                currentWeek = [];
            }
            
            currentWeek.push(day);
            
            if (currentWeek.length === 7) {
                weeks.push([...currentWeek]);
                currentWeek = [];
            }
        });
        
        // Add the last week if it's not complete
        if (currentWeek.length > 0) {
            weeks.push(currentWeek);
        }
        
        // Get month labels
        const months: Month[] = [];
        let currentMonth = -1;
        
        contributionData.forEach((day) => {
            const date = new Date(day.date);
            const month = date.getMonth();
            
            if (month !== currentMonth) {
                currentMonth = month;
                months.push({
                    month,
                    label: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)
                });
            }
        });

        return (
            <div className="app__gitactivity-heatmap">
                <div className="app__gitactivity-months">
                    {months.map((month, index) => (
                        <div key={`month-${index}`} className="app__gitactivity-month">
                            {month.label}
                        </div>
                    ))}
                </div>
                <div className="app__gitactivity-calendar">
                    <div className="app__gitactivity-weekdays">
                        <div>Mon</div>
                        <div>Wed</div>
                        <div>Fri</div>
                    </div>
                    <div className="app__gitactivity-weeks">
                        {weeks.map((week, weekIndex) => (
                            <div key={`week-${weekIndex}`} className="app__gitactivity-week">
                                {week.map((day, dayIndex) => (
                                    <div 
                                        key={`day-${weekIndex}-${dayIndex}`} 
                                        className={`app__gitactivity-day ${day ? `intensity-${day.intensity}` : 'empty'}`}
                                        title={day ? `${day.count} contributions on ${day.date.toDateString()}` : ''}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="app__gitactivity-summary">
                    <div className="app__gitactivity-total-contributions">
                        <span className="app__gitactivity-total-count">{totalContributions}</span>
                        <span className="app__gitactivity-total-label">total contributions</span>
                    </div>
                    <div className="app__gitactivity-legend">
                        <div className="app__gitactivity-legend-text">Less</div>
                        <div className="app__gitactivity-legend-cells">
                            <div className="app__gitactivity-day intensity-0"></div>
                            <div className="app__gitactivity-day intensity-1"></div>
                            <div className="app__gitactivity-day intensity-2"></div>
                            <div className="app__gitactivity-day intensity-3"></div>
                            <div className="app__gitactivity-day intensity-4"></div>
                        </div>
                        <div className="app__gitactivity-legend-text">More</div>
                    </div>
                </div>
            </div>
        );
    };

    // Function to render the activity stats as a radar/axis chart
    const renderActivityStats = () => {
        if (loading) {
            return <div className="app__gitactivity-loading">Loading stats</div>;
        }
        
        if (error) {
            return <div className="app__gitactivity-error">{error}</div>;
        }

        // Calculate positions for the axis chart - make it smaller with more padding
        const centerX = 250;
        const centerY = 150;
        const axisLength = 80; // Smaller axes
        
        // Calculate endpoints for each axis
        const topPoint = { x: centerX, y: centerY - axisLength };
        const rightPoint = { x: centerX + axisLength, y: centerY };
        const bottomPoint = { x: centerX, y: centerY + axisLength };
        const leftPoint = { x: centerX - axisLength, y: centerY };
        
        // Calculate points for the activity polygon based on the data
        const commitPoint = {
            x: centerX - (axisLength * activityStats.commits / 100),
            y: centerY
        };
        
        const reviewPoint = {
            x: centerX,
            y: centerY - (axisLength * activityStats.reviews / 100)
        };
        
        const issuePoint = {
            x: centerX + (axisLength * activityStats.issues / 100),
            y: centerY
        };
        
        const prPoint = {
            x: centerX,
            y: centerY + (axisLength * activityStats.pullRequests / 100)
        };
        
        // Create the polygon points string
        const polygonPoints = `${commitPoint.x},${commitPoint.y} ${reviewPoint.x},${reviewPoint.y} ${issuePoint.x},${issuePoint.y} ${prPoint.x},${prPoint.y}`;

        return (
            <div className="app__gitactivity-stats">
                <svg width="500" height="300" viewBox="0 0 500 300">
                    {/* Axes */}
                    <line 
                        x1={centerX} y1={centerY - axisLength} 
                        x2={centerX} y2={centerY + axisLength} 
                        className="app__gitactivity-axis"
                    />
                    <line 
                        x1={centerX - axisLength} y1={centerY} 
                        x2={centerX + axisLength} y2={centerY} 
                        className="app__gitactivity-axis"
                    />
                    
                    {/* Activity polygon */}
                    <polygon 
                        points={polygonPoints}
                        className="app__gitactivity-polygon"
                    />
                    
                    {/* Dots at each point */}
                    <circle cx={commitPoint.x} cy={commitPoint.y} r="5" className="app__gitactivity-point" />
                    <circle cx={reviewPoint.x} cy={reviewPoint.y} r="5" className="app__gitactivity-point" />
                    <circle cx={issuePoint.x} cy={issuePoint.y} r="5" className="app__gitactivity-point" />
                    <circle cx={prPoint.x} cy={prPoint.y} r="5" className="app__gitactivity-point" />
                    
                    {/* Center dot */}
                    <circle cx={centerX} cy={centerY} r="5" className="app__gitactivity-center-point" />
                    
                    {/* Labels with more padding */}
                    <text x={leftPoint.x - 30} y={centerY} textAnchor="end" dominantBaseline="middle" className="app__gitactivity-axis-label">
                        74%
                    </text>
                    <text x={leftPoint.x - 30} y={centerY + 25} textAnchor="end" dominantBaseline="middle" className="app__gitactivity-axis-label-name">
                        Commits
                    </text>
                    
                    <text x={centerX} y={topPoint.y - 30} textAnchor="middle" dominantBaseline="auto" className="app__gitactivity-axis-label">
                        1%
                    </text>
                    <text x={centerX} y={topPoint.y - 55} textAnchor="middle" dominantBaseline="auto" className="app__gitactivity-axis-label-name">
                        Code review
                    </text>
                    
                    <text x={rightPoint.x + 30} y={centerY} textAnchor="start" dominantBaseline="middle" className="app__gitactivity-axis-label">
                        10%
                    </text>
                    <text x={rightPoint.x + 30} y={centerY + 25} textAnchor="start" dominantBaseline="middle" className="app__gitactivity-axis-label-name">
                        Issues
                    </text>
                    
                    <text x={centerX} y={bottomPoint.y + 30} textAnchor="middle" dominantBaseline="hanging" className="app__gitactivity-axis-label">
                        15%
                    </text>
                    <text x={centerX} y={bottomPoint.y + 55} textAnchor="middle" dominantBaseline="hanging" className="app__gitactivity-axis-label-name">
                        Pull requests
                    </text>
                </svg>
            </div>
        );
    };

    return (
        <>
            <AnimatedSection direction="right" delay={200}>
                <div className="app__gitactivity">
                    <Heading title="GitHub Activity" subtitle="Open Source"/>
                    <p className="p__syne app__gitactivity-intro">
                        A visual representation of my coding activity and contributions on GitHub.
                    </p>
                    
                    <div className="app__gitactivity-container">
                        <div className="app__gitactivity-heatmap-container">
                            <h3 className="app__gitactivity-section-title">Contribution Activity</h3>
                            {renderHeatmap()}
                            <div className="app__gitactivity-recent-container">
                                {loading ? (
                                    <div className="app__gitactivity-loading">Loading recent activity</div>
                                ) : (
                                    <div className="app__gitactivity-recent-compact">
                                        {renderRecentActivity()}
                                        {renderRecentRepos()}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="app__gitactivity-stats-container">
                            <h3 className="app__gitactivity-section-title">Activity Breakdown</h3>
                            <div className="app__gitactivity-axis-chart">
                                {renderActivityStats()}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
};

export default GitActivity; 