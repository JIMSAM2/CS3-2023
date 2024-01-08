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
