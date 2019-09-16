window.onload = function () {
let obj = {
    'nome': 'wellington',
    'rg': 123456789,
    'funcao': 'desenvolvedor'
}

let usu = [
    1,2,3,4,5
]

for (var item in obj) {
    console.log(obj[item]);
}

for (var i = 0; i < usu.length; i++){
    console.log(usu[i]);
}

}