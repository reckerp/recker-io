import images from "./images";

const projects = [
    {
        subTitle: "Next.js",
        title: 'recker.io',
        imgUrl: images.portfolio_image,
        descr: 'Portfolio showcasing web development projects built with Next.js.',
        gh_link: 'https://github.com/reckerp/recker-io',
        demo_link: 'https://recker.io'
    },
    {
        subTitle: "React",
        title: 'Restaurant Website',
        imgUrl: images.gericht_image,
        descr: 'A frontend website designed for a restaurant and built with React.',
        gh_link: 'https://github.com/reckerp/react-restaurant',
        demo_link: 'https://reckerp.github.io/react-restaurant/'
    },
    {
        subTitle: "PHP Webapplication",
        title: 'EarShot',
        imgUrl: images.earshot_image,
        descr: 'Music streaming platform built for artists and listeners with PHP.',
        gh_link: '',
        demo_link: ''
    },
    {
        subTitle: "Java Desktop Application",
        title: 'Flight Management Tool',
        imgUrl: images.flight_image,
        descr: 'Flight management tool for airlines, built with JavaFX.',
        gh_link: '',
        demo_link: ''
    },
    {
        subTitle: "Java Desktop Game",
        title: 'BlackJack Simulator',
        imgUrl: images.blackjack_image,
        descr: 'Blackjack simulator created with Java Swing in a project course.',
        gh_link: '',
        demo_link: ''
    },
]


const pl = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "SQL",
    "PL/SQL",
    "",
    "HTML",
    "CSS"
]

const tech = [
    "Node.js",
    "React",
    "Next.js",
    "Git",
    "Github",
    "Docker",
    "Postgres"
]

const other = [
    "RESTful APIs",
    "Backend development",
    "Web design (Figma)",
    "Web Scraping",
    "Cyber Security",
    "",
    "German(native), English(C1)"
]

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    projects,
    pl,
    tech,
    other
}
