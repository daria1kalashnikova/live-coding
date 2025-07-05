// export const renderRatingFeature = (): void => {
//   const containers =
//     document.querySelectorAll<HTMLDivElement>(".item-rating-list");
//   //[div.rating-list, div.rating-list, div.rating-list,]

//   containers.forEach((container) => {
//     const rating: number = parseFloat(container.dataset.rating ?? ""); //3.7

//     const stars =
//       container.querySelectorAll<HTMLSpanElement>(".item-rating-star");

//     stars.forEach((star, index) => {
//       const diff = rating - index; //3.7 - 3 = 0.7

//       if (diff >= 1) {
//         star.style.setProperty("--fill", "100%");
//       } else if (diff > 0) {
//         star.style.setProperty("--fill", `${Number(diff * 100).toFixed(1)}%`);
//       } else {
//         star.style.setProperty("--fill", "0%");
//       }
//     });
//   });
// };

export const newRenderRatingFeature = (
  itemSelector: string,
  rating: number
): void => {
  const starsHTML = ` <span class="item-rating-star"></span>
     <span class="item-rating-star"></span>
     <span class="item-rating-star"></span>
     <span class="item-rating-star"></span>
     <span class="item-rating-star"></span>`;

  const item = document.querySelector(itemSelector) as HTMLDListElement;
  const container = item.querySelector(".item-rating-list") as HTMLDivElement;

  container.insertAdjacentHTML("beforeend", starsHTML);

  const stars =
    container.querySelectorAll<HTMLSpanElement>(".item-rating-star");

  stars.forEach((star, index) => {
    const diff = rating - index; //3.7 - 3 = 0.7

    if (diff >= 1) {
      star.style.setProperty("--fill", "100%");
    } else if (diff > 0) {
      star.style.setProperty("--fill", `${Number(diff * 100).toFixed(1)}%`);
    } else {
      star.style.setProperty("--fill", "0%");
    }
  });
};
