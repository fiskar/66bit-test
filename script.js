function Generator() {};
Generator.prototype.rand = 1;
Generator.prototype.getId = function() {
	return this.rand++;
};
let idGen = new Generator();

function addWidget() {
	i = (idGen.getId());
	
	let widget = document.createElement('div');

	widget.className = `widget-${i}`;
	widget.insertAdjacentHTML('beforeend', `<input type="button" title="Удалить виджет" value="del" onclick="removeWidget();">`);	

	dashboard.append(widget);
	};

function removeWidget() {
	document.getElementsByClassName(`widget-${i}`);
	$(`.widget-${i}`).remove();
}