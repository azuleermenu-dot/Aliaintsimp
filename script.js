// ========================================
// ANNIVERSARY WEBSITE JAVASCRIPT
// ========================================


// ========================================
// PAGE NAVIGATION
// ========================================

let currentPage = 1;

const totalPages = 5;

function nextPage() {

  if (currentPage >= totalPages) {
    return;
  }

  const oldPage =
    document.getElementById(
      `page${currentPage}`
    );

  const newPage =
    document.getElementById(
      `page${currentPage + 1}`
    );

  oldPage.classList.remove("active");

  currentPage++;

  setTimeout(() => {
    newPage.classList.add("active");
  }, 250);


  // Start typing when page 3 opens
  if (currentPage === 3) {
    startTyping();
  }


  // Start memory loading
  if (currentPage === 4) {
    startLoading();
  }
}


// ========================================
// TYPING ANIMATION
// ========================================

const words = [
  "It was you.",
  "Then it became us.",
  "And somehow...",
  "I never want to lose that."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function startTyping() {

  wordIndex = 0;
  charIndex = 0;
  deleting = false;

  typeWriter();
}


function typeWriter() {

  const element =
    document.getElementById(
      "typingText"
    );

  if (!element) {
    return;
  }

  const word =
    words[wordIndex];


  if (!deleting) {

    element.textContent =
      word.substring(
        0,
        charIndex + 1
      );

    charIndex++;

    if (charIndex >= word.length) {

      deleting = true;

      setTimeout(
        typeWriter,
        1300
      );

      return;
    }

  } else {

    element.textContent =
      word.substring(
        0,
        charIndex - 1
      );

    charIndex--;

    if (charIndex <= 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }


  setTimeout(
    typeWriter,
    deleting ? 45 : 85
  );
}


// ========================================
// MEMORY LOADING
// ========================================

let loadingStarted = false;

function startLoading() {

  if (loadingStarted) {
    return;
  }

  loadingStarted = true;

  const progress =
    document.getElementById(
      "progress"
    );

  const text =
    document.getElementById(
      "loadingText"
    );

  let value = 0;


  const messages = [
    "Collecting little moments...",
    "Remembering the laughs...",
    "Saving the memories...",
    "Finding all the reasons...",
    "Almost there...",
    "Memory complete ♡"
  ];


  const interval =
    setInterval(() => {

      value++;

      progress.style.width =
        value + "%";


      if (value < 20) {

        text.textContent =
          messages[0];

      } else if (value < 40) {

        text.textContent =
          messages[1];

      } else if (value < 60) {

        text.textContent =
          messages[2];

      } else if (value < 80) {

        text.textContent =
          messages[3];

      } else if (value < 100) {

        text.textContent =
          messages[4];

      } else {

        text.textContent =
          messages[5];

        clearInterval(interval);
      }

    }, 35);
}


// ========================================
// MUSIC PLAYER
// ========================================

const bgMusic =
  document.getElementById(
    "bgMusic"
  );

const musicBtn =
  document.getElementById(
    "musicBtn"
  );

let musicPlaying = false;


function toggleMusic() {

  if (!bgMusic) {
    return;
  }


  if (!musicPlaying) {

    bgMusic.play()
      .then(() => {

        musicPlaying = true;

        updateMusicButton();

      })
      .catch(() => {

        musicBtn.textContent =
          "♫ Tap Again";

      });

  } else {

    bgMusic.pause();

    musicPlaying = false;

    updateMusicButton();
  }
}


function updateMusicButton() {

  if (musicPlaying) {

    musicBtn.innerHTML =
      "Ⅱ Pause Music";

    musicBtn.classList.add(
      "playing"
    );

  } else {

    musicBtn.innerHTML =
      "♫ Play Music";

    musicBtn.classList.remove(
      "playing"
    );
  }
}


bgMusic.addEventListener(
  "play",
  () => {

    musicPlaying = true;

    updateMusicButton();

  }
);


bgMusic.addEventListener(
  "pause",
  () => {

    musicPlaying = false;

    updateMusicButton();

  }
);


// ========================================
// FINAL REVEAL
// ========================================

function finalReveal() {

  const current =
    document.getElementById(
      "page5"
    );

  const final =
    document.getElementById(
      "final"
    );


  current.classList.remove(
    "active"
  );


  setTimeout(() => {

    final.classList.add(
      "active"
    );

    celebration();

  }, 400);
}


// ========================================
// FLOATING WORDS
// ========================================

const floatingWords = [
  "love",
  "always",
  "you",
  "us",
  "♡",
  "forever",
  "memories",
  "together",
  "∞",
  "my favorite",
  "hehe",
  "♡",
  "always you",
  "happy anniversary"
];


function createFloating() {

  const container =
    document.getElementById(
      "floating"
    );

  const item =
    document.createElement(
      "div"
    );

  item.className =
    "float";


  item.textContent =
    floatingWords[
      Math.floor(
        Math.random() *
        floatingWords.length
      )
    ];


  item.style.left =
    Math.random() * 100 + "%";


  item.style.fontSize =
    (Math.random() * 14 + 11)
    + "px";


  const duration =
    Math.random() * 7 + 7;


  item.style.animationDuration =
    duration + "s";


  container.appendChild(
    item
  );


  setTimeout(() => {

    item.remove();

  }, duration * 1000);
}


setInterval(
  createFloating,
  500
);


// ========================================
// FINAL CELEBRATION
// ========================================

function celebration() {

  for (
    let i = 0;
    i < 50;
    i++
  ) {

    setTimeout(() => {

      const container =
        document.getElementById(
          "floating"
        );


      const item =
        document.createElement(
          "div"
        );


      item.className =
        "float";


      item.textContent =
        [
          "♥",
          "♡",
          "✦",
          "✧",
          "❤"
        ][
          Math.floor(
            Math.random() * 5
          )
        ];


      item.style.left =
        Math.random() * 100 + "%";


      item.style.fontSize =
        (Math.random() * 25 + 15)
        + "px";


      item.style.color =
        "rgba(255,130,165,.8)";


      const duration =
        Math.random() * 4 + 4;


      item.style.animationDuration =
        duration + "s";


      container.appendChild(
        item
      );


      setTimeout(() => {

        item.remove();

      }, duration * 1000);


    }, i * 80);
  }
}


// ========================================
// TAP HEART EFFECT
// ========================================

document.addEventListener(
  "click",
  (event) => {

    if (
      event.target.tagName ===
      "BUTTON"
    ) {
      return;
    }


    const heart =
      document.createElement(
        "div"
      );


    heart.textContent =
      "♡";


    heart.style.position =
      "fixed";

    heart.style.left =
      event.clientX + "px";

    heart.style.top =
      event.clientY + "px";

    heart.style.pointerEvents =
      "none";

    heart.style.zIndex =
      "100";

    heart.style.color =
      "#ff80a6";

    heart.style.fontSize =
      "25px";

    heart.style.animation =
      "tapHeart 1s ease forwards";


    document.body.appendChild(
      heart
    );


    setTimeout(() => {

      heart.remove();

    }, 1000);
  }
);


// ========================================
// TAP HEART CSS
// ========================================

const style =
  document.createElement(
    "style"
  );


style.textContent = `

@keyframes tapHeart {

  0% {
    transform:
      translate(-50%, -50%)
      scale(.5);

    opacity: 1;
  }

  100% {
    transform:
      translate(-50%, -100px)
      scale(1.5);

    opacity: 0;
  }

}

`;


document.head.appendChild(
  style
);
