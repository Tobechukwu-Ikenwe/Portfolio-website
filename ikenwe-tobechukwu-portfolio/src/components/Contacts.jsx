// components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-500 text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
      <p className="text-center mb-12">Feel free to reach out for collaborations or projects.</p>
      <div className="flex justify-center">
        <a
          href="mailto:ikenwetobe@gmail.com"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Email Me
        </a>
        
      </div>
    </section>
  );
}
