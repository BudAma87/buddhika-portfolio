import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I'm <strong>Buddhika Amarasinghe</strong>, a Full Stack Developer with over 10 years of hands-on experience in designing, developing, and implementing applications and solutions using a broad stack of technologies.
      </p>
      <p className="mb-4">
        I specialize in crafting scalable solutions that meet dynamic business needs, with deep experience in enterprise systems, cloud-based architecture, and modern frontend frameworks.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Education</h3>
      <ul className="list-disc list-inside mb-4">
        <li>MSc in Advanced Software Engineering – Informatics Institute of Technology (2023 - 2025)</li>
        <li>BSc in IT (Software Engineering) – SLIIT (2008 - 2012)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Certifications</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Professional Web Application Developer Using C# and MVC 5.0</li>
        <li>PHP-MySQL Web Development – SLIIT</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Languages</h3>
      <ul className="list-disc list-inside">
        <li>English – Fluent</li>
        <li>Sinhala – Fluent</li>
      </ul>
    </div>
  );
}
