import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";
import Petals from "../Petals";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#090909] px-5 pt-20 pb-24 md:px-6 md:pb-28">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#090909] to-black" />

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[75rem] w-[75rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[260px]" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_70%)]" />

      <Petals />

      {/* Decorative Corners */}

      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute left-8 top-8 text-6xl text-[#D4AF37]/30"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{ rotate: [90, 95, 90] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute right-8 top-8 text-6xl text-[#D4AF37]/30"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{ rotate: [-90, -85, -90] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-8 left-8 text-6xl text-[#D4AF37]/30"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{ rotate: [180, 185, 180] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-8 right-8 text-6xl text-[#D4AF37]/30"
      >
        ❀
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >

        {/* Heading */}

<div className="mb-12 mt-0 md:mt-16">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
className="hero-title text-[2rem] leading-[1.8] md:text-5xl"
          >
        
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
className="mt-5 text-[11px] uppercase tracking-[5px] text-[#D4AF37]/70 md:text-sm md:tracking-[8px]"
          >
            Together With Their Families
          </motion.p>

        </div>

        {/* Couples */}

        <div className="space-y-10 md:space-y-14">

          {weddingConfig.couples.map((couple, index) => (

<div              key={index}>
<motion.div

              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .35,
              }}
              whileHover={{
                scale: 1.02,
              }}
className="mx-auto w-full max-w-4xl overflow-hidden rounded-[28px] border border-[#D4AF37]/20 bg-white/[0.03] px-5 py-8 md:px-10 md:py-12 shadow-[0_0_70px_rgba(212,175,55,.10)] backdrop-blur-xl"
            >
{index === 1 ? (
  <>
    {/* Bride First */}

<p className="mb-2 text-[11px] uppercase tracking-[3px] text-gray-400">
      Beloved Daughter of
    </p>
    

<p className="mb-8 text-base md:text-xl text-[#D4AF37]/90">
      {couple.brideFather}
    </p>


<h1 className="hero-title text-[2.2rem] sm:text-6xl md:text-8xl font-medium tracking-normal sm:tracking-[6px] md:tracking-[12px]">
  {couple.bride}
</h1>



    <p className="my-4 text-5xl text-white">&</p>

    <h1 className="hero-title text-[2.2rem] sm:text-6xl md:text-8xl font-medium tracking-normal sm:tracking-[6px] md:tracking-[12px] lg:tracking-[14px]">
      {couple.groom}
    </h1>

<p className="mt-8 mb-2 text-[11px] uppercase tracking-[3px] text-gray-400">
  Beloved Son of
</p>

<p className="text-base md:text-xl text-[#D4AF37]/90">
  {couple.groomFather}
</p>
  </>
) : (
  <>
    {/* Existing Layout */}

    <p className="mb-2 text-[11px] uppercase tracking-[3px] text-gray-400">
      Beloved Son of
    </p>

    <p className="mb-8 text-base md:text-xl text-[#D4AF37]/90">
      {couple.groomFather}
    </p>

    <h1 className="hero-title text-[2.2rem] sm:text-6xl md:text-8xl font-medium tracking-normal sm:tracking-[6px] md:tracking-[12px] lg:tracking-[14px]">
      {couple.groom}
    </h1>

    <p className="my-4 text-5xl text-white">&</p>

    <h1 className="hero-title text-[2.2rem] sm:text-6xl md:text-8xl font-medium tracking-normal sm:tracking-[6px] md:tracking-[12px] lg:tracking-[14px]">
      {couple.bride}
    </h1>

    <p className="mt-8 text-[11px] uppercase tracking-[3px] text-gray-400">
      Beloved Daughter of
    </p>

    <p className="mt-3 text-base md:text-xl text-[#D4AF37]/90">
      {couple.brideFather}
    </p>
  </>
)}
              <div className="mt-8 flex justify-center">
                <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>



            </motion.div>

{index === 0 && (
  <div className="my-8 md:my-10 flex items-center justify-center">
    <div className="flex w-full max-w-2xl items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="text-2xl text-[#D4AF37]"
      >
        ❁
      </motion.div>

      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
    </div>
  </div>
)}
</div>
          ))}




        </div>
                {/* Invitation */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-14 md:mt-20 max-w-3xl"
        >

          <p className="text-sm uppercase tracking-[6px] text-[#D4AF37]">
            Wedding Invitation
          </p>

          <h2 className="hero-title mt-6 text-3xl md:text-5xl">
            You Are Invited
          </h2>

          <p className="mt-6 text-base leading-8 md:mt-8 md:text-xl md:leading-[2.8rem] text-gray-300">
            With the blessings of Allah (SWT),
            <br />
            we cordially invite you and your family
            <br />
            to celebrate our
            <span className="font-medium text-[#D4AF37]"> Nikah </span>
            &
            <span className="font-medium text-[#D4AF37]">
              {" "}Dawat-e-Walima
            </span>.
          </p>

        </motion.div>

        {/* Divider */}

        <div className="mt-12 md:mt-16 flex items-center justify-center gap-5">

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <motion.span
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="text-2xl text-[#D4AF37]"
          >
            ✦
          </motion.span>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        </div>

        {/* Dua */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
className="mx-auto mt-8 max-w-xl px-3 text-base italic leading-7 md:mt-10 md:max-w-2xl md:text-lg md:leading-8 text-[#D4AF37]/70"
        >
          "May Allah bless this union with endless love,
          mercy and barakah."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8 text-gray-400"
        >
          May Allah (SWT) shower His countless blessings
          upon us and unite our hearts forever.
        </motion.p>

      </motion.div>

      {/* Bottom Glow */}

      <div className="absolute bottom-0 left-1/2 h-40 w-[32rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      {/* Scroll */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, 6, 0],
  }}
  transition={{
    delay: 2,
    repeat: Infinity,
    duration: 1.6,
  }}
  className="mt-10 flex flex-col items-center"
>
  <FaAnglesDown
    size={22}
    className="text-[#D4AF37]"
  />

  <p className="mt-2 text-[11px] uppercase tracking-[4px] text-[#D4AF37]/60">
    Scroll
  </p>
</motion.div>

    </section>
  );
}