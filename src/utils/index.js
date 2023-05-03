import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}

export const estimateReadingTime = (string) => {
	const wordsPerMinute = 200;
	let result;

	let stringMergeArray = [];
	string.map((item, index) => {
		if (item._type === "block") {
			stringMergeArray.push(item.children[0].text);
		}
		return null;
	});
	const stringMerge = stringMergeArray.join("");

	let textLength = stringMerge.split(" ").length;
	if (textLength > 0) {
		let value = Math.ceil(textLength / wordsPerMinute);
		result = `~${value} min read`;
	}
	return result;
};

export function getUUID() {
	// eslint gets funny about bitwise
	/* eslint-disable */
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const piece = (Math.random() * 16) | 0;
		const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
		return elem.toString(16);
	});
	/* eslint-enable */
}
