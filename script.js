'use strict'
function Generator() {};
Generator.prototype.rand = 1;
Generator.prototype.getId = function() {
	return this.rand++;
};
let idGen = new Generator();

function addWidget() {
	let i = idGen.getId();
	
	let widget = document.createElement('div');

	widget.className = `widget-${i} grid__item`;
	widget.insertAdjacentHTML('beforeend', `<input type="button" class="delWidget" title="Удалить виджет" value="" onclick="removeWidget();">`);	

	dashboard.append(widget);
	};

function removeWidget() {
	$('.grid__item:last-child').remove();
}