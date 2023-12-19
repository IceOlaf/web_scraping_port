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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Exp",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "feedback",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Scraping",
    icon: web,
  },
  {
    title: "Lead Generation",
    icon: mobile,
  },
  {
    title: "Email Support",
    icon: backend,
  },
  {
    title: "Web Development",
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
    title: "Business Manager",
    company_name: "Navantis",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2022 - Aug 2023",
    points: [
      "Through effective email campaigns, I have consistently nurtured leads and bolstered conversion rates. My strategic expertise has led to the development and implementation of impactful business strategies, resulting in sustainable growth and profitability. I am adept at leveraging these skills to deliver comprehensive support and drive business success."
    ],
  },
  {
    title: "Artificial Intelligence Engineer",
    company_name: "Tucows Inc.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Feb 2022",
    points: [
      "Stayed updated with the latest AI and web development trends and technologies, continuously improving skills and knowledge.",
      "Assisted in developing and training AI models for various projects, gaining hands-on experience in machine learning and deep learning techniques.",
      "Conducted data preprocessing, feature engineering, and model evaluation to optimize model performance.",
      "Assisted in troubleshooting and resolving technical issues, ensuring smooth operation of AI systems.",
    ],
  },
  {
    title: "Lead Data Scientist",
    company_name: "SolarWinds",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2019 - Dec 2020",
    points: [
      "Oversee the collection, storage, management, quality and governance of data.",
      "Developed an algorithm to identify toll plaza missing reload transactions, resulting in RM 11 million in recovered revenue every year.",
      "Built, led, mentored and motivated a team of Analysts, Data Scientists to drive tactical initiatives",
      "Tools used: Spark, Python, AWS Sagemaker",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "FreshBooks",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2018 - Apr 2019 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it would take at leat 2 months to create our website because it required extracting detailed data from all famous Car companies. However. thanks to Haruki's web scraping skills, we were able to launch a perfect website in just three weeks",
    name: "Sara Lee",
    designation: "CEO",
    company: "Navantis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Haruki does. He's notable strength is Client satisfaction",
    name: "Tucows Inc.",
    designation: "CFO",
    company: "OmiSoft",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Haruki helped businesses improve our lead management processes by developing efficient lead tracking and management systems, and by providing training and support to the sales team. I have no doubt he's one of the best lead generation experts around!",
    name: "SolarWinds",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "green",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
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
      {
        name: "python",
        color: "green",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
        name: "python",
        color: "green",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/IceOlaf",
  },
];

export { services, technologies, experiences, testimonials, projects };
