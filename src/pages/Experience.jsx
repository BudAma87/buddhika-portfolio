import React from 'react';

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Senior Software Engineer – BISTEC Global</h3>
        <p className="text-sm text-gray-600">Mar 2022 – Present</p>
        <ul className="list-disc list-inside mt-2">
          <li>Designed and developed scalable enterprise apps for AIA Sri Lanka and government clients.</li>
          <li>Delivered Resume Ranking System using Python, ML, and NLP with 85% matching accuracy.</li>
          <li>Built web portals, dashboards, and secure modules using Blazor, React, and Nuxt.</li>
        </ul>
        <p className="text-sm mt-1 text-gray-600">Tech: .NET Core, Blazor, Azure, React, SQL, PyTorch</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Senior Software Engineer – OMAK Technologies</h3>
        <p className="text-sm text-gray-600">Oct 2019 – Feb 2022</p>
        <ul className="list-disc list-inside mt-2">
          <li>Upgraded and optimized POS system for restaurant management (OPV4).</li>
          <li>Supported end users and trained teams on new features and rollout.</li>
        </ul>
        <p className="text-sm mt-1 text-gray-600">Tech: Node.js, Electron.js, CouchDB, .NET Core, Docker</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Software Engineer → Senior Software Engineer – LAUGFS Holdings</h3>
        <p className="text-sm text-gray-600">Mar 2012 – Oct 2019</p>
        <ul className="list-disc list-inside mt-2">
          <li>Developed 10+ internal enterprise systems and mobile apps across departments.</li>
          <li>Led development of LAUGFS E-Forms – NBQSA Merit Award winner (2017).</li>
          <li>Integrated systems with SAP, handled transformation of legacy apps to web/mobile platforms.</li>
        </ul>
        <p className="text-sm mt-1 text-gray-600">Tech: ASP.NET, MVC, SQL Server, Android, SharePoint</p>
      </div>
    </div>
  );
}
