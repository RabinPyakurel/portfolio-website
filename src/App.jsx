import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResumePage from './pages/ResumePage';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      {
        path: 'projects/:slug',
        element: <ProjectDetailPage />,
        getStaticPaths: () => [
          'projects/local-event-finder-api',
          'projects/reliefkart',
          'projects/sajabazaar',
          'projects/student-academic-portal',
          'projects/currency-changer',
        ],
      },
      { path: 'certifications', element: <CertificationsPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
];
