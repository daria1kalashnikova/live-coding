import { Product } from "../../model/types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const cardEl: HTMLLIElement = document.createElement("li");

  render(cardEl, product);

  return { element: cardEl };
};

function render(container: HTMLLIElement, product: Product) {
  container.textContent = "";

  container.setAttribute("data-item-id", String(product.id));

  const itemRatingContainerEl = document.createElement("div");
  const itemRatingValue = document.createElement("p");
  itemRatingValue.textContent = product.rating.toString();
  const itemRatingList = document.createElement("div");

  itemRatingList.setAttribute("data-rating", String(product.rating));

  const itemImg = document.createElement("img");
  const itemTitle = document.createElement("h3");
  itemTitle.textContent = product.title;
  const itemDescription = document.createElement("p");
  itemDescription.textContent = product.description;
  const itemPrice = document.createElement("p");
  itemPrice.textContent = product.price + "euro";

  itemRatingContainerEl.classList.add("item-rating-container");
  itemRatingValue.classList.add("item-rating-value");
  itemRatingList.classList.add("item-rating-list");
  itemImg.classList.add("item-image");
  itemImg.src = product.thumbnail;
  itemImg.alt = product.title;

  itemTitle.classList.add("item-title");
  itemDescription.classList.add("item-description");
  itemPrice.classList.add("item-price");

  itemRatingContainerEl.append(itemRatingValue);
  itemRatingContainerEl.append(itemRatingList);

  container.append(
    itemRatingContainerEl,
    itemImg,
    itemTitle,
    itemDescription,
    itemPrice
  );
}
