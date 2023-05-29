export default () => {
  const footerBlock = document.getElementById(`footer-prizes`);
  footerBlock.addEventListener(`click`, (e)=> {
    if (e.target) {
      footerBlock.classList.add(`footer-prize`);
    }
  });
};
