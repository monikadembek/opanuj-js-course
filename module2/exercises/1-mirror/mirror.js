const textInput = document.querySelector(".text-input");
const mirror = document.querySelector(".mirror");

textInput.addEventListener("keyup", event => {
  const val = event.target.value;
  mirror.innerText = [...val].reverse().join('');
});