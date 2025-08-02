import { EVENTS } from "../../utils/constants";
import { getProductItems, subscribe } from "../store/state";
import { ProductCard } from "./ProductCard/ProductCard.component";

export const ProductsList = () => {
    const productListElement: HTMLUListElement = document.createElement("ul");
    
    subscribe((event) => {
        if (event.name !== EVENTS.SET_PRODUCTS) return;
    
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

  const productElements: HTMLLIElement[] = products.map(
    (el) => { 

      const productCardComponent = ProductCard({ product: el});

      return productCardComponent.element;

    }
  );

  container.append(...productElements);
}
