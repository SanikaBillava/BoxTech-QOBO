import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Zap, Layers, Leaf, Box, Package, Truck, Warehouse, ShoppingCart, UtensilsCrossed } from 'lucide-react';

export default function CorreugatedPadsSheetsInfoPage() {
  const navigate = useNavigate();

  const technicalFeatures = [
    {
      icon: Shield,
      title: 'Durability',
      description: 'Lightweight yet strong—ideal for heavy-duty industrial shielding without adding excess weight to shipments.'
    },
    {
      icon: Zap,
      title: 'Cushioning',
      description: 'Fluted layers provide superior shock absorption during transit, protecting high-value items from damage.'
    },
    {
      icon: Layers,
      title: 'Customizable',
      description: 'Can be precisely cut to fit any product dimensions for a snug, secure fit and optimal protection.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: '100% recyclable and eco-friendly packaging material for environmentally conscious operations.'
    }
  ];

  const productComparison = [
    {
      type: 'Corrugated Pads',
      icon: Box,
      focus: 'Protective Dividers & Layers',
      description: 'Engineered to prevent shifting, scuffing, and product interaction during storage and transport.',
      applications: ['Electronics protection', 'Glassware separation', 'Item stacking support', 'Anti-abrasive layers'],
      benefit: 'Maximize Interior Space Protection'
    },
    {
      type: 'Corrugated Sheets',
      icon: Package,
      focus: 'Base Layers & Stacking Stabilizers',
      description: 'Designed as outer covers and structural components to prevent crushing and maintain box integrity.',
      applications: ['Container base layers', 'Stacking stabilization', 'Structural reinforcement', 'Outer protection'],
      benefit: 'Enhance Structural Integrity'
    }
  ];

  const industryUses = [
    {
      icon: Truck,
      title: 'Shipping & Transport',
      description: 'Securing items within containers to prevent movement, shifting, and damage during long-distance transit.'
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      description: 'Preventing crushing and damage when stacking products. Ensures vertical integrity in high-density storage.'
    },
    {
      icon: ShoppingCart,
      title: 'Retail Display',
      description: 'Protecting products on shelves or separating high-value items from direct contact with display surfaces.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Food Industry',
      description: 'Specialized protection for fragile or perishable food items, maintaining hygiene and structural support.'
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
        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl font-bold text-espresso mb-3">Corrugated Pads & Sheets</h1>
          <p className="text-2xl text-primary font-semibold mb-6">Foundation of Protection. Structural Integrity for Every Shipment.</p>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
            Versatile materials made from corrugated fiberboard, engineered for cushioning, structural support, and multi-layer
            protection. Corrugated Pads & Sheets are the unsung heroes of the packaging world, providing essential internal and external
            protection that ensures products arrive safely and maintain their presentation integrity.
          </p>
        </div>

        {/* Technical Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Technical Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => {
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

        {/* Technical Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-10 mb-16">
          <h3 className="text-2xl font-semibold text-espresso mb-8 text-center">Corrugated Fiberboard Construction</h3>
          <div className="flex justify-center">
            <div className="space-y-2 w-full max-w-md">
              {/* Top Layer */}
              <div className="bg-espresso h-3 rounded-t-lg"></div>

              {/* Fluting */}
              <div className="bg-primary h-6 flex items-center justify-center relative">
                <svg viewBox="0 0 100 25" className="w-full h-full opacity-30">
                  <path d="M0,12.5 Q12.5,0 25,12.5 T50,12.5 T75,12.5 T100,12.5" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {/* Middle Layer */}
              <div className="bg-gray-400 h-2"></div>

              {/* Fluting */}
              <div className="bg-primary h-6 flex items-center justify-center relative">
                <svg viewBox="0 0 100 25" className="w-full h-full opacity-30">
                  <path d="M0,12.5 Q12.5,0 25,12.5 T50,12.5 T75,12.5 T100,12.5" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {/* Bottom Layer */}
              <div className="bg-espresso h-3 rounded-b-lg"></div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 font-medium">
              <span className="text-primary font-bold">Sandwich Construction:</span> Multi-layer design provides durability, cushioning, and structural support
            </p>
          </div>
        </div>

        {/* Product Classification */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Product Classification</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {productComparison.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border-t-4 border-primary">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-espresso">{product.type}</h3>
                  </div>

                  <p className="text-lg font-semibold text-primary mb-3">{product.focus}</p>
                  <p className="text-gray-700 font-medium mb-6">{product.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-bold text-espresso mb-3 uppercase">Primary Applications</p>
                    <ul className="space-y-2">
                      {product.applications.map((app, idx) => (
                        <li key={idx} className="text-sm text-gray-700 font-medium flex items-start">
                          <span className="text-primary mr-2 mt-0.5">✓</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm font-bold text-espresso">{product.benefit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* High-Value Industry Uses */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-espresso mb-10 text-center">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryUses.map((use, index) => {
              const IconComponent = use.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-8 border-b-4 border-primary">
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-espresso mb-3">{use.title}</h3>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{use.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-10 mb-16 border border-primary/20">
          <h3 className="text-2xl font-bold text-espresso mb-6 text-center">Why Corrugated Pads & Sheets?</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-primary font-bold text-3xl mb-2">360°</p>
              <p className="text-gray-700 font-medium">Complete Product Coverage</p>
            </div>
            <div className="text-center">
              <p className="text-primary font-bold text-3xl mb-2">100%</p>
              <p className="text-gray-700 font-medium">Recyclable Materials</p>
            </div>
            <div className="text-center">
              <p className="text-primary font-bold text-3xl mb-2">∞</p>
              <p className="text-gray-700 font-medium">Customizable Dimensions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12 border-t-4 border-primary">
          <h2 className="text-3xl font-bold text-espresso mb-4">Complete Your Protection Strategy</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-3xl mx-auto text-lg">
            Whether you need individual pads for internal cushioning or full sheets for structural support, our Corrugated Pads & Sheets
            deliver the reliability, durability, and sustainability your supply chain demands. Experience protection that matters.
          </p>
          <button className="bg-primary hover:bg-primaryLight text-white font-bold py-4 px-10 rounded-lg transition-colors duration-200 shadow-md inline-block text-lg">
            Request Bulk Samples
          </button>
        </div>
      </div>
    </div>
  );
}