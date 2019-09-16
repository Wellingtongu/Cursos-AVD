window.onload = function(){

document.getElementById('btn_function').addEventListener('click', acao)

let numero = document.getElementById('num')
numero = Number(numero.value)

console.log(numero);

function acao(numero){
    console.log(numero);
    
}

let res = num(7)

function num(n){
    console.log(n);
    
}

}