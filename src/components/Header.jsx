import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { navItems } from '../data/mock';

const Header = ({ onNavigate, variant = 'home' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const menuBtnRef = useRef(null);

  const onLight = variant === 'light';

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo(
      menuBtnRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.5 }
    );
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      gsap.fromTo('.nav-menu', { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.fromTo(
        '.nav-item',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
      );
    }
  };

  const handleNav = (page) => {
    setMenuOpen(false);
    if (onNavigate) onNavigate(page);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center">
        <button
          ref={logoRef}
          onClick={() => handleNav('home')}
          className="flex items-center opacity-0"
        >
          <span
            className="text-3xl md:text-4xl tracking-wide"
            style={{ fontFamily: "'Caveat', cursive", color: '#ff3333', fontWeight: 400 }}
          >
            lynxx
          </span>
        </button>

        <button
          ref={menuBtnRef}
          onClick={toggleMenu}
          className={`opacity-0 w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
            onLight
              ? 'border-stone-400 hover:border-stone-900'
              : 'border-white/40 hover:border-white'
          }`}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span
              className={`absolute w-5 h-[1.5px] transition-all duration-300 ${
                onLight ? 'bg-stone-900' : 'bg-white'
              } ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
            />
            <span
              className={`absolute w-5 h-[1.5px] transition-all duration-300 ${
                onLight ? 'bg-stone-900' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute w-5 h-[1.5px] transition-all duration-300 ${
                onLight ? 'bg-stone-900' : 'bg-white'
              } ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
            />
          </div>
        </button>
      </header>

      {menuOpen && (
        <div
          className="nav-menu fixed inset-0 z-40 bg-black flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <nav className="flex flex-col items-center gap-6 md:gap-10">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="nav-item text-white text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wider hover:opacity-50 transition-opacity duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNav(item.page);
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="absolute bottom-10 text-white/40 text-sm tracking-wider">
            Click anywhere to close
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
