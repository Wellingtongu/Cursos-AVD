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
            console.log(count);
            resp.innerHTML += ` ${count} => `
                // var para = document.createElement("P");
                // para.innerText = count + '=>'; 
                // resp.appendChild(para);

        }
    }



}