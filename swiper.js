let sliders = document.querySelectorAll(".swip-Container"); 
sliders.forEach((slider) => {
    let isMove = false;
    let startX = 0;
    let scroll_L = 0;
  
    slider.addEventListener("mousedown", (e) => {
      isMove = true;
      e.preventDefault(); // Prevent text selection
      startX = e.pageX;
      scroll_L = slider.scrollLeft;
    });
  
    slider.addEventListener("mousemove", (e) => {
      if (!isMove) return;
      let moveX = e.pageX - startX;
      slider.scrollLeft = (scroll_L - moveX);
    });
  
    slider.addEventListener("mouseleave", () => {
      isMove = false;
    });
  
    slider.addEventListener("mouseup", () => {
      isMove = false;
    });
});


