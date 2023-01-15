// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox"

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const generalDiv = document.querySelector(".gallery")
console.log(generalDiv)

function casePictures (galleryItems) {
    return galleryItems.map(({original,description,preview}) => {
     return `<div class="gallery__item">
     <a class="gallery__link" href="large-image.jpg">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </div`   
    }).join("");
}

const generalF = casePictures (galleryItems);
generalDiv.insertAdjacentHTML("beforeend",generalF)

// second part

generalDiv.addEventListener("click",clickOnPicture)

function clickOnPicture (evt) {
evt.preventDefault();
 if (evt.target.nodeName !== "IMG") {
    return;
 }    
 new SimpleLightbox('.gallery a', {casePictures: "alt",captioDelay: 250, });
}