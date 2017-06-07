function fecz(url, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {

        console.log(xhr.status);

        if(xhr.status === 200) {
            success(xhr.responseText);
        } else {
            failure(new Error('Wystąpił błąd! Kod statusu HTTP to: ' + xhr.status));
        }

    };

    xhr.onerror = function() {
        failure(new Error('Wystąpił nieoczekiwany błąd!'));

    };

    xhr.send();

}

var btn = document.querySelector('#btn'),
    otp = document.querySelector('#otp');


btn.addEventListener('click', function(e) {

    fecz('http://code.eduweb.pl/bootcamp/users/', function(data) {
        console.log('Sukces');

        otp.textContent = data;

    }, function(err) {

        console.log("Wystąpił błąd!");

        console.log(err.message);
    
    });

}, false);



