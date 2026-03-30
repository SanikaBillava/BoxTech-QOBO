import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye } from 'lucide-react';
import { api } from '../lib/api';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProduct();
  }, [slug]);

  const loadProduct = async () => {
    try {
      const data = await api.products.getBySlug(slug);
      setProduct(data);
    } catch (error) {
      console.error('Failed to load product:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTechnicalSpecs = (product) => {
    if (!product) return null;
    const specs = {
      '3-Ply (Light Duty)': {
        construction: 'Linerboard + Fluted layer',
        features: 'Cost-effective, suitable for lightweight items',
        applications: ['Small appliances', 'Food packaging', 'Light consumer goods']
      },
      '5-Ply (Heavy Duty)': {
        construction: 'Double Fluting',
        features: 'High resistance to compression and stacking',
        applications: ['Industrial machinery', 'Heavy equipment', 'Manufacturing components']
      },
      '7-Ply (Export Grade)': {
        construction: '4 Fluted layers',
        features: 'Superior moisture resistance and durability',
        applications: ['Export packaging', 'International shipping', 'Heavy industrial goods']
      },
      'Corrugated Pads & Sheets': {
        construction: 'Multi-layer corrugated board',
        features: 'Flexible dividers and protective layers',
        applications: ['Supply chain optimization', 'Product separation', 'Void fill protection']
      }
    };
    return specs[product.ply_type] || null;
  };

  // Refined Route Map using keyword detection for better reliability
  const getInfoPageRoute = (product) => {
    if (!product) return null;

    const name = product.name.toLowerCase();
    
    // Keyword matching to redirect to the correct Info Page
    if (name.includes('printed')) {
      return '/products/printed-boxes-info';
    }
    if (name.includes('e-commerce') || name.includes('ecommerce')) {
      return '/products/ecommerce-mailers-info';
    }
    if (name.includes('mono carton')) {
      return '/products/mono-cartons-info';
    }
    if (name.includes('roll')) {
      return '/products/corrugated-rolls-info';
    }
    if (name.includes('pad') || name.includes('sheet')) {
      return '/products/corrugated-pads-sheets-info';
    }
    if (name.includes('3-ply')) {
      return '/products/3-ply-info';
    }
    if (name.includes('5-ply')) {
      return '/products/5-ply-info';
    }
    if (name.includes('7-ply')) {
      return '/products/7-ply-info';
    }

    return null;
  };

  if (loading) return <LoadingSpinner />;
  if (!product) return (
    <div className="container mx-auto px-4 py-12 text-center">
      <p className="text-gray-600 mb-4">Product not found.</p>
      <button onClick={() => navigate('/products')} className="text-[#B38E3F] hover:underline font-medium">Back to Products</button>
    </div>
  );

  const specs = getTechnicalSpecs(product);

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate('/products')} className="flex items-center space-x-2 text-[#B38E3F] hover:text-[#3D2616] transition-colors mb-6 font-medium">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center p-4">
            <img src={product.image_url} alt={product.name} className="max-w-full h-auto rounded-lg" />
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-[#3D2616]">{product.name}</h1>
              {product.ply_type && (
                <span className="inline-block text-sm bg-[#B38E3F] text-white font-medium px-4 py-2 rounded-full mb-4 shadow-sm">
                  {product.ply_type}
                </span>
              )}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Tech Specs Table */}
            {specs && (
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold text-[#3D2616] mb-4">Technical Specifications</h2>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-semibold text-gray-900 w-1/3">Construction</td>
                      <td className="py-3 text-gray-700">{specs.construction}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-semibold text-gray-900">Key Features</td>
                      <td className="py-3 text-gray-700">{specs.features}</td>
                    </tr>
                    {product.dimensions && (
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-semibold text-gray-900">Dimensions</td>
                        <td className="py-3 text-gray-700">{product.dimensions}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Navigation / Action Section */}
            <div className="pt-6 border-t border-gray-200">
              {product.name === "Corrugated Boxes" ? (
                /* Specialized buttons for the main Corrugated Boxes category */
                <div className="space-y-4">
                  <p className="text-[#3D2616] font-bold text-sm uppercase tracking-widest text-center">
                    Know More
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      onClick={() => navigate('/products/3-ply-info')}
                      className="bg-white border-2 border-[#B38E3F] text-[#B38E3F] hover:bg-[#B38E3F] hover:text-white font-bold py-3 px-2 rounded-xl transition-all duration-300 shadow-sm text-sm"
                    >
                      3-Ply Detail
                    </button>
                    <button
                      onClick={() => navigate('/products/5-ply-info')}
                      className="bg-white border-2 border-[#B38E3F] text-[#B38E3F] hover:bg-[#B38E3F] hover:text-white font-bold py-3 px-2 rounded-xl transition-all duration-300 shadow-sm text-sm"
                    >
                      5-Ply Detail
                    </button>
                    <button
                      onClick={() => navigate('/products/7-ply-info')}
                      className="bg-white border-2 border-[#B38E3F] text-[#B38E3F] hover:bg-[#B38E3F] hover:text-white font-bold py-3 px-2 rounded-xl transition-all duration-300 shadow-sm text-sm"
                    >
                      7-Ply Detail
                    </button>
                  </div>
                </div>
              ) : (
                /* Dynamic "Know More" button for all other specific product types */
                <button
                  onClick={() => {
                    const route = getInfoPageRoute(product);
                    if (route) navigate(route);
                  }}
                  className="w-full bg-[#B38E3F] hover:bg-[#3D2616] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg group"
                >
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Know More</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}