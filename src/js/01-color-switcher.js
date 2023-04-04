function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;

ref.startBtn.addEventListener('click', onStartBtnClick);
ref.stopBtn.addEventListener('click', onStopBtnClick);

ref.stopBtn.disabled = true;

function onStartBtnClick(evt) {
   timerId = setInterval(() => {
       ref.body.style.backgroundColor = getRandomHexColor();
       ref.startBtn.disabled = true;
       ref.stopBtn.disabled = false;
   }, 1000);
};

function onStopBtnClick(evt) {
    clearInterval(timerId);
    ref.startBtn.disabled = false;
    ref.stopBtn.disabled = true;
}
