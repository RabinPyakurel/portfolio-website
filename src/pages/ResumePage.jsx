import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaTools } from 'react-icons/fa';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { SKILLS, EDUCATION, CONTACT } from '../constants';

const EXPERIENCE = [
  {
    period: '2024 - Present',
    role: 'Java & Spring Boot Development',
    description: 'Building backend services and RESTful APIs with Java and Spring Boot. Developing full-stack applications including ReliefKart (React + Spring Boot) and Local Event Finder API.',
    highlights: ['Spring Boot REST APIs', 'React frontends', 'PostgreSQL & MySQL', 'JWT Authentication'],
  },
  {
    period: '2023 - Present',
    role: 'Web Development with PHP & MySQL',
    description: 'Built the Student Academic Portal — a full-featured web application for managing student data, exams, and events using PHP, MySQL, and JavaScript.',
    highlights: ['PHP backend development', 'MySQL CRUD operations', 'Admin dashboards', 'Responsive UI design'],
  },
  {
    period: '2024',
    role: 'Frontend & JavaScript Projects',
    description: 'Created frontend projects including Currency Changer (vanilla JS with live API) and SajaBazaar (React e-commerce frontend). Gained hands-on experience with DOM manipulation and component architecture.',
    highlights: ['Vanilla JavaScript', 'React components', 'API integration', 'Responsive CSS'],
  },
];

const ResumePage = () => (
  <PageTransition>
    <SEO
      title="Resume"
      path="/resume"
      description="Resume of Rabin Babu Pyakurel — Java Developer & Web Developer with experience in Spring Boot, React, PHP, and MySQL."
    />

    <div className="py-10 sm:py-16 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <SectionHeading title="Resume" subtitle="My professional background" />
        </div>
        <ScrollReveal>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 bg-gray-100 text-gray-900
                       font-medium rounded-full hover:bg-white transition-all text-sm"
          >
            <FaDownload /> Download PDF
          </a>
        </ScrollReveal>
      </div>

      {/* Header */}
      <ScrollReveal>
        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-4 sm:p-6 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-100">Rabin Babu Pyakurel</h2>
          <p className="text-primary-400 font-medium mt-1 text-sm sm:text-base">Java Developer | Web Developer</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 break-words">
            {CONTACT.address} &middot; {CONTACT.phoneNo} &middot; {CONTACT.email}
          </p>
          <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
            Aspiring Java developer with hands-on experience in Spring Boot, React, PHP, and MySQL.
            Currently pursuing BCA with a focus on building full-stack web applications and RESTful APIs.
            Passionate about clean code, efficient backend systems, and intuitive user interfaces.
          </p>
        </div>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal delay={0.1}>
        <div className="mb-8 sm:mb-10">
          <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-100 mb-3 sm:mb-4">
            <FaTools className="text-primary-400" /> Technical Skills
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full
                           bg-[#161b22] border border-gray-800 text-gray-400"
              >
                <skill.icon className={`text-sm sm:text-base ${skill.color}`} />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Experience */}
      <ScrollReveal delay={0.15}>
        <div className="mb-8 sm:mb-10">
          <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-100 mb-3 sm:mb-4">
            <FaBriefcase className="text-primary-400" /> Experience
          </h3>
          <div className="space-y-5 sm:space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-5 sm:pl-6 border-l-2 border-gray-800">
                <div className="absolute left-[-7px] top-1.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-[#0d1117]" />
                <p className="text-xs font-mono text-gray-500">{exp.period}</p>
                <h4 className="font-semibold text-gray-100 mt-0.5 text-sm sm:text-base">{exp.role}</h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  {exp.highlights.map((h) => (
                    <span key={h} className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary-900/30 text-primary-400">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Summary */}
      <ScrollReveal delay={0.2}>
        <div className="mb-8 sm:mb-10">
          <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-100 mb-3 sm:mb-4">
            <FaCode className="text-primary-400" /> Key Projects
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Student Academic Portal', tech: 'PHP, HTML, CSS, JavaScript, MySQL' },
              { name: 'ReliefKart', tech: 'React, Spring Boot, Java, PostgreSQL' },
              { name: 'Local Event Finder API', tech: 'Java, Spring Boot, REST API, PostgreSQL' },
              { name: 'Currency Changer', tech: 'HTML, CSS, JavaScript, REST API' },
              { name: 'SajaBazaar', tech: 'React, CSS, JavaScript' },
            ].map((p) => (
              <div key={p.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2 border-b border-gray-800 last:border-b-0">
                <span className="font-medium text-gray-100 text-xs sm:text-sm">{p.name}</span>
                <span className="text-xs font-mono text-gray-500">{p.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Education */}
      <ScrollReveal delay={0.25}>
        <div className="mb-8 sm:mb-10">
          <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-100 mb-3 sm:mb-4">
            <FaGraduationCap className="text-primary-400" /> Education
          </h3>
          <div className="space-y-4">
            {EDUCATION.map((edu, i) => (
              <div key={i}>
                <p className="text-xs font-mono text-gray-500">{edu.year}</p>
                <h4 className="font-semibold text-gray-100 mt-0.5 text-sm sm:text-base">{edu.title}</h4>
                <p className="text-xs sm:text-sm text-primary-400">{edu.institution}</p>
                {edu.description && <p className="text-xs sm:text-sm text-gray-400 mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </PageTransition>
);

export default ResumePage;
