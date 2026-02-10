import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const CertCard = ({ cert, index }) => (
  <ScrollReveal delay={index * 0.15}>
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#161b22] rounded-xl border border-gray-800 overflow-hidden
                 hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 text-center"
    >
      {cert.badge ? (
        <img
          src={cert.badge}
          alt={cert.title}
          className="mx-auto h-24 w-24 sm:h-32 sm:w-32 object-contain mb-3 sm:mb-4"
        />
      ) : (
        <div className="mx-auto h-24 w-24 sm:h-32 sm:w-32 flex items-center justify-center mb-3 sm:mb-4">
          <FaCertificate className="text-5xl sm:text-6xl text-primary-200" />
        </div>
      )}
      <h3 className="text-base sm:text-lg font-bold text-gray-100 mb-1">{cert.title}</h3>
      <p className="text-xs sm:text-sm text-gray-400 mb-2">{cert.provider}</p>
      <p className="text-xs text-gray-500">{cert.date}</p>
      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs sm:text-sm text-primary-400 hover:text-primary-300
                     font-medium transition-colors"
        >
          View Credential &rarr;
        </a>
      )}
    </motion.div>
  </ScrollReveal>
);

export default CertCard;
