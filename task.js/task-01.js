const liList = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${liList.length}`);

const h2 = Array.from(liList).map((item) => item.querySelector("h2"));

h2.forEach((h2) => {
	const listItemNumber = h2.parentElement.querySelectorAll("li").length;
	console.log(`Category: ${h2.textContent} \nElements: ${listItemNumber}`);
});
