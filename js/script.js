window.onload = function () {
  /* after window loads then this script runs */
  let block = this.document.getElementById("block");

  /* Pos Y */
  let posY = this.document.getElementById("pos-y");
  posY.onchange = function () {
    block.style.top = posY.value + "px";
  };
  /* Pos X */
  let posX = this.document.getElementById("pos-x");
  posX.onchange = function () {
    block.style.left = posX.value + "px";
  };
  /* Size */
  let size = this.document.getElementById("size");
  size.onchange = function () {
    block.style.transform = "scale(" + size.value + ")";
  };
  /* Opacity */
  let opacity = this.document.getElementById("opacity");
  opacity.onchange = function () {
    block.style.opacity = opacity.value;
  };
  /* Shape - using new selector */
  let selector = this.document.getElementById("shape-select");
  let okButton = this.document.getElementById("ok-shape");
  okButton.onclick = function () {
    let option = selector.value;
    if (option === "1") {
      block.style.borderRadius = "0";
      block.style.transform = "rotate(0deg)";
    } else if (option === "2") {
      block.style.borderRadius = "50%";
    } else if (option === "3") {
      block.style.borderRadius = "0";
      block.style.transform = "rotate(45deg)";
    }
  };
  /* hex */
  let hex = this.document.getElementById("hex");
  hex.onkeypress = function (e) {
    if (e.which === 13) {
      block.style.backgroundColor = "#" + hex.value;
    }
  };
  /* RGBA */
  let rgbar = this.document.getElementById("rgba-r");
  let rgbag = this.document.getElementById("rgba-g");
  let rgbab = this.document.getElementById("rgba-b");
  let rgbaa = this.document.getElementById("rgba-a");

  let rgbaCont = this.document.querySelector(".rgba-container");
  let rgbaInputs = rgbaCont.querySelectorAll("input");

  for (let i = 0; i < rgbaInputs.length; i++) {
    rgbaInputs[i].onchange = function () {
      block.style.backgroundColor =
        "rgba(" +
        rgbar.value +
        "," +
        rgbag.value +
        "," +
        rgbab.value +
        "," +
        rgbaa.value +
        ")";
    };
  }
};
