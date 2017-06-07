(function() {
 
    function debounce(fn, time) {
        // docelowo powinna być wywoływana
        // funkcja fn w ten sposób fn()
 
        // część kodu tutaj
        var timeout = null;

        return function() {
            // pozostały kod tutaj

            clearTimeout(timeout);
            timeout = setTimeout(function() {
                fn.apply(this, arguments);
            }, time);
        };
    }
        

 
    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
    }, 200);
 
    // w tym miejscu pod handleScroll
    // powinna być nowa funkcja
 
    // Przypisanie zdarzenia "scroll"
    window.addEventListener("scroll", handleScroll, false);
 
    // Możesz również przetestować funkcję
    // ze zdarzeniem "resize" skalując okno
    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 100);
 
    window.addEventListener("resize", handleResize, false);
 
})();