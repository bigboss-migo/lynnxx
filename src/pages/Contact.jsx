import { Instagram, Facebook } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const email = 'hello@lynxx.com';

  return (
    <div
      className="min-h-screen bg-stone-50 text-stone-900 page-in flex flex-col"
      style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" }}
    >
      <section className="flex-1 max-w-[1600px] w-full mx-auto px-6 md:px-12 min-h-[70vh] flex flex-col justify-center">
        <p
          className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Contact
        </p>

        <a
          href={`mailto:${email}`}
          className="group block text-3xl md:text-5xl lg:text-7xl font-light tracking-tight transition-colors hover:text-stone-500"
        >
          <span className="italic text-stone-500 group-hover:text-stone-900 transition-colors">
            Write —{' '}
          </span>
          {email}
        </a>

        <div
          className="mt-16 flex items-center gap-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all"
          >
            <Instagram size={18} strokeWidth={1.25} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all"
          >
            <Facebook size={18} strokeWidth={1.25} />
          </a>
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400">Follow</span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
