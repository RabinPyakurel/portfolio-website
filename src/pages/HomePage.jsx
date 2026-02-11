import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClientOnly } from 'vite-react-ssg';
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import ParticleBackground from '../components/ParticleBackground';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import TerminalIntro from '../components/TerminalIntro';
import profilePic from '../assets/me.jpg';
import { HERO_CONTENT, HERO_ROLES, SKILLS, PROJECTS } from '../constants';

const CountUp = ({ target, suffix = '', duration = 2000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HomePage = () => {
  const [introDone, setIntroDone] = useState(false);
  const sequence = HERO_ROLES.flatMap((role) => [role, 2000]);
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <PageTransition>
      <SEO
        path="/"
        description="Rabin Babu Pyakurel — Java Developer & Web Developer based in Kathmandu. Building full-stack web applications with Java, Spring Boot, React, and PHP."
      />

      <ClientOnly>
        {() => !introDone && <TerminalIntro onFinish={() => setIntroDone(true)} />}
      </ClientOnly>

      {/* Hero */}
      <section className="relative z-10 min-h-[calc(100vh-80px)] flex items-center py-8 sm:py-0">
        <ClientOnly>{() => <ParticleBackground />}</ClientOnly>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 py-8 md:py-16 w-full">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-mono text-primary-400 mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100 mb-4"
            >
              Rabin Babu Pyakurel
            </motion.h1>

            <div className="text-lg sm:text-xl md:text-2xl font-mono text-primary-400 mb-6 h-8">
              <TypeAnimation sequence={sequence} wrapper="span" speed={50} repeat={Infinity} />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link to="/projects" className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gray-100 text-gray-900 font-medium rounded-full hover:bg-white transition-all text-sm sm:text-base">
                View Projects <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-gray-400 font-medium rounded-full border border-gray-800 hover:border-gray-600 hover:text-gray-100 transition-all text-sm sm:text-base">
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              src={profilePic}
              alt="Rabin Babu Pyakurel - Java Developer and Web Developer from Kathmandu"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-800 shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative z-10 py-12 sm:py-20 border-t border-gray-800">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {[
            { target: 5, suffix: '+', label: 'Projects Built' },
            { target: 12, suffix: '+', label: 'Technologies' },
            { target: 2, suffix: '', label: 'Certifications' },
            { target: 2, suffix: '+', label: 'Years Coding' },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 font-mono tracking-tight">
                  <CountUp target={stat.target} suffix={stat.suffix} duration={1800 + i * 200} />
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-widest font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="relative z-10 py-12 sm:py-20">
        <SectionHeading title="What I Work With" subtitle="My core technologies" />
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 max-w-3xl mx-auto">
          {SKILLS.slice(0, 8).map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                className="lightning-card bg-[#161b22] flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 cursor-default"
              >
                <skill.icon className={`text-lg sm:text-xl ${skill.color}`} />
                <span className="text-xs sm:text-sm font-medium text-gray-100">{skill.name}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/about" className="text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors">
            See all skills &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 py-12 sm:py-20 border-t border-gray-800">
        <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />
        <div className="space-y-16 sm:space-y-24 max-w-5xl mx-auto">
          {featuredProjects.map((project, i) => {
            const isEven = i % 2 === 1;
            return (
              <ScrollReveal key={project.slug}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 sm:gap-8 md:gap-12`}>
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
                            <span className="text-5xl sm:text-6xl font-bold font-mono text-primary-300">{project.title.charAt(0)}</span>
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                      <p className="text-xs font-mono text-primary-400 uppercase tracking-widest mb-2">Project 0{i + 1}</p>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-3 group-hover:text-primary-400 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-xs font-mono text-gray-500">{tech}</span>
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
          })}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <Link to="/projects" className="group inline-flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 bg-gray-100 text-gray-900 font-medium rounded-full hover:bg-white transition-all text-sm sm:text-base">
            View All Projects <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
