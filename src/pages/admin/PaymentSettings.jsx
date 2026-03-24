import React, { useState, useEffect } from 'react';
import { api } from '../../lib/api';
import FileUpload from '../../components/FileUpload';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function PaymentSettings() {
  const [formData, setFormData] = useState({
    id: null,
    upi_qr_code_url: '',
    upi_number: '',
    instructions: '',
    is_active: false
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const response = await api.payment_settings.list();
      if (response.success && response.data && response.data.length > 0) {
        setFormData(response.data[0]);
      }
    } catch (error) {
      console.error('Failed to load payment settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (formData.id) {
        await api.payment_settings.update(formData.id, formData);
      } else {
        await api.payment_settings.create(formData);
      }
      alert('Payment settings updated successfully!');
      loadSettings();
    } catch (error) {
      alert('Failed to update: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Payment Settings</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">UPI QR Code</label>
          {formData.upi_qr_code_url && (
            <img src={formData.upi_qr_code_url} alt="UPI QR Code" className="w-48 h-48 object-contain border rounded mb-2" />
          )}
          <input type="text" value={formData.upi_qr_code_url || ''} onChange={(e) => setFormData({ ...formData, upi_qr_code_url: e.target.value })} className="w-full px-3 py-2 border rounded-lg mb-2" placeholder="QR Code Image URL" />
          <FileUpload onUploadSuccess={(url) => setFormData({ ...formData, upi_qr_code_url: url })} accept="image/*" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">UPI Number (Optional)</label>
          <input type="text" value={formData.upi_number || ''} onChange={(e) => setFormData({ ...formData, upi_number: e.target.value })} className="w-full px-3 py-2 border rounded-lg" placeholder="yourname@upi" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Payment Instructions (Optional)</label>
          <textarea value={formData.instructions || ''} onChange={(e) => setFormData({ ...formData, instructions: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows="3" placeholder="Enter payment instructions for customers" />
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={formData.is_active} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })} />
            <span>Enable UPI QR Code on Checkout</span>
          </label>
        </div>

        <button type="submit" disabled={saving} className="btn-primary">
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
}