const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const galleryImages = document.querySelectorAll(".gallery-img");

let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        fullImg.src = image.src;
        fullImgBox.style.display = "flex";
        currentIndex = index;
    });
});

closeBtn.addEventListener("click", () => {
    fullImgBox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    fullImg.src = galleryImages[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    fullImg.src = galleryImages[currentIndex].src;
});