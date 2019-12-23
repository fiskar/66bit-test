function countI() {
	for (let i = 1; i < 11;i++) {
	return i;
}
}
function addWidget() {
	i = countI();

	let widget = document.createElement('div');

	widget.className = `widget-${i}`;
	widget.insertAdjacentHTML('beforeend', `<input type="button" value="del" onclick="removeWidget();">`);	
	dashboard.append(widget);
}

function removeWidget() {
	document.getElementsByClassName(`widget-${i}`);
	$(`.widget-${i}`).remove();
}