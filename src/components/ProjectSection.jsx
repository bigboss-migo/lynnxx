import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from './Lightbox';

const ProjectSection = ({ project, index, images }) => {
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Lightbox state — null when closed, image index (number) when open
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  // Lightbox controls
  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  const prevImage = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );

  return (
    <div>
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-4">
        <div>
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {String(index + 1).padStart(2, '0')} / {project.tag} / {project.year}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            {project.title}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            aria-label="Previous"
            className={`w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center transition-all ${
              canPrev
                ? 'hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900'
                : 'opacity-30 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={18} strokeWidth={1.25} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            aria-label="Next"
            className={`w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center transition-all ${
              canNext
                ? 'hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900'
                : 'opacity-30 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={18} strokeWidth={1.25} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 md:-mx-12 px-6 md:px-12"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((src, i) => (
          <figure
            key={i}
            className="snap-start flex-none w-[78vw] md:w-[55vw] lg:w-[42vw] xl:w-[36vw]"
          >
            <button
              type="button"
              onClick={() => openLightbox(i)}
              className="block w-full aspect-[3/2] overflow-hidden bg-stone-200 cursor-zoom-in group"
              aria-label={`Open ${project.title} image ${i + 1} in lightbox`}
            >
              <img
                src={src}
                alt={`${project.title} — ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </button>
            <figcaption
              className="mt-3 text-[10px] tracking-[0.3em] uppercase text-stone-400 flex justify-between"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>
                {project.title} — {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                {String(i + 1).padStart(2, '0')} / {images.length}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          projectTitle={project.title}
        />
      )}
    </div>
  );
};

export default ProjectSection;
