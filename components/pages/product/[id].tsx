// pages/products/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;


  return (
    <div>
      {/* Display product details here */}
      <h1>Product Page - {id}</h1>
    </div>
  );
};

export default ProductPage;