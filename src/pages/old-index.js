import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Add some modern icons for services
const serviceIcons = {
  'Drive-Motor Systems': '💡',
  'Engineering Simulation': '⚙️',
  'Fabrication Services': '🔧',
  'Industrial Control': '⚡',
  'Power Distribution': '⚡',
  'Hydraulic Systems': '💧'
};

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Drive-Motor Systems",
      description: "We design / Configure Drive-Motor control systems as per customer need.",
      icon: "💡"
    },
    {
      title: "Engineering Simulation",
      description: "Modeling/FTA gap process support, Structural analysis, Linear/ Non-Linear, Fatigue analysis.",
      icon: "⚙️"
    },
    {
      title: "Fabrication Services",
      description: "We fabricate power distribution racks, transmitter racks, analyzer racks, power racks, and PLC racks.",
      icon: "🔧"
    }
  ];

  const engineeringServices = [
    "Custom Fabricated Enclosures",
    "Compressor Panels",
    "Oil Systems",
    "Hazardous / Classified Location"
  ];

  const cadServices = [
    "3D modeling and Exploded View creation",
    "Drawing Detailing and Drafting",
    "Bench marking through digitization",
    "2D to 3D conversion"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Conele Global - Home</title>
        <meta name="description" content="Welcome to Conele Global - Innovative Control System Designs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <motion.div 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent">
                Innovative Control
              </span>
              <br />
              <span className="block text-blue-300">
                System Designs
              </span>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Conele's Design Team draws on extensive process experience and expertise to develop control system designs. Every system is designed with efficiency, maintainability, and safety in mind.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#services" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                About Us
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome To Conele Global
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide technical and design consultancy & project execution management services.
              </p>
              <div className="space-y-4">
                {[
                  "We Design and Build Custom Control Panels",
                  "Power Distribution Panels",
                  "Electrical & Electronics Test Systems",
                  "Motor Drive Control Systems",
                  "Hydraulic Systems",
                  "Pneumatic Control Systems"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-6xl">⚡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Products & Solutions
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We deliver innovative and reliable solutions with our highly qualified technical team and superior manufacturing expertise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer transform hover:-translate-y-2 ${
                  activeService === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              >
                <div className="flex items-center justify-center w-full mb-4">
                  <div className="text-6xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    {serviceIcons[service.title]}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href="#contact" 
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="border-l-4 border-orange-500 pl-8">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our <span className="text-orange-500">Mission</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Making our customer successful by delivering top-notch quality 
                products & services within committed time and budget.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Transform Your Projects?
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's work together to bring your engineering vision to life.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="/contact" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/products-services" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Expert Services
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We offer comprehensive engineering and design services tailored to meet your specific needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Engineering Custom Services */}
            <motion.div 
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Engineering Custom Services</h3>
              </div>
              <ul className="space-y-3">
                {engineeringServices.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="/products-services" 
                className="mt-6 text-red-600 font-semibold hover:text-red-700 flex items-center transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* CAD & Design Services */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">✏️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">CAD & Design Services</h3>
              </div>
              <ul className="space-y-3">
                {cadServices.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="/products-services" 
                className="mt-6 text-blue-600 font-semibold hover:text-blue-700 flex items-center transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Outstanding <span className="text-orange-500">Quality</span>,
            <span className="text-orange-500"> Innovation</span> and Services.
          </h2>
        </div>
      </section>
    </div>
  );
}
