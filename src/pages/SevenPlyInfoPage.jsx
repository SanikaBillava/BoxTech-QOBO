import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Crown, Droplets, Globe, Leaf } from 'lucide-react';

export default function SevenPlyInfoPage() {
  const navigate = useNavigate();

  const layers = [
    { name: 'Top Linerboard', type: 'Linerboard', description: 'Premium kraft paper surface for branding and aesthetic appeal' },
    { name: 'Fluting Layer 1', type: 'Fluted', description: 'Primary wavy medium for initial impact absorption' },
    { name: 'Middle Linerboard', type: 'Linerboard', description: 'Core stabilization layer for structural support' },
    { name: 'Fluting Layer 2', type: 'Fluted', description: 'Secondary wavy medium for distributed cushioning' },
    { name: 'Inner Linerboard', type: 'Linerboard', description: 'Internal protection layer for enhanced integrity' },
    { name: 'Fluting Layer 3', type: 'Fluted', description: 'Tertiary wavy medium for comprehensive protection' },
    { name: 'Bottom Linerboard', type: 'Linerboard', description: 'Final protective base layer for maximum durability' }
  ];

  const characteristics = [
    {
      icon: Crown,
      title: 'Unmatched Strength',
      description: 'Capable of withstanding substantial weight and pressure without bending, crushing, or deformation even under extreme stacking.'
    },
    {
      icon: Globe,
      title: 'Extreme Durability',
      description: 'Superior resistance to external forces, rough handling, and mechanical stress compared to 3-ply and 5-ply alternatives.'
    },
    {
      icon: Droplets,
      title: 'Environmental Resilience',
      description: 'Advanced protection against humidity, moisture infiltration, and pressure fluctuations during long-distance international transit.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Choice',
      description: 'Despite exceptional strength, 100% recyclable and biodegradable, supporting sustainable logistics and environmental responsibility.'
    }
  ];

  const applications = [
    'International export shipping',
    'Intercontinental logistics',
    'Heavy industrial machinery',
    'Large-scale electronic equipment',
    'Fragile glassware and ceramics',
    'High-value art and antiques',
    'Pharmaceutical and medical devices',
    'Sensitive automotive components'
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

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-espresso mb-3">7-Ply Corrugated Boxes</h1>
          <p className="text-2xl text-primary font-semibold mb-6">The Ultimate Standard in Heavy-Duty & Export Packaging</p>

          {/* Comparison Note */}
          <div className="inline-block bg-espresso/10 border-l-4 border-primary px-6 py-3 rounded-r-lg font-semibold text-sm mb-8 shadow-md max-w-2xl">
            <span className="text-espresso">✓ The most cost-justified solution for high-value products and challenging shipping conditions</span>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            7-Ply Corrugated Boxes represent the pinnacle of packaging innovation. Robust, highly resistant to damage, and engineered
            specifically for ensuring high-value items arrive safely at their destination. This premier packaging solution combines
            three distinct linerboards with four fluted layers, creating an unparalleled protective barrier for mission-critical shipments.
          </p>
        </div>

        {/* 7-Ply Composition Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">7-Ply Composition</h2>

          <div className="max-w-3xl mx-auto">
            {layers.map((layer, index) => (
              <div key={index} className="flex items-start mb-4 last:mb-0">
                {/* Connector Timeline */}
                <div className="flex flex-col items-center mr-6 flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                    layer.type === 'Linerboard' 
                      ? 'border-espresso bg-espresso' 
                      : 'border-primary bg-primary'
                  }`}></div>
                  {index < layers.length - 1 && (
                    <div className={`w-0.5 h-16 mt-1 ${
                      layer.type === 'Linerboard' ? 'bg-espresso/50' : 'bg-primary/50'
                    }`}></div>
                  )}
                </div>

                {/* Layer Info */}
                <div className={`rounded-lg p-4 flex-grow pt-1 ${
                  layer.type === 'Linerboard' ? 'bg-espresso/5 border-l-2 border-espresso' : 'bg-primary/5 border-l-2 border-primary'
                }`}>
                  <div className="flex items-baseline space-x-2 mb-1">
                    <h3 className="font-bold text-espresso text-lg">{layer.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      layer.type === 'Linerboard' 
                        ? 'bg-espresso text-white' 
                        : 'bg-primary text-white'
                    }`}>{layer.type}</span>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual 7-Layer Diagram */}
          <div className="mt-10 pt-10 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6 font-semibold text-lg">Visual Layer Representation</p>
            <div className="flex justify-center">
              <div className="space-y-1 w-full max-w-md">
                {/* Top Linerboard */}
                <div className="bg-espresso h-3 rounded-t-lg"></div>
                
                {/* Fluting 1 */}
                <div className="bg-primary h-4 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 20" className="w-full h-full opacity-30">
                    <path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>

                {/* Middle Linerboard */}
                <div className="bg-gray-400 h-2"></div>

                {/* Fluting 2 */}
                <div className="bg-primary h-4 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 20" className="w-full h-full opacity-30">
                    <path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>

                {/* Inner Linerboard */}
                <div className="bg-gray-400 h-2"></div>

                {/* Fluting 3 */}
                <div className="bg-primary h-4 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 20" className="w-full h-full opacity-30">
                    <path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>

                {/* Bottom Linerboard */}
                <div className="bg-espresso h-3 rounded-b-lg"></div>
              </div>
            </div>

            <p className="text-center text-gray-600 text-sm mt-6 font-medium">
              <strong>3 Linerboards + 4 Fluted Layers:</strong> The ultimate protective sandwich construction
            </p>
          </div>
        </div>

        {/* Performance Characteristics Grid */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">Performance Characteristics</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {characteristics.map((char, index) => {
              const IconComponent = char.icon;
              return (
                <div key={index} className="bg-gray-50 border-l-4 border-primary rounded-r-lg pl-6 py-6 pr-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4 mb-3">
                    <IconComponent className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-espresso">{char.title}</h3>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed text-sm">{char.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Elite Applications Section */}
        <div className="bg-gradient-to-r from-espresso/10 to-primary/10 rounded-xl shadow-lg p-8 mb-12 border border-espresso/20">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">Elite Applications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-espresso mb-4 flex items-center">
                <span className="inline-block w-3 h-3 bg-primary rounded-full mr-3"></span>
                International & Premium Shipping
              </h3>
              <ul className="space-y-2 ml-6">
                {applications.slice(0, 4).map((app, idx) => (
                  <li key={idx} className="text-gray-700 font-medium text-sm flex items-start">
                    <span className="text-primary mr-2 mt-0.5 font-bold">▸</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-espresso mb-4 flex items-center">
                <span className="inline-block w-3 h-3 bg-primary rounded-full mr-3"></span>
                Specialized & High-Value Goods
              </h3>
              <ul className="space-y-2 ml-6">
                {applications.slice(4, 8).map((app, idx) => (
                  <li key={idx} className="text-gray-700 font-medium text-sm flex items-start">
                    <span className="text-primary mr-2 mt-0.5 font-bold">▸</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12 border-t-4 border-primary">
          <h2 className="text-3xl font-bold text-espresso mb-6">Premium Protection for Your Most Valuable Shipments</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-3xl mx-auto text-lg">
            When only the best will do. Our 7-Ply Corrugated Boxes deliver uncompromising protection for high-value,
            mission-critical shipments across the globe. Experience the confidence that comes with premium industrial packaging.
          </p>
          <button className="bg-primary hover:bg-primaryLight text-white font-bold py-4 px-10 rounded-lg transition-colors duration-200 shadow-md inline-block text-lg">
            Request Premium Quote
          </button>
        </div>
      </div>
    </div>
  );
}