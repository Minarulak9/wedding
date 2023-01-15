const bgOne = document.querySelector(".bg.img1");
const bgTwo = document.querySelector(".bg.img2");
let one = 1;
setInterval(() => {
  if (one == 1) {
    bgOne.style.opacity = 0;
    bgTwo.style.opacity = 1;
    one = 0;
  } else {
    bgOne.style.opacity = 1;
    bgTwo.style.opacity = 0;
    one = 1;
  }
}, 6000);
