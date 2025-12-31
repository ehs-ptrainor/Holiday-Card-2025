const container = document.getElementById("book-container");
const hint = document.getElementById("ui-hint");

const IMAGES = [
  "images/card-front.jpeg",
  "images/card-inside-left.jpeg",
  "images/card-inside-right.jpeg",
  "images/card-back.jpeg"
];

// Calculate dimensions based on viewport
const isMobile = window.innerWidth < 768;

const pageFlip = new St.PageFlip(container, {
  width: 1000, // base page width
  height: 1500, // base page height
  size: "stretch",
  
  // SPREAD settings
  showCover: true, 
  usePortrait: true, // IMPORTANT: Allows 1-page view on vertical screens
  
  // Style settings
  drawShadow: true,
  maxShadowOpacity: 0.2,
  flippingTime: 1000,
  
  // Interaction
  useMouseEvents: true,
  clickEventForward: false, // Prevents clicks on buttons from triggering a flip
});

pageFlip.loadFromImages(IMAGES);

// Event: Hide hint on first flip
pageFlip.on('flip', (e) => {
  hint.classList.add('fade-out');
  updateButtons(e.data);
});

// Logic to update UI
function updateButtons(index) {
  const openBtn = document.getElementById("open");
  if (index > 0) {
    openBtn.style.opacity = "0";
    openBtn.style.pointerEvents = "none";
  } else {
    openBtn.style.opacity = "1";
    openBtn.style.pointerEvents = "auto";
  }
}

// Controls
document.getElementById("open").addEventListener("click", () => pageFlip.flipNext());
document.getElementById("next").addEventListener("click", () => pageFlip.flipNext());
document.getElementById("prev").addEventListener("click", () => pageFlip.flipPrev());

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") pageFlip.flipNext();
  if (e.key === "ArrowLeft") pageFlip.flipPrev();
});

// Fix for window resizing
window.addEventListener('resize', () => {
    pageFlip.update();
});