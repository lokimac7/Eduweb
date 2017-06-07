(function() {

	if(typeof String.prototype.repeatt === 'function') {
		return;
	}

	String.prototype.repeatt = function(n) {
		
		var output = '';

		for(var i = 0; i < n ; i++) {
			output += this.toString();
		}

		return output;


	};
})();