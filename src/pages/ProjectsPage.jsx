import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const ProjectsPage = () => (
  <PageTransition>
    <SEO
      title="Projects"
      path="/projects"
      description="Explore projects built by Rabin Babu Pyakurel — including full-stack apps with Java, Spring Boot, React, PHP, and JavaScript."
    />

    <div className="py-10 sm:py-16">
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've built"
      />
      <div className="space-y-14 sm:space-y-20 max-w-5xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </PageTransition>
);

export default ProjectsPage;
