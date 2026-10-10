import { motion } from "framer-motion";

const petals = Array.from({ length: 15 });

export default function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {petals.map((_, i) => (

        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-[#D4AF37]/60"

          style={{
            left: `${Math.random() * 100}%`,
            top: "-20px",
          }}

          animate={{
            y: ["0vh", "110vh"],
            x: [0, 30, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.8, 0.2],
          }}

          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        />

      ))}

    </div>
  );
}