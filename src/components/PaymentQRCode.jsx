import React, { useState, useEffect } from 'react';
import { api } from '../lib/api';
import LoadingSpinner from './LoadingSpinner';

export default function PaymentQRCode({ orderNumber = null }) {
  const [paymentSettings, setPaymentSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPaymentSettings();
  }, []);

  const fetchPaymentSettings = async () => {
    try {
      setLoading(true);
      const response = await api.payment_settings.list();
      if (response.success && response.data && response.data.length > 0) {
        const settings = response.data[0];
        if (settings.upi_qr_code_url && settings.is_active) {
          setPaymentSettings(settings);
        }
      }
    } catch (err) {
      console.error('Failed to fetch payment settings:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyUPINumber = () => {
    if (paymentSettings.upi_number) {
      navigator.clipboard.writeText(paymentSettings.upi_number);
      alert('UPI number copied to clipboard!');
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error || !paymentSettings) return null;

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-center">Complete Payment via UPI</h3>
      {orderNumber && (
        <p className="text-sm text-gray-600 mb-4 text-center">Order Number: {orderNumber}</p>
      )}
      <div className="flex flex-col items-center space-y-4">
        <div className="max-w-xs w-full">
          <img src={paymentSettings.upi_qr_code_url} alt="UPI QR Code" className="w-full h-auto border-2 border-gray-300 rounded-lg" />
        </div>
        <p className="text-center text-gray-700 font-medium">Scan QR code to complete payment via UPI</p>
        {paymentSettings.upi_number && (
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">UPI: {paymentSettings.upi_number}</span>
            <button onClick={copyUPINumber} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">Copy</button>
          </div>
        )}
        {paymentSettings.instructions && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">{paymentSettings.instructions}</p>
          </div>
        )}
      </div>
    </div>
  );
}