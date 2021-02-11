function setupSlider({ settingId, mainId, infoId }) {
  const settingClassList = document.getElementById(settingId).classList;
  const mainClassList = document.getElementById(mainId).classList;
  const infoClassList = document.getElementById(infoId).classList;

  function toggleInfo() {
    infoClassList.toggle("slider-slid");
    mainClassList.toggle("slider-shifted");
  }

  function toggleSettings() {
    settingClassList.toggle("slider-slid");
  }

  return { toggleInfo, toggleSettings };
}

const slider = setupSlider({ 
  settingId: "settings",
  mainId: "main",
  infoId: "info",
});
document.getElementById("openInfo")
  .addEventListener('click', slider.toggleInfo, false);
document.getElementById("closeInfo")
  .addEventListener('click', slider.toggleInfo, false);
document.getElementById("openSettings")
  .addEventListener('click', slider.toggleSettings, false);
document.getElementById("closeSettings")
  .addEventListener('click', slider.toggleSettings, false);
