import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CountdownCard from "./CountdownCard";
import { getRemainingTime } from "../../utils/countdown";
import { weddingConfig } from "../../config/weddingConfig";

export default function Countdown() {
  const [time, setTime] = useState(
    getRemainingTime(weddingConfig.weddingDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getRemainingTime(weddingConfig.weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#090909] py-20 md:py-28 px-5 md:px-6">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* Background Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "70px 70px",
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
        className="relative z-10"
      >

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="text-xs uppercase tracking-[6px] text-[#D4AF37]/80">
            Counting The Moments
          </p>

          <h2 className="hero-title mt-3 text-4xl md:text-6xl text-[#D4AF37] leading-tight">
            Until Our Dawat-e-Walima
          </h2>

          <p className="mt-3 text-sm italic text-[#D4AF37]/70">
            "The wait is almost over..."
          </p>

          <p className="mt-6 text-base md:text-lg tracking-wide text-gray-300">
            {weddingConfig.displayWeddingDate}
          </p>

          <p className="mt-2 text-lg font-medium text-[#D4AF37]">
            6:00 PM Onwards
          </p>

          <div className="mx-auto mt-7 h-px w-28 md:w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        </div>

        {/* Countdown */}

        <div className="mx-auto max-w-5xl rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.04] p-6 md:p-10 backdrop-blur-xl shadow-[0_0_70px_rgba(212,175,55,.10)]">

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

            <CountdownCard
              value={time.days}
              label="Days"
            />

            <CountdownCard
              value={time.hours}
              label="Hours"
            />

            <CountdownCard
              value={time.minutes}
              label="Minutes"
            />

            <CountdownCard
              value={time.seconds}
              label="Seconds"
            />

          </div>

        </div>

        {/* Bottom Divider */}

        <div className="mx-auto mt-12 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Bottom Text */}

        <p className="mx-auto mt-8 max-w-2xl px-4 text-center text-base leading-8 text-gray-400 md:text-lg">
          Every passing moment brings us closer to a day filled
          with love, joy, laughter and countless duas.
          <br />
          <span className="text-[#D4AF37]">
            We can't wait to celebrate this beautiful occasion with you.
          </span>
        </p>

      </motion.div>

    </section>
  );
}