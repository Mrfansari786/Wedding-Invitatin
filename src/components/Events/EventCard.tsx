import { motion } from "framer-motion";

type Props = {
  icon: string;
  title: string;
  date: string;
  time: string;
  venue: string;
};

export default function EventCard({
  icon,
  title,
  date,
  time,
  venue,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      className="rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="text-5xl">{icon}</div>

      <h2 className="mt-6 text-3xl text-[#D4AF37]">
        {title}
      </h2>

      <div className="mt-8 space-y-2 text-gray-300">
        <p>📅 {date}</p>

        <p>🕒 {time}</p>

        <p>📍 {venue}</p>
      </div>
    </motion.div>
  );
}