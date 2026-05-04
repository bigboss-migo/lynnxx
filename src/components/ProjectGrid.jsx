import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { projects } from '../data/mock';
import { ArrowRight } from 'lucide-react';

// Tile positions on the homepage canvas. The grid will render projects
// in this order, up to however many positions exist. Add or remove rows
// here to change the layout.
const tilePositions = [
  { x: 38, y: 35, width: 24, height: 20 },
  { x: 5,  y: 8,  width: 22, height: 18 },
  { x: 75, y: 5,  width: 20, height: 28 },
  { x: 5,  y: 68, width: 20, height: 24 },
  { x: 75, y: 70, width: 20, height: 16 },
  { x: 40, y: 70, width: 18, height: 15 },
  { x: 72, y: 38, width: 18, height: 15 },
];

const ProjectGrid = ({ onItemClick }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const buttonRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileScale = 1.57;
  const canvasSize = { width: 220, height: 180 };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const maxTranslateX = (canvasSize.width - 100) / 2;
    const maxTranslateY = (canvasSize.height - 100) / 2;
    const translateX = -(mousePos.x - 0.5) * maxTranslateX * 2;
    const translateY = -(mousePos.y - 0.5) * maxTranslateY * 2;
    gsap.to(canvasRef.current, {
      x: `${translateX}%`,
      y: `${translateY}%`,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, [mousePos]);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card-pan');
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  // Adaptive: only render as many tiles as we have projects AND positions for.
  // No hardcoded indices, no blank tiles.
  const baseProjects = projects
    .slice(0, tilePositions.length)
    .map((project, i) => ({
      ...project,
      position: { x: tilePositions[i].x, y: tilePositions[i].y },
      size: { width: tilePositions[i].width, height: tilePositions[i].height },
    }));

  const spreadProjects = baseProjects.map((project) => ({
    ...project,
    size: {
      width: isMobile ? project.size.width * mobileScale : project.size.width,
      height: isMobile ? project.size.height * mobileScale : project.size.height,
    },
  }));

  return (
    <section
      ref={containerRef}
      className="relative bg-black overflow-hidden"
      style={{ height: '100vh' }}
    >
      <div
        ref={canvasRef}
        className="absolute will-change-transform"
        style={{
          width: `${canvasSize.width}vw`,
          height: `${canvasSize.height}vh`,
          left: '50%',
          top: '50%',
          marginLeft: `-${canvasSize.width / 2}vw`,
          marginTop: `-${canvasSize.height / 2}vh`,
        }}
      >
        {spreadProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onItemClick(project.id)}
            className="project-card-pan absolute cursor-pointer group"
            style={{
              left: `${project.position.x}%`,
              top: `${project.position.y}%`,
              width: `${project.size.width}%`,
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: '16/10' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project
                </span>
              </div>
            </div>
            <h3 className="mt-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.title}
            </h3>
          </div>
        ))}

        {/* Center "Show me more" CTA — goes to top of portfolio */}
        <div
          className="absolute"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <button
            ref={buttonRef}
            onClick={() => onItemClick(7)}
            className="group flex items-center gap-3 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:border-white/60 transition-all duration-300"
          >
            <span className="text-white text-base font-normal tracking-wide">Show me more</span>
            <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <p className="text-white/30 text-sm tracking-wider lynxx-pulse">click around to enter</p>
      </div>
    </section>
  );
};

export default ProjectGrid;
