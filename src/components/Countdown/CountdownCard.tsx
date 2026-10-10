import { motion, AnimatePresence } from "framer-motion";

type Props = {
  value: number;
  label: string;
};

export default function CountdownCard({
  value,
  label,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="group relative overflow-hidden rounded-[24px] border border-[#D4AF37]/20 bg-white/[0.04] px-5 py-6 md:px-8 md:py-8 backdrop-blur-xl shadow-[0_0_35px_rgba(212,175,55,.08)]"
    >
      {/* Glow */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      {/* Decorative Border */}

      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* Number */}

      <AnimatePresence mode="wait">

        <motion.h2
          key={value}
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -12,
            scale: 1.1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="hero-title text-center text-4xl font-bold text-[#D4AF37] md:text-6xl"
        >
          {String(value).padStart(2, "0")}
        </motion.h2>

      </AnimatePresence>

      {/* Divider */}

      <div className="mx-auto my-4 h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent md:my-5 md:w-16" />

      {/* Label */}

      <p className="text-center text-[11px] uppercase tracking-[4px] text-gray-400 md:text-xs md:tracking-[5px]">
        {label}
      </p>

    </motion.div>
  );
}