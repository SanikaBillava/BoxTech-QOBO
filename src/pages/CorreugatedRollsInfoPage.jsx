import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Wind, Feather, Leaf, Shield, Hammer, AlertCircle, Warehouse, Scissors } from 'lucide-react';

export default function CorreugatedRollsInfoPage() {
  const navigate = useNavigate();

  const coreFeatures = [
    {
      icon: Zap,
      title: 'Durability',
      description: 'Strong enough to handle heavy-duty industrial packaging requirements without compromising structural integrity.'
    },
    {
      icon: Wind,
      title: 'Flexibility',
      description: 'Highly adaptable material that conforms to various product shapes and sizes with ease.'
    },
    {
      icon: Feather,
      title: 'Lightweight',
      description: 'Optimized to keep shipping costs low without sacrificing protection or cushioning performance.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: '100% recyclable paper construction for sustainable operations and environmental responsibility.'
    }
  ];

  const commonUses = [
    {
      icon: Shield,
      title: 'Product Protection',
      description: 'Superior cushioning for fragile or delicate items during handling, shipping, and storage.'
    },
    {
      icon: Hammer,
      title: 'Industrial Wrapping',
      description: 'Ideal for furniture, glassware, and electronics to prevent scratches, dents, and damage.'
    },
    {
      icon: AlertCircle,
      title: 'Edge Protection',
      description: 'Specialized use for shielding the edges of metal sheets and large furniture during transport.'
    },
    {
      icon: Warehouse,
      title: 'Warehouse Logistics',
      description: 'Essential for packing and organizing items in high-volume environments and fulfillment centers.'
    },
    {
      icon: Scissors,
      title: 'Custom Tailoring',
      description: 'Easy to cut and customize for a perfect fit for any item, shape, or packaging requirement.'
    }
  ];

  const industries = [
    { name: 'E-Commerce', description: 'Fast-paced fulfillment with reliable cushioning' },
    { name: 'Moving Services', description: 'Professional protection for residential and commercial moves' },
    { name: 'General Manufacturing', description: 'Industrial standard for component protection and transport' }
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
        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl font-bold text-espresso mb-3">Corrugated Rolls</h1>
          <p className="text-2xl text-primary font-semibold mb-6">Flexible Protection. Seamless Cushioning.</p>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
            A versatile packaging material made of fluted paper sandwiched between paperboard—engineered for wrapping,
            protecting, and cushioning products of any shape or size. Corrugated Rolls represent the industry standard for
            flexible, sustainable, and cost-effective cushioning solutions across diverse applications.
          </p>
        </div>

        {/* Core Performance Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Core Performance Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-espresso mb-3">{feature.title}</h3>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Common Uses & Versatility */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Common Uses & Versatility</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonUses.map((use, index) => {
              const IconComponent = use.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl hover:border-primary/30 transition-all border border-gray-200 hover:border-primary"
                >
                  <div className="flex items-start mb-4">
                    <IconComponent className="w-8 h-8 text-primary flex-shrink-0 mr-3 mt-1" />
                    <h3 className="text-lg font-bold text-espresso">{use.title}</h3>
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed ml-11">{use.description}</p>
                </div>
              );
            })}
          </div>

          {/* Flex-Card Indicator */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600 font-medium">
              <span className="text-primary font-bold">✓</span> These cards represent the flexibility and adaptability of our
              Corrugated Rolls across diverse packaging scenarios.
            </p>
          </div>
        </div>

        {/* Industry Focus Section */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Industry Standard for</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border-l-4 border-primary"
              >
                <h3 className="text-xl font-bold text-espresso mb-3">{industry.name}</h3>
                <p className="text-gray-700 font-medium">{industry.description}</p>
                <div className="mt-6 inline-block">
                  <span className="text-sm font-bold text-primary px-4 py-2 bg-primary/20 rounded-full">
                    Industry Leader
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 font-medium mt-10 max-w-3xl mx-auto">
            Corrugated Rolls have become the go-to solution for B2B buyers seeking reliable, economical, and
            environmentally responsible cushioning materials. Trust the material that professionals depend on.
          </p>
        </div>

        {/* Key Advantages Summary */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-10 mb-16 border border-primary/20">
          <h3 className="text-2xl font-bold text-espresso mb-6 text-center">Why Choose Corrugated Rolls?</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              '✓ Easy to handle and store in bulk',
              '✓ Reduces packaging waste and costs',
              '✓ Protects various product types',
              '✓ Sustainable and recyclable material',
              '✓ Customizable lengths and widths',
              '✓ Industry-proven performance'
            ].map((point, idx) => (
              <p key={idx} className="text-gray-700 font-medium flex items-center">
                <span className="text-primary mr-3 font-bold">•</span>
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12 border-t-4 border-primary">
          <h2 className="text-3xl font-bold text-espresso mb-4">Ready to Upgrade Your Packaging Solutions?</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-3xl mx-auto text-lg">
            Our Corrugated Rolls deliver the flexibility, durability, and sustainability that B2B operations demand.
            Whether you're protecting delicate items or wrapping industrial products, we have the right solution for your needs.
          </p>
          <button className="bg-primary hover:bg-primaryLight text-white font-bold py-4 px-10 rounded-lg transition-colors duration-200 shadow-md inline-block text-lg">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
}