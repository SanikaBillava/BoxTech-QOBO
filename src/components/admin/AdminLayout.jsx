import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { clearAdminAuth } from '@qobo/admin-auth';
import AdminSidebar from './AdminSidebar';
import { Menu, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      clearAdminAuth();
      navigate('/');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden fixed top-4 left-4 z-[60] bg-white rounded-lg p-3 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200" aria-label="Toggle menu">
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm" aria-hidden="true" />
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 transform ${ menuOpen ? 'translate-x-0' : '-translate-x-full' } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-xl lg:shadow-none overflow-y-auto flex flex-col`}>
        <div className="flex-1 overflow-y-auto">
          <AdminSidebar onNavigate={() => setMenuOpen(false)} />
        </div>
        <div className="p-4 border-t border-gray-200">
          <button onClick={handleLogout} className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 lg:p-6 pt-20 lg:pt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}