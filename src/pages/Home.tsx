import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp, FaLocationDot, FaMusic, FaPause, FaHeart } from "react-icons/fa6";
import { weddingConfig } from "../config/weddingConfig";

const reveal = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} transition={{ duration: .7 }} className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-[10px] font-medium uppercase tracking-[.35em] text-[var(--gold)]">{eyebrow}</p>
      <h2 className="font-display mt-3 text-5xl leading-none text-[var(--ink)] md:text-6xl">{title}</h2>
      <div className="gold-line mx-auto mt-6 h-px w-28" />
    </motion.div>
  );
}

function Petals() {
  return <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden>
    {Array.from({ length: 10 }).map((_, i) => (
      <span key={i} className="absolute h-2 w-3 rounded-[70%_30%_70%_30%] bg-[var(--blush)] opacity-50" style={{ left: `${8 + i * 10}%`, top: "-20px", animation: `floatPetal ${11 + (i % 4)}s linear ${i * 1.1}s infinite` }} />
    ))}
  </div>;
}

function CoupleCard({ couple, index }: { couple: typeof weddingConfig.couples[number]; index: number }) {
  return <motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} transition={{ duration: .8 }} className="relative overflow-hidden rounded-[2rem] border border-[var(--gold)]/25 bg-[var(--paper)] px-6 py-12 text-center shadow-[0_25px_80px_rgba(80,55,45,.09)] md:px-12 md:py-16">
    <span className="absolute left-5 top-5 font-display text-5xl text-[var(--blush)]">0{index + 1}</span>
    <div className="relative z-10">
      <p className="text-[9px] uppercase tracking-[.32em] text-[var(--muted)]">{index === 0 ? "The first celebration" : "The second celebration"}</p>
      <p className="mt-8 text-[10px] uppercase tracking-[.25em] text-[var(--muted)]">{couple.groomFather}</p>
      <h3 className="font-display mt-2 text-6xl leading-none text-[var(--ink)] md:text-8xl">{couple.groom}</h3>
      <p className="my-3 font-display text-3xl text-[var(--gold)]">weds</p>
      <h3 className="font-display text-6xl leading-none text-[var(--ink)] md:text-8xl">{couple.bride}</h3>
      <p className="mt-5 text-[10px] uppercase tracking-[.25em] text-[var(--muted)]">{couple.brideFather}</p>
      <div className="gold-line mx-auto mt-9 h-px w-28" />
    </div>
  </motion.article>;
}

function Home() {
  const [musicOn, setMusicOn] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const audio = useMemo(() => new Audio("/music/wedding-theme.mp3"), []);

  useEffect(() => {
    audio.loop = true;
    audio.volume = .22;
    return () => audio.pause();
  }, [audio]);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleMusic = async () => {
    if (musicOn) { audio.pause(); setMusicOn(false); return; }
    try { await audio.play(); setMusicOn(true); } catch { setMusicOn(false); }
  };

  return <main className="min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
    <Petals />

    <section className="paper-grain relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(233,214,208,.8),transparent_45%)]" />
      <div className="relative z-10 w-full max-w-5xl text-center">
        <motion.p initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="text-[10px] uppercase tracking-[.4em] text-[var(--gold)]">Bismillah ir-Rahman ir-Rahim</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} className="mt-7 text-[9px] uppercase tracking-[.38em] text-[var(--muted)]">A wedding celebration</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .9 }} className="font-display mt-7 text-7xl leading-[.78] text-[var(--ink)] md:text-[10rem]">Maruf <span className="text-[var(--gold)]">&</span> Mantasha</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-5 font-display text-3xl text-[var(--rose)]">with Misbah & Farhan</motion.p>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: .7 }} className="gold-line mx-auto mt-10 h-px w-40" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mx-auto mt-8 max-w-xl font-display text-2xl leading-relaxed text-[var(--muted)]">Two Nikahs. One joyful family celebration.</motion.p>
        <a href="#couples" className="mt-12 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/50 px-7 py-3 text-[10px] font-medium uppercase tracking-[.25em] text-[var(--ink)] transition hover:bg-[var(--gold)] hover:text-white">Discover the invitation <span>↓</span></a>
      </div>
    </section>

    <section id="couples" className="bg-[var(--ivory)] px-5 py-16 md:px-8 md:py-20">
      <SectionTitle eyebrow="The families" title="Two beautiful unions" />
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {weddingConfig.couples.map((couple, index) => <CoupleCard key={couple.groom} couple={couple} index={index} />)}
      </div>
      <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto mt-14 max-w-2xl text-center font-display text-2xl italic leading-relaxed text-[var(--muted)]">With the blessings of Allah (SWT), we warmly invite you to celebrate with our families.</motion.p>
    </section>

    <section className="bg-[var(--ivory)] px-5 py-16 md:px-8 md:py-20">
      <SectionTitle eyebrow="Save these moments" title="The wedding events" />
      <div className="mx-auto max-w-4xl">
        {weddingConfig.events.map((event, index) => <motion.article key={event.icon} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * .08, duration: .6 }} className="group relative flex gap-5 border-b border-[var(--gold)]/20 py-8 md:gap-10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/35 bg-[var(--paper)] font-display text-xl text-[var(--gold)]">{event.icon}</div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-4xl text-[var(--ink)]">{event.title}</h3>
              <p className="text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">{event.date}</p>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{event.couple}</p>
            <p className="mt-4 text-sm text-[var(--ink)]">{event.time}</p>
          </div>
        </motion.article>)}
      </div>
    </section>

    <section className="paper-grain bg-[var(--paper)] px-5 py-16 md:px-8 md:py-20">
      <SectionTitle eyebrow="The venue" title="Where we gather" />
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--gold)]/25 bg-white/70 p-8 text-center shadow-[0_25px_80px_rgba(80,55,45,.07)] md:p-14">
        <FaLocationDot className="mx-auto text-[var(--gold)]" size={24} />
        <h3 className="font-display mt-5 text-5xl text-[var(--ink)]">Ansari Jamat Khana</h3>
        <p className="mt-2 text-sm uppercase tracking-[.25em] text-[var(--muted)]">Padana</p>
        <a href={weddingConfig.mapLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-7 py-3 text-[10px] uppercase tracking-[.22em] text-white transition hover:bg-[var(--gold)]"><FaLocationDot /> View location</a>
      </motion.div>
    </section>

    <section className="bg-[var(--ivory)] px-5 py-16 text-center md:py-20">
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-[10px] uppercase tracking-[.35em] text-[var(--gold)]">With warm regards</p>
        <h2 className="font-display mt-6 text-4xl leading-relaxed text-[var(--ink)] md:text-5xl">Your presence will bring joy<br className="hidden md:block" /> and blessings to our family.</h2>
        <div className="gold-line mx-auto my-8 h-px w-28" />
        <p className="font-display text-2xl text-[var(--rose)]">Haji Kamruddin Ansari (Adv.) | Anwar Ansari (Adv.)</p>
        <p className="mt-2 text-xs uppercase tracking-[.22em] text-[var(--muted)]">& Entire Ansari Family</p>
        <p className="mt-8 font-display text-2xl italic text-[var(--gold)]">Together in celebration</p>
      </motion.div>
    </section>

    <footer className="paper-grain border-t border-[var(--gold)]/20 bg-[var(--paper)] px-5 py-14 text-center">
      <FaHeart className="mx-auto animate-pulse text-[var(--rose)]" />
      <p className="mt-4 text-[9px] uppercase tracking-[.35em] text-[var(--muted)]">With gratitude</p>
      <h2 className="font-display mt-3 text-3xl text-[var(--ink)]">JazakAllahu Khairan</h2>
      <p className="mt-3 font-display text-lg italic text-[var(--muted)]">May Allah bless us all with happiness and barakah.</p>
      <div className="mx-auto mt-7 flex items-center justify-center gap-3 text-[var(--gold)]"><span>✦</span><span>✦</span><span>✦</span></div>
    </footer>

    <motion.button onClick={toggleMusic} whileTap={{ scale: .92 }} className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/35 bg-[var(--paper)]/90 text-[var(--gold)] shadow-lg backdrop-blur" aria-label={musicOn ? "Pause music" : "Play music"}>{musicOn ? <FaPause size={14} /> : <FaMusic size={14} />}</motion.button>
    <AnimatePresence>{showTop && <motion.button initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .8 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--ink)] text-white shadow-lg" aria-label="Back to top"><FaArrowUp size={14} /></motion.button>}</AnimatePresence>
  </main>;
}

export default Home;
