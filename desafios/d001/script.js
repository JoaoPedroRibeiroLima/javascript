var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var caixa_hora = document.getElementById('hora')
var caixa_minutos = document.getElementById('minutos')

if (hora < 6) {
    document.body.style.background = 'black'
    document.getElementById('imagem_horario').src = 'imagens/madrugada.png'
}else if (hora < 12){
    document.body.style.background = '#CFBE8F'
    document.getElementById('imagem_horario').src = 'imagens/manha.png'
} else if (hora < 18){
    document.body.style.background = '#AC7B66'
    document.getElementById('imagem_horario').src = 'imagens/tarde.png'
} else {
    document.body.style.background = '#48494A'
    document.getElementById('imagem_horario').src = 'imagens/noite.png'
}

caixa_hora.innerText = hora
caixa_minutos.innerText = minutos