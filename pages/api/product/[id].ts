// pages/api/products/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchProducts } from '../../../utils/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await fetchProducts();
    const product = products.find((p) => p.id === req.query.id);

    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};