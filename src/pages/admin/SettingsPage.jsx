import React, { useState, useEffect } from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { api } from '../../lib/api';
import FileUpload from '../../components/FileUpload';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function SettingsPage() {
  const { settings, loadSettings } = useSettings();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (settings) {
      setFormData(settings);
    }
  }, [settings]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.settings.update(formData.id, formData);
      await loadSettings();
      alert('Settings updated successfully!');
    } catch (error) {
      alert('Failed to update settings: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!formData) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Website Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Site Name</label>
              <input type="text" value={formData.site_name || ''} onChange={(e) => setFormData({ ...formData, site_name: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Site Logo URL</label>
              <input type="text" value={formData.site_logo || ''} onChange={(e) => setFormData({ ...formData, site_logo: e.target.value })} className="w-full px-3 py-2 border rounded-lg mb-2" />
              <FileUpload onUploadSuccess={(url) => setFormData({ ...formData, site_logo: url })} accept="image/*" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Contact Phone</label>
                <input type="tel" value={formData.contact_phone || ''} onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <input type="email" value={formData.contact_email || ''} onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea value={formData.address || ''} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows="3" />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Shipping & Taxes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Shipping Configuration</h3>
              <div>
                <label className="block text-sm font-medium mb-1">Default Shipping Fee</label>
                <input type="number" step="0.01" min="0" value={formData.shipping_charge || ''} onChange={(e) => setFormData({ ...formData, shipping_charge: e.target.value })} className="w-full px-3 py-2 border rounded-lg" placeholder="50.00" />
                <p className="text-sm text-gray-500 mt-1">Fee added to all orders</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Free Shipping Minimum (Optional)</label>
                <input type="number" step="0.01" min="0" value={formData.free_shipping_threshold || ''} onChange={(e) => setFormData({ ...formData, free_shipping_threshold: e.target.value })} className="w-full px-3 py-2 border rounded-lg" placeholder="999.00" />
                <p className="text-sm text-gray-500 mt-1">Orders above this amount get free shipping</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Tax Configuration</h3>
              <div>
                <label className="block text-sm font-medium mb-1">Tax Label</label>
                <input type="text" value={formData.tax_name || ''} onChange={(e) => setFormData({ ...formData, tax_name: e.target.value })} className="w-full px-3 py-2 border rounded-lg" placeholder="GST" />
                <p className="text-sm text-gray-500 mt-1">E.g., GST, VAT, Sales Tax</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tax Percentage</label>
                <input type="number" step="0.01" min="0" max="100" value={formData.tax_rate || ''} onChange={(e) => setFormData({ ...formData, tax_rate: e.target.value })} className="w-full px-3 py-2 border rounded-lg" placeholder="18.00" />
                <p className="text-sm text-gray-500 mt-1">Enter percentage (e.g., 18 for 18%)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Facebook URL</label>
              <input type="url" value={formData.social_facebook || ''} onChange={(e) => setFormData({ ...formData, social_facebook: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">X (Twitter) URL</label>
              <input type="url" value={formData.social_x || ''} onChange={(e) => setFormData({ ...formData, social_x: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Instagram URL</label>
              <input type="url" value={formData.social_instagram || ''} onChange={(e) => setFormData({ ...formData, social_instagram: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
              <input type="url" value={formData.social_linkedin || ''} onChange={(e) => setFormData({ ...formData, social_linkedin: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>
        </section>

        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
}