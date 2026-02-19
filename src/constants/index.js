import sapoImg from '../assets/projects/sapo.png';
import currencyImg from '../assets/projects/currency.png';
import reliefkartImg from '../assets/projects/relief-kart.png';
import eventFinderImg from '../assets/projects/locaal-event-finder.png';
import sajabazaarImg from '../assets/projects/sajabazaar.png';
import frontendCertImg from '../assets/certifications/frontend-cert.jpg';

import { DiJavascript1 } from 'react-icons/di';
import { FaJava, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMysql, SiSpringboot, SiTailwindcss, SiMongodb, SiPostman } from 'react-icons/si';

export const HERO_CONTENT = `I am an aspiring Java developer specializing in Spring Boot and web development. My journey began with coding in C and JavaScript, leading to a solid foundation in PHP and MySQL. My core focus remains on mastering Java and building innovative web solutions.`;

export const HERO_ROLES = [
  'Java Developer',
  'Backend Developer',
  'Web Developer',
  'CS Student',
];

export const ABOUT_TEXT = `I am an enthusiastic and goal-driven developer currently pursuing a BCA at Kathford International College of Engineering and Management. My technical expertise includes C, Java, JavaScript, React, PHP, and MySQL, which I have leveraged to build academic and practice projects. My primary focus is on mastering Java and Spring Boot, with aspirations to excel as a full-time Java developer. My fascination with creating intuitive and efficient web solutions drives my efforts. Outside of coding, I enjoy participating in tech competitions and exploring emerging technologies.`;

export const SKILLS = [
  { name: 'Java',        icon: FaJava,          color: 'text-red-500' },
  { name: 'Spring Boot', icon: SiSpringboot,    color: 'text-green-600' },
  { name: 'React',       icon: RiReactjsLine,   color: 'text-cyan-500' },
  { name: 'JavaScript',  icon: DiJavascript1,   color: 'text-yellow-400' },
  { name: 'PHP',         icon: FaPhp,           color: 'text-indigo-500' },
  { name: 'MySQL',       icon: SiMysql,         color: 'text-blue-600' },
  { name: 'MongoDB',     icon: SiMongodb,       color: 'text-green-500' },
  { name: 'HTML',        icon: FaHtml5,         color: 'text-orange-500' },
  { name: 'CSS',         icon: FaCss3Alt,       color: 'text-blue-500' },
  { name: 'Tailwind',    icon: SiTailwindcss,   color: 'text-teal-400' },
  { name: 'Git',         icon: FaGitAlt,        color: 'text-orange-600' },
  { name: 'Postman',     icon: SiPostman,       color: 'text-orange-400' },
];

export const EDUCATION = [
  {
    year: '2022 - Present (Expected 2026)',
    title: 'Bachelor of Computer Application (BCA)',
    institution: 'Kathford International College of Engineering and Management',
    description: 'Currently pursuing BCA with focus on software development, database systems, and web technologies.',
  },
  {
    year: 'Completed',
    title: 'XII (NEB)',
    institution: 'Ambition Academy',
    description: '',
  },
];

export const PROJECTS = [
  {
    slug: 'local-event-finder-api',
    title: 'Local Event Finder - Backend API',
    image: eventFinderImg,
    images: [eventFinderImg],
    description: 'A production-grade RESTful backend for a local event discovery and management platform. Supports event creation, ticketing with QR code check-in, dual payment gateway integration (eSewa & Khalti), community groups, and a full admin moderation panel — all secured with JWT authentication and granular Role-Based Access Control (RBAC).',
    features: [
      'JWT authentication with token blacklisting and BCrypt password hashing',
      'Three-tier RBAC system: User, Organizer, and Admin roles with granular permissions',
      'Full CRUD for events with image uploads, location coordinates, and capacity limits',
      'Ticketing system with QR code generation (ZXing) and organizer-side scan check-in',
      'eSewa and Khalti payment gateway integration with signature verification',
      'Community groups with membership approval workflows and group-scoped events',
      'Location-based event discovery using Haversine distance calculation',
      'OTP-based password reset via email with 10-minute expiry tokens',
      'Admin moderation panel for user management, event flagging, and refund processing',
      'Swagger UI (OpenAPI 3.0) for interactive API documentation',
      'PostgreSQL database hosted on Supabase with Spring Data JPA / Hibernate',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/RabinPyakurel/Local-Event-Finder-Backend-.git',
    live: null,
  },
  {
    slug: 'reliefkart',
    title: 'ReliefKart - Disaster Relief E-Commerce Platform',
    image: reliefkartImg,
    images: [reliefkartImg],
    description: 'A full-stack e-commerce platform for purchasing disaster relief and emergency supplies, built specifically for Nepal. Users can browse, search, and purchase essential items like earthquake kits, first aid supplies, water purifiers, and lighting equipment — with integrated eSewa and Khalti payment gateways.',
    features: [
      'User registration with comprehensive validation and secure login with session persistence',
      'Product catalog with category filtering (Earthquake Kits, First Aid, Water & Food, Lighting & Power)',
      'Full-text search across product names and categories',
      'Shopping cart with real-time backend synchronization and quantity management',
      'eSewa payment integration with HMAC-SHA256 signature verification and transaction tracking',
      'Khalti payment integration via REST API',
      'Spring Boot backend with layered architecture (Controller → Service → Repository)',
      'React Context API for global cart state management',
      'PostgreSQL database for product, user, and order data',
      'Fully responsive mobile-first design with Tailwind CSS',
    ],
    technologies: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/RabinPyakurel/ReliefKart.git',
    live: null,
  },
  {
    slug: 'sajabazaar',
    title: 'SajaBazaar',
    image: sajabazaarImg,
    images: [sajabazaarImg],
    description: 'A frontend e-commerce website with modern UI, product browsing, and shopping cart functionality.',
    features: [
      'Product browsing with grid and list view options',
      'Category-based filtering and product search',
      'Shopping cart with add, remove, and quantity management',
      'Clean and modern interface with consistent design system',
      'Fully responsive layout for mobile, tablet, and desktop',
      'Built with React component architecture for reusability',
    ],
    technologies: ['React', 'CSS', 'JavaScript'],
    github: '',
    live: 'https://www.sajabazaar.com/',
  },
  {
    slug: 'student-academic-portal',
    title: 'Student Academic Portal',
    image: sapoImg,
    images: [sapoImg],
    description: 'A comprehensive web application for managing student profiles, exam registration, event tracking, and academic records with real-time database integration.',
    features: [
      'Student registration and profile management with CRUD operations',
      'Exam registration system with schedule tracking',
      'Event management and tracking for college activities',
      'Grade tracking and academic record viewing',
      'Admin dashboard for managing students, events, and exams',
      'MySQL database integration for persistent data storage',
      'Responsive design with clean UI for both students and admins',
    ],
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: '',
    live: null,
  },
  {
    slug: 'currency-changer',
    title: 'Currency Changer',
    image: currencyImg,
    images: [currencyImg],
    description: 'A currency conversion application that fetches live exchange rates via API integration with a clean and intuitive interface.',
    features: [
      'Real-time currency conversion using live exchange rate API',
      'Support for multiple international currencies',
      'Clean and intuitive user interface',
      'Swap functionality to quickly reverse conversion direction',
      'Responsive design that works on all screen sizes',
      'DOM manipulation and async API calls with vanilla JavaScript',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    github: '',
    live: null,
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Frontend Development using React and Figma',
    provider: 'VOLVE IT HUB NEPAL',
    date: 'December, 2024',
    badge: frontendCertImg,
    credentialUrl: '',
    description: 'Frontend web development covering React and Figma for building modern user interfaces.',
  },
  {
    title: 'Python with Data Science',
    provider: 'Samasta Groups Pvt. Ltd.',
    date: 'July, 2025',
    badge: null,
    credentialUrl: '',
    description: 'Python programming and data science covering data analysis, visualization, and machine learning fundamentals.',
  },
];

export const CONTACT = {
  address: 'Gaurighat, Kathmandu',
  phoneNo: '+977 9848754410',
  email: 'contact@rabinpyakurel.com.np',
};
