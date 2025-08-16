import { ProductsGetAllResponse } from "../../../shared/model/types";
import { productsService } from "../../../shared/api/api";

export const fetchProducts = (): Promise<ProductsGetAllResponse> => {
  return productsService.getAll();
};
