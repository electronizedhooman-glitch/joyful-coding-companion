import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Icon({ name, className }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className ?? ""}`}>{name}</span>;
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-surface-warm text-on-surface-warm selection:bg-old-rose/30 overflow-x-hidden paper-texture font-serif-display">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5 md:px-16 ${
          scrolled ? "bg-surface-warm/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1440px] mx-auto">
          <a href="#" className="font-serif-display text-brand-primary italic text-3xl md:text-5xl font-bold">
            Living World
          </a>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#journey" className="text-on-surface-warm/80 font-sans-label text-sm tracking-widest font-semibold hover:text-old-rose transition-colors">
              Journey
            </a>
            <a href="#impact" className="text-on-surface-warm/80 font-sans-label text-sm tracking-widest font-semibold hover:text-old-rose transition-colors">
              Impact
            </a>
            <a href="#gallery" className="text-on-surface-warm/80 font-sans-label text-sm tracking-widest font-semibold hover:text-old-rose transition-colors">
              Archive
            </a>
            <a
              href="#contact"
              className="bg-old-rose text-white px-6 py-2 rounded-full font-sans-label text-sm tracking-widest font-semibold hover:bg-old-rose/90 hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              Connect
            </a>
          </nav>
          <button className="md:hidden text-brand-primary" aria-label="Menu">
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <main>
        {/* Section 1: Bio */}
        <section
          id="bio"
          className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-5 md:px-16 overflow-hidden"
        >
          <div className="absolute top-40 right-[15%] opacity-40 pointer-events-none animate-pulse">
            <Icon name="auto_awesome" className="text-[60px] text-soft-periwinkle" />
          </div>
          <div className="absolute bottom-40 left-[10%] opacity-40 pointer-events-none">
            <Icon name="potted_plant" className="text-[100px] text-muted-teal" />
          </div>

          <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 flex flex-col gap-8 order-2 md:order-1">
              <span className="font-sans-label text-brand-secondary tracking-[0.2em] uppercase text-sm font-semibold">
                Creative Catalyst &amp; Community Builder
              </span>
              <div className="flex flex-col gap-4">
                <h1 className="font-serif-display text-4xl md:text-7xl leading-tight text-old-rose font-bold tracking-tight">
                  Hello, I'm Aurelius.
                </h1>
                <p className="font-serif-display text-xl text-on-surface-variant-warm leading-relaxed">
                  I believe in the power of radical community design to heal urban landscapes. My journey is one of
                  blending high-end visual aesthetics with social utility—creating spaces that don't just look
                  beautiful, but breathe and serve those who inhabit them.
                </p>
                <p className="font-serif-display text-lg text-on-surface-variant-warm italic">
                  Based in the intersection of art and impact, I turn visions into regenerative realities.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 mt-4">
                <button className="bg-old-rose text-white px-8 py-4 rounded-full font-sans-label text-sm tracking-widest font-semibold hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                  Explore Impact
                </button>
                <button className="relative font-sans-label text-sm tracking-widest font-semibold text-brand-secondary px-4 py-4 after:content-[''] after:absolute after:bottom-3 after:left-4 after:w-1/2 after:h-[2px] after:bg-old-rose/60">
                  My Manifesto
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative flex justify-center order-1 md:order-2">
              <div className="relative w-48 md:w-64 aspect-[0.8] z-20">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-soft-periwinkle/30 rounded-lg -rotate-3"></div>
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-old-rose/10 rounded-lg rotate-3"></div>
                <img
                  alt="Portrait of Aurelius"
                  className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white relative"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLs93q80IldvmDKnnTI37FLQD9cvV5ces9I3GnNP6w2d4xi1HAlB3K7QHAYvW2MfVYD6rQxPZIOeY6DD3b5XsvSrE-T43mikAeAk_cVZkzinbdzL8pRD2ILUMZuZ1M55Jx94V7lYtyFyBr9u5o6t352Ike8foPThfHtwRLBxbO2Vc2_zFCo3NC7HMW8SqKqYIAev3vj6XyWvAunuPPQmCqwiFNhUD0a5MpCx2aSka1ez-Ux-2tNi_IonhASK"
                />
                <div className="absolute -bottom-6 -left-6 text-muted-teal z-30">
                  <Icon name="filter_vintage" className="text-5xl" />
                </div>
                <div className="absolute -top-4 -right-4 text-old-rose opacity-80 z-30">
                  <Icon name="star" className="text-4xl animate-[spin_10s_linear_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Journey */}
        <section id="journey" className="py-24 px-5 md:px-16 bg-surface-container-warm/40 relative">
          <div className="max-w-4xl mx-auto relative">
            <div className="mb-20 text-center">
              <span className="font-sans-label text-brand-secondary mb-2 block uppercase tracking-widest text-sm font-semibold">
                The Chapters
              </span>
              <h2 className="font-serif-display text-4xl md:text-5xl text-brand-primary font-semibold">
                My Professional Evolution
              </h2>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-[calc(100%-100px)] bg-outline-variant-warm/60 top-40 hidden md:block"></div>
            <div className="space-y-24">
              {[
                {
                  year: "2018 — FOUNDATION",
                  title: "The Artistic Roots",
                  body: "Founded a local collective focused on urban reforestation through street murals in abandoned boroughs. This was where visual storytelling first met radical activism.",
                  dot: "bg-soft-periwinkle",
                  glow: "rgba(142,125,190,0.15)",
                  side: "left" as const,
                },
                {
                  year: "2021 — EXPANSION",
                  title: "Leadership Pulse",
                  body: "Scaled operations to direct impact initiatives across three continents. I coordinated with boutique brands to fund large-scale regenerative farming ecosystems in rural communities.",
                  dot: "bg-muted-teal",
                  glow: "rgba(153,193,185,0.15)",
                  side: "right" as const,
                  tag: "Global Impact",
                },
                {
                  year: "PRESENT — THE VISION",
                  title: "Visionary Future",
                  body: "Currently spearheading 'Living Architecture'—pioneering structural designs that integrate living biomass to improve air quality and community wellbeing in dense urban zones.",
                  dot: "bg-old-rose",
                  glow: "rgba(216,140,154,0.15)",
                  side: "left" as const,
                },
              ].map((c, i) => (
                <div key={i} className="relative flex flex-col md:flex-row items-center md:items-start gap-12">
                  <div
                    className={`w-full max-w-2xl mx-auto text-center ${
                      c.side === "left" ? "md:text-right md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <span className="font-sans-label text-brand-secondary text-xs tracking-widest font-semibold">
                      {c.year}
                    </span>
                    <h3 className="font-serif-display text-brand-primary text-2xl mt-2 mb-4 font-medium">
                      {c.title}
                    </h3>
                    <p className="font-serif-display text-lg text-on-surface-variant-warm">{c.body}</p>
                    {c.tag && (
                      <div className="mt-4 flex justify-center gap-2">
                        <span className="bg-old-rose/10 px-3 py-1 rounded-full font-sans-label text-[10px] text-old-rose uppercase tracking-widest font-semibold">
                          {c.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${c.dot} z-10 hidden md:block mt-2`}
                    style={{ boxShadow: `0 0 0 8px ${c.glow}` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-30 text-muted-teal">
              <Icon name="local_florist" className="text-4xl" />
            </div>
          </div>
        </section>

        {/* Section 3: Impact */}
        <section
          id="impact"
          className="relative py-32 px-5 md:px-16 bg-old-rose text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10">
              <Icon name="auto_awesome" className="text-4xl" />
            </div>
            <div className="absolute bottom-20 right-20">
              <Icon name="spa" className="text-6xl" />
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="font-serif-display text-4xl md:text-6xl mb-8 leading-tight font-bold">
                  The Difference <br /> Made with Intention
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {[
                    ["14k+", "Lives Impacted"],
                    ["42", "Projects Launched"],
                    ["08", "Global Partnerships"],
                    ["100%", "Intention Rate"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <span className="block font-serif-display text-white text-6xl font-bold">{n}</span>
                      <p className="font-sans-label opacity-90 uppercase text-xs mt-2 text-surface-warm tracking-widest font-semibold">
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 flex items-center justify-center mt-16 md:mt-0">
                <div className="absolute top-0 left-1/4 animate-pulse">
                  <Icon name="star" className="text-8xl text-surface-warm opacity-40" />
                </div>
                <div className="absolute bottom-10 right-1/4">
                  <Icon
                    name="local_florist"
                    className="text-[100px] text-surface-warm opacity-20 animate-[spin_15s_linear_infinite]"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Icon name="diversity_3" className="text-[120px] text-surface-warm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Archive */}
        <section id="gallery" className="py-24 px-5 md:px-16 bg-surface-container-warm/20">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-lg">
                <span className="font-sans-label text-brand-secondary mb-2 uppercase tracking-widest text-sm font-semibold block">
                  The Archive
                </span>
                <h2 className="font-serif-display text-4xl md:text-5xl text-brand-primary font-semibold">
                  Captured Intentions
                </h2>
              </div>
              <p className="font-serif-display text-old-rose text-xl italic">Evidence of the process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  alt: "Workshop",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9G9NO_Ic-nzWbx5aEKk2pGrSetHShrhtiwm1b_oxO2lg1LTY1hQUT65LEHxSxAciouY_SMP3gowpPh90NvEl0327tMSL2b8g7V_D0C4Ramjn3OoH8sT6XQcjDK6fmxHib53OrCacQoxUrjYVQisz06QVtR2ua_gZ9ZVbQ2YVHijIQzfbM2cw0S2fyAk3nRPw7Owc1RHclQK9_iPJ5NmTdNjL0JmDZpG3uf9pf0VSYoqyY0qILF0Lwew",
                  caption: "Collaboration is our fuel.",
                  rotate: "-rotate-1",
                  tape: "bg-muted-teal/40 rotate-2",
                },
                {
                  alt: "Speaking",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrcpNjNG9SecXThKeWipIxbBQAUqmDJN9QsE-iIMud52IELGv0HZ981MMZINseTSwvfRYrypDHMw8HW20I2qk3VONOTBlClYiFNVD7ooec6mNIjvVLzSTgobQrc0yVX_2WWxF_AavVihouI8x9l8T4I-Y-VOk5CKoODy7D4ttCwf4lE650uV_pAwI0Zmga_xZlyuaCVWVsp6Luwffg-skM2_1ZS6W8Km6a25M19PTOR_sA2c5ze672SQ",
                  caption: "Sharing the vision.",
                  rotate: "rotate-2",
                  tape: "bg-old-rose/40 -rotate-1",
                },
                {
                  alt: "Mural",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7lOMxOViqMHQnh4CJDnVGJkuUvQOwbnSRyeszjrrtvLqgKxIJvFiUPx2ep29Y29TaeoRz02KGRq6Q5qO2Y1FzgZX_O_JxOIymAW4icoHVlUrchuQUYhOawaflTLOkXBf8c4uGlj1J0oso6oQugubsvFpf4lkavydpQEB3iecqeNU8gMGlHUoIPVyJSOXWQ3OOTkhiWbN-78B0TSauW9XRqlwV90Dpk2yEwCloOy_Mh3bnU9L_EZfzAw",
                  caption: "Transforming the grey into green.",
                  rotate: "-rotate-2",
                  tape: "bg-soft-periwinkle/40 rotate-3",
                },
              ].map((c) => (
                <div
                  key={c.alt}
                  className={`relative bg-surface-container-lowest p-4 shadow-md border border-outline-variant-warm ${c.rotate} hover:rotate-0 transition-all`}
                >
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 mix-blend-multiply z-10 ${c.tape}`}
                  ></div>
                  <img alt={c.alt} className="w-full h-auto aspect-video object-cover" src={c.src} />
                  <p className="font-serif-display text-brand-primary text-sm mt-4 text-center italic">
                    {c.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Contact */}
        <section id="contact" className="py-32 px-5 md:px-16 bg-surface-warm relative overflow-hidden">
          <div className="absolute top-20 left-1/4 opacity-10 text-soft-periwinkle">
            <Icon name="star" className="text-8xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-16">
              <Icon name="auto_awesome" className="text-old-rose text-6xl mb-6" />
              <h2 className="font-serif-display text-4xl md:text-6xl mb-6 text-brand-primary font-bold">
                Let's Design <br /> the Future
              </h2>
              <p className="font-serif-display text-xl text-on-surface-variant-warm max-w-xl mx-auto">
                Pick a door. I’m listening.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-surface-container-lowest border border-outline-variant-warm rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-old-rose/10 flex items-center justify-center text-old-rose group-hover:scale-110 transition-transform">
                  <Icon name="photo_camera" className="text-3xl" />
                </div>
                <span className="font-serif-display text-2xl text-brand-primary">Instagram</span>
                <span className="font-sans-label text-[10px] uppercase tracking-widest text-on-surface-variant-warm/60 font-semibold">
                  @aurelius.livingworld
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-surface-container-lowest border border-outline-variant-warm rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-muted-teal/10 flex items-center justify-center text-muted-teal group-hover:scale-110 transition-transform">
                  <Icon name="business_center" className="text-3xl" />
                </div>
                <span className="font-serif-display text-2xl text-brand-primary">LinkedIn</span>
                <span className="font-sans-label text-[10px] uppercase tracking-widest text-on-surface-variant-warm/60 font-semibold">
                  /in/aurelius-vision
                </span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-surface-container-lowest border border-outline-variant-warm rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-soft-periwinkle/10 flex items-center justify-center text-soft-periwinkle group-hover:scale-110 transition-transform">
                  <Icon name="chat_bubble" className="text-3xl" />
                </div>
                <span className="font-serif-display text-2xl text-brand-primary">Notes</span>
                <span className="font-sans-label text-[10px] uppercase tracking-widest text-on-surface-variant-warm/60 font-semibold">
                  @aurelius_notes
                </span>
              </a>
            </div>

            <a
              href="mailto:hello@aurelius.livingworld"
              className="inline-flex items-center gap-3 bg-old-rose text-white font-serif-display text-2xl px-10 py-4 rounded-full hover:scale-105 transition-all shadow-lg"
            >
              <Icon name="mail" />
              Mail Me
            </a>

            <div className="mt-24 flex flex-col items-center gap-4">
              <p className="font-serif-display text-old-rose text-4xl italic">Aurelius</p>
              <div className="flex gap-8 text-on-surface-variant-warm opacity-60 font-sans-label text-[10px] tracking-widest font-semibold">
                <span>CREATIVE CATALYST</span>
                <span>·</span>
                <span>COMMUNITY BUILDER</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-warm py-12 px-5 border-t border-outline-variant-warm/40 text-center">
        <p className="font-serif-display text-brand-primary text-2xl italic mb-4">Living World</p>
        <p className="font-serif-display text-on-surface-variant-warm opacity-60 text-sm italic">
          © Signed with intention, 2024. Handcrafted for impact.
        </p>
      </footer>
    </div>
  );
}
