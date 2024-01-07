function changeFontSize() {
    const screenWidth = window.innerWidth;
    let fontSizeClass = "";

    if (screenWidth < 1600) {
      fontSizeClass = "small-font";
    } else if (screenWidth == 1600) {
      fontSizeClass = "medium-font";
    } else {
      fontSizeClass = "large-font";
    }  

    const targetElement = document.querySelector(".intro-msg");
    targetElement.classList.add(fontSizeClass);
}

window.addEventListener("load", changeFontSize);
window.addEventListener("resize", changeFontSize);

function changeImgSize() {
  const screenWidth = window.innerWidth;
  let imgSize = "";

  if (screenWidth < 1600) {
    imgSize = "small-img";
  } else if (screenWidth == 1600) {
    imgSize = "medium-img";
  } else {
    imgSize = "large-img";
  }  

  const targetElement = document.querySelector(".home-img");
  targetElement.classList.add(imgSize);
}

window.addEventListener("load", changeImgSize);
window.addEventListener("resize", changeImgSize);

function changeIntroSize() {
  const screenWidth = window.innerWidth;
  let introSize = "";

  if (screenWidth < 1600) {
    introSize = "small-intro";
  } else if (screenWidth == 1600) {
    introSize = "medium-intro";
  } else {
    introSize = "large-intro";
  }  

  const targetElement = document.querySelector(".welcome-message");
  targetElement.classList.add(introSize);
}

window.addEventListener("load", changeIntroSize);
window.addEventListener("resize", changeIntroSize);

function changeMargin() {
  const screenWidth = window.innerWidth;
  let margin = "";

  if (screenWidth < 1600) {
    margin = "footer-links-small";
  } else if (screenWidth == 1600) {
    margin = "footer-links-medium";
  } else {
    margin = "footer-links";
  }  

  const targetElement = document.querySelector(".footer-links");
  targetElement.classList.add(margin);
}

window.addEventListener("load", changeMargin);
window.addEventListener("resize", changeMargin);

function changeFBMargin() {
  const screenWidth = window.innerWidth;
  let marginFB = "";

  if (screenWidth < 1600) {
    marginFB = "facebook-small";
  } else if (screenWidth == 1600) {
    marginFB = "facebook-medium";
  } else {
    marginFB = "facebook";
  }  

  const targetElement = document.querySelector(".facebook");
  targetElement.classList.add(marginFB);
}

window.addEventListener("load", changeFBMargin);
window.addEventListener("resize", changeFBMargin);