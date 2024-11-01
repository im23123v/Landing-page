import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <Shield className="h-12 w-12 text-blue-600" />
            <Lock className="h-12 w-12 text-blue-600" />
            <Server className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Securing Your Digital Future
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            BitwiseBinary delivers enterprise-grade cybersecurity solutions and training, 
            protecting your assets in an increasingly connected world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Solutions
            </button>
            <button className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors">
              View Certifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}