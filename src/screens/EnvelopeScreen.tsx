import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HomeScreen from "./HomeScreen";
import { FaHeart } from "react-icons/fa6";

type Props = { onOpen: () => void };

export default function EnvelopeScreen({ onOpen }: Props) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, [opened]);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    window.setTimeout(onOpen, 1450);
  };

  return (
    <AnimatePresence mode="wait">
      {!opened ? (
        <motion.main
          key="envelope"
          className="paper-grain relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--ivory)] px-5"
          exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
          transition={{ duration: .8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(233,214,208,.8),transparent_52%)]" />
          <motion.div
            className="relative z-10 w-full max-w-[390px] text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9 }}
          >
            <p className="font-display text-lg tracking-[.35em] text-[var(--gold)] uppercase">A wedding invitation</p>
            <div className="relative mx-auto mt-8 h-[245px] w-full max-w-[340px] [perspective:1000px]">
              <motion.button
                type="button"
                aria-label="Open wedding invitation"
                onClick={handleOpen}
                className="absolute inset-0 h-full w-full cursor-pointer"
                whileTap={{ scale: .985 }}
              >
                <div className="absolute inset-x-0 bottom-0 h-[190px] rounded-[4px_4px_18px_18px] border border-[var(--gold)]/35 bg-[#d9b7ae] shadow-[0_25px_70px_rgba(80,55,45,.18)]" />
                <div className="absolute inset-x-0 bottom-0 h-[150px] bg-[linear-gradient(135deg,rgba(255,255,255,.22),transparent_50%,rgba(80,50,40,.08))]" />
                <motion.div
                  className="absolute left-0 right-0 top-[55px] z-20 mx-auto h-[165px] w-[92%] rounded-sm border border-[var(--gold)]/25 bg-[var(--paper)] shadow-[0_10px_30px_rgba(70,50,40,.12)]"
                  animate={opened ? { y: -120, scale: 1.02 } : { y: 28 }}
                  transition={{ duration: .95, ease: [0.22, 1, .36, 1] }}
                >
                  <div className="flex h-full flex-col items-center justify-center px-5">
                    <span className="font-display text-xs tracking-[.3em] uppercase text-[var(--muted)]">Together with their families</span>
                    <span className="font-display mt-3 text-3xl text-[var(--ink)]">Maruf & Mantasha</span>
                    <span className="font-display text-2xl text-[var(--gold)]">&</span>
                    <span className="font-display text-3xl text-[var(--ink)]">Misbah & Farhan</span>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute left-0 right-0 top-0 z-30 mx-auto h-[130px] w-full origin-top border-x border-t border-[var(--gold)]/35 bg-[#e2c1b8] [clip-path:polygon(0_0,100%_0,50%_100%)]"
                  animate={opened ? { rotateX: -180 } : { rotateX: 0 }}
                  transition={{ duration: .9, ease: [0.22, 1, .36, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                <motion.div
                  className="absolute left-1/2 top-[98px] z-40 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-[#d7bd85] bg-[var(--gold)] text-white shadow-[0_8px_25px_rgba(70,50,40,.2)]"
                  animate={opened ? { scale: 0, rotate: 30, opacity: 0 } : { scale: 1 }}
                  transition={{ duration: .45 }}
                >
                  <FaHeart size={18} />
                </motion.div>
              </motion.button>
            </div>
            <motion.div animate={opened ? { opacity: 0 } : { opacity: 1 }} className="mt-9">
              <p className="font-display text-2xl text-[var(--ink)]">You are invited</p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[.35em] text-[var(--muted)]">Tap to open</p>
              <div className="gold-line mx-auto mt-5 h-px w-24" />
            </motion.div>
          </motion.div>
        </motion.main>
      ) : (
        <HomeScreen />
      )}
    </AnimatePresence>
  );
}
