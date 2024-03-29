const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");
const mainThumbnail = document.querySelector(".thumbnails .main-thumbnail");
const mainThumbnailLightBox = document.querySelector(
  ".lightbox-container .main-thumbnail"
);
const images = document.querySelectorAll(".thumbnail .preview img");
const thumbnails = document.querySelectorAll(".lightbox .preview img");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const nextImg = document.querySelector(".next");
const prevImg = document.querySelector(".previous");
const slider = document.querySelector(".mobile-thumb");
const thumbMob = document.querySelector(".thumb-mob");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrp");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const addBtn = document.querySelector(".add_btn");
const indicator = document.querySelector(".indicator");
const wrp = document.querySelector(".cart-content");
let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";
function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
}
function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}
function handlePlus() {
  amountValue++;
  amount.innerText = amountValue;
}
function handleMinus() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
}
function nextImage() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
  mainThumbnailLightBox.src = `./images/image-product-${currentImg}.jpg`;
  updateThumbnail();
}

function prevImage() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }

  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
  mainThumbnailLightBox.src = `./images/image-product-${currentImg}.jpg`;
  updateThumbnail();
}
function updateThumbnail() {
  thumbnails.forEach((thumbnail, index) => {
    if (index + 1 === currentImg) {
      thumbnail.classList.add("selected");
    } else {
      thumbnail.classList.remove("selected");
    }
  });
}
function toggleCart() {
  cart.classList.toggle("invisible");
}
function closeLightBox() {
  lightbox.classList.add("invisible");
}
function openLightBox() {
  lightbox.classList.remove("invisible");
}
function addItem() {
  if (amountValue > 0) {
    const total = 125.0 * amountValue;
    wrp.classList.remove("empty");
    wrp.innerHTML = `<div class="product">
                    <div>
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                       <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                  </div>`;
    indicator.style.display = "block";
    indicator.innerText = amountValue;
  }
}
function deleteItem() {
  wrp.classList.add("empty");
  wrp.innerHTML = `<p>Your cart is empty</p>`;
  indicator.style.display = "none";
}

function updateThumbnails(src, target) {
  switch (src) {
    case "./images/image-product-1-thumbnail.jpg":
      target.src = "./images/image-product-1.jpg";
      break;
    case "./images/image-product-2-thumbnail.jpg":
      target.src = "./images/image-product-2.jpg";
      break;
    case "./images/image-product-3-thumbnail.jpg":
      target.src = "./images/image-product-3.jpg";
      break;
    case "./images/image-product-4-thumbnail.jpg":
      target.src = "./images/image-product-4.jpg";
      break;
  }
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const lastImg = document.querySelector(".preview img.selected");
    if (lastImg) {
      lastImg.classList.remove("selected");
    }
    image.classList.add("selected");
    updateThumbnails(image.getAttribute("src"), mainThumbnail);
  });
});

thumbnails.forEach((image) => {
  image.addEventListener("click", () => {
    const lastImg = document.querySelector(".lightbox .preview img.selected");
    if (lastImg) {
      lastImg.classList.remove("selected");
    }
    image.classList.add("selected");
    updateThumbnails(image.getAttribute("src"), mainThumbnailLightBox);
  });
});

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
nextImg.addEventListener("click", nextImage);
prevImg.addEventListener("click", prevImage);
cartBtn.addEventListener("click", toggleCart);
closeLightboxBtn.addEventListener("click", closeLightBox);
mainThumbnail.addEventListener("click", openLightBox);
addBtn.addEventListener("click", addItem);
