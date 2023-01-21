function verificar() {
    //tratamento de idade abaixo
    var agora = new Date()
    var ano_atual = agora.getFullYear()
    var ano_nasc = document.getElementById('ano_nasc').value
    var idade = ano_atual - ano_nasc
    
    //tratamento do sexo e imagem resultante abaixo
    var radiosex = document.getElementsByName('radiosex')
    if (radiosex[0].checked) {
        var sexo = 'Homem'
        var artigo = 'um'
        if (idade >= 50) {
            var idade_imagem = 'imagens/foto-idoso-m.png'
        } else if (idade >= 30) {
            var idade_imagem = 'imagens/foto-adulto-m.png'
        } else if (idade >= 10) {
            var idade_imagem = 'imagens/foto-jovem-m.png'
        } else {
            var idade_imagem = 'imagens/foto-bebe-m.png'
        }
    } else {
        var sexo = 'Mulher'
        var artigo = 'uma'
        if (idade >= 50) {
            var idade_imagem = 'imagens/foto-idoso-f.png'
        } else if (idade >= 30) {
            var idade_imagem = 'imagens/foto-adulto-f.png'
        } else if (idade >= 10) {
            var idade_imagem = 'imagens/foto-jovem-f.png'
        } else {
            var idade_imagem = 'imagens/foto-bebe-f.png'
        }
    }
    
    //tratamento do texto resultante
    var res = document.getElementById('res')
    res.innerHTML = `<p>Detectamos ${artigo} ${sexo} com ${idade} anos</p>`
    res.style.textAlign = 'center'

    //tratamento da imagem
    res.innerHTML += '<img src="" alt="idade_imagem" id="imagem"></img>'
    document.getElementById('imagem').src = idade_imagem
    }
