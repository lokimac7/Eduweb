var btn = document.getElementById('btn'),
	square = document.getElementById('square');


	btn.addEventListener('click', function() {
		if(window.getComputedStyle(square).display === 'none') {
			square.style.display = 'block';
			btn.innerHTML = 'Ukryj kwadrat';
		}
		else {
			square.style.display = 'none';
			btn.innerHTML = 'Pokaż kwadrat';
		}
	});

