import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { PROJECTS } from '../constants';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <SEO title="Project Not Found" path={`/projects/${slug}`} />
        <div className="py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT dark:text-gray-100 mb-4">Project Not Found</h2>
          <p className="text-sm sm:text-base text-text-secondary dark:text-gray-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm sm:text-base"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEO
        title={project.title}
        path={`/projects/${project.slug}`}
        description={project.description}
      />

      <div className="py-10 sm:py-16 max-w-4xl mx-auto">
        <ScrollReveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400
                       transition-colors mb-6 sm:mb-8"
          >
            <FaArrowLeft className="text-xs sm:text-sm" /> Back to Projects
          </Link>
        </ScrollReveal>

        {/* Main Image */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-surface-50 dark:bg-[#161b22] border border-surface-200 dark:border-gray-800 mb-4 sm:mb-6 h-48 sm:h-64 md:h-80">
            {project.images && project.images.length > 0 ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FaCode className="text-6xl sm:text-8xl text-surface-200 dark:text-gray-800" />
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Additional Images */}
        {project.images && project.images.length > 1 && (
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {project.images.slice(1).map((img, i) => (
                <div key={i} className="rounded-lg sm:rounded-xl overflow-hidden bg-surface-50 dark:bg-[#161b22] border border-surface-200 dark:border-gray-800 h-32 sm:h-40">
                  <img src={img} alt={`${project.title} screenshot ${i + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Title */}
        <ScrollReveal delay={0.2}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-DEFAULT dark:text-gray-100 tracking-tight mb-3 sm:mb-4">
            {project.title}
          </h1>
        </ScrollReveal>

        {/* Tech Stack */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-mono font-medium rounded-full
                           bg-primary-50 text-primary-700 border border-primary-200 dark:bg-primary-900/30 dark:text-primary-400 dark:border-primary-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.3}>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary dark:text-gray-400 leading-relaxed mb-6 sm:mb-8">
            {project.description}
          </p>
        </ScrollReveal>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <ScrollReveal delay={0.35}>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-text-DEFAULT dark:text-gray-100 mb-3 sm:mb-4">Key Features</h2>
              <ul className="space-y-2.5 sm:space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                    <FaCheckCircle className="text-primary-500 mt-0.5 sm:mt-1 flex-shrink-0 text-sm" />
                    <span className="text-sm sm:text-base text-text-secondary dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* Links */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 bg-gray-900 text-white
                           font-medium rounded-full hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white transition-all text-sm sm:text-base"
              >
                <FaGithub className="text-lg" /> View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 bg-primary-600 text-white
                           font-medium rounded-full hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-all text-sm sm:text-base"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default ProjectDetailPage;
