function changeMarginPresidentsIMG() {
    const screenWidth = window.innerWidth;
    let imgSizePresidents = "";
  
    if (screenWidth < 1600) {
      imgSizePresidents = "presidents-header-small";
    } else if (screenWidth == 1600) {
      imgSizePresidents = "presidents-header-medium";
    } else {
      imgSizePresidents = "presidents-header";
    }  
  
    const targetElement = document.querySelector(".presidents-header");
    targetElement.classList.add(imgSizePresidents);
  }
  
  window.addEventListener("load", changeMarginPresidentsIMG);
  window.addEventListener("resize", changeMarginPresidentsIMG);