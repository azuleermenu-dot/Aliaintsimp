"use strict";


// ========================================
// WAIT FOR PAGE
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  setupNavigation();

  setupMusic();

  setupTyping();

  setupMemory();

  setupFloating();

  setupTapEffects();

});


// ========================================
// PAGE NAVIGATION
// ========================================

let currentPage = 1;

let changingPage = false;

const totalPages = 5;


function setupNavigation() {

  const buttons =
    document.querySelectorAll(
      ".next-btn"
    );

  buttons.forEach(button => {

    button.addEventListener(
      "click",
      nextPage
    );

  });


  const alwaysButton =
    document.getElementById(
      "alwaysBtn"
    );

  if (alwaysButton) {

    alwaysButton.addEventListener(
      "click",
      finalReveal
    );

  }
}


function nextPage() {

  if (changingPage) {
    return;
  }

  if (currentPage >= totalPages) {
    return;
  }

  changingPage = true;


  const oldPage =
    document.getElementById(
      `page${currentPage}`
    );

  const nextNumber =
    currentPage + 1;

  const newPage =
    document.getElementById(
      `page${nextNumber}`
    );


  if (!oldPage || !newPage) {

    changingPage = false;

    return;
  }


  oldPage.classList.remove(
    "active"
  );


  setTimeout(() => {

    newPage.classList.add(
      "active"
    );

    currentPage =
      nextNumber;

    changingPage = false;


    if (currentPage === 3) {
      startTyping();
    }


    if (currentPage === 4) {
      startMemory();
    }

  }, 300);
}


// ========================================
// TYPING
// ========================================

const typingWords = [
  "It was you.",
  "Then it became us.",
  "And somehow...",
  "I never want to lose that."
];

let typingStarted = false;

let typingTimer = null;


function setupTyping() {
  // Nothing needed here.
}


function startTyping() {

  if (typingStarted) {
    return;
  }

  typingStarted = true;

  let wordIndex = 0;

  let characterIndex = 0;

  let deleting = false;


  function type() {

    const element =
      document.getElementById(
        "typingText"
      );


    if (!element) {
      return;
    }


    const word =
      typingWords[wordIndex];


    if (!deleting) {

      characterIndex++;

      element.textContent =
        word.substring(
          0,
          characterIndex
        );


      if (
        characterIndex >=
        word.length
      ) {

        deleting = true;

        typingTimer =
          setTimeout(
            type,
            1400
          );

        return;
      }


      typingTimer =
        setTimeout(
          type,
          80
        );


    } else {

      characterIndex--;

      element.textContent =
        word.substring(
          0,
          characterIndex
        );


      if (characterIndex <= 0) {

        deleting = false;

        wordIndex++;

        if (
          wordIndex >=
          typingWords.length
        ) {
          wordIndex = 0;
        }

      }


      typingTimer =
        setTimeout(
          type,
          45
        );
    }
  }


  type();
}


// ========================================
// MEMORY LOADING
// ========================================

let memoryStarted = false;

let memoryTimer = null;


function setupMemory() {
  // Starts when page 4 appears.
}


function startMemory() {

  if (memoryStarted) {
    return;
  }

  memoryStarted = true;


  const progress =
    document.getElementById(
      "progress"
    );

  const loadingText =
    document.getElementById(
      "loadingText"
    );


  if (!progress || !loadingText) {
    return;
  }


  const messages = [
    "Collecting little moments...",
    "Remembering the laughs...",
    "Saving the memories...",
    "Finding all the reasons...",
    "Almost there...",
    "Memory complete ♡"
  ];


  let percentage = 0;


  memoryTimer =
    setInterval(() => {

      percentage += 1;


      progress.style.width =
        `${percentage}%`;


      if (percentage < 20) {

        loadingText.textContent =
          messages[0];

      } else if (percentage < 40) {

        loadingText.textContent =
          messages[1];

      } else if (percentage < 60) {

        loadingText.textContent =
          messages[2];

      } else if (percentage < 80) {

        loadingText.textContent =
          messages[3];

      } else if (percentage < 100) {

        loadingText.textContent =
          messages[4];

      } else {

        loadingText.textContent =
          messages[5];


        clearInterval(
          memoryTimer
        );
      }

    }, 35);
}


// ========================================
// MUSIC
// ========================================

let bgMusic = null;

let musicButton = null;


function setupMusic() {

  bgMusic =
    document.getElementById(
      "bgMusic"
    );

  musicButton =
    document.getElementById(
      "musicBtn"
    );


  if (
    !bgMusic ||
    !musicButton
  ) {
    return;
  }


  musicButton.addEventListener(
    "click",
    toggleMusic
  );


  bgMusic.addEventListener(
    "play",
    updateMusicUI
  );


  bgMusic.addEventListener(
    "pause",
    updateMusicUI
  );


  bgMusic.addEventListener(
    "ended",
    updateMusicUI
  );
}


async function toggleMusic() {

  if (!bgMusic) {
    return;
  }


  try {

    if (bgMusic.paused) {

      await bgMusic.play();

    } else {

      bgMusic.pause();

    }

  } catch (error) {

    console.log(
      "Music could not start:",
      error
    );

    if (musicButton) {

      musicButton.textContent =
        "♫ Tap Again";

    }
  }
}


function updateMusicUI() {

  if (
    !bgMusic ||
    !musicButton
  ) {
    return;
  }


  if (!bgMusic.paused) {

    musicButton.textContent =
      "Ⅱ Pause Music";

    musicButton.classList.add(
      "playing"
    );

  } else {

    musicButton.textContent =
      "♫ Play Music";

    musicButton.classList.remove(
      "playing"
    );
  }
}


// ========================================
// FLOATING ELEMENTS
// ========================================

const floatingItems = [
  "♡",
  "♥",
  "✦",
  "✧",
  "love",
  "always",
  "you",
  "us",
  "forever",
  "∞",
  "together",
  "happy anniversary"
];


function setupFloating() {

  setInterval(
    createFloating,
    1100
  );

}


function createFloating() {

  const container =
    document.getElementById(
      "floating"
    );


  if (!container) {
    return;
  }


  const element =
    document.createElement(
      "div"
    );


  element.className =
    "float";


  const randomItem =
    floatingItems[
      Math.floor(
        Math.random() *
        floatingItems.length
      )
    ];


  element.textContent =
    randomItem;


  element.style.left =
    `${Math.random() * 100}%`;


  element.style.fontSize =
    `${Math.random() * 13 + 11}px`;


  const duration =
    Math.random() * 6 + 7;


  element.style.animationDuration =
    `${duration}s`;


  container.appendChild(
    element
  );


  setTimeout(() => {

    if (element.parentNode) {
      element.remove();
    }

  }, duration * 1000);
}


// ========================================
// TAP HEARTS
// ========================================

function setupTapEffects() {

  document.addEventListener(
    "click",
    event => {

      // Don't create tap hearts
      // when pressing buttons.

      if (
        event.target.closest(
          "button"
        )
      ) {
        return;
      }


      createTapHeart(
        event.clientX,
        event.clientY
      );

    }
  );
}


function createTapHeart(x, y) {

  const heart =
    document.createElement(
      "div"
    );


  heart.className =
    "tap-heart";


  heart.textContent =
    Math.random() > .5
      ? "♡"
      : "♥";


  heart.style.left =
    `${x}px`;

  heart.style.top =
    `${y}px`;


  document.body.appendChild(
    heart
  );


  setTimeout(() => {

    if (heart.parentNode) {
      heart.remove();
    }

  }, 900);
}


// ========================================
// FINAL REVEAL
// ========================================

function finalReveal() {

  if (changingPage) {
    return;
  }

  changingPage = true;


  const current =
    document.getElementById(
      "page5"
    );

  const final =
    document.getElementById(
      "final"
    );


  if (!current || !final) {

    changingPage = false;

    return;
  }


  current.classList.remove(
    "active"
  );


  setTimeout(() => {

    final.classList.add(
      "active"
    );

    changingPage = false;

    celebration();

  }, 500);
}


// ========================================
// FINAL CELEBRATION
// ========================================

function celebration() {

  const container =
    document.getElementById(
      "floating"
    );


  if (!container) {
    return;
  }


  const celebrationItems = [
    "♥",
    "♡",
    "✦",
    "✧",
    "❤",
    "love",
    "forever"
  ];


  for (
    let i = 0;
    i < 35;
    i++
  ) {

    setTimeout(() => {

      const element =
        document.createElement(
          "div"
        );


      element.className =
        "float";


      element.textContent =
        celebrationItems[
          Math.floor(
            Math.random() *
            celebrationItems.length
          )
        ];


      element.style.left =
        `${Math.random() * 100}%`;


      element.style.fontSize =
        `${Math.random() * 20 + 15}px`;


      element.style.color =
        "rgba(255,130,165,.85)";


      const duration =
        Math.random() * 4 + 5;


      element.style.animationDuration =
        `${duration}s`;


      container.appendChild(
        element
      );


      setTimeout(() => {

        if (element.parentNode) {
          element.remove();
        }

      }, duration * 1000);


    }, i * 100);
  }
}
