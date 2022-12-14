let imagesToLoad = document.querySelectorAll("img[data-src]");
let options = { rootMargin: '0px', threshold: 1 };


const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};


if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, options);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} 

else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}




