import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {

  return (
    <Link to={`/products/${product.slug}`} className="group block bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary/20">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'; }} />
        {product.featured && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
        )}
      </div>
      <div className="p-4 relative">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-espresso transition-colors mb-1">{product.name}</h3>
        <p className="text-sm text-secondary mb-2 line-clamp-2">{product.description}</p>
        {product.ply_type && (
          <span className="inline-block text-xs bg-primary text-white font-medium px-2 py-1 rounded mb-2">{product.ply_type}</span>
        )}
        {/* Golden bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </Link>
  );
}