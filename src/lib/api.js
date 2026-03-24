const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.qobo.dev';
const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  console.warn('Warning: VITE_API_KEY is not set. API requests may fail with 401.');
}

async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const isFormData = options.body instanceof FormData;
  const headers = {
    'X-API-Key': API_KEY,
    ...options.headers
  };
  if (!isFormData && !options.headers?.['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }
  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    const errorMessage = errorData.error?.message || errorData.message || response.statusText;
    const error = new Error(errorMessage);
    error.response = { data: errorData, status: response.status };
    throw error;
  }
  return response.json();
}

export const api = {
  categories: {
    getAll: async () => await apiRequest('/api/v1/categories'),
    getById: async (id) => await apiRequest(`/api/v1/categories/${id}`),
    create: async (data) => await apiRequest('/api/v1/categories', { method: 'POST', body: JSON.stringify(data) }),
    update: async (id, data) => await apiRequest(`/api/v1/categories/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: async (id) => await apiRequest(`/api/v1/categories/${id}`, { method: 'DELETE' })
  },
  products: {
    getAll: async (params = {}) => {
      const qs = new URLSearchParams(params).toString();
      return await apiRequest(`/api/v1/products${qs ? `?${qs}` : ''}`);
    },
    getById: async (id) => await apiRequest(`/api/v1/products/${id}`),
    getBySlug: async (slug) => {
      const res = await apiRequest(`/api/v1/products?slug=${slug}`);
      return res.data && res.data.length > 0 ? res.data[0] : null;
    },
    create: async (data) => await apiRequest('/api/v1/products', { method: 'POST', body: JSON.stringify(data) }),
    update: async (id, data) => await apiRequest(`/api/v1/products/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: async (id) => await apiRequest(`/api/v1/products/${id}`, { method: 'DELETE' })
  },
  hero_sections: {
    getAll: async () => await apiRequest('/api/v1/hero_sections')
  },
  features: {
    getAll: async () => await apiRequest('/api/v1/features')
  },
  testimonials: {
    getAll: async () => await apiRequest('/api/v1/testimonials')
  },
  faqs: {
    getAll: async () => await apiRequest('/api/v1/faqs')
  },
  customers: {
    getAll: async () => await apiRequest('/api/v1/customers'),
    getById: async (id) => await apiRequest(`/api/v1/customers/${id}`),
    create: async (data) => await apiRequest('/api/v1/customers', { method: 'POST', body: JSON.stringify(data) }),
    update: async (id, data) => await apiRequest(`/api/v1/customers/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: async (id) => await apiRequest(`/api/v1/customers/${id}`, { method: 'DELETE' })
  },
  orders: {
    getAll: async () => await apiRequest('/api/v1/orders'),
    getById: async (id) => await apiRequest(`/api/v1/orders/${id}`),
    create: async (data) => await apiRequest('/api/v1/orders', { method: 'POST', body: JSON.stringify(data) }),
    update: async (id, data) => await apiRequest(`/api/v1/orders/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: async (id) => await apiRequest(`/api/v1/orders/${id}`, { method: 'DELETE' })
  },
  settings: {
    get: async () => {
      const res = await apiRequest('/api/v1/settings');
      return res.data && res.data.length > 0 ? res.data[0] : null;
    },
    update: async (id, data) => await apiRequest(`/api/v1/settings/${id}`, { method: 'PUT', body: JSON.stringify(data) })
  },
  payment_settings: {
    list: async () => await apiRequest('/api/v1/payment_settings'),
    create: async (data) => await apiRequest('/api/v1/payment_settings', { method: 'POST', body: JSON.stringify(data) }),
    update: async (id, data) => await apiRequest(`/api/v1/payment_settings/${id}`, { method: 'PUT', body: JSON.stringify(data) })
  },
  uploadFile: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return await apiRequest('/api/v1/upload', { method: 'POST', body: formData });
  },
  getStorageInfo: async () => await apiRequest('/api/v1/storage')
};