window.onload = function() {
    // alert("testep4")



    document.getElementById('gerar').addEventListener('click', contar)

    function contar() {
        var tab = document.getElementById('tab')
        var sel = document.getElementById('seltab')
        tab = Number(tab.value)
            // alert(`numero ${tab}`)
        let c = 0;
        sel.innerHTML = '';
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${tab} X ${c} = ${tab*c}`
            sel.appendChild(item)
            c += 1;
        }
    }



}