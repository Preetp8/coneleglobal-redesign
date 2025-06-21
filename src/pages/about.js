import React, { useState } from 'react';
import { Star, MessageCircle, Settings, DollarSign, ShieldCheck, Phone, Mail, MapPin, Award, Users, Calendar, ArrowRight, CheckCircle, Building, Zap, Target } from 'lucide-react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { icon: Calendar, value: '20+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Building, value: '15+', label: 'Team Members' },
    { icon: Award, value: 'ISO 9001', label: 'Certified' }
  ];

  const advantages = [
    {
      icon: Star,
      title: 'The Conele Advantage',
      description: 'Superior quality, custom-built control systems with unmatched technological and manufacturing expertise that sets industry standards.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: MessageCircle,
      title: 'Expert Consultation',
      description: 'Collaborative approach working hand-in-hand with customers to understand requirements and create tailored solutions.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Settings,
      title: 'Diverse Applications',
      description: 'Custom control panels designed for highly specific application requirements across multiple industries.',
      color: 'text-gray-700',
      bgColor: 'bg-gray-50'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Strategic design and procurement management delivering personalized panels within your project budget.',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: ShieldCheck,
      title: 'UL & ULC Certified',
      description: 'Every control panel meets facility-specific conditions and applicable industry standards and code requirements.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Efficient project execution with streamlined processes ensuring on-time delivery without compromising quality.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'UL Listed Control Panels',
    'ULC Certified Systems',
    'CSA Compliance Standards',
    'NEMA Enclosure Ratings',
    'IEEE Safety Standards'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Building className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Established 2001 • ISO 9001 Certified</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-orange-400">Conele Global</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Making our customers successful by delivering top-notch quality products & services, within committed time & budget.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg p-2 shadow-sm">
                {['mission', 'vision', 'values'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-md font-medium transition-all capitalize ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {activeTab === 'mission' && (
                <div className="text-center">
                  <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To deliver superior control systems and power distribution solutions that exceed our clients&#39; expectations through innovative design, uncompromising quality, and exceptional service. We are committed to building long-term partnerships by understanding unique requirements and providing cost-effective, reliable solutions that drive operational success.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="text-center">
                  <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be the leading provider of custom control systems and electrical solutions, recognized for our technical excellence, innovation, and customer-centric approach. We envision a future where our expertise empowers industries to operate more efficiently, safely, and sustainably through cutting-edge electrical engineering solutions.
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    {[
                      { title: 'Quality Excellence', desc: 'Uncompromising commitment to superior craftsmanship' },
                      { title: 'Customer Focus', desc: 'Your success is our primary objective' },
                      { title: 'Innovation', desc: 'Continuous improvement and cutting-edge solutions' },
                      { title: 'Integrity', desc: 'Honest, transparent, and ethical business practices' },
                      { title: 'Reliability', desc: 'Dependable delivery and long-term partnerships' },
                      { title: 'Safety First', desc: 'Prioritizing safety in every design and installation' }
                    ].map((value, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{value.title}</h4>
                          <p className="text-gray-600 text-sm">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Conele Global</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach and proven expertise deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${advantage.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
              <p className="text-lg text-gray-600">
                Our commitment to quality is backed by industry-leading certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&#39;s discuss how our expertise can help you achieve your control system goals with precision and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg flex items-center space-x-2">
                <span>Request A Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call: (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;