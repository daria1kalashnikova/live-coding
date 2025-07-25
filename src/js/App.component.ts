import { ProductsList } from "./components/ProductsList.component";
import { fetchProducts } from "./helpers/fetchProducts";
import { setProductItems } from "./store/state";



export const AppComponent = () => {
  const appElement: HTMLDivElement = document.createElement("div");

  fetchProducts().then(([productsData, error]) => {
    if (productsData !== null) setProductItems(productsData.products);
  });
  render(appElement);

  return { element: appElement };
};

const render = (containerElement: HTMLDivElement) => {
  containerElement.textContent = "";

  const productListComponent = ProductsList();

    containerElement.append(productListComponent.element);

    const button = document.createElement('button');
    button.textContent = "clear products";
    button.onclick = () => {
        setProductItems([])
    }

    containerElement.append(button)
};

// const SomeComponent = (props) => return {
// element: HTMLElement,
// }
