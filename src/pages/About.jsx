import React from 'react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold mb-2">👨‍💻 Profile</h3>
          <p>
            I'm <strong>Buddhika Amarasinghe</strong>, a Full Stack Developer with over 10 years of hands-on experience
            designing, developing, and implementing software solutions for both private and public sector enterprises.
          </p>
        </div>

        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>MSc in Advanced Software Engineering – IIT (2023 - 2025)</li>
            <li>BSc in IT (Software Engineering) – SLIIT (2008 - 2012)</li>
          </ul>
        </div>

        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold mb-2">📜 Certifications</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Professional Web App Developer (C# & MVC 5.0)</li>
            <li>PHP-MySQL Web Development – SLIIT</li>
          </ul>
        </div>

        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold mb-2">🌐 Languages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>English – Fluent</li>
            <li>Sinhala – Fluent</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
