const cartinhas_diferentes = [
    "parrot_imagens/bobrossparrot.gif",
    'parrot_imagens/astralparrot.gif',
    'parrot_imagens/beerparrot.gif',
    'parrot_imagens/explodyparrot.gif',
    'parrot_imagens/brazilianparrot.gif',
    'parrot_imagens/cientistparrot.gif',
    'parrot_imagens/fiestaparrot.gif',
    'parrot_imagens/crazygreenparrot.gif',
    'parrot_imagens/demonparrot.gif',
    'parrot_imagens/metalparrot.gif', 
    'parrot_imagens/revertitparrot.gif',
    'parrot_imagens/tripletsparrot.gif',
    'parrot_imagens/unicornparrot.gif',
    'parrot_imagens/eatingparrot.gif',
    'parrot_imagens/gentlemanparrot.gif',
    'parrot_imagens/girlparrot.gif',
    'parrot_imagens/hairyparrot.gif',
    'parrot_imagens/mustacheparrot.gif',
    'parrot_imagens/pirateparrot.gif',
    'parrot_imagens/randomguyparrot.gif',
    'parrot_imagens/romanianparrot.gif',
    'parrot_imagens/sadparrot.gif',
    'parrot_imagens/sherlockparrot.gif',
    'parrot_imagens/sleepingparrot.gif',
    'parrot_imagens/tiredparrot.gif',
    'parrot_imagens/trollparrot.gif',
    'parrot_imagens/wtfparrot.gif',
    'parrot_imagens/warriorparrot.gif',
    'parrot_imagens/roofparrot.gif',
    'parrot_imagens/michaeljacksonparrot.gif'
]

let ParesOrdenados = [];
let numero_cartas = 0;
let par = false;
let verificaPar = [];
let pontos = 0;
let jogadas = 0;

function comparador() {
    return Math.random() - 0.5;
}

function start() {
    //prompt inicial.
    numero_cartas = prompt ("Com quantas cartas você quer jogar? Escolha entre 4 a 60 cartas");
    while (numero_cartas % 2 !== 0 || numero_cartas < 4 || numero_cartas > 60){
        numero_cartas = prompt ("Escreva um número par maior que 3 e menor que 61. Com quantas cartas você quer jogar?");
    }

    //sorteio das diferentes cartas, colocando-as em pares numa nova lista embaralhada.
    let embaralhamento = cartinhas_diferentes.sort(comparador);
    const sorteio = [];
    for(let cont=0; cont < numero_cartas/2; cont++) {
        sorteio.push(embaralhamento[cont]);
        sorteio.push(embaralhamento[cont]);
    }
    let sorteio_embaralhado = sorteio.sort(comparador);
    
   //disposição inicial das cartas.
    for(let cont=0; cont < numero_cartas; cont++) {
        let campo = document.querySelector('.campocartas');

        campo.innerHTML = campo.innerHTML + `<div onclick="cartaClicada(this)" class="carta n${cont}">
        <img src="parrot_imagens/front.png">
        <img class="hidden" src="${sorteio_embaralhado[cont]}">
        </div>`;
    }

    //associação entre os pares distribuídos aleatoriamente.
    for(let i=0; i <numero_cartas; i++) {
        for(let j=0; j <numero_cartas; j++) {
            if (i !== j) {
                if (sorteio_embaralhado[i] === sorteio_embaralhado[j]){
                    ParesOrdenados.push([`n${i}`,`n${j}`]);
                }
            }
        }
    }
    console.log(ParesOrdenados);
}

start()

function cartaClicada(elemento) {
    const childimg =  elemento.childNodes;

    //verificam se é a primeira carta do par ou a segunda.
    if (verificaPar.length === 0) {
        jogadas++
        childimg[1].classList.add('hidden')
        childimg[3].classList.remove('hidden')
        elemento.classList.add('efeito') 
        verificaPar.push(elemento.classList[1])
    } else if(verificaPar.length === 1) {

        //verifica se a segunda carta clicada não é a mesma que a anterior, isso lascaria o código.
        //(como lascou quando não sabia disso)
        if (verificaPar[verificaPar.lenght-1] !== elemento.classList[1]){
            jogadas++
            childimg[1].classList.add('hidden')
            childimg[3].classList.remove('hidden')
            elemento.classList.add('efeito') 
            verificaPar.push(elemento.classList[1])

            //compara as posições dos pares corretos com o par do verificaPar.
            for (let p = 0; p < ParesOrdenados.length - 1; p++){
                if (verificaPar[0] === ParesOrdenados[p][0] && verificaPar[1] === ParesOrdenados[p][1]){
                    par = true
                }
            }

            //se está correto, permanece na tela, se não, some.
            if (par === false) {
                setTimeout(efeito, 1000)

            } else if (par === true) {
                verificaPar = [];
                par = false;
                pontos++
            }
        }
    }
    //fim do jogo
    if (pontos === numero_cartas/2) {
        setTimeout(fim, 1000)
    }

    function fim() {
        alert (`Você ganhou em ${jogadas} jogadas!`)
        let reinicia = prompt ("Deseja reiniciar a partida")
        if (reinicia === 'sim') {

            //condições iniciais.
            ParesOrdenados = [];
            numero_cartas = 0;
            par = false;
            verificaPar = [];
            pontos = 0;
            jogadas = 0;
            let campoReiniciado = document.querySelector ('.campocartas');
            campoReiniciado.innerHTML = ''
            start()

        } else if (reinicia === 'não') {
            alert('Obrigado por jogar!')
        }
    }    

    function efeito () {
        //efeito de sumir
        childimg[1].classList.remove('hidden')
        childimg[3].classList.add('hidden')
        elemento.classList.remove('efeito')

        let localizar = document.querySelector(`.${verificaPar[0]}`)
        const childimgAnterior = localizar.childNodes

        childimgAnterior[1].classList.remove('hidden')
        childimgAnterior[3].classList.add('hidden')
        localizar.classList.remove('efeito')
        verificaPar = []
    }
}
