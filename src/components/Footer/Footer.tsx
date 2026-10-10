import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090909] py-20 md:py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[200px]" />

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
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >

        {/* Ornament */}

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="mb-5 text-3xl text-[#D4AF37]"
        >
          ❁
        </motion.div>

        {/* Divider */}

        <div className="mx-auto mb-8 h-px w-36 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Heading */}

        <h2 className="hero-title text-4xl md:text-6xl text-[#D4AF37]">
            JazakAllahu Khairan    
        </h2>

        {/* JazakAllah */}

        {/* <p className="mt-6 text-xl italic text-[#D4AF37]">
          JazakAllahu Khairan
        </p> */}

        {/* Description */}

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-300">
          Thank you for being a part of our special day.
          <br />
          Your love, heartfelt duas and warm presence
          mean more to us than words can express.
        </p>

        {/* Couple Names */}

        <div className="mt-14 space-y-8">

  <h3 className="hero-title text-[1.7rem] md:text-5xl text-center leading-tight">
    Maruf <span className="mx-3 text-[#D4AF37]">♥</span> Mantasha
  </h3>

  <div className="mx-auto h-px w-36 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

  <h3 className="hero-title text-[1.7rem] md:text-5xl text-center leading-tight">
    Farhan <span className="mx-3 text-[#D4AF37]">♥</span> Misbah
  </h3>

</div>
        {/* Dua */}

        <div className="mx-auto mt-12 max-w-2xl rounded-[28px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-6 py-8">

          <p className="text-lg italic leading-9 text-[#D4AF37]">
            May Allah bless this union with endless love,
            mercy, happiness and barakah.
            <br />
            <span className="font-semibold">
              Ameen.
            </span>
          </p>

        </div>

        {/* Divider */}

        <div className="mt-12 flex items-center justify-center gap-3">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          <span className="text-xl text-[#D4AF37]">
            ✦
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        </div>

        {/* Made with Love */}

        <p className="mt-8 text-sm tracking-[4px] text-gray-500">
          Made with
          <span className="mx-2 text-red-500">
            ❤
          </span>
          for our beloved family & friends
        </p>

        {/* Animated Ending */}

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="mt-10 text-[#D4AF37]"
        >
          ✨ We look forward to celebrating with you ✨
        </motion.p>

      </motion.div>

    </footer>
  );
}