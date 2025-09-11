console.log("---- Aula 4: Estruturas de Repetição ----");

//1. Usando o 'FOR'(para) lista horários no console
console.log("--- Horários de Atendimento ----");
for ( let horario = 8; horario <= 17; horario++) {
    console.log(`Horário disponível: ${horario}h00`); //Outra forma de trazer texto junto de variável: crases e ${}
}

//2. Usando 'WHILE'(enquanto) para simular um estoque 
console.log("---- Simulação de Venda de Estoque ----");
//Fora da estrutura cria-se a variável a ser verificada
let estoqueBrinquedos = 5;
//Abrimos um WHILE com a condição e neste caso a repetição mostra um decréscimo!
while (estoqueBrinquedos > 0) {
    console.log(`Vendendo 1 brinquedo, restam: ${estoqueBrinquedos - 1}`);
    estoqueBrinquedos--; //Decrementa o estoque, reduz de 1 em 1
}
console.log("Estoque esgotado");

//3. O laço/loop FOR aplicado no Front-End para gerar HTML dinamicamente

//criei uma variável chamada lista_servicos que guarda uma tag, para guardar a tag é preciso utilizar document para referência o documento . html, getElementById (pegar elemento pelo ID)
//  utiliza este para específicar dentro do meu documento HTML qual a tag vou usar e dentro do parenteses coloco o NOME da ID.
const lista_servicos = document.getElementById('lista-servicos');

//Vamos criar uma variável vazia para acumular o nosso HTML gerado na repetição

let htmlAcumulado = "";

//O laço FOR que constrói a string de HTML: vamos criar 6 itens
//Inicia o laço da repetição que irá de 1 a 6 
//iniciei; delimetei; incrementei;
for (let i = 1; i <= 6; i++) {
    //htmlAcumulado = htmlAcumulato + <li>Html qie estamos inserindo pela repetição</li>
    //O resultado é guardado até que seja impresso no html do navegador, todos os 6 itens da lista estarão guardados no htmlAcumulado ao final da repetição
    htmlAcumulado += `<li class="servico-card"><h3>Serviços #${i}</h3><p>Uma breve descrição sobre o serviço</p></li>`;
}

//Chamando a variável que guarda a nossa tag que vai conter todo esse HTML, innerHTML(dentro do HTML)
//dentro da tag lista-servicos no html imprimir tudo que foi acumulado na variável htmlAcumulado
lista_servicos.innerHTML = htmlAcumulado;