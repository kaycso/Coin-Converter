//código que restringe os caracteres em um input
document.getElementById('realValue').onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if("1234567890.".indexOf(chr) < 0)
    return false;
}

//código para não permitir que o form faça reload na página
const form = document.getElementById("form-convert-real")
form.addEventListener('submit', e => {
    e.preventDefault()
})


function convertReal() {
    let realValue = document.getElementById('realValue').value;
    let dollarValue = 5.08;
    let elementConvertValue = document.getElementById("reply");
    let convertedValue = realValue * dollarValue;
    
    elementConvertValue.classList.add("displayOn");
    convertedValue = convertedValue.toFixed(2);
    

    if (realValue != "") {
        elementConvertValue.innerHTML = "R$ "+convertedValue;
    } else {
        elementConvertValue.innerHTML = "";
        elementConvertValue.classList.remove("displayOn");
    }
}