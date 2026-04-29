import { useEffect, useRef } from 'react';
import { projects, buildImages } from '../data/mock';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';

const Portfolio = ({ scrollToProject, clearScrollTarget }) => {
  const sectionRefs = useRef({});

  useEffect(() => {
    if (scrollToProject && sectionRefs.current[scrollToProject]) {
      // small delay so the page-in animation doesn't fight with scroll
      const t = setTimeout(() => {
        sectionRefs.current[scrollToProject].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        clearScrollTarget();
      }, 250);
      return () => clearTimeout(t);
    }
  }, [scrollToProject, clearScrollTarget]);

  // Show only the 6 actual projects (id 7 is the "All Work" tile from the homepage)
  const portfolioProjects = projects.filter((p) => p.id !== 7);

  return (
    <div
      className="min-h-screen bg-stone-50 text-stone-900 page-in"
      style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" }}
    >
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-20 md:mb-32">
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Selected Work — {portfolioProjects.length} Projects
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight max-w-4xl">
            Portfolio,
            <br />
            <em className="italic text-stone-500">in chapters.</em>
          </h1>
        </div>

        <div className="space-y-32 md:space-y-44">
          {portfolioProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => (sectionRefs.current[project.id] = el)}
              style={{ scrollMarginTop: '100px' }}
            >
              <ProjectSection
                project={project}
                index={idx}
                images={buildImages(project.id)}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
