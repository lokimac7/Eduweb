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

    getJSON("http://code.eduweb.pl/bootcamp/json/", function(data) {
        
        var result = "";

        data.forEach(function(obj) {

            let {
                name,
                username,
                email,
                address: {
                    geo: [lat, lon],
                },
                website,
                company: {
                    name: company
                }
            } = obj || {};

            result += `<b>Imię:</b> ${name}<br>
            <b>Pseudonim:</b> ${username}<br>
            <b>E-mail:</b> ${email}<br>
            <b>Firma:</b> ${company}<br>
            <b>Strona www:</b> <a href="http://${website}">${website}</a><br>
            <b>Adres:</b> <a href="http://bing.com/maps/default.aspx?cp=${lat}~${lon}">Pokaż na mapie</a><br>${"=".repeat(70)}<br>`;

        });

        otp.innerHTML = result;

    }, function(err) {

        console.log("Wystąpił błąd!");

        console.log(err.message);
    
    });

}, false);



