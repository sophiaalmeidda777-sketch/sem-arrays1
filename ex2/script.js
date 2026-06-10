let nomes = [];
let sexos = [];
let salarios = [];
for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome:");
    sexos[i] = prompt("Digite o sexo (M ou F):");
    salarios[i] = parseFloat(prompt("Digite o salário:"));
}
let resultado = "";
for (let i = 0; i < 5; i++) {
    if ((sexos[i] == "F" || sexos[i] == "f") && salarios[i] > 5000) {
        resultado += "Nome: " + nomes[i] +
                    " | Sexo: " + sexos[i] +
                    " | Salário: R$" + salarios[i] + "\n";
    }
}
if (resultado == "") {
    alert("Nenhuma funcionária encontrada.");
} else {
    alert(resultado);
}