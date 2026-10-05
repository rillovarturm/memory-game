import image from "./images/lazy.png";

const createImage = (src) =>
  new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });

async function render() {
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}

render();
