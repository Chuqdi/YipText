export interface Product {
  id: number;
  name: string;
  price: string;
  photo: string;
  createdAt: string;
}

export interface ProductsState {
  items: Product[];
  maxProducts: number;
}

export interface FormData {
  name: string;
  price: string;
  photo: string | null;
}

export interface FormErrors {
  name?: string;
  price?: string;
  photo?: string;
}