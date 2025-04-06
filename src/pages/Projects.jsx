import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Resume Ranking System',
      description:
        'Built with NLP and machine learning to rank CVs based on similarity to job descriptions. Achieved 85% accuracy, improving recruitment efficiency.',
      tech: ['Python', 'Transformers', 'PyTorch', 'NLP'],
    },
    {
      title: 'Cybernatics SaaS',
      description:
        'Cyber risk platform with dashboards, user roles, and Microsoft/Google SSO. Used across enterprise security departments.',
      tech: ['C# .NET', 'Azure AD B2C', 'Nuxt.js', 'React'],
    },
    {
      title: 'AIA Hierarchy Management',
      description:
        'Web platform for managing organizational hierarchy with Excel import/export, AD authentication, and Azure Data Factory integration.',
      tech: ['Blazor', '.NET Core', 'SQL Server', 'Azure'],
    },
    {
      title: 'SLR Railway Automation',
      description:
        'Modernized Sri Lankan Railway season ticketing system. Added user profile management and secure online payments.',
      tech: ['Nuxt.js', 'React', 'Tailwind', 'PostgreSQL'],
    },
    {
      title: 'OCP – Brunei Government',
      description:
        'Common portal for online services in Brunei with clean architecture and modular design.',
      tech: ['.NET Core', 'Vue.js', 'Azure DevOps'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-5 transition duration-300 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
