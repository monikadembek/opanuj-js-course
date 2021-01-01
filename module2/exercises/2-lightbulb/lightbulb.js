const lightToggle = document.querySelector("#light-toggle");
const bulb = document.querySelector(".bulb");

lightToggle.addEventListener("change", () => {
  bulb.classList.toggle('bulb--on');
});
