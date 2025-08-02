import { ProductsGetAllResponse } from "../../domain/types";
import { productsService } from "../services/api";

export const fetchProducts = (): Promise<ProductsGetAllResponse> => {
  return productsService.getAll();
};
