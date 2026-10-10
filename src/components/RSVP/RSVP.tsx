import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";

export default function RSVP() {

  const whatsappMessage = encodeURIComponent(`Assalamu Alaikum 🌿

With pleasure, I confirm my attendance.

Looking forward to celebrating this beautiful occasion with you.

JazakAllah Khair.`);

  return (
    <section className="relative overflow-hidden bg-[#090909] py-20 md:py-28 px-6">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="relative z-10 mx-auto max-w-5xl"
      >

        {/* Heading */}

        <div className="text-center">

          <p className="text-xs uppercase tracking-[6px] text-[#D4AF37]/80">
            Contact & RSVP
          </p>

          <h2 className="hero-title mt-4 text-4xl md:text-5xl">
            We'd Love To See You
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            We look forward to celebrating this beautiful occasion
            together with you and your family.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {weddingConfig.contactPersons.map((person, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 0 45px rgba(212,175,55,.18)",
              }}
              transition={{
                duration: .3,
              }}
              className="rounded-[30px] border border-[#D4AF37]/20 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
            >

              {/* Golden Accent */}

              <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#D4AF37]" />

              {/* Icon */}

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

                <FaUser
                  size={24}
                  className="text-[#D4AF37]"
                />

              </div>

              {/* Name */}

              <h3 className="mt-5 text-2xl font-semibold text-[#D4AF37]">
                {person.name}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[4px] text-gray-400">
                {person.relation}
              </p>

              {/* Phone */}

              <a
                href={`tel:+${person.phone}`}
                className="mt-6 flex items-center justify-center gap-3 text-lg font-medium text-white transition hover:text-[#D4AF37]"
              >

                <FaPhone className="text-[#D4AF37]" />

                +{person.phone}

              </a>

            </motion.div>

          ))}

        </div>

        {/* Action Buttons */}

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <a
            href={`https://wa.me/${weddingConfig.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(37,211,102,.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(37,211,102,.45)] active:scale-95 sm:w-auto"
          >

            <FaWhatsapp />

Confirm via WhatsApp
          </a>

          <a
            href={`tel:+${weddingConfig.contactPersons[0].phone}`}
            className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_35px_rgba(212,175,55,.35)] active:scale-95 sm:w-auto"
          >

            <FaPhone />

            Call Now

          </a>

        </div>

        {/* Divider */}

        <div className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Dua Card */}

        <div className="mx-auto mt-10 max-w-2xl rounded-[28px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-6 py-8 backdrop-blur">

          <p className="text-center text-lg italic leading-9 text-[#D4AF37]">

            “May Allah reward you abundantly
            for honoring us with your gracious
            presence and precious duas.”

          </p>

        </div>

        {/* Confirmation */}

        <p className="mt-8 text-center text-sm leading-7 text-gray-400">

          Kindly confirm your gracious presence

          <br />

          at your earliest convenience.

        </p>

        {/* Bottom Ornament */}

        <div className="mt-10 flex items-center justify-center gap-3">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          <span className="text-[#D4AF37] text-lg">
            ❁
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        </div>

      </motion.div>

    </section>
  );
}