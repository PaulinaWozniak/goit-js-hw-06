const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

let span = document.querySelector("#value");
let counterValue = parseInt(document.querySelector("#value").textContent);
console.log(counterValue);

const decrease = () => {
	counterValue -= 1;
	span.innerHTML = `<span id="value">${counterValue}</span>`;
};

const increase = () => {
	counterValue += 1;
	span.innerHTML = `<span id="value">${counterValue}</span>`;
};

btnDec.addEventListener("click", decrease);
btnInc.addEventListener("click", increase);
