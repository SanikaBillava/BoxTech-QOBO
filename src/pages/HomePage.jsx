import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Shield, Factory, TrendingDown, Zap, Target, Eye } from 'lucide-react';
import { api } from '../lib/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [hero, setHero] = useState(null);
  const [features, setFeatures] = useState([]);
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [heroRes, featuresRes, productsRes, testimonialsRes] = await Promise.all([
        api.hero_sections.getAll(),
        api.features.getAll(),
        api.products.getAll({ featured: true }),
        api.testimonials.getAll()
      ]);
      if (heroRes.data && heroRes.data.length > 0) setHero(heroRes.data[0]);
      setFeatures(featuresRes.data || []);
      setProducts(productsRes.data || []);
      setTestimonials(testimonialsRes.data || []);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const iconMap = { CheckCircle, Leaf, Shield, Factory, TrendingDown, Zap };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      {/* Updated Hero Section with boxtech.docx content */}
      <section className="relative h-[650px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(61, 38, 22, 0.7), rgba(61, 38, 22, 0.7)), url(${hero?.background_image_url || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80'})` }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Leading Manufacturer of High-Quality Corrugated Boxes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            BoxTech Enterprises provides custom-made packaging tailored to your needs. From standard shipping boxes to branded packaging, we protect your products and promote your identity. 
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-lg text-lg">
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Mission & Vision Section (Clean & Minimalist) */}
      <section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* Mission Card */}
      <div className="group relative p-1 bg-white rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(179,142,63,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B38E3F] to-[#3D2616] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>
        <div className="relative p-10 bg-[#F9F9F9] rounded-[22px] border border-gray-100 h-full">
          
          {/* Header Container: Icon and Title side-by-side */}
          <div className="flex items-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-50 text-[#B38E3F] mr-4 flex-shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#3D2616] tracking-tight">Our Mission</h3>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg font-light">
            To provide top-quality, sustainable, and cost-effective corrugated packaging solutions that meet unique customer needs while supporting environmental excellence.
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="group relative p-1 bg-white rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(179,142,63,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B38E3F] to-[#3D2616] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>
        <div className="relative p-10 bg-[#F9F9F9] rounded-[22px] border border-gray-100 h-full">
          
          {/* Header Container: Icon and Title side-by-side */}
          <div className="flex items-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-50 text-[#B38E3F] mr-4 flex-shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#3D2616] tracking-tight">Our Vision</h3>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg font-light">
            To be the industry leader known for innovation and sustainability, delivering efficient, environmentally-friendly solutions for packaging needs worldwide.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
     {/* Stats Banner */}
      <section className="py-16 bg-espresso text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Over [X] Million Units Delivered Annually</h2>
          <p className="text-xl mb-8 opacity-90">Partnered with leading brands to optimize supply chain efficiency and reduce costs.</p>
          <Link to="/about" className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors">
            <span>Learn More About Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-espresso">Featured Products</h2>
            <Link to="/products" className="text-primary font-semibold hover:underline flex items-center space-x-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          {products.length === 0 ? (
            <p className="text-center text-gray-600">No featured products available.</p>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      
    </div>
  );
}