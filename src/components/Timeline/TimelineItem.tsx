import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

type TimelineItemProps = {
  icon: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  map?: string;
  isLast?: boolean;
  index?: number;
};

export default function TimelineItem({
  icon,
  title,
  date,
  time,
  venue,
  map,
  isLast = false,
  index = 0,
}: TimelineItemProps) {
  const left = index % 2 === 0;

  const isWalima = title.toLowerCase().includes("walima");

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: left ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative mb-14 flex items-center ${
        left ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Icon */}

      <div className="absolute left-1/2 z-30 hidden -translate-x-1/2 md:flex">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px rgba(212,175,55,.2)",
              "0 0 28px rgba(212,175,55,.55)",
              "0 0 10px rgba(212,175,55,.2)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37] bg-[#111] text-4xl"
        >
          {icon}
        </motion.div>
      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
        className="relative w-full rounded-[30px] border border-[#D4AF37]/20 bg-white/[0.04] p-7 md:w-[44%] md:p-9 backdrop-blur-xl shadow-[0_0_60px_rgba(212,175,55,.08)]"
      >
        {/* Date */}

        <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2.5 text-[13px] font-medium text-[#D4AF37]">
          {date}
        </div>

        {/* Title */}

        {isWalima ? (
<h3 className="hero-title mt-8 text-center text-[1.9rem] sm:text-[2.2rem] md:text-[2.8rem] leading-none tracking-tight text-[#D4AF37] whitespace-nowrap">
  Dawat-e-Walima
</h3>
        ) : (
          <>
            <h3 className="hero-title mt-8 text-[1.55rem] leading-tight text-[#D4AF37] md:text-[2rem]">
              {title.split(" - ")[0]}
            </h3>




<p className="mt-5 hero-title text-2xl md:text-3xl uppercase tracking-[4px] text-[#D4AF37]">
  {title.split(" - ")[1]}
</p>
          </>
        )}

        {/* Details */}

        <div className="mt-7 space-y-5 text-gray-300">
          <p className="flex items-center gap-3">
            <span>🕒</span>
            <span>{time}</span>
          </p>

          <p className="flex items-start gap-3">
            <span>📍</span>
            <span>{venue}</span>
          </p>
        </div>

        {/* Button */}

        {map && (
          <a
            href={map}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-7 py-3.5 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            <FaLocationDot />
            View Location
          </a>
        )}
      </motion.div>

      {/* Line */}

      {!isLast && (
        <div className="absolute left-1/2 top-20 hidden h-24 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#D4AF37]/60 to-transparent md:block" />
      )}
    </motion.div>
  );
}