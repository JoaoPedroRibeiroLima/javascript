/*
Esse é o MEU jeito de enchegar como solução para o desafio, que OBVIAMENTE ficou
difente da resposta do Gustavo Guanabara, mas no fim, todos os caminhos levam a roma...
*/


var lista = []

function adicionar() {
    var numtxt = document.getElementById('numtxt')
    var tab = document.getElementById('tabela')
    var num = Number(numtxt.value)
    res.innerHTML = ''

    // teste para ver se o num já existe na lista ou não esta entre 1 e 100
    var valid = 'aprovado'

    if (num < 1 || num > 100) {
        valid = 'reprovado'
    } 
    for (var c = 0;c < lista.length;c++)
        if (lista[c] == num) {
            valid = 'reprovado'
        }
    
    // caso aprovado o num é adicionado a lista, caso ao contrario não sera
    if (valid == 'reprovado') {
        window.alert('Valor inválido ou já encontrado na lista')
    } else if (valid == 'aprovado'){
        lista.push(num)
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        tab.appendChild(item)
    }
}



function finalizar() {
    if (lista.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var res = document.getElementById('res')
        res.innerHTML = ''

        //total de números cadastrados
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`

        //maior valor informado
        var maior = '' 
        for (var c = 0;c <= lista.length;c++) {
            if (c == 0){
                maior = lista[c]
            } else if (lista[c] > maior){
                maior = lista[c]
            }
        }
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`

        //O menor valor informado foi ...
        var menor = ''
        for (var c = 0;c <= lista.length;c++) {
            if (c == 0){
                menor = lista[c]
            } else if (lista[c] < menor){
                menor = lista[c]
            }
        }
        res.innerHTML += `<p>O menor valor informado foi ${menor}`

        //Somando todos os valores, temos ...
        soma = 0
        for (var c =0;c <= lista.length - 1;c++) {
            soma += Number(lista[c])
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}`

        //A média dos valores digitados é ...
        var media = soma / lista.length
        res.innerHTML += `<p>A média dos valores digitados é ${media}`
    }
}