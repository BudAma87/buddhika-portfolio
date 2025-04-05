import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <img
        src="../images/White_BG_Buddhika.png"
        alt="Buddhika Amarasinghe"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-200"
      />
      <h1 className="text-4xl font-bold mt-4 text-gray-800">Hi, I’m Buddhika 👋</h1>
      <p className="text-xl text-gray-600 mt-2">Senior Software Engineer | Full Stack Developer</p>
      <p className="mt-4 max-w-xl text-gray-500">
        10+ years of experience designing and developing scalable software solutions in Sri Lanka's leading enterprises.
      </p>
    </div>
  );
}
