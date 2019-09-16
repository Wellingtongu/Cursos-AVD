window.onload = function () {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let usuario = ['wellington', 'Gustavo', 'Beatriz', 'Caroline']
    usuario[4] = 'New people'
    num.push(0)
    num.sort()

    console.log(num.length + '\n\n');
    console.log('o valor esta na posição ' + usuario.indexOf('Gustavo') + '\n\n');
    console.log('o valor esta na posição ' + usuario.indexOf('jose') + '\n\n');

    for (var i = 0; i < num.length; i++) {
        console.log(`valor num é ${i}`);

    }
    num.forEach(item => {
        console.log(item);

    });

    usuario.forEach(item => {
        console.log(item);

    });

    for (let item in usuario) {
        console.log(`usuario => ${usuario[item]}`);

    }


}