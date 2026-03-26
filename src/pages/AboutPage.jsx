import React from 'react';
import { Target, Eye, Leaf, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(136, 70, 19, 0.8), rgba(74, 78, 86, 0.8)), url('https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About BoxTech Enterprises</h1>
          <p className="text-xl">Decades of Excellence in Corrugated Packaging Solutions</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-espresso">Our Mission</h2>
              <div className="flex items-start space-x-4 mb-6">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Operational Excellence</h3>
                  <p className="text-gray-700">We strive to deliver precision-engineered corrugated solutions that exceed industry standards. Our commitment to quality and innovation drives every aspect of our manufacturing process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Industry Leadership</h3>
                  <p className="text-gray-700">Our vision is to become the preferred packaging partner for businesses worldwide, recognized for sustainability, reliability, and technological advancement.</p>
                </div>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=600&q=80" alt="Manufacturing" className="w-full h-auto rounded-xl shadow-lg" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=600&q=80'; }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-espresso">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Decades of Experience</h3>
              <p className="text-gray-700">With over 30 years in the corrugated packaging industry, we have refined our manufacturing processes to deliver exceptional quality and reliability. Our team of experts brings deep industry knowledge and technical expertise to every project.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Leaf className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Advanced Manufacturing Facility</h3>
              <p className="text-gray-700">Our state-of-the-art production facility is equipped with cutting-edge technology for precision cutting, printing, and assembly. We maintain strict quality control measures and conduct rigorous testing on every product.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-espresso">Commitment to Sustainability</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">100% Recyclable Materials</h3>
              <p className="text-gray-700">All our corrugated products are manufactured using 100% recyclable kraft paper. We prioritize the use of recycled materials in our production process, reducing the environmental impact while maintaining superior product quality.</p>
            </div>
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Energy Efficiency</h3>
              <p className="text-gray-700">Our manufacturing facility implements energy-efficient technologies and processes. We have reduced our energy consumption by 35% over the past five years through equipment upgrades and process optimization.</p>
            </div>
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Circular Economy Principles</h3>
              <p className="text-gray-700">We support a circular economy by designing products that can be easily recycled and reused. Our packaging solutions are biodegradable and contribute to waste reduction across the supply chain.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8">Contact our team to discuss your packaging requirements and discover how we can help your business grow.</p>
          <a href="mailto:info@boxtechenterprises.com" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}