import { EVENTS } from "../../utils/constants";
import { getProductItems, subscribe } from "../store/state";

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

  const productsHTML = products.map(
    (el) =>
      `<li class="list-item" data-item-id="${el.id}">
    <div class="item-rating-container">
    <p class="item-rating-value">${el.rating}</p>
    <div class="item-rating-list"  data-rating="${el.rating}"> 
    
     </div>
     </div>
     
        <img src="${el.thumbnail}" alt="${el.title}" />
        <h3 class="item-title truncate-multiline">${el.title}</h3>
        <p class="item-description  truncate-multiline">${el.description}</p>
        <p class="item-price">${el.price} euro </p>
      </li>
    `
  );

  container.insertAdjacentHTML("beforeend", productsHTML.join(""));
}
