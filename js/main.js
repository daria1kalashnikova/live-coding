import { productsService } from "./api.js";
const parentList = document.querySelector(".parent-list");

const fatchProducts = () => {
  return productsService.getAll();
};

const renderProducts = (data) => {
  return data.products.map(
    (el) =>
      `<li class="list-item">
        <img src="${el.thumbnail}" alt="${el.title}" />
        <h3 class="item-title">${el.title}</h3>
        <p class="item-description">${el.description}</p>
        <span class="item-rating">${el.rating}</span>
        <p class="item-price">${el.price}</p>
      </li>
    `
  );
};

const init = async () => {
  const [productsData, error] = await fatchProducts();
  const productsHTML = renderProducts(productsData);
  parentList.insertAdjacentHTML("beforeend", productsHTML.join(""));
};

init();
