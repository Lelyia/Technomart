const buyCart = document.querySelector(".button-buy");
const buyPopup = document.querySelector(".modal-info");
const buyClose = buyPopup.querySelector(".button-close");
const buyContinue = buyPopup.querySelector(".continue");
const buyOrder = buyPopup.querySelector(".buy-order");

buyCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-show");
});

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

buyContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

buyOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
