import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'BISTEC Global',
      duration: 'Mar 2022 – Present',
      responsibilities: [
        'Designed scalable enterprise applications for clients like AIA and Softlogic.',
        'Built Resume Ranking System using Python and ML with 85% accuracy.',
        'Delivered full-stack features using Blazor, React, Nuxt.js, and Azure.',
      ],
      tech: ['.NET Core', 'Blazor', 'React', 'Nuxt.js', 'Azure', 'Python'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'OMAK Technologies',
      duration: 'Oct 2019 – Feb 2022',
      responsibilities: [
        'Upgraded and maintained OPV4 POS system for restaurant operations.',
        'Provided user training and support for deployed modules.',
      ],
      tech: ['Electron.js', 'Vue.js', 'Node.js', 'CouchDB', 'Docker'],
    },
    {
      title: 'Software Engineer → Senior Software Engineer',
      company: 'LAUGFS Holdings',
      duration: 'Mar 2012 – Oct 2019',
      responsibilities: [
        'Developed enterprise-level internal systems across multiple business units.',
        'Built award-winning E-Forms system, integrated with SAP and mobile apps.',
        'Led modules for Stock, Auth Management, Gas Plant Ops, Car Care, and Labs.',
      ],
      tech: ['ASP.NET', 'MVC', 'SQL Server', 'Android', 'SharePoint'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-md"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{job.title} – <span className="text-blue-600 dark:text-blue-400">{job.company}</span></h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{job.duration}</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {job.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 rounded"
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
