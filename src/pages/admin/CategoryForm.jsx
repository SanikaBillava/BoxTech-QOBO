import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../lib/api';
import FileUpload from '../../components/FileUpload';

export default function CategoryForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image_url: '',
    display_order: 0
  });

  useEffect(() => {
    if (id) loadCategory();
  }, [id]);

  const loadCategory = async () => {
    try {
      const response = await api.categories.getById(id);
      if (response.success) {
        setFormData(response.data);
      }
    } catch (error) {
      console.error('Failed to load category:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await api.categories.update(id, formData);
      } else {
        await api.categories.create(formData);
      }
      navigate('/admin/categories');
    } catch (error) {
      alert('Failed to save: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{id ? 'Edit Category' : 'Add New Category'}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug *</label>
          <input type="text" required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 border rounded-lg" rows="3" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input type="text" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} className="w-full px-3 py-2 border rounded-lg mb-2" />
          <FileUpload onUploadSuccess={(url) => setFormData({ ...formData, image_url: url })} accept="image/*" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Display Order</label>
          <input type="number" value={formData.display_order} onChange={(e) => setFormData({ ...formData, display_order: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>

        <div className="flex space-x-4">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? 'Saving...' : 'Save Category'}
          </button>
          <button type="button" onClick={() => navigate('/admin/categories')} className="btn-outline">Cancel</button>
        </div>
      </form>
    </div>
  );
}