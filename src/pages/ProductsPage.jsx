import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  // Define the three main product categories
  const mainCategories = [
    {
      id: 'shipping-boxes',
      name: 'Shipping Boxes',
      subcategories: ['3-Ply (Light Duty)', '5-Ply (Heavy Duty)', '7-Ply (Export Grade)']
    },
    {
      id: 'specialized-solutions',
      name: 'Specialized Solutions',
      subcategories: ['Printed Boxes', 'E-commerce Mailers', 'Mono Cartons']
    },
    {
      id: 'protective-materials',
      name: 'Protective Materials',
      subcategories: ['Corrugated Rolls', 'Corrugated Pads & Sheets']
    }
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        api.products.getAll(),
        api.categories.getAll()
      ]);
      setProducts(productsRes.data || []);
      setCategories(categoriesRes.data || []);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || product.category_id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <LoadingSpinner />;

  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-espresso">Our Products</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-espresso mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Product Categories
              </h2>

              <div className="space-y-4">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    !selectedCategory ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Products
                </button>

                {mainCategories.map((category) => (
                  <div key={category.id} className="space-y-2">
                    <h3 className="font-medium text-espresso text-sm uppercase tracking-wide">
                      {category.name}
                    </h3>
                    <div className="pl-4 space-y-1">
                      {category.subcategories.map((subcategory) => (
                        <button
                          key={subcategory}
                          onClick={() => {
                            if (subcategory === '3-Ply (Light Duty)') {
                              navigate('/products/3-ply-info');
                            } else if (subcategory === '5-Ply (Heavy Duty)') {
                              navigate('/products/5-ply-info');
                            } else if (subcategory === '7-Ply (Export Grade)') {
                              navigate('/products/7-ply-info');
                            } else if (subcategory === 'Printed Boxes') {
                              navigate('/products/printed-boxes-info');
                            } else if (subcategory === 'E-commerce Mailers') {
                              navigate('/products/ecommerce-mailers-info');
                            } else if (subcategory === 'Mono Cartons') {
                              navigate('/products/mono-cartons-info');
                            } else if (subcategory === 'Corrugated Rolls') {
                              navigate('/products/corrugated-rolls-info');
                            } else if (subcategory === 'Corrugated Pads & Sheets') {
                              navigate('/products/corrugated-pads-sheets-info');
                            } else {
                              setSelectedCategory(subcategory);
                            }
                          }}
                          className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                            selectedCategory === subcategory ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {subcategory}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}