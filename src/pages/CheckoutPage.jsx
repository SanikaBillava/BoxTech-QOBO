import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useSettings } from '../contexts/SettingsContext';
import { api } from '../lib/api';
import { formatPrice } from '../constants';
import PaymentQRCode from '../components/PaymentQRCode';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const { settings } = useSettings();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    gst: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  const shippingCharge = (() => {
    const fee = Number(settings?.shipping_charge || 0);
    const threshold = Number(settings?.free_shipping_threshold || 0);
    if (threshold > 0 && cartTotal >= threshold) return 0;
    return fee;
  })();

  const taxRate = Number(settings?.tax_rate || 0);
  const taxAmount = (cartTotal * taxRate) / 100;
  const total = cartTotal + shippingCharge + taxAmount;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const orderData = {
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        shipping_address: {
          company: formData.company,
          gst: formData.gst,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode
        },
        items: cart.map((item) => ({
          product_id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: Number(item.price || 0)
        })),
        subtotal: cartTotal,
        shipping_charge: shippingCharge,
        tax_amount: taxAmount,
        total_amount: total,
        status: 'pending',
        payment_status: 'pending',
        notes: formData.notes
      };

      const response = await api.orders.create(orderData);
      if (response.success) {
        clearCart();
        navigate(`/order-confirmation/${response.data.id}`);
      }
    } catch (error) {
      alert('Failed to place order: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 mb-4">Your cart is empty.</p>
        <button onClick={() => navigate('/products')} className="btn-primary">Browse Products</button>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" required placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border rounded-lg" />
                <input type="email" required placeholder="Email *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border rounded-lg" />
                <input type="tel" required placeholder="Phone Number *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" placeholder="GST Number" value={formData.gst} onChange={(e) => setFormData({ ...formData, gst: e.target.value })} className="w-full px-4 py-3 border rounded-lg" />
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-6">Shipping Address</h2>
              <textarea required placeholder="Address *" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-4 py-3 border rounded-lg" rows="3" />
              <div className="grid md:grid-cols-3 gap-4">
                <input type="text" required placeholder="City *" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" required placeholder="State *" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" required placeholder="Pincode *" value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} className="w-full px-4 py-3 border rounded-lg" />
              </div>

              <textarea placeholder="Additional Notes" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full px-4 py-3 border rounded-lg" rows="3" />

              <button type="submit" disabled={loading} className="w-full btn-primary mt-6">
                {loading ? 'Placing Order...' : 'Place Order'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm text-gray-700">
                    <span>{item.name} x {item.quantity}</span>
                    <span>{formatPrice(Number(item.price) * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span>{shippingCharge === 0 && Number(settings?.free_shipping_threshold || 0) > 0 ? <span className="text-green-600">FREE</span> : formatPrice(shippingCharge)}</span>
                </div>
                {taxRate > 0 && (
                  <div className="flex justify-between text-gray-700">
                    <span>{settings?.tax_name || 'Tax'} ({taxRate}%):</span>
                    <span>{formatPrice(taxAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold border-t pt-2 mt-2">
                  <span>Total:</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
              {Number(settings?.free_shipping_threshold || 0) > 0 && cartTotal < Number(settings.free_shipping_threshold) && (
                <p className="text-sm text-orange-600 mt-4">
                  Add {formatPrice(Number(settings.free_shipping_threshold) - cartTotal)} more to get FREE SHIPPING!
                </p>
              )}
            </div>

            <PaymentQRCode />
          </div>
        </div>
      </div>
    </div>
  );
}