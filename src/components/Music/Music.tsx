import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-theme.mp3"
        loop
      />

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={
          playing
            ? {
                scale: [1, 1.08, 1],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-black/70 px-5 py-3 text-[#D4AF37] backdrop-blur-xl shadow-2xl"
      >
        {playing ? <FaPause /> : <FaMusic />}

        <span className="hidden md:block">
          {playing ? "Pause" : "Music"}
        </span>
      </motion.button>
    </>
  );
}