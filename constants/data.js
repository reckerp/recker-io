import images from "./images";

const projects = [
  {
    id: "recker-io",
    subTitle: "Next.js",
    title: "recker.io",
    imgUrl: images.portfolio_image,
    descr: "Portfolio showcasing web development projects built with Next.js.",
    gh_link: "https://github.com/reckerp/recker-io",
    demo_link: "https://recker.io",
    fullDescription: "A modern, responsive portfolio website built with Next.js to showcase my projects and skills. The site features smooth animations, responsive design, and a clean, professional aesthetic.",
    technologies: ["Next.js", "React", "TypeScript", "CSS"],
    challenges: "Creating a portfolio that stands out while maintaining a clean, professional look. Implementing responsive design that works across all devices while keeping animations smooth.",
    learnings: "Improved my skills in Next.js, responsive design, and CSS animations. Learned how to structure a portfolio effectively to showcase projects and skills.",
    year: "2023"
  },
  {
    id: "resql-me",
    subTitle: "Next.js & Golang",
    title: "resql.me",
    imgUrl: images.resqlme_image,
    descr: "An interactive SQL learning platform, streamlining assessment and study.",
    gh_link: "https://github.com/resqlme",
    demo_link: "https://resql.me",
    fullDescription: "Resql.me is an interactive SQL learning platform designed to streamline the process of learning and practicing SQL. It provides a user-friendly interface for writing and executing SQL queries against sample databases, with immediate feedback and assessment.",
    technologies: ["Next.js", "Go", "PostgreSQL", "Docker", "TypeScript"],
    challenges: "Building a reliable SQL execution environment that's both secure and performant. Creating an intuitive interface for SQL learning that works for beginners and advanced users alike. Working with ASTs and do query validation.",
    learnings: "Deepened my understanding of database systems and SQL. Gained experience in building educational platforms and creating intuitive user interfaces for complex technical concepts.",
    year: "2023"
  },
  {
    id: "itutoru",
    subTitle: "SwiftUI & Loopback4",
    title: "iTutorU",
    imgUrl: images.itutoru_image,
    descr: "A modern and easy to use tutoring application built with Swift.",
    gh_link: "",
    demo_link: "",
    fullDescription: "iTutorU is a comprehensive tutoring platform that connects students with tutors. The application features a clean, intuitive interface built with SwiftUI for iOS, and a robust backend API built with Loopback4.",
    technologies: ["SwiftUI", "Loopback4", "TypeScript", "PostgreSQL", "iOS Development"],
    challenges: "Creating a seamless user experience across different devices. Implementing communication features between tutors and students. Ensuring data security for user information.",
    learnings: "Gained experience in mobile development with SwiftUI and backend development with Loopback4. Learned about SwiftUI and iOS development using CameraKit, MapKit, NotificationKit, and more.",
    year: "2022"
  },
  {
    id: "earmark",
    subTitle: "Next.js & NextAuth.js",
    title: "Earmark",
    imgUrl: images.earmark_image,
    descr: "Fullstack webapp to bookmark Spotify audiobooks.",
    gh_link: "https://github.com/reckerp/earmark",
    demo_link: "",
    fullDescription: "Earmark is a web application that allows users to bookmark their progress in Spotify audiobooks. It integrates with the Spotify API to fetch user's listening history and provides a clean interface for managing audiobook bookmarks.",
    technologies: ["Next.js", "NextAuth.js", "Spotify API", "Prisma", "PostgreSQL"],
    challenges: "Working with the Spotify API and its limitations. Implementing a reliable system for tracking audiobook progress. Creating a user-friendly interface for managing bookmarks.",
    learnings: "Gained experience with OAuth authentication flows and working with third-party APIs. Improved my skills in building full-stack applications with Next.js and database management with Prisma.",
    year: "2022"
  },
  {
    id: "garrio",
    subTitle: "Go & GinGonic",
    title: "Garrio",
    imgUrl: images.project_example,
    descr: "A RESTful realtime API for anonymous chatrooms built with Go.",
    gh_link: "https://github.com/reckerp/garrio-server",
    demo_link: "",
    fullDescription: "Garrio is a real-time chat application that allows users to create and join anonymous chatrooms. The backend is built with Go and GinGonic, providing a fast and reliable API for the frontend to consume.",
    technologies: ["Go", "GinGonic", "WebSockets", "RESTful API", "Docker"],
    challenges: "Implementing real-time communication with WebSockets. Ensuring scalability and performance for multiple concurrent chatrooms. Managing user authentication for anonymous users.",
    learnings: "Deepened my understanding of Go and its concurrency model. Gained experience in building real-time applications and working with WebSockets.",
    year: "2022"
  },
  {
    id: "restaurant-website",
    subTitle: "React",
    title: "Restaurant Website",
    imgUrl: images.gericht_image,
    descr: "A frontend website designed for a restaurant and built with React.",
    gh_link: "https://github.com/reckerp/react-restaurant",
    demo_link: "https://reckerp.github.io/react-restaurant/",
    fullDescription: "A modern, responsive restaurant website built with React. The site features a clean design, a user-friendly interface for browsing the menu, and learning about the restaurant.",
    technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
    challenges: "Creating an appealing design that showcases the restaurant's offerings. Implementing responsive design that works well on all devices. Optimizing performance for a smooth user experience.",
    learnings: "Improved my skills in React component design and CSS styling. Learned about creating effective layouts for showcasing visual content like food items.",
    year: "2021"
  },
  {
    id: "earshot",
    subTitle: "PHP Webapplication",
    title: "EarShot",
    imgUrl: images.earshot_image,
    descr: "Music streaming platform built for artists and listeners with PHP.",
    gh_link: "",
    demo_link: "",
    fullDescription: "EarShot is a music streaming platform that connects independent artists with listeners. Built with PHP, the platform allows artists to upload their music and listeners to discover new artists and create playlists.",
    technologies: ["PHP", "PostgreSQL", "HTML/CSS"],
    challenges: "Implementing a reliable system for streaming audio files. Creating a user-friendly interface for both artists and listeners. Managing a database of audio files and user data.",
    learnings: "Gained experience in building web applications with PHP.",
    year: "2021"
  },
  {
    id: "flight-management",
    subTitle: "Java Desktop Application",
    title: "Flight Management Tool",
    imgUrl: images.flight_image,
    descr: "Flight management tool for airlines, built with JavaFX.",
    gh_link: "",
    demo_link: "",
    fullDescription: "A flight management tool built for airlines using JavaFX. The application allows airline staff to manage flights, tickets, and track KPIs.",
    technologies: ["Java", "JavaFX", "SQL", "Object-Oriented Design"],
    challenges: "Creating an intuitive interface for complex flight management tasks. Implementing a reliable system for tracking aircraft and crew availability. Ensuring data consistency across different parts of the application.",
    learnings: "Deepened my understanding of Java and JavaFX. Gained experience in building desktop applications and working with complex business logic.",
    year: "2020"
  },
  {
    id: "blackjack",
    subTitle: "Java Desktop Game",
    title: "BlackJack Simulator",
    imgUrl: images.blackjack_image,
    descr: "Blackjack simulator created with Java Swing in a project course.",
    gh_link: "",
    demo_link: "",
    fullDescription: "A Blackjack simulator built with Java Swing that allows users to play Blackjack against a computer dealer. The application implements the standard rules of Blackjack and provides a clean, intuitive interface for gameplay.",
    technologies: ["Java", "Swing", "Object-Oriented Design", "Game Logic"],
    challenges: "Implementing the rules of Blackjack correctly. Creating a user-friendly, fun interface for card games. Managing game state and user interactions.",
    learnings: "Improved my skills in Java and Swing. Learned about implementing game logic and creating engaging user interfaces for games.",
    year: "2020"
  },
];

// Example jobs data structure - replace with your actual job experience
const jobs = [
  {
    company: "MINTANO GmbH",
    title: "Software Engineer - Work Study",
    period: "Sep 2024 - Present",
    companyIcon: images.mintano_logo,
    description: "Started as an intern where I <strong>launched the migration</strong> from a monolithic backend to Kubernetes microservices. Furthermore, <strong>led the implementation</strong> of a High Availability Kubernetes cluster for the microservices. <strong>Optimized API performance</strong>, achieving ca. 15% faster queries to the image editing service. Build APIs with Go, manage containers via Docker, and handle service communication using RabbitMQ and gRPC. Work daily with both PostgreSQL and MongoDB databases. Internship project received a <strong>grade of 9.6 out of 10</strong>, showcasing exceptional performance. Continue to lead this project while finishing my degree. <br><br><strong>Key tech:</strong> Go, Kubernetes, Docker, RabbitMQ, gRPC, Git, PostgreSQL, MongoDB, GH Actions"
  },
  {
    company: "Fontys University of Applied Sciences",
    title: "Student Assistant",
    period: "Sep 2023 - Aug 2024",
    companyIcon: images.fontys_logo,
    description: "<strong>Assisted fellow students</strong> during practical hours by offering guidance, explanations, and resources, <strong>demonstrating leadership skills</strong> to motivate peers, and <strong>facilitated problem-solving discussions</strong> to enhance their comprehension of complex subjects while <strong>managing time effectively</strong> to accommodate everyone's needs"
  },
];

// Updated tech stack data structure
const techStack = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "React/Next.js", level: 80 },
      { name: "SwiftUI/Swift", level: 65 },
      { name: "HTML/CSS", level: 80 },
      { name: "Flutter", level: 50 },
      { name: "Responsive Design", level: 75 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Go", level: 90 },
      { name: "Node.js", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 75 },
      { name: "RESTful API Design", level: 85 },
      { name: "gRPC", level: 70 },
    ]
  },
  {
    category: "DevOps & Data",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 60 },
      { name: "Git & GitHub", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "RabbitMQ", level: 55 },
      { name: "CI/CD Pipelines", level: 75 },
    ]
  },
  {
    category: "Professional Skills",
    skills: [
      { name: "Agile/Scrum", level: 80 },
      { name: "Analysis and Design", level: 85 },
      { name: "System Architecture", level: 70 },
      { name: "Problem Solving", level: 80 },
      { name: "German (Native)", level: 100 },
      { name: "English (C1)", level: 90 },
    ]
  }
];


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  projects,
  jobs,
  techStack,
};
