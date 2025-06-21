import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Zap, Settings, Cpu, ChevronRight, Star, Award, Target, Users, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';

const ModernConeleHomepage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Drive-Motor Systems",
      description: "Advanced drive-motor control systems engineered to meet your exact specifications with precision and reliability.",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Engineering Simulation",
      description: "Comprehensive modeling, FTA gap analysis, structural testing, and fatigue analysis for optimal performance.",
      icon: Settings,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "Fabrication Services",
      description: "Expert fabrication of power distribution, transmitter, analyzer, and PLC racks with industrial-grade quality.",
      icon: Cpu,
      gradient: "from-emerald-500 to-teal-400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Years Experience", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Expert Engineers", icon: Users }
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-12">
            <div className="relative w-48 h-16 mx-auto mb-8">
              <Image 
                src="/logo.png" 
                alt="Conele Global Logo" 
                fill
                className="object-contain filter drop-shadow-2xl"
                priority
                style={{filter: 'brightness(0) invert(1) drop-shadow(0 0 20px rgba(255,255,255,0.3))'}}
              />
            </div>
          </div>
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Trusted by 500+ Companies Worldwide
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Innovative
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block">
                Control Systems
              </span>
              <span className="text-4xl md:text-5xl text-white/80">for Tomorrow</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Conele&#39;s expert team delivers cutting-edge control system designs with unmatched efficiency, 
              maintainability, and safety standards for the modern industrial landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                Schedule Consultation
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-white/60 hover:text-white transition-colors duration-300 animate-bounce">
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                  About Conele Global
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Engineering Excellence
                  <span className="block text-blue-600">Since 2008</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide world-class technical and design consultancy services, delivering innovative 
                  solutions that drive industrial automation forward with precision and reliability.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Custom Control Panel Design & Manufacturing",
                  "Advanced Power Distribution Systems",
                  "Electrical & Electronics Testing Solutions",
                  "Precision Motor Drive Control Systems",
                  "Industrial Hydraulic System Integration",
                  "Pneumatic Control System Development"
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Industry Leadership</h3>
                  <p className="text-white/90 mb-6">
                    Recognized as a pioneer in control system innovation with cutting-edge solutions 
                    that set industry standards.
                  </p>
                  <div className="flex justify-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">ISO</div>
                      <div className="text-sm text-white/80">Certified</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-white/80">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">Global</div>
                      <div className="text-sm text-white/80">Reach</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-20 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Our Core Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Innovative Solutions for
              <span className="block text-blue-600">Every Challenge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience exceptional quality and innovation through our comprehensive suite of 
              engineering services designed for modern industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                    activeService === index ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Extended Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                  <Settings className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Engineering Custom Services</h3>
              </div>
              <div className="space-y-4 mb-8">
                {engineeringServices.map((service, index) => (
                  <div key={index} className="flex items-center p-3 rounded-xl hover:bg-red-50 transition-colors group">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <button className="text-red-600 font-semibold hover:text-red-700 flex items-center group">
                Discover More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6">
                  <Cpu className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">CAD & Design Services</h3>
              </div>
              <div className="space-y-4 mb-8">
                {cadServices.map((service, index) => (
                  <div key={index} className="flex items-center p-3 rounded-xl hover:bg-purple-50 transition-colors group">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-8">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Empowering Success Through
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Excellence & Innovation
              </span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Making our customers successful by delivering exceptional quality products and services 
              within committed timelines and budgets, while setting new standards in industrial automation.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Outstanding{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Quality
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation
            </span>{' '}
            and Services.
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold text-white">Conele</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Leading provider of innovative control system designs and comprehensive engineering services 
                for the next generation of industrial automation.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <div key={social} className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-white font-semibold text-sm">{social[0].toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Products', 'Contact', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600/30 transition-colors">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600/30 transition-colors">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">info@conele.com</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600/30 transition-colors">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">123 Business St, City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Conele Global. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernConeleHomepage;