import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

type TapToOpenProps = {
  onOpen: () => void;
};

export default function TapToOpen({ onOpen }: TapToOpenProps) {
  return (
    <div className="min-h-screen bg-[#090909] flex flex-col items-center justify-center px-6 text-center">

      {/* Envelope */}

      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="-mt-12 md:mt-0"
      >
        <FaEnvelope
          size={72}
          className="text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,.4)]"
        />
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-4xl md:text-6xl hero-title text-[#D4AF37]"
      >
        You've Received
      </motion.h1>

      {/* Subtitle */}

      <p className="mt-3 text-base md:text-xl text-gray-400">
        A Wedding Invitation
      </p>

      {/* Divider */}

      <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Button */}

      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={onOpen}
        className="mt-8 rounded-full bg-[#D4AF37] px-8 py-3 text-base font-semibold text-black shadow-[0_0_30px_rgba(212,175,55,.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(212,175,55,.5)]"
      >
        Open Invitation
      </motion.button>

    </div>
  );
}