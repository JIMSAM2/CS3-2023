function isPageReloaded() {
    return performance.navigation.type === 1;
}

document.addEventListener("DOMContentLoaded", function () {
    if (isPageReloaded()) {
      window.location.href = "Home.html";
    }
});  

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