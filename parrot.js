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

function comparador() {
    return Math.random() - 0.5;
}

function start() {
    //prompt inicial
    let numero_cartas = prompt ("Com quantas cartas você quer jogar?");
    while (numero_cartas % 2 !== 0 || numero_cartas < 4){
        numero_cartas = prompt ("Escreva um número par maior que 3. Com quantas cartas você quer jogar?");
    }
    //disposição inicial das cartas
    for(let cont=0; cont < numero_cartas; cont++) {
        let campo = document.querySelector('.campocartas');
        campo.innerHTML = campo.innerHTML + '<div class="carta"><img src="parrot_imagens/front.png"></div>'
    }
    //sorteio das diferentes cartas
    let embaralhamento = cartinhas_diferentes.sort(comparador);
    const sorteio = [];
    for(let cont=0; cont < numero_cartas/2; cont++) {
        sorteio.push(embaralhamento[cont])
    }
    console.log(sorteio);
    console.log(sorteio.length);
}
start()


