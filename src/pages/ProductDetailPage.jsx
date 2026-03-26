import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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

  if (loading) return <LoadingSpinner />;
  if (!product) return (
    <div className="container mx-auto px-4 py-12 text-center">
      <p className="text-gray-600 mb-4">Product not found.</p>
      <button onClick={() => navigate('/products')} className="text-primary hover:underline">Back to Products</button>
    </div>
  );

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate('/products')} className="flex items-center space-x-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Image */}
          <div>
            <img src={product.image_url} alt={product.name} className="w-full h-auto rounded-xl shadow-lg" />
          </div>

          {/* Right Column: Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-espresso">{product.name}</h1>
            {product.ply_type && (
              <span className="inline-block text-sm bg-blue-100 text-primary font-medium px-3 py-1 rounded-full mb-4">{product.ply_type}</span>
            )}
            <p className="text-gray-700 mb-6">{product.description}</p>

            {product.dimensions && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Dimensions</h3>
                <p className="text-gray-700">{product.dimensions}</p>
              </div>
            )}

            {product.weight_capacity && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Weight Capacity</h3>
                <p className="text-gray-700">{product.weight_capacity}</p>
              </div>
            )}

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Material</h3>
              <p className="text-gray-700">{product.material}</p>
            </div>
          </div> 
        </div> {/* End of Grid */}
      </div> {/* End of Container */}
    </div> /* End of Main Div */
  );
}