import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Shield, Factory, TrendingDown, Zap } from 'lucide-react';
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
      {hero && (
        <section className="relative h-[600px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero.background_image_url})` }}>
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">{hero.title}</h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">{hero.subtitle}</p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300">{hero.description}</p>
            {hero.cta_text && hero.cta_link && (
              <Link to={hero.cta_link} className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primaryLight transition-colors shadow-lg text-lg">
                <span>{hero.cta_text}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </section>
      )}

      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-espresso">Why Choose BoxTech?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.slice(0, 6).map((feature) => {
              const IconComponent = iconMap[feature.icon] || CheckCircle;
              return (
                <div key={feature.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <IconComponent className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Manufactured Over 50 Million Units Annually</h2>
          <p className="text-xl mb-6">Trusted by leading businesses across retail, food, electronics, and logistics industries</p>
          <Link to="/about" className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors">
            <span>Learn More About Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-espresso">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image_url} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'; }} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}