// pages/index.tsx
import React from 'react';
import { GetStaticProps } from 'next';
/*import ProductList from '../components/ProductList';*/
import { fetchProducts } from '../utils/api';
import Product from '../interfaces/product';
import dynamic from 'next/dynamic';
const ProductList = dynamic(() => import('../components/ProductList'), { ssr: false });

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
};

export default Home;