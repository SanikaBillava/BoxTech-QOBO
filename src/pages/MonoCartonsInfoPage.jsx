import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Layers, Palette, Leaf, DollarSign, Utensils, Sparkles, Pill, Zap, Gift } from 'lucide-react';

export default function MonoCartonsInfoPage() {
  const navigate = useNavigate();

  const coreFeatures = [
    {
      icon: Layers,
      title: 'Single Layer Strength',
      description: 'High-quality paperboard that is lightweight yet sturdy. Provides optimal protection for light-to-medium goods without excess weight.'
    },
    {
      icon: Palette,
      title: 'Branding Excellence',
      description: 'Smooth surface optimized for high-quality, vibrant printing and complex shapes. Perfect for premium brand presentation and visual differentiation.'
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious Packaging',
      description: '100% recyclable materials offering a sustainable alternative to plastic. Aligns with modern consumer values and environmental responsibility.'
    }
  ];

  const applications = [
    {
      icon: Utensils,
      industry: 'Food & Beverage',
      items: ['Snacks', 'Dry foods', 'Consumables'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Sparkles,
      industry: 'Cosmetics & Personal Care',
      items: ['High-end perfumes', 'Lotions', 'Makeup packaging'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Pill,
      industry: 'Pharmaceuticals',
      items: ['Medicines', 'Vitamins', 'Supplements'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Zap,
      industry: 'Electronics',
      items: ['Chargers', 'Headphones', 'Accessories'],
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: Gift,
      industry: 'Toys & Gifts',
      items: ['Gaming products', 'Collectibles', 'Retail goods'],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const benefits = [
    {
      title: 'Versatility',
      description: 'Fits any product type and size. Customizable shapes and dimensions to perfectly accommodate diverse goods from pharmaceuticals to electronics.',
      highlight: 'Perfect for Multi-Category Retailers'
    },
    {
      title: 'Space-Efficiency',
      description: 'Easy to store and transport. Lightweight construction reduces warehouse footprint and shipping costs while maintaining product integrity.',
      highlight: 'Optimize Supply Chain'
    },
    {
      title: 'Brand Loyalty',
      description: 'Enhanced unboxing and visual appeal. Premium printing capabilities create memorable brand experiences that drive customer satisfaction and repeat purchases.',
      highlight: 'Elevate Brand Perception'
    }
  ];

  return (
    <div className="py-8 bg-white min-h-screen">
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
          <h1 className="text-5xl font-bold text-espresso mb-3">Mono Carton Boxes</h1>
          <p className="text-2xl text-primary font-semibold mb-6">Lightweight Protection. Premium Presentation.</p>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Single-layer paperboard solutions that balance structural integrity with vibrant branding for the consumer goods market.
            Perfect for retailers seeking sustainable, cost-effective packaging that commands attention on shelves and creates lasting
            impressions. Mono Cartons represent the ideal intersection of reliability, aesthetics, and environmental consciousness.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-espresso mb-3">{feature.title}</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cost-Efficiency Card */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 mb-16 border-l-4 border-primary">
          <div className="flex items-start">
            <DollarSign className="w-10 h-10 text-primary mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-espresso mb-2">Cost-Efficiency</h3>
              <p className="text-gray-700 font-medium">
                A more affordable solution for high-volume retail needs. Single-layer construction reduces material costs without
                sacrificing quality, making it ideal for businesses scaling across multiple product lines.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Industry Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 cursor-pointer border-t-4 border-primary"
                >
                  <div className={`bg-gradient-to-br ${app.color} rounded-lg p-4 mb-4 flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-espresso mb-3 text-center">{app.industry}</h3>
                  <ul className="space-y-2">
                    {app.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 font-medium flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Product Benefits Section */}
        <div className="mb-16 bg-gray-50 rounded-xl p-12">
          <h2 className="text-3xl font-semibold text-espresso mb-12 text-center">Product Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-espresso mb-3">{benefit.title}</h3>
                <p className="text-gray-700 font-medium leading-relaxed mb-4">{benefit.description}</p>
                <div className="inline-block bg-primary/10 rounded-lg px-4 py-2 border-l-2 border-primary">
                  <p className="text-sm font-semibold text-espresso">{benefit.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12 border-t-4 border-primary">
          <h2 className="text-3xl font-bold text-espresso mb-4">Perfect Your Retail Packaging Strategy</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-3xl mx-auto text-lg">
            Mono Cartons combine sustainability, affordability, and premium presentation. Whether you're focused on pharmaceuticals,
            cosmetics, or consumer goods, our solutions deliver exceptional performance and shelf presence.
          </p>
          <button className="bg-primary hover:bg-primaryLight text-white font-bold py-4 px-10 rounded-lg transition-colors duration-200 shadow-md inline-block text-lg">
            Request a Sample Kit
          </button>
        </div>
      </div>
    </div>
  );
}