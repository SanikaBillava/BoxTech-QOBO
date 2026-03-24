import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { api } from '../../lib/api';
import { formatPrice } from '../../constants';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrder();
  }, [id]);

  const loadOrder = async () => {
    try {
      const response = await api.orders.getById(id);
      if (response.success) {
        setOrder(response.data);
      }
    } catch (error) {
      console.error('Failed to load order:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (status) => {
    try {
      await api.orders.update(id, { status });
      loadOrder();
    } catch (error) {
      alert('Failed to update status: ' + error.message);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!order) return <div>Order not found</div>;

  return (
    <div>
      <button onClick={() => navigate('/admin/orders')} className="flex items-center space-x-2 text-blue-600 hover:underline mb-6">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Orders</span>
      </button>

      <h1 className="text-3xl font-bold mb-6">Order #{order.order_number}</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Order Items</h2>
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between text-gray-700">
                  <span>{item.name} x {item.quantity}</span>
                  <span>{formatPrice(Number(item.price) * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{formatPrice(order.shipping_charge)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>{formatPrice(order.tax_amount)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-2">
                <span>Total:</span>
                <span className="text-primary">{formatPrice(order.total_amount)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
            <p className="text-gray-700">{order.customer_name}</p>
            <p className="text-gray-700">{order.customer_email}</p>
            <p className="text-gray-700">{order.customer_phone}</p>
            <h3 className="font-semibold mt-4 mb-2">Shipping Address</h3>
            {order.shipping_address && (
              <>
                {order.shipping_address.company && <p className="text-gray-700">{order.shipping_address.company}</p>}
                <p className="text-gray-700">{order.shipping_address.address}</p>
                <p className="text-gray-700">{order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.pincode}</p>
              </>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Status</h2>
            <select value={order.status} onChange={(e) => updateStatus(e.target.value)} className="w-full px-3 py-2 border rounded-lg mb-4">
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <p className="text-sm text-gray-600">Payment Status: {order.payment_status}</p>
          </div>

          {order.notes && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Notes</h2>
              <p className="text-gray-700">{order.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}