export default () => {
  listen(`data-title`);
  function listen(nameOfData) {
    const allTitles = document.querySelectorAll(`[${nameOfData}]`);
    allTitles.forEach((title)=> {
      return changeTitle(title);
    });
  }
  function changeTitle(elems) {
    const elem = elems.firstElementChild.textContent;
    const blocks = elem.trim().split(` `);
    let results = [];
    blocks.forEach((block)=> {
      const text = block.split(``);

      const result = [...text].map((alpha, count) => {
        if ((count / 4) === 1) {
          return `<span class="extra-symbols ">${alpha}</span>`;
        }
        if ((count % 2) === 0) {
          return `<span class="farther-symbols">${alpha}</span>`;
        }
        if (Math.log2(count) % 2 === 0) {
          return `<span class="extra-symbols ">${alpha}</span>`;
        } else {
          return `<span class="closer-symbols">${alpha}</span>`;
        }
      });
      const middle = Math.floor(result.length / 2);
      result[middle] = `<span class="middle-symbols">${text[middle]}</span>`;
      results[results.length] = result.join(``);
    });
    elems.firstElementChild.textContent = ` `;
    results.forEach((item, count)=> {
      if (count === 1) {
        elems.firstElementChild.innerHTML += `<div class="symbol-effect second">${item}<div/>`;
      } else {
        elems.firstElementChild.innerHTML += `<div class="symbol-effect">${item}<div/>`;
      }
    });
  }
};
