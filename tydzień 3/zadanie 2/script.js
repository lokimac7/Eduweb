function Toggler(selector) {

	if(!(this instanceof Toggler)) {
		return new Toggler(selector);
	}

	this._elem = document.querySelector(selector);
}

	Toggler.prototype.getElem = function() {
		return this._elem;
	};

	Toggler.prototype.show = function() {
		this.getElem().style.display = '';
	};

	Toggler.prototype.hide = function() {
		this.getElem().style.display = 'none';
	};


var elem = Toggler('#text'),
	btn = document.querySelector('#btn');


	elem.hide();

	btn.addEventListener('click', function() {

		if(elem.getElem().style.display == "none") {
			elem.show();
			btn.textContent = btn.dataset.hide;
		} else {
			elem.hide();
			btn.textContent = btn.dataset.show;
		}
	}, false);