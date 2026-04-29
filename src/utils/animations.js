import { gsap } from 'gsap';

// Fade in from above
export const fadeInDown = (el, delay = 0) =>
  gsap.fromTo(el,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay }
  );

// Pop in with overshoot
export const popIn = (el, delay = 0) =>
  gsap.fromTo(el,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay }
  );

// Stagger children up
export const staggerUp = (selector, delay = 0.1) =>
  gsap.fromTo(selector,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay }
  );

// Card grid reveal
export const revealCards = (selector, delay = 0.3) =>
  gsap.fromTo(selector,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay }
  );
