const slider = document.getElementById("slider");

const sliderValue = document.getElementById("slider-value");

const box = document.getElementById("box");

sliderValue.innerHTML = slider.value;

slider.oninput = function slide() {
  sliderValue.innerHTML = slider.value;
};

slider.addEventListener("mousemove", function () {
  let x = slider.value;

  box.style.left = `${x}px`;
});
