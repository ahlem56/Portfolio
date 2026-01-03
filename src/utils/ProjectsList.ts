import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"

import {
    NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo
} from "../assets/Logos"

import {
    NextmartShots, Armsv1Shots, Armsv2Shots, ClimateShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, VortexaShots, Armsv3Shots
} from "../assets/Shots"

import {
    ARMSv1Mockup, ARMSv2Mockup, ARMSv3Mockup, ClimateMockup, DaysbeyondMockup, SrinivasMockup, VortexaMockup, XreconMockup, YoatubeMockup
} from "../assets/Mockup"

import AngularIcon from "../assets/Icons/AngularIcon.svg";
import FlutterFlowIcon from "../assets/Icons/FlutterFlowIcon.svg";
import DockerIcon from "../assets/Icons/DockerIcon.svg";
import AwsIcon from "../assets/Icons/AwsIcon.svg";
import GitHubIcon from "../assets/Icons/GithubIcon.svg";  // Ensure the file is named correctly
import LaravelIcon from "../assets/Icons/LaravelIcon.svg"; // New import for Laravel
import DotnetIcon from "../assets/Icons/DotnetIcon.svg";
import PostgresqlIcon from "../assets/Icons/PostgresqlIcon.svg"; // New import for PostgreSQL
import JiraIcon from "../assets/Icons/JiraIcon.svg"; // New import for Jira
import SpringIcon from "../assets/Icons/SpringIcon.svg"; // New import for Symfony
import cIcon from "../assets/Icons/cIcon.svg"; // New import for C
import csharpIcon from "../assets/Icons/csharp2.svg"; // New import for C#
import kubernetesIcon from "../assets/Icons/kubernetesIcon.svg"; // New import for Kubernetes
import jenkinsIcon from "../assets/Icons/jenkinsIcon.svg"; // New import for Jenkins
import symfonyIcon from "../assets/Icons/symfonyIcon.svg"; // New import for Symfony
import pascalIcon from "../assets/Icons/pascalIcon.svg"; // New import for Pascal
import prometheusIcon from "../assets/Icons/prometheusIcon.svg"; // New import for Prometheus
import grafanaIcon from "../assets/Icons/grafanaIcon.svg"; // New import for Grafana
import SonarQubeIcon from "../assets/Icons/sonarqubeIcon.svg"; // New import for SonarQube
import KeycloakIcon from "../assets/Icons/KeycloakIcon.svg"; // New import for Keycloak
import HuggingFaceIcon from "../assets/Icons/huggingfaceIcon.svg"; // New import for Hugging Face
import OpenAIIcon from "../assets/Icons/openAiIcon.svg"; // New import for OpenAI
import firebase from "../assets/Icons/firebase.svg"; // New import for Firebase
import MicroservicesIcon from "../assets/Icons/MicroservicesIcon.svg"; // New import for Microservices
import LogoSpeedyGo from "../assets/Logos/speedyGo.png";  // Update with actual path to your logo image
import LogoSmartCruit from "../assets/Logos/smartcruit.png";  // Path to your screenshot image
import LogoDevTalk from "../assets/Logos/stackClone.png";  // Path to your mockup image
import Logotechpioneers from "../assets/Logos/techpioneers.png";  // Path to your mockup image
import Python from "../assets/Icons/python.svg"; // New import for Python
import smartcruit from "../assets/Logos/smartcruit.png"; // New import for SmartCruit
import LogoFitness from "../assets/Logos/LogoFitness.png"; // New import for Fitness App
import SentenceTransformers from "../assets/Icons/SentenceTransformers.png"; // New import for Sentence Transformers
import Spacy from "../assets/Icons/Spacy.png"; // New import for spaCy
import ScikitLearn from "../assets/Icons/ScikitLearn.png"; // New import for Scikit-Learn
import Websocket from "../assets/Icons/Websocket.png"; // New import for WebSocket
import Jwt from "../assets/Icons/Jwt.png"; // New import for JWT

import SmartCruitShot from "../assets/Shots/SmartCruitShot.png";
import DevTalkShot from "../assets/Shots/DevTalkShot.png";
import SpeedyGoShot from "../assets/Shots/SpeedyGoShot.png";
import ELearningShot from "../assets/Shots/TechPioneersShot.png";
import FitnessShot from "../assets/Shots/FitnessAppShot.png";
import SmartcruitMockup from "../assets/Mockup/SmartcruitMockup.png";
import ElearningMockup from "../assets/Mockup/ElearningMockup.png";
import DevTalkMockup from "../assets/Mockup/DevTalkMockup.png";
import SpeedyGoMockup from "../assets/Mockup/SpeedyGoMockup.png";
import FitnessMockup from "../assets/Mockup/FitnessMockup.png";

const DEFAULT_MOCKUP = smartcruit;


const TechInfo = {
    HTML: { title: "HTML", description: "HyperText Markup Language for creating the structure of web pages.", icon: HtmlIcon },
    CSS: { title: "CSS", description: "Cascading Style Sheets for styling the presentation of HTML documents.", icon: CssIcon },
    JavaScript: { title: "JavaScript", description: "High-level scripting language for adding interactivity to web pages.", icon: JsIcon },
    React: { title: "React", description: "JavaScript library for building user interfaces with reusable components.", icon: ReactIcon },
    Node: { title: "Node.js", description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.", icon: NodeIcon },
    TypeScript: { title: "TypeScript", description: "A superset of JavaScript adding static typing for building large-scale applications.", icon: TsIcon },
    Next: { title: "Next.js", description: "A React framework for server-side rendering, static site generation, and routing.", icon: NextIcon },
    MySQL: { title: "MySQL", description: "Open-source relational database management system.", icon: MysqlIcon },
    MongoDB: { title: "MongoDB", description: "NoSQL database offering flexibility and scalability.", icon: MongoIcon },
    GDrive: { title: "Google Drive API", description: "RESTful API for integrating Google Drive functionalities.", icon: GdriveIcon },
    SocketIO: { title: "Socket.IO", description: "Real-time bidirectional communication library.", icon: SocketIoIcon },
    RESTAPI: { title: "REST API", description: "Architectural style for designing networked applications.", icon: RestApiIcon },
    PHP: { title: "PHP", description: "Server-side scripting language for building dynamic web applications.", icon: PhpIcon },
    Vite: { title: "Vite", description: "Modern build tooling for web development.", icon: ViteIcon },
    NextAuth: { title: "NextAuth.js", description: "Authentication library for Next.js applications.", icon: NextAuthIcon },
    Redux: { title: "Redux", description: "State management library for JavaScript applications.", icon: ReduxIcon },
    TailwindCSS: { title: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development.", icon: TailwindIcon },
    Zustand: { title: "Zustand", description: "State management for React applications.", icon: ZustandIcon },
    Astro: { title: "Astro", description: "Frontend framework for modern websites.", icon: AstroIcon },
    NanoStores: { title: "NanoStores", description: "Lightweight state management for JavaScript applications.", icon: NanostoresIcon },
    D3: { title: "D3.js", description: "Library for creating dynamic, interactive graphics.", icon: D3JsIcon },
    ReactQuery: { title: "React Query", description: "Library for managing, caching, and synchronizing server state.", icon: ReactQueryIcon },
    EdgeStore: { title: "EdgeStore", description: "Open-source file storage service.", icon: EdgeStoreIcon },
    Angular: { title: "Angular", description: "Web application framework for building dynamic applications.", icon: AngularIcon },
    SpringBoot: { title: "Spring Boot", description: "Framework for building Java-based web applications.", icon: SpringIcon },
    Microservices: { title: "Microservices", description: "Architecture for developing applications as a collection of loosely coupled services.", icon: MicroservicesIcon },
    Keycloak: { title: "Keycloak", description: "Open-source identity and access management solution.", icon: KeycloakIcon },
    Symfony: { title: "Symfony", description: "PHP framework for building web applications.", icon: symfonyIcon },
    HuggingFace: { title: "Hugging Face", description: "A platform for machine learning models and datasets.", icon: HuggingFaceIcon },
    FlutterFlow: { title: "FlutterFlow", description: "A visual app builder for Flutter applications.", icon: FlutterFlowIcon },
    OpenAI: { title: "OpenAI", description: "AI-powered tools and services.", icon: OpenAIIcon },
    Firebase: { title: "Firebase", description: "Google's mobile platform for building apps.", icon: firebase },
    Python: { title: "Python", description: "High-level programming language for general-purpose programming.", icon: Python},
    Docker: { title: "Docker", description: "Platform for developing, shipping, and running applications in containers.", icon: DockerIcon },
    AWS: { title: "AWS", description: "Amazon Web Services cloud computing platform.", icon: AwsIcon },
    GitHub: { title: "GitHub", description: "Platform for version control and collaboration.", icon: GitHubIcon },
    Laravel: { title: "Laravel", description: "PHP framework for web application development.", icon: LaravelIcon },
    Dotnet: { title: ".NET", description: "Framework for building cross-platform applications.", icon: DotnetIcon },
    spaCy : { title: "spaCy", description: "Open-source library for advanced Natural Language Processing in Python.", icon: Spacy },
    SentenceTransformers : { title: "Sentence Transformers", description: "Library for sentence embeddings using transformer models.", icon: SentenceTransformers },
    ScikitLearn : { title: "Scikit-Learn", description: "Machine learning library for Python.", icon: ScikitLearn },
    JWT : { title: "JSON Web Tokens (JWT)", description: "Compact, URL-safe means of representing claims to be transferred between two parties.", icon: Jwt },
    WebSocket : { title: "WebSocket", description: "Protocol for full-duplex communication channels over a single TCP connection.", icon: Websocket },
};


const FeatureList = {
    Responsive: { title: "Responsive Design", description: "Seamless experience across devices with responsive design." },
    SEO: { title: "SEO Optimization", description: "SEO best practices ensuring optimal visibility on search engines." }
};

export const ProjectsList = [
    {
  Name: "SmartCruit",

  ShortDesc:
    "Intelligent recruitment platform that analyzes PDF CVs and matches them with job offers using NLP and machine learning.",

  Desc:
    "SmartCruit is a full-stack intelligent recruitment platform developed during my engineering internship. " +
    "It automates the analysis of PDF CVs and job offers using Natural Language Processing and machine learning techniques. " +
    "The platform computes semantic matching scores, identifies missing skills, and recommends relevant training resources. " +
    "It supports candidates, employers, and administrators through dedicated dashboards, real-time messaging, and notifications.",

  Logo: LogoSmartCruit,
  Shot: [SmartCruitShot],
  Mockup: SmartcruitMockup,

  Theme: "#273469",
  Status: "completed",

  Link: "", // keep empty if not publicly deployed
  Source: "https://github.com/ahlem56/SmartCruitBackend.git", // keep empty or private repo


   Demo: {
    email: "demo@example.com",
    password: "123456"
  },

  Tech: [
    TechInfo.SpringBoot,
    TechInfo.Angular,
    TechInfo.MySQL,
    TechInfo.Python,
    TechInfo.spaCy,
    TechInfo.SentenceTransformers,
    TechInfo.ScikitLearn,
    TechInfo.JWT,
    TechInfo.WebSocket,
  ],

  features: [
    {
      title: "Semantic CV & Job Offer Analysis",
      description:
        "Automatic extraction of skills, experience, education, and languages from PDF CVs and job descriptions using NLP.",
    },
    {
      title: "AI-Powered Matching Score",
      description:
        "Semantic similarity calculation between CVs and job offers using Sentence Transformers and machine learning models.",
    },
    {
      title: "Missing Skills Detection",
      description:
        "Identification of skill gaps between candidate profiles and job requirements.",
    },
    {
      title: "Personalized Training Recommendations",
      description:
        "Suggested learning resources (YouTube API) to help candidates improve missing skills.",
    },
    {
      title: "Multi-Role Platform",
      description:
        "Dedicated spaces for Candidates, Employers, and Administrators with role-based access and dashboards.",
    },
    {
      title: "Real-Time Communication",
      description:
        "Instant messaging and notifications using WebSocket for faster recruitment workflows.",
    },
  ],

  hideProject: false,
  LogoSize: 44,

  versions: [
    {
      title: "Internship Version",
      version: "2025",
    },
  ],
},
    {
  Name: "DevTalk",
  ShortDesc: "Community Q&A web platform inspired by Stack Overflow, enabling users to ask, answer, vote, and collaborate on technical topics.",
  Desc: `
DevTalk is a full-stack web application developed during my internship at MEDIANET.
The platform allows users to ask technical questions, post answers, vote on content,
and manage their profiles. The goal was to deliver an intuitive, responsive, and
scalable Q&A system similar to Stack Overflow.

I was involved in the complete development lifecycle, from requirement analysis
and UML design to database modeling, backend implementation, and frontend integration.
Special attention was given to security, performance, and user experience.
  `,
  Logo: LogoDevTalk,
  Shot: [DevTalkShot],
  Mockup: DevTalkMockup,

  Theme: "#F97316",
  Status: "completed",
  Link: "", // optional demo link
  Source: "", // optional GitHub repo

   Demo: {
    email: "demo@example.com",
    password: "123456"
  },


  Tech: [
    TechInfo.React,
    TechInfo.Laravel,
    TechInfo.MySQL,
    TechInfo.PHP,
    TechInfo.JavaScript
  ],

  features: [
    {
      title: "User Authentication & Authorization",
      description: "Secure registration and login system with protected routes and user sessions."
    },
    {
      title: "Question & Answer Management",
      description: "Users can create, edit, delete questions and answers with rich text formatting."
    },
    {
      title: "Voting System",
      description: "Upvote and downvote functionality for questions and answers to highlight quality content."
    },
    {
      title: "Search & Filtering",
      description: "Search questions by keywords and tags for quick information retrieval."
    },
    {
      title: "Profile Management",
      description: "User profile pages with editable personal information and activity history."
    },
    {
      title: "Responsive UI",
      description: "Modern, mobile-friendly interface built with React and Bootstrap."
    }
  ],

  hideProject: false,
  LogoSize: 44,
  versions: [
    { title: "DevTalk v1", version: "1.0" }
  ]
}
,
    {
  Name: "SpeedyGo",

  ShortDesc:
    "Smart mobility and delivery platform combining ride booking, carpooling, and parcel delivery with AI-powered services.",

  Desc:
    "SpeedyGo is a large-scale smart mobility platform developed as a university project using the Agile Scrum methodology. " +
    "The application unifies urban transport, intercity travel, carpooling, and parcel delivery into a single ecosystem. " +
    "It addresses common limitations of existing platforms by offering transparent pricing, real-time tracking, secure payments, " +
    "and intelligent AI-driven features. The system was designed with scalability, modularity, and security in mind, " +
    "using a microservices-based architecture.",

  Logo: LogoSpeedyGo,
  Shot: [SpeedyGoShot],
  Mockup: SpeedyGoMockup,

  Theme: "#273469",
  Status: "completed",

  Link: "", // not publicly deployed
  Source: "https://github.com/ahlem56/speedyGoBackend.git", // private academic repo

   Demo: {
    email: "demo@example.com",
    password: "123456"
  },


  Tech: [
    TechInfo.Angular,
    TechInfo.SpringBoot,
    TechInfo.Microservices,
    TechInfo.MySQL,
    TechInfo.Python,
    TechInfo.Docker,
    TechInfo.JWT,
    TechInfo.WebSocket
  ],

  features: [
    {
      title: "Multi-Service Mobility Platform",
      description:
        "Unified system for trip booking, carpooling, parcel delivery, and event-based transportation."
    },
    {
      title: "Microservices Architecture",
      description:
        "Modular backend built with Spring Boot microservices for scalability, maintainability, and independent service deployment."
    },
    {
      title: "AI-Powered Dynamic Pricing",
      description:
        "Machine learning models estimate parcel prices and optimize fares based on distance, demand, and parcel characteristics."
    },
    {
      title: "Real-Time Tracking & Notifications",
      description:
        "Live trip and parcel tracking with instant notifications and status updates using WebSocket."
    },
    {
      title: "Secure Authentication & Role Management",
      description:
        "JWT-based authentication with role-based access control for Users, Drivers, and Administrators."
    },
    {
      title: "Carpooling & Subscription System",
      description:
        "Smart carpool management with subscriptions, seat availability tracking, and optimized route matching."
    },
    {
      title: "Complaint & Feedback Analysis",
      description:
        "AI-driven analysis of user complaints and trip feedback to improve service quality and response time."
    },
    {
      title: "Admin Dashboard & Vehicle Management",
      description:
        "Administrative tools for managing users, drivers, vehicles, events, partners, and system statistics."
    }
  ],

  hideProject: false,
  LogoSize: 44,

  versions: [
    {
      title: "Academic Project Version",
      version: "2024–2025"
    }
  ]
}
,
    {
  Name: "Plateforme E-Learning",

  ShortDesc:
    "Web-based educational platform for course management, collaborative learning, and academic communication.",

  Desc:
    "This e-learning platform is a complete web solution designed to support digital education for students and teachers. " +
    "It provides tools for managing courses, organizing academic events, and facilitating collaboration through discussion spaces. " +
    "A structured forum enables students and instructors to exchange knowledge and educational resources. " +
    "An automated assistance system was integrated using the Hugging Face API to answer frequently asked questions and guide users " +
    "through the platform, improving accessibility and user experience.",

  Logo: Logotechpioneers,
  Shot: [ELearningShot],
  Mockup: ElearningMockup,

  Theme: "#273469",
  Status: "completed",

  Link: "",
  Source: "https://github.com/m2l33k/techPioneers.git",

   Demo: {
    email: "demo@example.com",
    password: "123456"
  },


  Tech: [
    TechInfo.Symfony,
    TechInfo.PHP,
    TechInfo.MySQL,
    TechInfo.JavaScript,
    TechInfo.RESTAPI,
    TechInfo.HuggingFace
  ],

  features: [
    {
      title: "Course & Content Management",
      description:
        "Creation, organization, and management of educational courses and learning materials."
    },
    {
      title: "Event Planning & Scheduling",
      description:
        "Academic event scheduling with calendars for courses, exams, and activities."
    },
    {
      title: "Collaborative Spaces & Forum",
      description:
        "Discussion forums enabling students and teachers to exchange ideas and share educational resources."
    },
    {
      title: "Automated User Assistance",
      description:
        "Chatbot powered by the Hugging Face API to answer common questions and assist users."
    },
    {
      title: "Role-Based Access",
      description:
        "Distinct roles for students and teachers with adapted permissions and features."
    }
  ],

  hideProject: false,
  LogoSize: 44,

  versions: [
    {
      title: "Academic Project",
      version: "4 months"
    }
  ]
}
,
    {
  Name: "Health and Fitness Assistant",

  ShortDesc:
    "Mobile health and fitness application for tracking well-being and generating personalized routines and recommendations.",

  Desc:
    "Health and Fitness Assistant is a mobile application designed to help users monitor their physical well-being and adopt healthier habits. " +
    "The application allows users to track daily activity, calculate BMI (IMC), and monitor progress over time. " +
    "Personalized workout routines and health recommendations are generated based on user profiles, including chronic conditions when applicable. " +
    "The app also integrates an in-app store offering health supplements and wellness products. " +
    "OpenAI APIs are used to generate contextual health advice, while Firebase ensures secure data storage and authentication.",

  Logo: LogoFitness,
  Shot: [FitnessMockup],
  Mockup: FitnessMockup,

  Theme: "#273469",
  Status: "completed",

  Link: "",
  Source: "",

 Demo: {
    email: "demo@example.com",
    password: "123456"
  },


  Tech: [
    TechInfo.FlutterFlow,
    TechInfo.OpenAI,
    TechInfo.Firebase
  ],

  features: [
    {
      title: "Health Metrics Tracking",
      description:
        "BMI (IMC) calculation, step tracking, and daily activity monitoring."
    },
    {
      title: "Personalized Workout Plans",
      description:
        "Recommended workout routines adapted to user goals and physical condition."
    },
    {
      title: "Chronic Condition Adaptation",
      description:
        "Health advice and routines adapted for users with chronic illnesses."
    },
    {
      title: "AI-Powered Health Advice",
      description:
        "Personalized recommendations generated using OpenAI APIs."
    },
    {
      title: "Wellness Store",
      description:
        "Integrated shop for health supplements and wellness-related products."
    }
  ],

  hideProject: false,
  LogoSize: 44,

  versions: [
    {
      title: "Mobile App Version",
      version: "1.0"
    }
  ]
}
,
];

