import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss how we can secure your digital assets</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Phone className="h-6 w-6 text-blue-600" />,
                title: "Call Us",
                info: "+1 (555) 123-4567"
              },
              {
                icon: <Mail className="h-6 w-6 text-blue-600" />,
                title: "Email Us",
                info: "contact@bitwisebinary.com"
              },
              {
                icon: <MapPin className="h-6 w-6 text-blue-600" />,
                title: "Visit Us",
                info: "123 Security Ave, Cyberspace"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.info}</p>
              </div>
            ))}
          </div>

          <form className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors md:col-span-2"
              />
              <select
                className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors md:col-span-2"
              >
                <option value="">Select Service</option>
                <option value="security-audit">Security Audit</option>
                <option value="penetration-testing">Penetration Testing</option>
                <option value="training">Security Training</option>
                <option value="consulting">Security Consulting</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors md:col-span-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors md:col-span-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}