import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';

// NOTE: Not currently mounted in App.jsx since project tiles now route internally.
// Keep this for future use — e.g. mount it once on first visit, or gate external links.
const EmailModal = ({ isOpen, onClose, onSubmit, targetLink }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)', delay: 0.1 }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 0.2,
      ease: 'power2.in',
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    setIsSubmitting(true);
    const emails = JSON.parse(localStorage.getItem('collectedEmails') || '[]');
    if (!emails.includes(email)) {
      emails.push(email);
      localStorage.setItem('collectedEmails', JSON.stringify(emails));
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    onSubmit(email, targetLink);
    setEmail('');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Stay in the loop</h2>
          <p className="text-white/60 text-sm">
            Enter your email to access our latest work and updates
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
              autoFocus
            />
            {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Continue'}
          </button>
        </form>
        <button
          onClick={handleClose}
          className="w-full mt-3 py-2 text-white/40 text-sm hover:text-white/60 transition-colors"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
};

export default EmailModal;
