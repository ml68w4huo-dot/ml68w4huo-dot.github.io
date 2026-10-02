const input = document.querySelector('input');
let inputValue = '';

if (input) {
	inputValue = input.value;

	input.addEventListener('input', () => {
		inputValue = input.value;
		console.log(inputValue);
	});
}
