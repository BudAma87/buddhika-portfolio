import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6 text-gray-600">
        Feel free to reach out for collaboration, consulting, or just to say hi!
      </p>

      <div className="space-y-4">
        <div>
          <span className="font-semibold">📧 Email: </span>
          <a href="mailto:amb.amarasinghe@gmail.com" className="text-blue-600 underline">
            amb.amarasinghe@gmail.com
          </a>
        </div>
        <div>
          <span className="font-semibold">📞 Phone: </span>
          +94 77 334 3304
        </div>
        <div>
          <span className="font-semibold">🔗 LinkedIn: </span>
          <a
            href="https://www.linkedin.com/in/buddhika-amarasinghe-29692737/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            linkedin.com/in/buddhika-amarasinghe
          </a>
        </div>
      </div>

      {/* Optional form (can be styled later with Tailwind or Formspree integration) */}
      {/* <form className="mt-8">
        <input type="text" placeholder="Your name" className="border p-2 w-full mb-4" />
        <input type="email" placeholder="Your email" className="border p-2 w-full mb-4" />
        <textarea placeholder="Your message" className="border p-2 w-full h-32 mb-4" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form> */}
    </div>
  );
}
