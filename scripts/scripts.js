const popupWindow = document.querySelector(".popup-window");

const closePopupBtn = document.querySelector(".popup-window__popup-close-btn");

const togglePopupBtns = document.querySelectorAll(".goods-list");

function showPopup() {
  document.body.style.overflow = "hidden";
  popupWindow.classList.remove("popup-window--hidden");
}

function hidePopup() {
  document.body.style.overflow = "initial";
  popupWindow.classList.add("popup-window--hidden");
}

togglePopupBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopup();
  });
});

closePopupBtn.addEventListener("click", hidePopup);
