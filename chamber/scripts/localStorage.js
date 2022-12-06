const visitsDisplay = document.querySelector(".visits");
const todayDisplay = document.querySelector(".today");
const submitButton = document.querySelector('.submitBtn');
let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
if (submitButton !== null) {
	submitButton.addEventListener('click', submitFunction);
}
function submitFunction() {
		localStorage.setItem("subTime-ls", modifiedDate);
}

let visit = window.localStorage.getItem("latestVisit");
let vis = document.getElementById("VisitedLast");
let visits = 0;
const today = Date.now();
if (visit == null || visit == undefined) {
	localStorage.setItem("latestVisit", today);
	vis.textContent = visits;
} else if (visit !== 0) {
		const dayLastVisit = today - visit;
		const oneDay = 24 * 60 * 60 * 1000;
		const days = Math.round(dayLastVisit / oneDay); 
		vis.textContent = days;
		localStorage.setItem("latestVisit", today);
};

