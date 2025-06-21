import React, { useState } from 'react';
import { 
  Zap, 
  Settings, 
  Wrench, 
  Cpu, 
  Factory, 
  Shield, 
  Star, 
  ArrowRight, 
  CheckCircle2,
  Monitor,
  Cog,
  Construction,
  FlaskConical
} from 'lucide-react';

const ProductsServices = () => {
  const [activeTab, setActiveTab] = useState('products');

  const products = [
    {
      id: 1,
      title: "Industrial Control Panels",
      image: "/api/placeholder/400/300",
      icon: <Monitor className="h-8 w-8" />,
      description: "We design complete based on customer need and expectation. A concise can be designed to suit any application, from a single station to multiple stations in various configurations.",
      features: [
        "Our panels can be simple relay panels or complex processor control",
        "We are experts in the layout and design of control panels",
        "Custom designed for your specific requirements"
      ]
    },
    {
      id: 2,
      title: "Power Distribution Panels",
      image: "/api/placeholder/400/300", 
      icon: <Zap className="h-8 w-8" />,
      description: "Power distribution with control and relay protection panels are custom designed and built to meet your exact specifications.",
      features: [
        "Custom control and protection systems",
        "Built to exact specifications",
        "Reliable power distribution solutions"
      ]
    },
    {
      id: 3,
      title: "Drive Configuration Systems",
      image: "/api/placeholder/400/300",
      icon: <Settings className="h-8 w-8" />,
      description: "We can design / Configure Drive-Motor control systems as per customer need. Drive configuration rang from 2HP to 700HP Motor control systems.",
      features: [
        "2HP to 700HP motor control range",
        "Custom drive-motor configurations", 
        "Optimized for your specific applications"
      ]
    },
    {
      id: 4,
      title: "Engineering Simulation",
      image: "/api/placeholder/400/300",
      icon: <FlaskConical className="h-8 w-8" />,
      description: "Advanced simulation services for comprehensive system analysis and optimization.",
      features: [
        "Meshing/FEA pre-process support",
        "Structural analysis - Linear, Non-Linear",
        "Fatigue and durability analysis",
        "Thermal and stress Analysis",
        "Model and frequency analysis",
        "Computational fluid Dynamics (CFD) analysis"
      ]
    },
    {
      id: 5,
      title: "Fabrication Services", 
      image: "/api/placeholder/400/300",
      icon: <Construction className="h-8 w-8" />,
      description: "We fabricate control and power panel cabinets, stacks, analyser stacks, power stacks and PLC racks from 304SS, 316SS and 2205 stainless steel/carbon steel inside Powder coat applications.",
      features: [
        "304SS, 316SS, and 2205 stainless steel fabrication",
        "Carbon steel with powder coat applications",
        "Custom cabinet and rack solutions"
      ]
    },
    {
      id: 6,
      title: "Hydraulic/Pneumatic Systems",
      image: "/api/placeholder/400/300", 
      icon: <Cog className="h-8 w-8" />,
      description: "We always stand out to drive drive our Customer satisfaction by hydraulic system design and implementation. With high quality of engineering and manufacturing we have flexible manufacturing ability.",
      features: [
        "Professional Engineering team with SolidWorks and AutoCAD",
        "Complete design and custom Hydraulic Power Unit solutions",
        "Custom hydraulic systems with Electrical controls integration"
      ]
    }
  ];

  const services = [
    {
      category: "CAD & Design Services",
      icon: <Monitor className="h-12 w-12" />,
      description: "We Provide Engineering Design Services as per Customer needs. Following Services will be offered to customers",
      items: [
        "3D modelling and Exploded View creation",
        "Process flow chart drafting", 
        "Sketch making revisions and duplication",
        "2D to 3D conversion",
        "FEA Analysis",
        "Dimension management",
        "Test sheet analysis",
        "General design",
        "Design detailing",
        "Design validation",
        "Parametric modelling",
        "Reverse engineering",
        "Cast component design",
        "Sheet metal component design"
      ]
    },
    {
      category: "Engineering Custom Services",
      icon: <Factory className="h-12 w-12" />,
      description: "Comprehensive engineering solutions tailored to your specific requirements",
      items: [
        "Custom Path and Enclosures",
        "Compressed Panels", 
        "HCS Panels",
        "Hydraulic / Classified Location",
        "DCS Systems",
        "Motor Starter Interface Panels",
        "Relay Interface / Sec",
        "Automation",
        "PAN Certification",
        "Custom Sheet Metal Fabrication",
        "Pneumatic",
        "Field Service",
        "Circuit Welding",
        "Tubing",
        "G. Controls"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      

      {/* Hero Section */}
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-12 gap-4 h-full opacity-10">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="border-l border-white/20 h-full"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-8">
            <Star className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm">ISO 9001:2015 Certified Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Our</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Products & Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Cutting-edge control system designs with unmatched efficiency, maintainability, and safety standards for the modern industrial landscape.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'products'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'services'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      {activeTab === 'products' && (
        <div className="relative -mt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-blue-300 group-hover:text-white transition-colors">
                        {product.icon}
                      </div>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-blue-200 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-blue-100">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="mt-4 inline-flex items-center text-blue-300 hover:text-white transition-colors group">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      {activeTab === 'services' && (
        <div className="relative -mt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.category}</h3>
                      {service.category.includes('CAD') && (
                        <div className="flex space-x-2">
                          <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">AUTODESK</div>
                          <div className="bg-red-600 text-white text-xs px-2 py-1 rounded">SOLIDWORKS</div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-blue-200 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Project?</span>
          </h2>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Let our expert team help you design and implement cutting-edge control systems tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 group">
              <span>Get Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 mb-4 md:mb-0">
              © ConeleGlobal - All rights reserved
            </div>
            <div className="text-blue-200">
              Designed by <span className="text-white font-semibold">WW</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductsServices;