
var number = document.getElementById('number');
number.textContent = 1;
function test1(){
    alert('押しました。')
}

const button1 = document.getElementById('b1');

function test2(){
    button1.style.backgroundColor = "red";
}

function test3(){
    var number2 = document.getElementById('number');
    console.log(number2);
    number2.textContent = number2.textContent + 1;
}

function test4(){
    const url = 'https://weather.tsukumijima.net/api/forecast/city/460030';
    fetch(url).then(function(response) {
        return response.text();
    }).then(function(text) {
        console.log(text);
    });
}