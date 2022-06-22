const  inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

function alterarBotao() {
    const [username, password] = inputs;
  
    if (username.value && password.value.length >= 8) {
      button.removeAttribute('disabled');     
    } else {
      button.setAttribute('disabled', '')
    }
  }
inputs.forEach((input) => input.addEventListener('input', alterarBotao));


let time = 8000,
    imagemPrimaria = 0,
    imagens = document.querySelectorAll("#rotacao-slides img")
    max = imagens.length;


function ProximaImagem() {

    imagens[imagemPrimaria].classList.remove("imgPrimaria")
    imagemPrimaria++
    
    if (imagemPrimaria >= max)
        imagemPrimaria = 0

    imagens[imagemPrimaria].classList.add("imgPrimaria")
}


function start() {
    setInterval(() => {
      ProximaImagem()
    }, time)
}

window.addEventListener("load", start)



