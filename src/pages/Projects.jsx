import React from 'react';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Resume Ranking System</h3>
        <p>
          A system that ranks resumes based on similarity to job descriptions using NLP and machine learning.
          Implemented text extraction, similarity scoring with embeddings, and ranking logic.
        </p>
        <p className="text-sm text-gray-600">Tech: Python, HuggingFace Transformers, PyTorch</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Cybernatics SaaS</h3>
        <p>
          Cyber risk platform for regulatory compliance and security posture. Includes dashboards, role management,
          AD B2C integration, and threat event handling.
        </p>
        <p className="text-sm text-gray-600">Tech: .NET Core, React, Azure AD B2C, Nuxt.js, Clean Architecture</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">AIA Hierarchy Management</h3>
        <p>
          Migrated Excel-based hierarchy into a centralized web app integrated with Azure Data Factory and internal systems.
          Built Excel upload/download, client validation APIs, and Active Directory auth.
        </p>
        <p className="text-sm text-gray-600">Tech: Blazor Server, .NET Core Web API, SQL Server, Azure</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Sri Lankan Railway Automation</h3>
        <p>
          Phase 2 enhancements for online season tickets and user profile management. Integrated IPG and API gateway.
        </p>
        <p className="text-sm text-gray-600">Tech: Nuxt.js, React, Tailwind CSS, PostgreSQL</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold">OCP - Brunei Government Portal</h3>
        <p>
          Web application combining multiple government services with secure access and modular service delivery.
        </p>
        <p className="text-sm text-gray-600">Tech: .NET Core, Vue.js, Azure DevOps, Entity Framework</p>
      </div>
    </div>
  );
}
