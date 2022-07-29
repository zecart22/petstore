import { createContext, ReactNode } from "react";
import { ProductsData } from "./products";

interface Products {
  price: number;
  isNew: boolean;
  descount: string;
  name: string;
  image: string;
  selected: boolean;
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  products: Products[];
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const products = ProductsData;
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
