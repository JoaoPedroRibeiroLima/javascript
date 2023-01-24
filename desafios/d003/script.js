function contar() {
    var iniciotxt = document.getElementById('inicio')
    var fimtxt = document.getElementById('fim')
    var passotxt = document.getElementById('passo')
    var res = document.getElementById('res')

    var inicio = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)
    res.innerHTML = '<p>Contando: </p>'

    if (passo == 0){
        var passo = 1
        window.alert('passo inválido! Considerando PASSO 1')
    }

    if (inicio == 0 || fim == 0) {
        res.innerHTML = '<p>Impossivel contar</p>'
    } else if (inicio < fim) {
        //contagem crescente
        for (inicio;inicio <= fim;inicio += passo){
            res.innerHTML += `${inicio} &#x1F449`
        }
        res.innerHTML += '&#x1F3C1'
    } else if (inicio > fim) {
        //contagem regressiva
        for (inicio;inicio >= fim;inicio -= passo){
            res.innerHTML += `${inicio} &#x1F449`
        }
        res.innerHTML += '&#x1F3C1'
    }
}
