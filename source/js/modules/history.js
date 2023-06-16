export default ()=> {
  const prev = document.querySelector(`.slider__control--prev`);
  const next = document.querySelector(`.slider__control--next`);
  let count = 1;
  prev.addEventListener(`click`, (e)=> {
    if (e.target) {
      count = count - 1;
      return currentSlide(count);
    }
  });
  next.addEventListener(`click`, (e)=> {
    if (e.target) {
      count = count + 1;
      return currentSlide(count);
    }
  });


  function currentSlide(page) {
    const menuColors = document.body;
    if (page === 2) {
      return menuColors.classList.toggle(`history-sliders-color-two`);
    }
    if (page === 3) {
      return menuColors.classList.toggle(`history-sliders-color-three`);
    }
    if (page === 4) {
      return menuColors.classList.toggle(`history-sliders-color-four`);
    }
  }
};
