function countI() {
	for (let i = 1; i < 11;i++) {
	return i;
}
}
function addWidget() {
	i = countI();

	let widget = document.createElement('div');

	widget.className = `widget-${i}`;
	widget.innerHTML = `${i}`;
	
	document.body.append(widget);
}

function removeWidget() {
	document.getElementsByClassName(`widget-${i}`);
	$(`.widget-${i}`).remove();
}