import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Shield, Boxes, Settings } from 'lucide-react';

export default function FivePlyInfoPage() {
  const navigate = useNavigate();

  const layers = [
    { name: 'Top Liner', description: 'Kraft paper for branding and surface protection' },
    { name: 'Fluting Layer 1', description: 'Primary wavy cushioning for impact absorption' },
    { name: 'Inner Liner', description: 'Stabilization layer for structural integrity' },
    { name: 'Fluting Layer 2', description: 'Secondary cushioning for compression resistance' },
    { name: 'Bottom Liner', description: 'Final protective base layer' }
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Increased Durability',
      description: 'Specifically designed for long-distance shipping and heavy products requiring maximum protection during transit.'
    },
    {
      icon: Shield,
      title: 'Impact Protection',
      description: 'Extra layers provide exceptional shock absorption and protection against drops, impacts, and rough handling.'
    },
    {
      icon: Boxes,
      title: 'Compression Resistance',
      description: 'Multi-layer construction prevents crushing and collapsing under heavy stacking and load pressure.'
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Available in custom sizes with industrial-grade printing options for product information and branding.'
    }
  ];

  const applications = [
    'Heavy-duty machinery shipping',
    'Electronics and appliances',
    'Glassware and fragile items',
    'Automotive parts and components',
    'Long-term climate-controlled storage',
    'International export packaging'
  ];

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products')}
          className="flex items-center space-x-2 text-primary hover:text-primaryLight transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Categories</span>
        </button>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-espresso mb-3">5-Ply Corrugated Boxes</h1>
          <p className="text-2xl text-primary font-semibold mb-6">Advanced Industrial Strength for Heavier Loads</p>
          
          {/* Comparison Badge */}
          <div className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm mb-6 shadow-md">
            Superior to 3-ply for high-value and heavy goods
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            5-Ply Corrugated Boxes are engineered for superior strength using five distinct layers of material, providing
            exceptional durability and protection for demanding industrial applications. Each layer is meticulously designed to work
            in harmony, offering unmatched compression resistance and impact protection.
          </p>
        </div>

        {/* 5-Ply Anatomy Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">5-Ply Anatomy</h2>

          <div className="max-w-2xl mx-auto">
            {layers.map((layer, index) => (
              <div key={index} className="flex items-start mb-4 last:mb-0">
                {/* Connector Line */}
                <div className="flex flex-col items-center mr-6">
                  <div className={`w-4 h-4 rounded-full border-2 border-primary bg-white flex-shrink-0`}></div>
                  {index < layers.length - 1 && (
                    <div className="w-0.5 h-16 bg-primary opacity-50 mt-1"></div>
                  )}
                </div>

                {/* Layer Info */}
                <div className="bg-gray-50 rounded-lg p-4 flex-grow pt-1">
                  <h3 className="font-bold text-espresso text-lg">{layer.name}</h3>
                  <p className="text-gray-700 text-sm mt-1">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Diagram */}
          <div className="mt-10 pt-10 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6 font-medium">Visual Layer Representation</p>
            <div className="flex justify-center">
              <div className="space-y-1 w-full max-w-md">
                {/* Top Liner */}
                <div className="bg-espresso h-3 rounded-t-lg"></div>
                {/* Fluting 1 */}
                <div className="bg-primary h-4 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 20" className="w-full h-full opacity-30">
                    <path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                {/* Inner Liner */}
                <div className="bg-gray-400 h-2"></div>
                {/* Fluting 2 */}
                <div className="bg-primary h-4 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 20" className="w-full h-full opacity-30">
                    <path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                {/* Bottom Liner */}
                <div className="bg-espresso h-3 rounded-b-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Advantages Grid */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">Industrial Advantages</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="border-l-4 border-primary pl-6 py-4">
                  <div className="flex items-start space-x-4 mb-3">
                    <IconComponent className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-espresso">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industrial Use Cases Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">Industrial Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-espresso mb-4 flex items-center">
                <span className="inline-block w-3 h-3 bg-primary rounded-full mr-3"></span>
                Heavy-Duty Shipping
              </h3>
              <ul className="space-y-2 ml-6">
                {applications.slice(0, 3).map((application, idx) => (
                  <li key={idx} className="text-gray-700 font-medium text-sm flex items-start">
                    <span className="text-primary mr-2 mt-0.5">▸</span>
                    {application}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-espresso mb-4 flex items-center">
                <span className="inline-block w-3 h-3 bg-primary rounded-full mr-3"></span>
                Long-Term Storage & Specialty
              </h3>
              <ul className="space-y-2 ml-6">
                {applications.slice(3, 6).map((application, idx) => (
                  <li key={idx} className="text-gray-700 font-medium text-sm flex items-start">
                    <span className="text-primary mr-2 mt-0.5">▸</span>
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-2xl font-bold text-espresso mb-6">Ready for Heavy-Duty Solutions?</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-2xl mx-auto">
            Our 5-Ply Corrugated Boxes are ideal for businesses requiring maximum durability and protection.
            Contact us today for bulk pricing and custom solutions tailored to your industrial needs.
          </p>
          <button className="bg-primary hover:bg-primaryLight text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-md inline-block">
            Inquire for Bulk Pricing
          </button>
        </div>
      </div>
    </div>
  );
}