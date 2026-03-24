import React, { useState, useEffect } from 'react';
import { ShoppingBag, FolderOpen, ShoppingCart, Users } from 'lucide-react';
import { api } from '../../lib/api';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products: 0, categories: 0, orders: 0, customers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [productsRes, categoriesRes, ordersRes, customersRes] = await Promise.all([
        api.products.getAll(),
        api.categories.getAll(),
        api.orders.getAll(),
        api.customers.getAll()
      ]);
      setStats({
        products: productsRes.data?.length || 0,
        categories: categoriesRes.data?.length || 0,
        orders: ordersRes.data?.length || 0,
        customers: customersRes.data?.length || 0
      });
    } catch (error) {
      console.error('Failed to load stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  const cards = [
    { title: 'Products', value: stats.products, icon: ShoppingBag, color: 'bg-blue-500' },
    { title: 'Categories', value: stats.categories, icon: FolderOpen, color: 'bg-green-500' },
    { title: 'Orders', value: stats.orders, icon: ShoppingCart, color: 'bg-purple-500' },
    { title: 'Customers', value: stats.customers, icon: Users, color: 'bg-orange-500' }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{card.title}</p>
                  <p className="text-3xl font-bold">{card.value}</p>
                </div>
                <div className={`${card.color} p-3 rounded-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}