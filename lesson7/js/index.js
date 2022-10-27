 // Gather images to load
 let imagestoload = document.querySelectorAll("img[data-src]");

 // Load images swithces the src with data src
 const loadimages = (image) => {

     image.setAttribute("src", image.getAttribute("data-src"));
     image.onload = () => {
         image.removeAttribute("data-src");
     };
 };


 // Load all images
 imagesToLoad.forEach(img) => {
     loadImages.(img);
 }