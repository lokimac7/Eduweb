var product_qty = 102,
	product_price = 50;

if (product_qty < 5 && product_qty > 0) {
	console.log('Podstawowa cena produktu to ' + product_price + 'zł.');
} else if (product_qty >=5 && product_qty <= 20) {
	console.log('Podstawowa cena produktu to ' + product_price + 'zł, po obniżce to ' + product_price*0.95 + 'zł.');
} else if (product_qty > 20 && product_qty <= 50) {
	console.log('Podstawowa cena produktu to ' + product_price + 'zł, po obniżce to ' + product_price*0.9 + 'zł.');
} else if (product_qty > 50 && product_qty <= 100) {
	console.log('Podstawowa cena produktu to ' + product_price + 'zł, po obniżce to ' + product_price*0.85 + 'zł.');
} else if (product_qty > 100) {
	console.log('Podstawowa cena produktu to ' + product_price + 'zł, po obniżce to ' + product_price*0.8 + 'zł.');
} else {
	console.log('Podałes/aś niewłaściwą liczbę produktów!');
} 