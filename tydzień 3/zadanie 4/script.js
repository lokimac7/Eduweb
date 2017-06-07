function getJSON(url, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.setRequestHeader('Accept', 'application/json/');

    xhr.onload = function() {

        console.log(xhr.status);

        if(xhr.status === 200) {
            success(JSON.parse(xhr.responseText));
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

    getJSON('http://code.eduweb.pl/bootcamp/users/', function(data) {
        
        console.log('Sukces');

        otp.textContent = JSON.stringify(data, null, 4);

    }, function(err) {

        console.log("Wystąpił błąd!");

        console.log(err.message);
    
    });

}, false);



