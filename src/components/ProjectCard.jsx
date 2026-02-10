import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 1;

  return (
    <ScrollReveal delay={0.05}>
      <Link to={`/projects/${project.slug}`} className="group block">
        <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 sm:gap-8 md:gap-10`}>
          {/* Image */}
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden bg-[#161b22] h-48 sm:h-56 md:h-64"
            >
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-900/30 to-primary-800/30">
                  <span className="text-5xl sm:text-6xl font-bold font-mono text-primary-300">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <p className="text-xs font-mono text-primary-400 uppercase tracking-widest mb-2">
              Project 0{index + 1}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 group-hover:text-primary-400 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs font-mono text-gray-500">
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors">
              View details &rarr;
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
};

export default ProjectCard;
