import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Leaf, DollarSign, Tag, Lock, Package } from 'lucide-react';

export default function ECommerceMailersInfoPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: 'Durability',
      description: 'Fluted inner layers provide puncture resistance and superior protection against rough handling during transit.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: '100% recyclable and biodegradable—perfect for the eco-conscious consumer and sustainable supply chains.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Efficiency',
      description: 'Lightweight construction minimizes shipping weights and logistics costs without compromising protection.'
    },
    {
      icon: Tag,
      title: 'Easy Branding',
      description: 'Optimized for custom logos and marketing messages to enhance the unboxing moment and brand recall.'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Rigid structures protect high-value and fragile goods, reducing return rates and customer dissatisfaction.'
    },
    {
      icon: Package,
      title: 'Storage',
      description: 'Stackable, space-saving designs for efficient warehouse management and inventory operations.'
    }
  ];

  const boxTypes = [
    {
      name: 'Regular Slotted Containers',
      shortName: 'RSC',
      description: 'The versatile standard with folding flaps. Ideal for most general e-commerce products.',
      bestFor: 'General merchandise, apparel, books'
    },
    {
      name: 'Die-Cut Boxes',
      shortName: 'Custom',
      description: 'Custom-tailored shapes for unique product fits. Perfect for brand differentiation.',
      bestFor: 'Specialty items, premium products'
    },
    {
      name: 'Mailer Boxes',
      shortName: 'Mailers',
      description: 'Self-locking designs—no tape required; ideal for premium items and quick packing.',
      bestFor: 'Premium packages, fast fulfillment'
    },
    {
      name: 'Tuck End Boxes',
      shortName: 'Tuck',
      description: 'Neat and secure closures for lightweight goods. Elegant presentation without tape.',
      bestFor: 'Cosmetics, accessories, lightweight items'
    },
    {
      name: 'Foldable Boxes',
      shortName: 'Flat-Pack',
      description: 'Flat-pack shipping sheets to save space before use. Cost-effective storage solution.',
      bestFor: 'Space-constrained warehouses, startups'
    }
  ];

  const selectionGuide = [
    {
      title: 'Product Dimensions',
      description: 'Ensure snug fit to prevent product movement and damage during transit. Measure your product carefully for optimal packaging.'
    },
    {
      title: 'Weight Requirements',
      description: 'Select box types rated for your product weight. Heavier items may require stronger RSC or reinforced mailer boxes.'
    },
    {
      title: 'Protection Needs',
      description: 'Consider fragile item requirements. Use dividers, cushioning, or specialized mailer boxes for delicate goods.'
    },
    {
      title: 'Branding Goals',
      description: 'Think about your unboxing experience. Die-cut and mailer boxes offer premium branding opportunities for maximum brand impact.'
    }
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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-espresso mb-3">E-Commerce Packaging Solutions</h1>
          <p className="text-2xl text-primary font-semibold mb-6">Secure Delivery. Memorable Unboxing. Sustainable Logistics.</p>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            Specialized packaging designed for the rigorous demands of online retail. Our E-Commerce Mailers balance durability with
            brand experience, ensuring products arrive safely while creating memorable unboxing moments that drive customer loyalty and
            reduce returns. Perfect for businesses scaling from startups to enterprise operations.
          </p>
        </div>

        {/* The E-Commerce Edge Feature Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">The E-Commerce Edge</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-primary"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-espresso">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Catalog */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Choose Your Box Type</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {boxTypes.map((box, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-b-4 border-primary cursor-pointer group"
              >
                <div className="bg-primary/10 rounded-lg p-4 mb-4 group-hover:bg-primary/20 transition-colors">
                  <p className="text-sm font-bold text-primary">{box.shortName}</p>
                </div>
                <h3 className="text-lg font-bold text-espresso mb-3">{box.name}</h3>
                <p className="text-sm text-gray-700 font-medium mb-4 leading-relaxed">{box.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-primary uppercase">Best for</p>
                  <p className="text-sm text-gray-600 font-medium mt-1">{box.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro-Tips Selection Guide */}
        <div className="bg-white rounded-xl shadow-lg p-10 mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">How to Choose the Right Packaging</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {selectionGuide.map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border-l-4 border-primary">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold text-sm mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-espresso mb-2">{tip.title}</h3>
                    <p className="text-gray-700 font-medium leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-espresso/5 to-primary/5 rounded-xl shadow-lg p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-espresso mb-4">Ready to Transform Your E-Commerce Experience?</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-3xl mx-auto text-lg">
            Our E-Commerce Mailers deliver the perfect balance of protection and presentation. Let us help you create packaging that
            protects your products and impresses your customers.
          </p>
          <button className="bg-primary hover:bg-primaryLight text-white font-bold py-4 px-10 rounded-lg transition-colors duration-200 shadow-md inline-block text-lg">
            Get a Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
}