import { splitText, elementsIntoDOM, sequentialAddClass } from './utils';

class TextAnimator {
	constructor(text) {
		this.text = text;
		this.elements = [];
	}
	split() {
		this.text = splitText(this.text);
		return this;
	}
	intoDOM(tag, className, target) {
		this.elements = elementsIntoDOM(this.text, tag, className, target);
		return this;
	}
	animate(arr) {
		sequentialAddClass(this.elements);
		return this;
	}
}

export function AnimateText(text) {
	if (!(this instanceof TextAnimator)) {
		return new TextAnimator(text);
	}
	return new TextAnimator(text);
}
