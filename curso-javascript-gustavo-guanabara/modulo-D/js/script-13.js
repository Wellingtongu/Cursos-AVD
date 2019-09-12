
// document.getElementById('manha').style.display = 'none';
// document.getElementById('tarde').style.display = 'none';
// document.getElementById('noite').style.display = 'none';

let img = document.getElementById('img');
let msg = document.getElementById('msg');

var date_time = new Date();
var hora_atual = date_time.getHours();
//  alert(hora_atual)

if (hora_atual > 0 && hora_atual < 12) {
    img.src = 'fotos/manha.png'
    msg.innerHTML = 'Bom dia ...'
} else if (hora_atual >= 12 && hora_atual <= 18) {
    img.src = 'fotos/tarde.png'
    msg.innerHTML = 'Boa tarde ...'
} else {
    img.src = 'fotos/noite.png'
    msg.innerHTML = 'Boa noite ...'
}



// Exercicio parte 03

function verificar() {
    let data = new Date()
    data = data.getFullYear()
    let datainput = document.getElementById('txtano');
    let msg = document.getElementById('msg3');
    let ano_nascimento = datainput.value
    let sexo = document.getElementsByName('sexo')
    let masc = document.getElementById('masc')
    if (masc.checked) {
        alert('fodeu')
    }

    // if(sexo[0].checked){
    //     alert('Homem')
    // }else if(sexo[1].checked){
    //     alert('Mulher')
    // }
    // msg.innerHTML = 'Boa noite ...'
    if (ano_nascimento.length == 0 || ano_nascimento > data) {
        alert(`data invalida ${data}`)
    }
}