import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("meoapqon");

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
        Have a project in mind or just want to say hi? Drop me a message 👇
      </p>

      <div className="space-y-4 mb-10 text-center">
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

      {state.succeeded ? (
        <p className="text-center text-green-600 font-semibold">Thanks! Your message has been sent 🙌</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
