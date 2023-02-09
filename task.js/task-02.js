const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
console.log("------------");

const ulList = document.querySelector("#ingredients");
console.log(ulList);

const secondList = ingredients.forEach((ingredient) => {
	let ingredientList = document.createElement("li");
	ingredientList.textContent = ingredient;
	ingredientList.classList.add("item");
	ulList.append(ingredientList);
});
