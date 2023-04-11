import { apiV1 } from '../../lib/api';

export const fetchProducts = async () => apiV1.get('/products');
export const fetchPrices = async () => apiV1.get('/pricelist');
