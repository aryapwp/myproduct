// components/ProductList.tsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Product from '../interfaces/product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc');
  
    const filteredProducts = products
      .filter((product) => (categoryFilter ? product.category === categoryFilter : true))
      .sort((a, b) => (sortBy === 'asc' ? a.price - b.price : b.price - a.price));
  
    return (
      <div>
        <label>
          Filter by Category:
          <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="All">All</option>
          </select>
        </label>
        <label>
          Sort by Price:
          <select onChange={(e) => setSortBy(e.target.value as 'asc' | 'desc')}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };

export default ProductList;