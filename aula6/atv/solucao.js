/**
 * Verifica se uma idade corresponde à maioridade.
 * @param {number} idade - A idade a ser verificada.
 * @returns {boolean} - true se for maior ou igual a 18, false caso contrário.
 */
function ehMaiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

// --- Testando a função ---
const resultado1 = ehMaiorDeIdade(25);
console.log("A pessoa de 25 anos é maior de idade?", resultado1); // Saída: true

const resultado2 = ehMaiorDeIdade(16);
console.log("A pessoa de 16 anos é maior de idade?", resultado2); // Saída: false