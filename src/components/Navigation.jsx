import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';
import { COMPANY_NAME, COMPANY_LOGO } from '../constants';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSettings();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky z-[60] bg-espresso border-b border-secondary shadow-sm" style={{ top: 'var(--qobo-banner-height, 0px)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={settings?.site_logo || COMPANY_LOGO} alt={settings?.site_name || COMPANY_NAME} className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">{settings?.site_name || COMPANY_NAME}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`font-medium transition-colors ${ isActive(item.path) ? 'text-primary' : 'text-white hover:text-primary' }`}>
                {item.label}
              </Link>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-secondary">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={`block px-4 py-2 rounded-lg ${ isActive(item.path) ? 'bg-primary text-white' : 'text-white hover:bg-secondary' }`}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}