const inputItem = document.querySelector('#name-input');
const outputItem = document.querySelector('#name-output');

const inputHandle = () => {
	if (inputItem.value.length > 0) {
		outputItem.textContent = inputItem.value;
	} else {
		outputItem.textContent = 'Anonymous';
	}
}
inputItem.addEventListener('input', inputHandle);

