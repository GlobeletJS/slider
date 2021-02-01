function setupInfoSlider({ infoId, mainId }) {
  const infoClassList = document.getElementById(infoId).classList;
  const mainClassList = document.getElementById(mainId).classList;

  return function() {
    infoClassList.toggle("slider-slid");
    mainClassList.toggle("slider-shifted");
  };
}

const infoSlider = setupInfoSlider({ infoId: "info", mainId: "main" });
document.getElementById("slide").addEventListener('click', infoSlider, false);
