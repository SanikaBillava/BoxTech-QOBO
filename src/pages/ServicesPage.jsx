import React from 'react';
import { Factory, Paintbrush, TrendingDown, Shield } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Factory,
      title: 'Custom Manufacturing',
      description: 'Design and manufacture custom corrugated boxes tailored to your exact specifications. We offer custom die-cutting, specific dimensions, and unique structural designs.',
      features: ['Custom dimensions', 'Die-cutting', 'Prototype development', 'Bulk orders']
    },
    {
      icon: Paintbrush,
      title: 'Branded Printing',
      description: 'Professional printing services including flexographic, litho-lamination, and digital printing. Upload your brand logo and design for high-quality branded packaging.',
      features: ['Flexographic printing', 'Digital printing', 'Logo placement', 'Multi-color designs']
    },
    {
      icon: TrendingDown,
      title: 'Packaging Optimization',
      description: 'Reduce material usage while maintaining durability and protection. Our experts analyze your packaging needs and suggest cost-effective solutions.',
      features: ['Material reduction', 'Cost optimization', 'Supply chain efficiency', 'Sustainability improvements']
    },
    {
      icon: Shield,
      title: 'Testing & Quality Assurance',
      description: 'Rigorous quality testing including compression tests, bursting strength tests, and moisture resistance testing. All products meet international standards.',
      features: ['Compression testing', 'Bursting strength tests', 'Edge crush tests', 'ISO compliance']
    }
  ];

  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.8), rgba(16,185,129,0.8)), url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive Packaging Solutions for Every Industry</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h2>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-700">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Consultation & Support</h2>
            <p className="text-gray-700 text-lg mb-8">Our team of packaging experts is available to help you choose the right solutions for your business. We provide consultation on packaging design, material selection, and compliance with industry standards.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Design Consultation</h3>
                <p className="text-gray-600 text-sm">Expert guidance on packaging design and structure</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Prototyping</h3>
                <p className="text-gray-600 text-sm">Rapid prototyping and sample development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Compliance Services</h3>
                <p className="text-gray-600 text-sm">Ensure packaging meets regulatory standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}