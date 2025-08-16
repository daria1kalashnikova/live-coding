import { Product } from "../../entities/product/model/types";

export type ProductsApiResponse = {
  products: Product[];
};

export type ProductsGetAllResponse =
  | [ProductsApiResponse, null]
  | [null, Error];

