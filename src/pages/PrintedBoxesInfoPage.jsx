import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Palette, Shield, Leaf, DollarSign } from 'lucide-react';

export default function PrintedBoxesInfoPage() {
  const navigate = useNavigate();
  const [activePrintingMethod, setActivePrintingMethod] = useState('flexographic');

  const features = [
    {
      icon: Palette,
      title: 'Customizable',
      description: 'Tailored with custom prints, colors, logos, and messages for strong visual impact.'
    },
    {
      icon: Shield,
      title: 'Durable & Protective',
      description: 'Made from sturdy three-layer corrugated structure to resist crushing and damage.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Recyclable, biodegradable, and often made from recycled paper materials.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Relatively affordable, especially for large quantities with competitive bulk pricing.'
    }
  ];

  const applications = [
    { category: 'Retail Packaging', items: ['Electronics', 'Apparel', 'Cosmetics & Beauty'] },
    { category: 'E-commerce', items: ['Safe delivery protection', 'Enhanced unboxing experience', 'Brand reinforcement'] },
    { category: 'Promotional Campaigns', items: ['Limited edition packaging', 'Marketing collateral', 'Brand awareness'] },
    { category: 'General Shipping', items: ['Secure product transport', 'Professional appearance', 'Customer satisfaction'] }
  ];

  const printingMethods = {
    flexographic: {
      title: 'Flexographic Printing',
      description: 'Ideal for high-volume production runs. Offers excellent speed and cost efficiency for large orders. Perfect for consistent, vibrant colors across thousands of boxes. Best for standard designs with solid colors and simple graphics.',
      bestFor: 'High-volume orders, standard designs'
    },
    litho: {
      title: 'Litho-lamination',
      description: 'Delivers premium, high-quality finishes with exceptional color accuracy and detail. Creates a laminated protective layer for enhanced durability and water resistance. Ideal for sophisticated designs requiring photographic quality and fine lines.',
      bestFor: 'Premium packaging, high-quality finishes'
    },
    digital: {
      title: 'Digital Printing',
      description: 'Perfect for short runs and rapid prototyping without setup fees. Enables full customization and variable data printing for personalized packaging. Fastest turnaround time with minimal waste and maximum flexibility.',
      bestFor: 'Short runs, custom variations, quick turnaround'
    }
  };

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

        {/* Hero & Branding Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-espresso mb-3">Printed Corrugated Boxes</h1>
          <p className="text-2xl text-primary font-semibold mb-6">Where Protection Meets Promotion</p>
          <h2 className="text-xl text-espresso font-semibold mb-6">Enhance Your Brand Identity</h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Printed Corrugated Boxes feature custom graphics, logos, and text that provide both functional protection and
            aesthetic value. Transform your packaging into a powerful marketing tool while maintaining the durability and
            sustainability your customers expect. Every box tells your brand story.
          </p>
        </div>

        {/* Features & Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4 mb-3">
                  <IconComponent className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-espresso">{feature.title}</h3>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Applications Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">Perfect For</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold text-espresso mb-3 flex items-center">
                  <span className="inline-block w-3 h-3 bg-primary rounded-full mr-3"></span>
                  {app.category}
                </h3>
                <ul className="space-y-2 ml-6">
                  {app.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 font-medium text-sm flex items-start">
                      <span className="text-primary mr-2 mt-0.5">▪</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Printing Methods Section - Tabbed Interface */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">Printing Methods</h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-6">
            {Object.entries(printingMethods).map(([key, method]) => (
              <button
                key={key}
                onClick={() => setActivePrintingMethod(key)}
                className={`px-6 py-3 font-semibold rounded-t-lg transition-all duration-200 ${
                  activePrintingMethod === key
                    ? 'bg-primary text-white shadow-md transform translate-y-1'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {method.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-espresso mb-4">
              {printingMethods[activePrintingMethod].title}
            </h3>
            <p className="text-gray-700 font-medium leading-relaxed mb-6">
              {printingMethods[activePrintingMethod].description}
            </p>
            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-4">
              <p className="text-sm font-semibold text-espresso">
                <span className="text-primary font-bold">Best For: </span>
                {printingMethods[activePrintingMethod].bestFor}
              </p>
            </div>
          </div>

          {/* Visual Comparison Note */}
          <div className="mt-8 text-center text-sm text-gray-600 font-medium">
            <p>Select a printing method above to learn more about its advantages and ideal use cases.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-espresso/5 to-primary/5 rounded-xl shadow-lg p-12 border-2 border-primary/20">
          <h2 className="text-3xl font-bold text-espresso mb-6">Ready to Elevate Your Packaging?</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-2xl mx-auto text-lg">
            Transform your brand narrative into compelling packaging. Our Printed Corrugated Boxes combine stunning visual design
            with proven protection, creating an unforgettable unboxing experience for your customers.
          </p>
          <button className="bg-primary hover:bg-primaryLight text-white font-bold py-4 px-10 rounded-lg transition-colors duration-200 shadow-md inline-block text-lg">
            Start Your Branding Project
          </button>
        </div>
      </div>
    </div>
  );
}