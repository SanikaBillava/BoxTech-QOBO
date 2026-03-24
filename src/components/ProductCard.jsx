import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { formatPrice } from '../constants';
import { useCart } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/products/${product.slug}`} className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'; }} />
        {product.featured && (
          <span className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        {product.ply_type && (
          <span className="inline-block text-xs bg-blue-100 text-primary font-medium px-2 py-1 rounded mb-2">{product.ply_type}</span>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
          <button onClick={handleAddToCart} className="p-2 bg-secondary text-white rounded-lg hover:bg-green-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}