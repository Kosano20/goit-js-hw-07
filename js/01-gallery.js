import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryCreated = createGallery(galleryItems);
const galleryLink = document.querySelectorAll(".gallery__link");
gallery.insertAdjacentHTML("beforeend", galleryCreated);
gallery.addEventListener("click", galleryClick);

  gallery.addEventListener("click", (event) => {
    event.preventDefault();
  });

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      gallery.insertAdjacentHTML(
        "beforeend",
        `<div class = "gallery__item"><a class="gallery__link" href=${original}><img class = "gallery__image"src = ${preview} data-source=${original} alt = "${description}"></a></div> `
      );
    })
    .join("");
}
function galleryClick(event) {
  const galleryPic = event.target;
  const orgPicture = galleryPic.dataset.source;
  if (!galleryPic.classList.contains("gallery__image")) {
    return;
  }

  basicLightbox
    .create(
      `
    <img src= ${orgPicture} alt =${galleryPic.getAttribute("alt")} >
`
    )
    .show();
}