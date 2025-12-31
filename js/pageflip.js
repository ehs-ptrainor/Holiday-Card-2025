const container = document.getElementById("book-container");

// Your page files (relative to index.html)
const IMAGES = [
  "images/card-front.jpeg",
  "images/card-inside-left.jpeg",
  "images/card-inside-right.jpeg",
  "images/card-back.jpeg"
];

// Engine geometry: OPEN spread is 2000x1500 (two 1000x1500 pages)
const pageFlip = new St.PageFlip(container, {
  width: 1000,
  height: 1500,
  size: "stretch",
  showCover: true,
  maxShadowOpacity: 0.25,
  flippingTime: 700,
  mobileScrollSupport: false,

  // IMPORTANT: enable normal interaction (soft-page version)
  useMouseEvents: true
});

// Load in IMAGE mode (soft pages, stable)
pageFlip.loadFromImages(IMAGES);

// Controls
document.getElementById("open").addEventListener("click", (e) => {
  e.stopPropagation();
  if (pageFlip.getCurrentPageIndex() === 0) pageFlip.flipNext();
});

document.getElementById("next").addEventListener("click", (e) => {
  e.stopPropagation();
  pageFlip.flipNext();
});

document.getElementById("prev").addEventListener("click", (e) => {
  e.stopPropagation();
  pageFlip.flipPrev();
});

// Optional keyboard nav
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") pageFlip.flipNext();
  if (e.key === "ArrowLeft") pageFlip.flipPrev();
});
