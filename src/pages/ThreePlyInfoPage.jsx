import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, DollarSign, Feather, Recycle, Palette } from 'lucide-react';

export default function ThreePlyInfoPage() {
  const navigate = useNavigate();

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

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-espresso mb-4">3-Ply Corrugated Boxes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our 3-Ply Corrugated Boxes consist of three layers: two outer linerboards and one inner 'wavy' fluted medium.
            The term 'Ply' refers to the number of layers involved in the construction, providing essential protection
            for light-to-medium weight items.
          </p>
        </div>

        {/* Visual Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-espresso mb-6 text-center">Layer Construction</h2>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* CSS-based sandwich diagram */}
              <div className="space-y-2">
                {/* Top Liner */}
                <div className="bg-espresso h-4 rounded-t-lg flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Outer Linerboard</span>
                </div>

                {/* Fluted Medium */}
                <div className="bg-primary h-8 rounded flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 100 20" className="w-full h-full">
                      <path d="M0,10 Q25,0 50,10 T100,10" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium relative z-10">Fluted Medium</span>
                </div>

                {/* Bottom Liner */}
                <div className="bg-espresso h-4 rounded-b-lg flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Outer Linerboard</span>
                </div>
              </div>

              {/* Labels */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  <strong>Sandwich Construction:</strong> Two smooth linerboards with cushioning fluted medium
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-espresso mb-4">Structure</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Smooth Outer Liner:</strong> Provides a clean surface for branding, printing, and product presentation.
              </p>
              <p>
                <strong>Fluted Medium:</strong> The inner 'wavy' layer creates air pockets that act as natural cushioning,
                absorbing impacts and protecting contents during transit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-espresso mb-4">Strength & Durability</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Offers adequate protection for medium-weight items including electronics, food products, and consumer goods.
              </p>
              <p>
                While effective for light-to-medium applications, it provides less structural integrity compared to
                5-ply or 7-ply corrugated boxes for heavy-duty industrial use.
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-espresso mb-8 text-center">Key Benefits</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cost-Effective */}
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-espresso mb-2">Cost-Effective</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                High protection value at a competitive price point, making it ideal for budget-conscious businesses.
              </p>
            </div>

            {/* Lightweight */}
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Feather className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-espresso mb-2">Lightweight</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Optimized design reduces weight for easier handling and lower shipping costs without compromising protection.
              </p>
            </div>

            {/* Eco-Friendly */}
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-espresso mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                100% recyclable and made from renewable resources, supporting sustainable packaging practices.
              </p>
            </div>

            {/* Customizable */}
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-espresso mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Available in various sizes with printing options for branding and product information.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/products')}
            className="bg-primary hover:bg-primaryLight text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Explore Our 3-Ply Products</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}