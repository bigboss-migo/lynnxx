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
              Portrait — Studio
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
              A practice rooted in <em className="italic text-stone-500">light</em>, form, and quiet
              observation.
            </h1>

            <div className="space-y-5 text-lg md:text-xl font-light leading-relaxed text-stone-700 max-w-xl">
              <p>
                Working between editorial, fashion, and personal documentary, the studio approaches
                each commission as a study — in tone, in restraint, in the way a single frame can
                hold a mood.
              </p>
              <p>
                Based in [City], with projects produced internationally for clients across
                publishing, fashion, and culture. Available for assignment, exhibition, and
                longer-form collaboration.
              </p>
            </div>

            <div
              className="mt-12 grid grid-cols-2 gap-8 max-w-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">Based</p>
                <p className="text-sm">[City, Country]</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">Since</p>
                <p className="text-sm">2018</p>
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
