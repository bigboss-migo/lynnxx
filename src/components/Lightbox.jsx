import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, index, onClose, onPrev, onNext, projectTitle }) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  if (index === null || index === undefined) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:border-white text-white/70 hover:text-white transition-all z-10"
      >
        <X size={20} strokeWidth={1.25} />
      </button>

      {/* Counter */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 text-white/60 text-[10px] tracking-[0.3em] uppercase z-10"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {projectTitle} — {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:border-white text-white/70 hover:text-white transition-all z-10"
      >
        <ChevronLeft size={20} strokeWidth={1.25} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:border-white text-white/70 hover:text-white transition-all z-10"
      >
        <ChevronRight size={20} strokeWidth={1.25} />
      </button>

      {/* Image */}
      <div
        className="relative max-w-[92vw] max-h-[88vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={index}
          src={images[index]}
          alt={`${projectTitle} — ${index + 1}`}
          className="max-w-full max-h-[88vh] object-contain"
          style={{ animation: 'lightbox-fade 0.3s ease-out' }}
        />
      </div>

      <style>{`
        @keyframes lightbox-fade {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Lightbox;
