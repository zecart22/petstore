import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import { ProductsProvider } from "./Products";

import theme from "../style/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <ProductsProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </ProductsProvider>
);
