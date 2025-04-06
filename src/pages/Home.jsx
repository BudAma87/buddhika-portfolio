import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4">
      <motion.div
        className="bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center max-w-lg w-full border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/images/White_BG_Buddhika.png"
          alt="Buddhika Amarasinghe"
          className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-gray-300 dark:border-white/20 mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Hi, I’m Buddhika 👋</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Senior Software Engineer | Full Stack Developer
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          10+ years of experience designing and developing scalable software solutions
          across enterprise and public sector domains.
        </p>
      </motion.div>
    </div>
  );
}
