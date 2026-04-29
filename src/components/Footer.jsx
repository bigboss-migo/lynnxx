const Footer = () => {
  return (
    <footer className="border-t border-stone-200 mt-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-3">
        <p
          className="text-[10px] tracking-[0.3em] uppercase text-stone-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          © {new Date().getFullYear()} — All rights reserved
        </p>
        <p
          className="text-[10px] tracking-[0.3em] uppercase text-stone-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          LYNXX
        </p>
      </div>
    </footer>
  );
};

export default Footer;
