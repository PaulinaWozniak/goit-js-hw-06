const inputControled = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = inputControled.value + 'px';

const textResizing = () => {
    spanText.style.fontSize = `${inputControled.value}px`;
}

inputControled.addEventListener("input", textResizing);
