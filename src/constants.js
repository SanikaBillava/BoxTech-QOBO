export const COMPANY_NAME = 'Boxtech Enterprises';
export const COMPANY_LOGO = 'data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20fill%3D%22%232563EB%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22bold%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22central%22%3EBT%3C%2Ftext%3E%3C%2Fsvg%3E';
export const CURRENCY = '₹';

export const THEME = {
  colors: {
    primary: '#2563EB',
    primaryLight: '#60A5FA',
    primaryDark: '#1E40AF',
    secondary: '#10B981',
    accent: '#F59E0B',
    industrialGray: '#4B5563',
    lightGray: '#F3F4F6',
    background: '#FFFFFF',
    text: '#1F2937',
    textLight: '#6B7280',
    border: '#E5E7EB'
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem' }
  },
  spacing: { xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem', '2xl': '3rem' },
  borderRadius: { sm: '0.25rem', md: '0.5rem', lg: '0.75rem', xl: '1rem', full: '9999px' },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)'
  }
};

export const formatPrice = (price) => {
  const num = Number(price || 0);
  return `${CURRENCY}${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};