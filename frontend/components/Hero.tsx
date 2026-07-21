import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16"
    >
      <h1 className="text-6xl font-extrabold text-white">
        Autonomous AI Agent
      </h1>

      <p className="mt-6 text-xl text-zinc-400 max-w-3xl mx-auto">
        Give a natural language request.
        <br />
        The AI Agent plans, executes, reviews,
        and generates a professional Microsoft Word document.
      </p>
    </motion.div>
  );
}