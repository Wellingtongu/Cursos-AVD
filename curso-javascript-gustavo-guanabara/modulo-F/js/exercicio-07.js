window.onload = function () {


    let num = document.getElementById('num')
    let lista = document.getElementById('sel_val')
    let resp = document.getElementById('resp')
    let valores = []

    document.getElementById('adicionar').addEventListener('click', adicionar)
    document.getElementById('finalizar').addEventListener('click', finalizar)

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {
        if (isNumero(num.value) && !inLista(num.value, valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `valor ${num.value} adicionado. `
            lista.appendChild(item)
            resp.innerHTML = ''
        } else {
            alert("bla bla bla")
        }
        num.value = ''
        num.focus()
    }

    function finalizar() {
        console.log('chamou a function finalizar')
        if (valores.length == 0) {
            alert('Error !')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0

            valores.forEach(item => {
                soma += item
                if (item > maior) {
                    maior = item
                } else if (item < menor) {
                    menor = item
                }
            });
            console.log(`maior => ${maior}`);
            console.log(`menor => ${menor}`);
            media = soma / tot
            resp.innerHTML = ''
            resp.innerHTML += `<p> Ao todo, temos ${tot} numeros adicionados </p>`
            resp.innerHTML += `<p> maior numeros adicionados ${maior}  </p>`
            resp.innerHTML += `<p> menor numeros adicionados ${menor}  </p>`
            resp.innerHTML += `<p> A soma total dos numeros adicionados é =>  ${soma}</p>`
            resp.innerHTML += `<p> A media  é =>  ${media}</p>`
        }
    }

}