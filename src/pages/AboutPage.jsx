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
              <h2 className="text-3xl font-bold mb-4 text-espresso">Why Choose Us?</h2><hr/>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customization</h3>
                    <p className="text-gray-700">We offer a wide variety of sizes, styles, and custom printing options to create packaging that best suits your product and branding needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Leaf className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                    <p className="text-gray-700">We use recycled materials and implement eco-friendly processes to minimize environmental impact. Our products are 100% recyclable and biodegradable.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Durability</h3>
                    <p className="text-gray-700">Our corrugated boxes are designed to provide strength and protection, ensuring your products arrive safely at their destination.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-700">We stay ahead of packaging trends, offering modern, innovative packaging designs that meet both functional and aesthetic needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
                    <p className="text-gray-700">We have stringent quality control measures to ensure every box meets the highest standards of performance and consistency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=600&q=80" alt="Manufacturing" className="w-full h-auto rounded-xl shadow-lg" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=600&q=80'; }} />
            </div>
          </div>
        </div>
      </section>  
    </div>
  );
}