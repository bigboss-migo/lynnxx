import Footer from '../components/Footer';

const About = () => {
  return (
    <div
      className="min-h-screen bg-stone-50 text-stone-900 page-in"
      style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" }}
    >
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left — Photo */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-stone-200">
              <img
                src="https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/6b702556-4ce8-412d-54e9-c2138376f900/public"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="mt-4 text-[10px] tracking-[0.3em] uppercase text-stone-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Portrait — N.A.W.A Studio
            </p>
          </div>

          {/* Right — Text */}
          <div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              About
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-10 tracking-tight">
             I am <em className="italic text-stone-500">Lynxx Zaphiar</em>, a multidisciplinary creative, stylist, aspiring fashion designer, filmmaker, and model driven by vision, authenticity, and purpose.
            </h1>

            <div className="space-y-5 text-lg md:text-xl font-light leading-relaxed text-stone-700 max-w-xl">
              <p>
                My work exists at the intersection of fashion, film, and storytelling, where identity and self expression shape every concept I create. 
                As an androgynous artist, I embrace duality and challenge traditional boundaries, building spaces where individuality feels powerful and seen.
              </p>
              <p>
                Beyond the creative world, I bring over 16 years of experience as a nurse, a journey that has strengthened my empathy, discipline, and understanding
                of human emotion. That lived experience informs my art, allowing me to create work that is not only visually striking but emotionally honest.
              </p>
              <p>
              Whether styling looks, designing concepts, performing on camera, or directing stories, my goal is simple. Create meaningful work that commands presence, reflects truth, and leaves a lasting impact.
                <br>I believe style is language, storytelling is legacy, and purpose is the foundation of everything I create.</br>
              </p>
            </div>

            <div
              className="mt-12 grid grid-cols-2 gap-8 max-w-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">Based</p>
                <p className="text-sm">[Atlanta, Miami, New York]</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">Since</p>
                <p className="text-sm">2011</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
