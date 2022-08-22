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
const contador = 0;
let armazena_sorteio = []
let ListaCartas = [];
let ParesOrdenados = [];
let numero_cartas = 0;
let verificador = 0;
let par = false

function comparador() {
    return Math.random() - 0.5;
}

function start() {
    //prompt inicial
    numero_cartas = prompt ("Com quantas cartas você quer jogar?");
    while (numero_cartas % 2 !== 0 || numero_cartas < 4){
        numero_cartas = prompt ("Escreva um número par maior que 3. Com quantas cartas você quer jogar?");
    }

    //sorteio das diferentes cartas, colocando-as em pares numa nova lista embaralhada
    let embaralhamento = cartinhas_diferentes.sort(comparador);
    const sorteio = [];
    for(let cont=0; cont < numero_cartas/2; cont++) {
        sorteio.push(embaralhamento[cont]);
        sorteio.push(embaralhamento[cont]);
    }
    let sorteio_embaralhado = sorteio.sort(comparador);
    for(let k=0; k <numero_cartas; k++) {
        armazena_sorteio.push(sorteio_embaralhado[k])
    }
    
   //disposição inicial das cartas
    for(let cont=0; cont < numero_cartas; cont++) {
        let campo = document.querySelector('.campocartas');
        ListaCartas.push( `<div onclick="cartaClicada(this)" class="carta n${cont}">
        <img src="parrot_imagens/front.png">
        <img class="hidden" src="${sorteio_embaralhado[cont]}">
        </div>`)
        campo.innerHTML = campo.innerHTML + ListaCartas[cont];
    }
    console.log(armazena_sorteio)

    //associação entre os pares distribuídos aleatoriamente
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
    childimg[1].classList.add('hidden')
    childimg[3].classList.remove('hidden')
    elemento.classList.add('efeito')
}

