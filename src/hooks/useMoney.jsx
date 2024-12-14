import { useCallback } from 'react';

const useMoney = () => {
  const formatCurrency = useCallback((value) => {
    if (value == null) return 'N/A';
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(value);
  }, []);

  return { formatCurrency };
};

export default useMoney;
