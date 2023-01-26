function tabuar() {
    var numtxt = document.getElementById('numtxt')
    var num = Number(numtxt.value)
    var tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = ''
    var c = 1
    for(c;c <= 10;c++)
        tabuada.innerHTML += `<option>${num} x ${c} = ${num * c}`
}
