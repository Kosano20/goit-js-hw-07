
import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img  class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" loading="lazy"
  />
</a>
  </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItem);

const image = document.querySelector(".gallery__image");

gallery.addEventListener("click", imgHandlerClick);

function imgHandlerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<img src= "${event.target.dataset.source}">`
  );
  modal.show();

  document.addEventListener("keydown", presskey);

  function presskey(event) {
    if (event.key === "Escape") {
      modal.close();
    }
  }
}