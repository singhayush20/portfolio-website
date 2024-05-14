import * as Icons from '../assets'
import project_backend from '../assets/project_backend.png';
import project_frontend from '../assets/project_frontend.png';
import project_mobile from '../assets/project_mobile.png';

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
    title: "Backend Web Developement",
    icon: Icons.backend2,
  },
  {
    title: "Mobile App Developement",
    icon: Icons.app_development,
  },
  {
    title: "Frontend Web Development",
    icon: Icons.frontend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: Icons.java
  },
  {
    name: "Spring",
    icon: Icons.spring
  },
  {
    name: "Spring Boot",
    icon: Icons.springboot
  },
  {
    name: "Hibernate",
    icon: Icons.hibernate
  },
  {
    name: "MySQL",
    icon: Icons.mysql
  },
  {
    name: "PostgreSQL",
    icon: Icons.postgres
  },
  {
    name: "SQL",
    icon: Icons.oracle
  },
  {
    name: "Redis",
    icon: Icons.redis
  },
  {
    name: "Flutter",
    icon: Icons.flutter
  },
  {
    name: "Dart",
    icon: Icons.dart
  },
  {
    name: "Android",
    icon: Icons.android
  },
  {
    name: "Firebase",
    icon: Icons.firebase
  },
  {
    name: "JavaScript",
    icon: Icons.javascript
  },
  {
    name: "Tailwind CSS",
    icon: Icons.tailwind
  },
  {
    name: "React.js",
    icon: Icons.reactjs
  },
  {
    name: 'Redux',
    icon: Icons.redux
  },
  {
    name: "HTML",
    icon: Icons.html
  },
  {
    name: "CSS",
    icon: Icons.css
  },
  {
    name: "MongoDB",
    icon: Icons.mongodb
  },
  {
    name: "Python",
    icon: Icons.python
  },
  {
    name: "AWS",
    icon: Icons.aws
  },
  {
    name: "Microsoft Azure",
    icon: Icons.azure
  },
  {
    name: "Docker",
    icon: Icons.docker
  },
  {
    name: "Postman",
    icon: Icons.postman
  },
  {
    name: "Swagger",
    icon: Icons.swagger
  }
];


const experiences = [
  {
    title: "Backend Developer",
    company_name: "Freelance",
    icon: Icons.work1,
    iconBg: "#383E56",
    date: "June 2023 - December 2023 (7 Months)",
    points: [
      "Leveraged Spring Boot, Spring Data JPA, and MySQL Database to develop a suite of REST APIs related to admin, company, and customer functionalities for an insurance platform, based in the USA. Integrated JSON Web Token (JWT) using Spring Security to secure REST APIs.",
      "Developed and implemented features like a basic chatbot, admin dashboards, and dynamic workflows for company-user interaction",
      "Managed application deployment with CI/CD on AWS using Elastic Beanstalk, Relational Database Service, AWS Certificate Manager, AWS Code Pipeline, and GitHub.",
    ],
  },
  {
    title: "Backend Development Intern",
    company_name: "Zenith Enterprises",
    icon: Icons.work2,
    iconBg: "#cec8c8",
    date: "May 2023 - July 2023 (3 Months)",
    points: [
      "Worked in association on E-content Creation and Curation, gaining insights into creating PowerPoint presentations, incorporating voiceovers, and images with 2D & 3D animations, and creating SCORM compiled package using iSpring Suite",
      "Leveraged Spring Boot, Spring Data JPA, Spring Security, and MySQL to develop REST APIs based on product requirements."
    ],
  },
  {
    title: "Mobile Application Intern",
    company_name: "Nextgen Techno Ventures Pvt. Ltd.",
    icon: Icons.work1,
    iconBg: "#383E56",
    date: "August 2022 - September 2022 (2 Months)",
    points: [
      "Worked on two taxi-service-related Flutter mobile applications, the Driver Application and the Customer Application.",
      " Designed UI and implemented REST APIs using the Dio package and developed features like user wallet and transaction history, ride search, and history, using the Provider package for state management.",
      "Integrated third-party SDKs like Razorpay Payment Gateway, Google Maps SDK, Directions API, and Places API for features like Payment Gateway, Place Suggestions, and Directions."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Municipal Hub",
    description:
      "A mobile+web based project which provides a digital means to connect consumers with the municipal services. Consumers can access the services using a Mobile App and the corportation can use the web-based app.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
    ],
    image: Icons.carrent,
    source_links: [
      {
        link: 'https://github.com/singhayush20/cacmp_frontend',
        icon: project_frontend
      },
      {
        link: 'https://github.com/singhayush20/cacmp_backend',
        icon: project_backend
      },
      {
        link: 'https://github.com/singhayush20/cacmp_app',
        icon: project_mobile
      }
    ]
  },
  {
    name: "Connect",
    description:
      "A mobile based blogging application. It enables users to right blogs and subscribe to topics of their interest. Users can also comment on other users' blogs. Users get notified for new articles in topics of their interest",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient'
      }
    ],
    image: Icons.jobit,
    source_links: [
      {
        link: 'https://github.com/singhayush20/blogging-application',
        icon: project_backend
      },
      {
        link: 'https://github.com/singhayush20/blog_app',
        icon: project_mobile
      },
    ]
  },
  {
    name: "Quizzo",
    description:
      "A mobile based assessment application for educators. Educators can create subjects, quizzes, update live-status and check past records. Students can enroll in a subject and take assessments and view history.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient'
      }
    ],
    image: Icons.tripguide,
    source_links: [
      {
        link: 'https://github.com/singhayush20/assessment-portal',
        icon: project_backend
      },
      {
        link: 'https://github.com/singhayush20/Assessment-Portal-App',
        icon: project_mobile
      }
    ]
  },
];

export { services, technologies, experiences, testimonials, projects };