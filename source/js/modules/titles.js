export default () => {
  listen(`data-title`);
  function listen(nameOfData) {
    const allTitles = document.querySelectorAll(`[${nameOfData}]`);
    allTitles.forEach((title)=> {
      return changeTitle(title);
    });
  }
  function changeTitle(elems) {
    const elem = elems.textContent;
    const blocks = elem.trim().split(` `);
    let results = [];
    blocks.forEach((block)=> {
      const text = block.split(``);

      const result = [...text].map((alpha) => {
        const delay = Math.floor(Math.random() * 500) + 250;
        const dur = Math.floor(Math.random() * 1300) + 1000;
        return `<span class="anim-symbols" style="--delay: ${delay}ms; --dur: ${dur}ms">${alpha}</span>`;
      });
      results[results.length] = result.join(``);
    });
    elems.textContent = ` `;
    results.forEach((item, count)=> {
      if (count === 1) {
        elems.innerHTML += `<span class="symbol-effect second">${item}<span/>`;
      } else {
        elems.innerHTML += `<span class="symbol-effect">${item}<span/>`;
      }
    });
  }
};
