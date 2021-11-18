const imgPlaceholder = () => {
  const imgs = document.querySelectorAll(`.img_`);

  let placeHolderUrl = require("../data/imgPlaceholder.jpg").default;

  function load(src) {
    return new Promise(function (resolve, reject) {
      const image = new Image();
      image.addEventListener("load", resolve);
      image.addEventListener("error", reject);
      image.src = src;
    });
  }

  return load("http://placekitten.com/200/300")
    .then(() => {
      return true;
    })
    .catch(() => {
      imgs.forEach((img) => {
        img.style.backgroundImage = `url(${placeHolderUrl})`;
      });
    });
};

export default imgPlaceholder;
