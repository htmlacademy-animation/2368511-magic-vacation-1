export default () => {
  const link = document.querySelector(`[data-href="prizes"]`);
  link.addEventListener(`click`, (e)=> {
    e.preventDefault();
    const page = document.getElementsByClassName(`screen--story`);
    page[0].classList.add(`fill-fon`);

    setTimeout(function () {
      window.location.href = (`#prizes`);
      page[0].classList.remove(`fill-fon`);
    }, 400);
  });
};
