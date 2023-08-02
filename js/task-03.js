const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// Znajdujemy listę galerii
const galleryList = document.querySelector(".gallery");

// Tworzymy HTML za pomocą template strings
const galleryImg = images
  .map(
    (image) => `
<li>
    <img src="${image.url}" alt="${image.alt}">
</li>
`
  )
  .join("");
  
// Wstawiamy utworzony kod HTML do listy galerii
galleryList.insertAdjacentHTML("afterend", galleryImg);


const galleryImages = document.querySelectorAll("img");
galleryImages.forEach((e) => {
  e.style.width = "40vw";
  e.style.height = "auto";
});

// galleryList.style.display = "flex";
// galleryList.style.gap = "30px";
// galleryList.style.justifyContent = "center";


