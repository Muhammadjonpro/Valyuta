var elValyuta = document.querySelector('.Valyuta');
var elSuma = document.querySelector('.Suma');
var elFormSelect = document.querySelector('.form-select');
var elBtn = document.querySelector('.Btn');
var elResult = document.querySelector('.Result');
var elBody = document.querySelector('#manibody')

var UZS_TO_USD = 10910;
var UZS_TO_RUB = 140;
var UZS_TO_EURO = 10310;

var result = ''

elValyuta.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var input = elSuma.value;
    var select = elFormSelect.value;

    if (select == "1" ){
        result = input / UZS_TO_RUB
    }
    
    if (select == "2" ){
        result = input / UZS_TO_USD
    }
    if (select == "3" ){
        result = input / UZS_TO_EURO
    }
    elResult.textContent = result;
})
