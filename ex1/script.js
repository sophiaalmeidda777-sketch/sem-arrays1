let idades = [];
let maior;
let posicao;
for (let i = 0; i < 4; i++) {
    idades[i] = parseInt(prompt("Digite idade da pessoa" + (i + 1)));
}
maior = idades[0];
posicao = 0;
for (let i = 1; i < 4; i++) {
    if (idades[i] > maior) {
        maior = idades[i];
        posicao = i;
    }
}
alert("Maior idade:" + maior);
alert("Posição da maior idade:" + posicao);