export const productsService = {
  baseUrl: "https://dummyjson.com",
  getAll: async function () {
    try {
      const response = await fetch(`${this.baseUrl}/products`);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  },
};

// const [data, error] = await productService.getAll();
