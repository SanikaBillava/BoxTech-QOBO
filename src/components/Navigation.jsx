import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';
import { useCart } from '../contexts/CartContext';
import { COMPANY_NAME, COMPANY_LOGO } from '../constants';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSettings();
  const { cartCount } = useCart();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky z-[60] bg-white border-b border-gray-200 shadow-sm" style={{ top: 'var(--qobo-banner-height, 0px)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={settings?.site_logo || COMPANY_LOGO} alt={settings?.site_name || COMPANY_NAME} className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">{settings?.site_name || COMPANY_NAME}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`font-medium transition-colors ${ isActive(item.path) ? 'text-primary' : 'text-gray-700 hover:text-primary' }`}>
                {item.label}
              </Link>
            ))}
            <Link to="/cart" className="relative flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={`block px-4 py-2 rounded-lg ${ isActive(item.path) ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100' }`}>
                {item.label}
              </Link>
            ))}
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {cartCount > 0 && <span className="bg-accent text-white text-xs font-bold rounded-full px-2 py-1">{cartCount}</span>}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}