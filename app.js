function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')
    if(fano.value.lenght <= 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente.')
    } else {
        let fgen = window.document.getElementsByName('radgen')
        let idade = ano - Number(fano.value)
        let idGenero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fgen[0].checked) {
            idGenero = 'Homem Cis'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'meninobebe.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'meninojovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fgen[1].checked) {
            idGenero = 'Mulher Cis'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'meninabebe.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'meninajovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.innerHTML = `Detectamos ${idGenero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}

