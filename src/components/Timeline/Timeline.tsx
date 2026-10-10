import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { weddingConfig } from "../../config/weddingConfig";

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-16 md:py-20 px-5 md:px-6">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[200px]" />

      {/* Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="relative z-10 mb-16 text-center"
      >

        <p className="text-xs uppercase tracking-[6px] text-[#D4AF37]/80">
          Our Celebration
        </p>

        <h2 className="hero-title mt-3 text-4xl md:text-6xl text-[#D4AF37]">
          Wedding Timeline
        </h2>

        <p className="mt-4 text-gray-400 italic">
          Every moment tells our story.
        </p>

        <div className="mx-auto mt-7 h-px w-28 md:w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      </motion.div>

      {/* Timeline */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Golden Line */}

        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent md:block" />

        {weddingConfig.events.map((event, index) => (

          <TimelineItem
            key={index}
            {...event}
            index={index}
            isLast={index === weddingConfig.events.length - 1}
          />

        ))}

      </div>



    </section>
  );
}