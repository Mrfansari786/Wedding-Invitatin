import { motion } from "framer-motion";

export default function DuaSection() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-16 md:py-20 px-5">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[200px]" />

      {/* Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        className="relative z-10 mx-auto max-w-5xl rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.04] px-6 py-12 md:px-12 md:py-16 backdrop-blur-xl shadow-[0_0_70px_rgba(212,175,55,.08)]"
      >

        {/* Heading */}

        <p className="text-center text-xs uppercase tracking-[6px] text-[#D4AF37]/80">
          Blessings & Dua
        </p>

<h2 className="hero-title mt-4 text-[2rem] sm:text-4xl md:text-5xl text-[#D4AF37] leading-tight">
  Prayer for the Couple
</h2>

        <div className="mx-auto mt-6 h-px w-28 md:w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Arabic */}

<p
  dir="rtl"
  className="mt-10 text-[1.8rem] leading-[3.2rem] text-center text-[#D4AF37] md:text-5xl md:leading-[5rem]"
>
  اللَّهُمَّ بَارِكْ لَهُمَا وَبَارِكْ عَلَيْهِمَا <br />
  وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ
</p>

        {/* Transliteration */}

<p className="mx-auto mt-10 max-w-2xl text-center text-lg italic leading-10 text-gray-300">
  Allahumma barik lahuma wa barik 'alayhima,
  <br />
  wajma' bainahuma fi khayr.
</p>

        {/* Meaning */}

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 px-6 py-6">

<p className="text-center text-base leading-8 text-gray-300 md:text-lg">
            <span className="text-[#D4AF37] font-medium">
              “O Allah,
            </span>{" "}
            bless them, shower Your blessings upon them,
            and unite them together in goodness.”
          </p>

        </div>

        {/* Bottom Ornament */}

        <div className="mt-10 flex items-center justify-center gap-4">

          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <motion.span
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="text-xl text-[#D4AF37]"
          >
            ✦
          </motion.span>

          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        </div>

      </motion.div>


    </section>
  );
}