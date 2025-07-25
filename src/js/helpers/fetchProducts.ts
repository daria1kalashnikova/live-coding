import { ProductsGetAllResponse } from "../../domain/types";
import { productsService } from "../api";


export const fetchProducts = (): Promise<ProductsGetAllResponse> => {
  return productsService.getAll();
};
