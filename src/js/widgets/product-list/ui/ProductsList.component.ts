import { EVENTS } from "../../../shared/libs/constants";
import { getFilterTerm, getProductItems, subscribe } from "../../../app/store/state";
import { ProductCard } from "../../../entities/product/ui/ProductCard/ProductCard.component";

export const ProductsList = () => {
  const productListElement: HTMLUListElement = document.createElement("ul");

  subscribe((event) => {
    if (event.name !== EVENTS.SET_PRODUCTS && event.name !== EVENTS.SET_SEARCH_FILTER_TERM) return;
    
    render(productListElement);
  });

  render(productListElement);

  return {
    element: productListElement,
  };
};

function render(container: HTMLUListElement) {
  container.textContent = "";

  const products = getProductItems();
  const filterTerm = getFilterTerm();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterTerm.toLowerCase().trim())
  );

  console.log("filteredProducts", filteredProducts);

  const productElements: HTMLLIElement[] = filteredProducts.map((el) => {
    const productCardComponent = ProductCard({ product: el });

    return productCardComponent.element;
  });

  container.append(...productElements);
}
