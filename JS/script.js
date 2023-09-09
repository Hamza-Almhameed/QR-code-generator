let textInput = document.querySelector('#textInput');
let generate = document.querySelector('#generate');
let image = document.querySelector('img');

generate.onclick = function () {
    if(textInput.value == ''){
        alert('Enter a text first !');
    }else{
        image.setAttribute('src', `https://api.qrserver.com/v1/create-qr-code/?data=${textInput.value}`);
    }
}