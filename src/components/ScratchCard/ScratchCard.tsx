import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScratchCanvas from "./ScratchCanvas";

export default function ScratchCard() {
  const [opened, setOpened] = useState(false);

  return (
<section className="relative overflow-hidden bg-[#090909] py-16 md:py-20 px-6">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="relative z-10">

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="tracking-[6px] uppercase text-[#D4AF37]/80 text-sm">
            A Hidden Message
          </p>

          <h2 className="hero-title mt-4 text-4xl md:text-5xl text-[#D4AF37]">
            Scratch To Reveal
          </h2>

          <p className="mt-4 text-gray-400">
            Gently scratch the card to uncover our message.
          </p>

          <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        </div>

        {/* Card */}

        <div className="mx-auto w-full max-w-md md:max-w-2xl">

          <motion.div
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
            }}
            className="relative h-[420px] md:h-auto overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] shadow-[0_0_60px_rgba(212,175,55,.08)] backdrop-blur-xl"
          >

            {/* Golden Flash */}

            <AnimatePresence>

              {opened && (

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.18, 0],
                    scale: [1, 1.5],
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="pointer-events-none absolute inset-0 rounded-[32px] bg-[#D4AF37]"
                />

              )}

            </AnimatePresence>

            {/* Message */}

            <motion.div
              initial={{
                opacity: 0,
                scale: .95,
              }}
              animate={{
                opacity: opened ? 1 : 0,
                scale: opened ? 1 : .95,
              }}
              transition={{
                duration: .8,
              }}
              className="p-6 md:p-12 text-center"
            >

              <p className="text-4xl md:text-5xl">
                🤲
              </p>

              <h3 className="hero-title mt-4 text-2xl md:text-4xl text-[#D4AF37]">
                Assalamu Alaikum
              </h3>

              <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              <p className="text-base md:text-lg leading-7 md:leading-9 text-gray-300">

                JazakAllahu Khairan



                <br /><br />

                Your presence, love and heartfelt
                duas are the greatest gifts
                we could ever receive.

              </p>

              <p className="mt-8 text-lg md:text-xl italic text-[#D4AF37]">

                "Please remember us
                in your precious duas."

              </p>

              <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              <p className="text-xl md:text-3xl text-[#D4AF37]">
                Maruf ❤️ Mantasha
              </p>

              <p className="mt-2 text-xl md:text-3xl text-[#D4AF37]">
                Farhan ❤️ Misbah
              </p>

            </motion.div>

            {/* Scratch Canvas */}

            <AnimatePresence>

              {!opened && (

                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  transition={{
                    duration: .6,
                  }}
                  className="absolute inset-0"
                >

                  <ScratchCanvas
                    onComplete={() => setOpened(true)}
                  />

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        </div>

      </div>

    </section>
  );
}