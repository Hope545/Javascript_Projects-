"use strict";
const fileInput = document.querySelector(".file-input"),
  chooseImgBtn = document.querySelector(".choose-img"),
  previewImage = document.querySelector(".preview-img img"),
  filterOptions = document.querySelectorAll(".filter button"),
  rotateOptions = document.querySelectorAll(".rotate button"),
  filterName = document.querySelector(".filter-info .name"),
  filterSlider = document.querySelector(".slider input"),
  filterValueDisplay = document.querySelector(".filter-info .value"),
  resetFilterBtn = document.querySelector(".reset-filter"),
  saveImageBtn = document.querySelector(".save-img");

let brightness = 100,
  saturation = 100,
  grayscale = 0,
  inversion = 0;

let rotate = 0,
  flipHorizontal = 1,
  flipVertical = 1;

const applyFilter = () => {
  previewImage.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
  previewImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
};

chooseImgBtn.addEventListener("click", () => fileInput.click());

const loadImage = () => {
  let file = fileInput.files[0]; // getting the file location of the image
  if (!file) return; // preventing undefined situation if the file is cancelled
  previewImage.src = URL.createObjectURL(file); // displaying the file in the application
  previewImage.addEventListener("load", () => {
    resetFilterBtn.click();
    document.querySelector(".container").classList.remove("disable");
  });
  console.log(file);
};
fileInput.addEventListener("change", loadImage);

filterOptions.forEach((option) => {
  // adding event listeners to the filter buttons
  option.addEventListener("click", () => {
    document.querySelector(".filter .active").classList.remove("active");
    option.classList.add("active");
    filterName.textContent = option.textContent;

    if (option.id === "brightness") {
      filterSlider.max = "200";
      filterSlider.value = brightness;
      filterValueDisplay.textContent = `${brightness}%`;
    } else if (option.id === "saturation") {
      filterSlider.max = "200";
      filterSlider.value = saturation;
      filterValueDisplay.textContent = `${saturation}%`;
    } else if (option.id === "inversion") {
      filterSlider.max = "100";
      filterSlider.value = inversion;
      filterValueDisplay.textContent = `${inversion}%`;
    } else {
      filterSlider.max = "100";
      filterSlider.value = grayscale;
      filterValueDisplay.textContent = `${grayscale}%`;
    }
  });
});

const updateFilter = () => {
  console.log(filterSlider.value);
  filterValueDisplay.textContent = `${filterSlider.value}%`;

  const selectedFilter = document.querySelector(".filter .active"); // getting the selected filter btn
  if (selectedFilter.id === "brightness") {
    brightness = filterSlider.value;
  } else if (selectedFilter.id === "saturation") {
    saturation = filterSlider.value;
  } else if (selectedFilter.id === "inversion") {
    inversion = filterSlider.value;
  } else {
    grayscale = filterSlider.value;
  }

  // apply filter to img
  applyFilter();
};
filterSlider.addEventListener("input", updateFilter);

rotateOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.id === "left") {
      rotate -= 90;
    } else if (option.id === "right") {
      rotate += 90;
    } else if (option.id === "horizontal") {
      flipHorizontal = flipHorizontal === 1 ? -1 : 1;
    } else {
      flipVertical = flipVertical === 1 ? -1 : 1;
    }

    applyFilter();
  });
});

const resetFilter = () => {
  brightness = 100;
  saturation = 100;
  grayscale = 0;
  inversion = 0;
  rotate = 0;
  flipHorizontal = 1;
  flipVertical = 1;
  filterOptions[0].click();
  applyFilter();
};

resetFilterBtn.addEventListener("click", resetFilter);

const saveImage = () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = previewImage.naturalWidth;
  canvas.height = previewImage.naturalHeight;

  context.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
  context.translate(canvas.width / 2, canvas.height / 2);
  context.scale(flipHorizontal, flipVertical);
  if (rotate !== 0) {
    context.rotate((rotate * Math.PI) / 180);
  }
  context.drawImage(
    previewImage,
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );

  const link = document.createElement("a");
  link.download = "image.jpg";
  link.href = canvas.toDataURL();
  link.click();
};

saveImageBtn.addEventListener("click", saveImage);
