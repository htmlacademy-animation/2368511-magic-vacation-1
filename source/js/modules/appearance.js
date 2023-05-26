export default () => {
  const logo = document.querySelector(`.page-header__logo`);
  const footer = document.querySelector(`.screen__footer`);
  const nav = document.querySelector(`.page-header__nav`);
  document.body.onload = function () {
    logo.classList.add(`anim-logo`);
    footer.classList.add(`anim-footer`);
    nav.classList.add(`anim-nav`);
  };
};
