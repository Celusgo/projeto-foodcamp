let contador;
function selecionarComida(x){
    const escolhido1 = document.querySelector(".selected1");
    if(escolhido1 !== null){
        escolhido1.classList.remove('selected1');
    }
    const seletor = "." + x;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected1');
    if(contador == undefined){
        contador = 0;
    }
    if (contador == 0) {
        contador =  1;
    }
    else if(contador == 1){
        contador = 2;
    }
    else if(contador == 2){
        contador = 3;
    }
}

function selecionarBebida(y){
    const escolhido2 = document.querySelector(".selected2");
    if(escolhido2 !== null){
        escolhido2.classList.remove('selected2');
    }
    const seletor = "." + y;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected2');
    if(contador == undefined){
        contador = 0;
    }
    if (contador == 0) {
        contador =  1;
    }
    else if(contador == 1){
        contador = 2;
    }
    else if(contador == 2){
        contador = 3;
    }
}

function selecionarSobremesa(z){
    const escolhido3 = document.querySelector(".selected3");
    if(escolhido3 !== null){
        escolhido3.classList.remove('selected3');
    }
    const seletor = "." + z;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected3');
    if(contador == undefined){
        contador = 0;
    }
    if (contador == 0) {
        contador =  1;
    }
    else if(contador == 1){
        contador = 2;
    }
    else if(contador == 2){
        contador = 3;
    }
}

function final(){
    const finalizar = document.querySelector(".botãoinferior");
    if(contador == 3){
        finalizar.classList.add('botãoverde');
        finalizar.classList.remove('botãoinferior');
        finalizar.innerHTML = "Finalizar pedido";
    }
}