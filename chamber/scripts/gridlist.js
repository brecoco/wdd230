


const btngrid = document.querySelector("#grid");
const btnlist = document.querySelector("#list");
const typeDisplay = document.querySelector('.cards');







btngrid.addEventListener("click", () => {
	typeDisplay.classList.add("cards");
	typeDisplay.classList.remove("list");
});

btnlist.addEventListener("click", showList);
function showList() {
	typeDisplay.classList.add("list");
	typeDisplay.classList.remove("grid");
}
