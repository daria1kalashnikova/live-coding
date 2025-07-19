import { ProductsApiResponse, ProductsGetAllResponse } from "./api";
import { productsService } from "./api";
import { AppComponent } from "./App.component";
import { newRenderRatingFeature } from "./star-script";

const parentList = document.querySelector(".parent-list") as HTMLUListElement;

const fatchProducts = (): Promise<ProductsGetAllResponse> => {
  return productsService.getAll();
};

const renderProducts = (
  data: ProductsApiResponse,
  container: HTMLUListElement
) => {
  const productsHTML = data.products.map(
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
};

export const init = async (parent:HTMLUListElement) => {
  const [productsData, error] = await fatchProducts();
  if (error != null && productsData === null) {
    return;
  }
  renderProducts(productsData, parent);

  // productsData.products.forEach((product) => {
  //   newRenderRatingFeature(`[data-item-id="${product.id}"]`, product.rating);
  // });
};

const rootDiv = document.querySelector(
  "#root"
) as HTMLDivElement;
rootDiv.textContent = '';

const appComponent = AppComponent();
rootDiv.append(appComponent.element);
