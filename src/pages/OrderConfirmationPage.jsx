import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { api } from '../lib/api';
import { formatPrice } from '../constants';
import LoadingSpinner from '../components/LoadingSpinner';
import PaymentQRCode from '../components/PaymentQRCode';

export default function OrderConfirmationPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrder();
  }, [orderId]);

  const loadOrder = async () => {
    try {
      const response = await api.orders.getById(orderId);
      if (response.success) {
        setOrder(response.data);
      }
    } catch (error) {
      console.error('Failed to load order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!order) return (
    <div className="container mx-auto px-4 py-12 text-center">
      <p className="text-gray-600 mb-4">Order not found.</p>
      <button onClick={() => navigate('/')} className="btn-primary">Go Home</button>
    </div>
  );

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-4">Thank you for your order. We will process it shortly.</p>
          <p className="text-sm text-gray-500">Order Number: <span className="font-semibold">{order.order_number}</span></p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 font-medium">Please complete payment to confirm your order</p>
        </div>

        <PaymentQRCode orderNumber={order.order_number} />

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-2 mb-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-gray-700">
                <span>{item.name} x {item.quantity}</span>
                <span>{formatPrice(Number(item.price) * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping:</span>
              <span>{formatPrice(order.shipping_charge)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Tax:</span>
              <span>{formatPrice(order.tax_amount)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-2 mt-2">
              <span>Total:</span>
              <span className="text-primary">{formatPrice(order.total_amount)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
          <p className="text-gray-700">{order.customer_name}</p>
          <p className="text-gray-700">{order.customer_email}</p>
          <p className="text-gray-700">{order.customer_phone}</p>
          {order.shipping_address && (
            <>
              {order.shipping_address.company && <p className="text-gray-700">{order.shipping_address.company}</p>}
              <p className="text-gray-700">{order.shipping_address.address}</p>
              <p className="text-gray-700">{order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.pincode}</p>
            </>
          )}
        </div>

        <div className="text-center">
          <button onClick={() => navigate('/products')} className="btn-primary">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}