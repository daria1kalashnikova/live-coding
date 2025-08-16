import { ProductsApiResponse, ProductsGetAllResponse } from "../model/types";

export const productsService = {
  baseUrl: "https://dummyjson.com",
  getAll: async function (): Promise<ProductsGetAllResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/products`);
      if (!response.ok) throw new Error(response.statusText);
      const data = (await response.json()) as ProductsApiResponse;

      return [data, null];
    } catch (error) {
      return [null, error as Error];
    }
  },
};

export { ProductsGetAllResponse };
// const [data, error] = await productService.getAll();
