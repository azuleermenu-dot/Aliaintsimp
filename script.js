const startBtn = document.getElementById("startBtn");
const story = document.getElementById("story");
const finalSection = document.getElementById("final");

const cards = document.querySelectorAll(".card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressBar = document.getElementById("progressBar");
const replayBtn = document.getElementById("replayBtn");

let currentCard = 0;

/* Start */

startBtn.addEventListener("click", () => {
  document.querySelector(".hero").style.display = "none";
  story.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  showCard(0);
});

/* Show card */

function showCard(index) {

  cards.forEach(card => {
    card.classList.remove("active");
  });

  cards[index].classList.add("active");

  const progress = ((index + 1) / cards.length) * 100;
  progressBar.style.width = progress + "%";

  prevBtn.style.visibility =
    index === 0 ? "hidden" : "visible";

  if (index === cards.length - 1) {
    nextBtn.textContent = "Finish ❤️";
  } else {
    nextBtn.textContent = "Next →";
  }

  window.scrollTo({
    top: story.offsetTop,
    behavior: "smooth"
  });
}

/* Next */

nextBtn.addEventListener("click", () => {

  if (currentCard < cards.length - 1) {

    currentCard++;

    showCard(currentCard);

  } else {

    story.style.display = "none";
    finalSection.style.display = "grid";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

});

/* Previous */

prevBtn.addEventListener("click", () => {

  if (currentCard > 0) {

    currentCard--;

    showCard(currentCard);

  }

});

/* Replay */

replayBtn.addEventListener("click", () => {

  currentCard = 0;

  finalSection.style.display = "none";
  story.style.display = "block";

  showCard(0);

});

/* Floating hearts */

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize =
    Math.random() * 15 + 12 + "px";

  heart.style.animationDuration =
    Math.random() * 5 + 5 + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 700);
