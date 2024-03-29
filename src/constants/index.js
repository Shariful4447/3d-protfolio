import {
  mobile,
  backend,
  creator,
  web,
  
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  winwin,
  daffodil,
  tesla,
  shopify,
  jobit,
  Eshop,
  tripguide,
  threejs,
  sebpo_logo,
  dashboard,
  Donation,
  MusicPlayer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Back-End Web Development",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: mobile,
  },
  {
    title: "Logo Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Executive Developer",
    company_name: "Servic Engine Ltd.",
    icon: sebpo_logo,
    iconBg: "#383E56",
    date: "January 2019 - December 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web developer",
    company_name: "Win Win Info Sys. LTD",
    icon: winwin,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Dec 2018",
    points: [
      "Prepare web Software according to the requirements of Client using React, Node and Angular Js.",
      "Working on Bangladesh's 2nd Largest CRM System. Upgrading the website from an older version using React and Bootstrap which is the main landing page.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Working on building different type of theme using React JS.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Daffodil International University",
    icon: daffodil,
    iconBg: "#383E56",
    date: "Jan 2017 - Jan 2018",
    points: [
      "Work as a TA in the Subject of Database Management System, Java, Algorithm, Assembly language, Compiler Design.",
      "Helping Lecturers to make Newer Projects. Helping Student to participate in Programming Contest.",
      
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "ESHOP",
    description:
      "Web application that enables users to complete shopping, finding best sale option.More Faster and reliebale design",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Eshop,
    source_code_link: "https://github.com/Shariful4447/EShop-React-Tailwind",
    live_link: "https://e-shop-0.netlify.app/",
  },
  {
    name: "Donation Campaigner",
    description:
      "Web application that enables users to collect donation for helpless people.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "SPA",
        color: "pink-text-gradient",
      },
    ],
    image: Donation,
    source_code_link: "https://github.com/Shariful4447/Donation-Collector-React",
    live_link: "https://donation-collecter.netlify.app/",
  },
  {
    name: "Carrer Hub",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/",
  },
  {
    name: "Admin Dashboard",
    description:
      "A responsive admin dashboard for user interaction which provides smooth functionality for and ease of use",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "MaterialUi",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Shariful4447/react-admin-pannel-with-vite",
    live_link: "https://admin-panel-shariful-islam.netlify.app/",
  },
  {
    name: "Music Player Sorter",
    description:
      "A comprehensive Music Player sorter for playing music, its a frontend design platform that allows users to play music.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: MusicPlayer,
    source_code_link: "https://github.com/Shariful4447/movie-cafe-react-and-tailwind",
    live_link: "hhttps://musicplayersorter.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
