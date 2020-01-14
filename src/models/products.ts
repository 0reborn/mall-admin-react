import { Reducer } from 'redux';

export interface Product {
  name: string;
}

export interface ProductsModelType {
  namespace: 'products';
  state: Product[];
  reducers: {
    add: Reducer<Product[]>;
  };
}

const ProductModel: ProductsModelType = {
  namespace: 'products',
  state: [{ name: '华为 HUAWEI P20' }, { name: 'HLA海澜之家简约动物印花短袖T恤' }],
  reducers: {
    add: (state = [], { payload }) => ({
      ...state,
      ...payload,
    }),
  },
};

export default ProductModel;
