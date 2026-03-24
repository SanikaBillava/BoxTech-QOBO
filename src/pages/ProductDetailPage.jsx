import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, CheckCircle } from 'lucide-react';
import { api } from '../lib/api';
import { formatPrice } from '../constants';
import { useCart } from '../contexts/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

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

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('Added to cart!');
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
          <div>
            <img src={product.image_url} alt={product.name} className="w-full h-auto rounded-xl shadow-lg" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'; }} />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
            {product.ply_type && (
              <span className="inline-block text-sm bg-blue-100 text-primary font-medium px-3 py-1 rounded-full mb-4">{product.ply_type}</span>
            )}
            <p className="text-3xl font-bold text-primary mb-6">{formatPrice(product.price)}</p>
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

            {product.material && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Material</h3>
                <p className="text-gray-700">{product.material}</p>
              </div>
            )}

            {product.applications && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Applications</h3>
                <p className="text-gray-700">{product.applications}</p>
              </div>
            )}

            {product.customizable && (
              <div className="mb-6 p-4 bg-secondary/10 border border-secondary rounded-lg">
                <div className="flex items-center space-x-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Fully Customizable</span>
                </div>
                <p className="text-gray-700 mt-2 text-sm">Custom dimensions, die-cutting, and branded printing available</p>
              </div>
            )}

            <div className="flex items-center space-x-4 mb-6">
              <label className="font-semibold text-gray-900">Quantity:</label>
              <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-20 px-3 py-2 border border-gray-300 rounded-lg" />
            </div>

            <button onClick={handleAddToCart} className="w-full flex items-center justify-center space-x-2 btn-secondary text-lg">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}