import { productsService } from "./api.js";
import { renderRatingFeature } from "./star-script.js";
const parentList = document.querySelector(".parent-list");

const fatchProducts = () => {
  return productsService.getAll();
};

const renderProducts = (data, container) => {
  const productsHTML = data.products.map(
    (el) =>
      `<li class="list-item">
    <div class="item-rating-container">
    <p class="item-rating-value">${el.rating}</p>
    <div class="item-rating-list" data-rating="${el.rating}"> 
     <span class="item-rating-star"></span>
     <span class="item-rating-star"></span>
     <span class="item-rating-star"></span>
     <span class="item-rating-star"></span>
     <span class="item-rating-star"></span>
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
};

const init = async () => {
  const [productsData, error] = await fatchProducts();
  renderProducts(productsData, parentList);
  renderRatingFeature();
};

init();
