import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import SkillCard from '../components/SkillCard';
import TimelineItem from '../components/TimelineItem';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT, SKILLS, EDUCATION } from '../constants';

const AboutPage = () => (
  <PageTransition>
    <SEO
      title="About"
      path="/about"
      description="Learn about Rabin Babu Pyakurel — BCA student at Kathford College, skilled in Java, Spring Boot, React, PHP, and MySQL."
    />

    <div className="py-10 sm:py-16">
      <SectionHeading title="About Me" subtitle="Get to know me better" />
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16 sm:mb-20">
        <ScrollReveal direction="left" className="flex-shrink-0">
          <img
            src={aboutImg}
            alt="Rabin Babu Pyakurel portrait"
            className="rounded-2xl w-56 h-64 sm:w-72 sm:h-80 object-cover shadow-lg"
          />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <p className="text-text-secondary dark:text-gray-400 leading-relaxed text-base sm:text-lg max-w-2xl text-center lg:text-left">
            {ABOUT_TEXT}
          </p>
        </ScrollReveal>
      </div>

      <SectionHeading title="Skills & Technologies" subtitle="Tools I work with" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 mb-16 sm:mb-20 max-w-3xl mx-auto">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>

      <SectionHeading title="Education" subtitle="My academic journey" />
      <div className="max-w-2xl mx-auto">
        {EDUCATION.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  </PageTransition>
);

export default AboutPage;
