export const renderRatingFeature = () => {
  const containers = document.querySelectorAll(".item-rating-list");
  //[div.rating-list, div.rating-list, div.rating-list,]

  containers.forEach((container) => {
    const rating = parseFloat(container.dataset.rating); //3.7

    const stars = container.querySelectorAll(".item-rating-star");

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
  });
};
