import * as Icons from '../assets'


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
  {
    id: "blog",
    title: "Blogs",
  }
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


const blogs = [
  {
    name: "Decoding Decoding Design Patterns in Java",
    link: "https://medium.com/@aprayush20/decoding-design-patterns-in-java-0b5391deba50",
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-5yRYx7dxq7A0iB0JPBwHA.png',
    description: "In the realm of Java development, we frequently encounter terms such as factory, singleton, observer, MVC, and more. Understanding the essence of these concepts is paramount as it directly impacts the quality of our code."
  },
  {
    name: "Spring Security Demystified",
    link: "https://medium.com/@aprayush20/spring-security-authentication-configuration-demystified-e44be02322fb",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*98AWkl_TOIK3JPJUV5oPMg.png",
    description: "In this article I will demonstrate how we can integrate Spring Security in a Spring Boot Application. I will be focusing on configuring different components, focusing mainly on Authentication using username and password."
  },
  {
    name: "AOP and Proxy Design Pattern in Spring Boot",
    link: "https://blog.stackademic.com/aop-and-proxy-design-pattern-in-spring-boot-d0e360783651",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qoNvecYQyD7y3_501i07_Q.png",
    description: "Aspect Oriented Programming or AOP is an important component of Spring Framework. In order to understand the internal workings, it is essential to have a clear understanding of AOP and Proxy Design Pattern."
  },
  {
    name: "Understanding Spring Data JPA & JPQL",
    link: "https://medium.com/@aprayush20/spring-data-jpa-with-spring-boot-9e3b261e4cc7",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*-u5aLfuU7XhtUUZDbs2G3A.png",
    description: "Spring Data JPA is a popular for data access that helps to write data access/persistence logic with less code. Spring Data JPA is a level of abstraction over JPA that reduces the amount of code we write and can be used to write logic efficiently using JPA based repositories."
  },
  {
    name: "Spring Security Authentication Flow",
    link: "https://medium.com/@aprayush20/understanding-spring-security-authentication-flow-f9bb545bd77",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hzJ_weQaqZf0oHtbWYFpIw.png",
    description: "Spring Security is a powerful framework which can be used to secure Spring applications. It focuses on both authentication and authorization. It can be configured and customized to meet own demands. In this article we’ll be discussing different components which are used in authentication."
  }
]


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
        icon: Icons.project_frontend
      },
      {
        link: 'https://github.com/singhayush20/cacmp_backend',
        icon: Icons.project_backend
      },
      {
        link: 'https://github.com/singhayush20/cacmp_app',
        icon: Icons.project_mobile
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
        icon: Icons.project_backend
      },
      {
        link: 'https://github.com/singhayush20/blog_app',
        icon: Icons.project_mobile
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
        icon: Icons.project_backend
      },
      {
        link: 'https://github.com/singhayush20/Assessment-Portal-App',
        icon: Icons.project_mobile
      }
    ]
  },
];


const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ayush-singh-321887201',
    icon: Icons.linkedin
  },
  {
    name: 'GitHub',
    link: 'https://github.com/singhayush20',
    icon: Icons.git,
  },
  {
    name: 'X',
    link: 'https://x.com/__ayushSingh20?t=pqctO7IqaRygbL6dQA9FUw&s=09',
    icon: Icons.x,
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@aprayush20',
    icon: Icons.medium
  }
]

const email = "ayushsingh20april@gmail.com"
const resumeLink = "https://drive.google.com/drive/folders/1DQTRmbh-PqOSv_r6LMoLstIKVwn7aQXL?usp=sharing"
const mediumProfile = "https://medium.com/@aprayush20"
export { socials, services, technologies, experiences, testimonials, projects, email, mediumProfile, resumeLink, blogs };