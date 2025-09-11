//Sistema de Check-in e Agendamento

const idadePet = 8; //Um  =  apenas atribui valor a uma variável! Nunca é usado para comparar!
const petVacinado = true;
const portePet = "Médio";

console.log("--- Iniciando Check-in ---");

//1. Verifica se o Pet está vacinado (if/else)
//declaramos o if (a condição a ser verificada fica dentro dos parênteses), após abrimos as chaves que será o espaço onde vamos executar um códico caso a condição seja verdade

if (petVacinado === true) { 
    console.log("Ok: Vacinação em dia.");
} else {
    console.log("ERRO: Vacinação pendente. Check-in e agendamento cancelados.");
}

//o else deve ser declarado IMEDIATAMENTE APÓS as chaves do nosso bloco if, o else não acompanha uma condição própria, irá executar toda a vez que a nossa condição if for falsa


//2. DETERMINAR O TIPO DE SERVIÇO DE ACORDO COM A IDADE
// No nosso IF verificamos se o nosso pet é filhote abrimos um ELSE IF, para verificar uma outra condição expecífica, e por fim temos o nosso ELSE que sempre será executado caso as duas primeiras condições forem falsas

console.log("--- Definindo a categoria de cuidado ---");

if (idadePet < 1 ) {
    console.log("Categoria: Filhote (cuidados baby)");
} else if (idadePet >= 1 && idadePet < 8) {
    console.log("Categoria: Adulto (cuidados padrão)");
} else {
    console.log("Categoria: Idoso (cuidados premium)");
}

//3. VERIFICAR SE O PET É ELEGÍVEL PARA UMA PROMOÇÃO DE ACORDO COM O SEU PORTE

console.log("--- Verificando Promoções ---");

if (portePet === "Pequeno" || idadePet >= 8) {
    console.log("Status: Pet elegível para a promoção 'Banho com Desconto!'");
} else {
    console.log("Status: Pet não elegível para promoções!");
}