export function splitText(text) {
	return text.split('');
}

export function createElement(tag = 'span') {
	return document.createElement(tag);
}

export function insertIntoDOM(element = createElement(), target = document.body) {
	target.appendChild(element);
}

export function setTextContent(element = createElement(), text = '') {
	element.textContent = text;
	return element;
}

export function addClass(element, className = 'text-animator') {
	element.classList.add(className);
	return element;
}

export function createArrayOfElements(arr = [], tag, className) {
	return arr.map(text => setTextContent(addClass(createElement(tag), className), text));
}

export function elementsIntoDOM(arr, tag, className, target) {
	return createArrayOfElements(arr, tag, className).map(element => {
		insertIntoDOM(element, target);
		return element;
	});
}

export function sequentialAddClass(arr) {
	let timeOutVal = 0;
	arr.forEach(el => {
		timeOutVal = timeOutVal + 1000;
		setTimeout(() => {
			addClass(el, 'show');
		}, timeOutVal);
	});
}
