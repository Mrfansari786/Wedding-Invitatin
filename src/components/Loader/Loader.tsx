import { motion } from "framer-motion";

export default function Loader() {
  return (
    <main className="paper-grain flex min-h-screen items-center justify-center bg-[var(--ivory)] px-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }} className="text-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]/50 text-[var(--gold)]">
          <span className="font-display text-2xl">M</span>
        </motion.div>
        <p className="mt-7 font-display text-2xl tracking-[.18em] text-[var(--ink)]">Maruf & Mantasha</p>
        <p className="mt-1 font-display text-lg text-[var(--gold)]">with Misbah & Farhan</p>
        <div className="gold-line mx-auto mt-6 h-px w-24" />
      </motion.div>
    </main>
  );
}
