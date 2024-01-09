// components/ProductCard.tsx
import React from 'react';
import Link from 'next/link';
import Product from '../interfaces/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <a>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <img src={product.image} alt={product.title} />
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;