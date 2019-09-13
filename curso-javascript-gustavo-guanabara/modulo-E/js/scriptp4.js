window.onload = function() {
    // alert("testep4")



    document.getElementById('btn_calcular').addEventListener('click', contar)

    function contar() {
        var inicio = document.getElementById('inicio')
        var fim = document.getElementById('fim')
        var pass = document.getElementById('pass')
        var resp = document.getElementById('resp')
        var count = '';
        inicio = parseInt(inicio.value)
        fim = parseInt(fim.value)
        pass = parseInt(pass.value)


        for (count = inicio; count <= fim; count += pass) {
            resp.innerHTML = count
            console.log(count);

        }
    }



}