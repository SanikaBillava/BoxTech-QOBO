import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QoboBanner } from '@qobo/banner';
import { AdminProtectedRoute, initializeAdminAuthFromUrl } from '@qobo/admin-auth';
import { SettingsProvider } from './contexts/SettingsContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ThreePlyInfoPage from './pages/ThreePlyInfoPage';
import FivePlyInfoPage from './pages/FivePlyInfoPage';
import SevenPlyInfoPage from './pages/SevenPlyInfoPage';
import PrintedBoxesInfoPage from './pages/PrintedBoxesInfoPage';
import ECommerceMailersInfoPage from './pages/ECommerceMailersInfoPage';
import MonoCartonsInfoPage from './pages/MonoCartonsInfoPage';
import CorreugatedRollsInfoPage from './pages/CorreugatedRollsInfoPage';
import CorreugatedPadsSheetsInfoPage from './pages/CorreugatedPadsSheetsInfoPage';
import ServicesPage from './pages/ServicesPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProductsList from './pages/admin/ProductsList';
import ProductForm from './pages/admin/ProductForm';
import CategoriesList from './pages/admin/CategoriesList';
import CategoryForm from './pages/admin/CategoryForm';
import OrdersList from './pages/admin/OrdersList';
import OrderDetail from './pages/admin/OrderDetail';
import CustomersList from './pages/admin/CustomersList';
import SettingsPage from './pages/admin/SettingsPage';
import PaymentSettings from './pages/admin/PaymentSettings';

if (typeof window !== 'undefined' && import.meta.env.VITE_PROJECT_ID) {
  if (!window.QOBO_CONFIG) window.QOBO_CONFIG = {};
  window.QOBO_CONFIG.projectId = import.meta.env.VITE_PROJECT_ID;
}

export default function App() {
  useEffect(() => {
    initializeAdminAuthFromUrl();
  }, []);

  return (
    <SettingsProvider>
      <Router>
          <QoboBanner apiKey={import.meta.env.VITE_API_KEY} apiBaseUrl={import.meta.env.VITE_API_BASE_URL} />
          <div className="flex flex-col min-h-screen">
            <Routes>
              <Route path="/*" element={
                <>
                  <Navigation />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/products" element={<ProductsPage />} />
                      <Route path="/products/3-ply-info" element={<ThreePlyInfoPage />} />
                      <Route path="/products/5-ply-info" element={<FivePlyInfoPage />} />
                      <Route path="/products/7-ply-info" element={<SevenPlyInfoPage />} />
                      <Route path="/products/printed-boxes-info" element={<PrintedBoxesInfoPage />} />
                      <Route path="/products/ecommerce-mailers-info" element={<ECommerceMailersInfoPage />} />
                      <Route path="/products/mono-cartons-info" element={<MonoCartonsInfoPage />} />
                      <Route path="/products/corrugated-rolls-info" element={<CorreugatedRollsInfoPage />} />
                      <Route path="/products/corrugated-pads-sheets-info" element={<CorreugatedPadsSheetsInfoPage />} />
                      <Route path="/products/:slug" element={<ProductDetailPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
              <Route path="/admin/*" element={
                <AdminProtectedRoute>
                  <AdminLayout />
                </AdminProtectedRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<ProductsList />} />
                <Route path="products/new" element={<ProductForm />} />
                <Route path="products/:id" element={<ProductForm />} />
                <Route path="categories" element={<CategoriesList />} />
                <Route path="categories/new" element={<CategoryForm />} />
                <Route path="categories/:id" element={<CategoryForm />} />
                <Route path="orders" element={<OrdersList />} />
                <Route path="orders/:id" element={<OrderDetail />} />
                <Route path="customers" element={<CustomersList />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="payment-settings" element={<PaymentSettings />} />
              </Route>
            </Routes>
          </div>
        </Router>
    </SettingsProvider>
  );
}