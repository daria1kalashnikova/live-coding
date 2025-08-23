import { ProductsList } from "../../../widgets/product-list/ui/ProductsList.component.js";
import { fetchProducts } from "../../../entities/product/api/fetchProducts.js";
import { setProductItems } from "../../../app/store/state.js";
import { ClearProductButton } from "../../../features/clear-products/ui/ClearProductButton.component.js";
import { FilterBySearch } from "../../../features/filter-by-search/ui/FilterBySearch.component.js";

export const AppComponent = () => {
  const appElement: HTMLDivElement = document.createElement("div");

  fetchProducts().then(([productsData, error]) => {

    console.log(productsData);

    if (productsData !== null) setProductItems(productsData.products);
  });
  render(appElement);

  return { element: appElement };
};

const render = (containerElement: HTMLDivElement) => {
  containerElement.textContent = "";

  const productListComponent = ProductsList();
  const input = FilterBySearch();
   const button = ClearProductButton();
  
  containerElement.append(input.element);

  containerElement.append(button.element);

  containerElement.append(productListComponent.element);

  
};

// const SomeComponent = (props) => return {
// element: HTMLElement,
// }
