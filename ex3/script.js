let nomes = [];
let alturas = [];
let continuar = "S";
let i = 0;
while (continuar == "S") {
    nomes[i] = prompt("Digite o nome:");
    alturas[i] = parseFloat(prompt("Digite a altura:"));
    i++;
    continuar = prompt("Deseja continuar? (S/N)");
}
let maior = alturas[0];
let menor = alturas[0];
let nomeMaior = nomes[0];
let nomeMenor = nomes[0];
for (let x = 0; x < i; x++) {
    if (alturas[x] > maior) {
        maior = alturas[x];
        nomeMaior = nomes[x];
    }
    if (alturas[x] < menor) {
        menor = alturas[x];
        nomeMenor = nomes[x];
    }
}
alert("Maior altura: " + maior + " m - " + nomeMaior);
alert("Menor altura: " + menor + " m - " + nomeMenor);