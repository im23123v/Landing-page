import React from 'react';
import { Shield, Lock, Server, Cloud, Code, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Security Auditing",
      description: "Comprehensive security assessments and vulnerability testing"
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Penetration Testing",
      description: "Advanced penetration testing and security evaluations"
    },
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Infrastructure Security",
      description: "Secure infrastructure design and implementation"
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Cloud Security",
      description: "Cloud-native security solutions and best practices"
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Secure Development",
      description: "Secure software development lifecycle consulting"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Security Training",
      description: "Comprehensive security awareness and training programs"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive cybersecurity solutions for your business</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}