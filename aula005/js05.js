console.log("---Aula 05: Arrays (Lista)");

//1. Nossa fonte de dados: uma array com os nomes dos serviços:

//criar uma variavel para guardar minha lista - SEMPRE entre colchetes [] para ser considerada uma ARRAY (LISTA). 
//os valores são separados por virgula e necessario fechamento no final. 
const array_servicos  = ["Banho e Tosa" , "Consulta Veterinaria" , "Aplicação de Vacina" , "Adestramento" , "Venda de Ração" , "Venda de Brinquedos" , "Hotel para Pets"];


//2. Explorando nossa Array:

//explorar lista pelo indice [0] e [4]
console.log("Primeiro serviço da lista: " + array_servicos[0]);
console.log(array_servicos[4]);

//explorar extensão (tamanho) da array
console.log("Qual o tamanho desta array? " + array_servicos.length); //contagem de quantos valores a minha array possui


//3. Metodos: 

const frutas = ["Maça" , "Uva" , "Kiwi" , "Goiaba" , "Abacate" , "Banana"];
console.log(frutas);

//o metodo PUSH é utilizado para acrescentar um novo dado no final de uma array.
frutas.push("Tâmara");
console.log(frutas);

//o metodo POP Sempre remove o ultimo elemento da array.
frutas.pop(); 
console.log(frutas);
frutas.pop();
console.log(frutas);

//o metodo UNSHIFT adiciona um elemento no inicio de uma array.
frutas.unshift("Morango"); 
console.log(frutas);

//o metodo SHIFT remove o primeiro elemento da array. 
frutas.shift();
console.log(frutas);


//o metodo SPLICE consegue remover, adicionar e substituir elementos em qualquer posição. 
frutas.splice(1,2); //remove
console.log(frutas);

frutas.splice(3, 4, "Morango" , "Tâmara"); //adiciona
console.log(frutas)

frutas.splice(1, "Limão"); //substitui
console.log(frutas);

//4.Trabalhando com array serviços e HTML
const lista_servicos = document.getElementById("lista-servicos");

let htmlAcumulado = ""; 

//o loop FOR irá percorrer toda a array e construir no nosso HTML de acordo com os serviços fornecidos. 
//palavra estruturante e (condição a ser seguida)

//iniciei; delimitei; incrementei -> Enquanto i for menos que a extensão (tamanho da array) 
// da minha lista de serviços ele vai repetir e criar um html, para cada repetição.
for(let i = 0 ; i< array_servicos.length; i++) {
    const nomeServico = array_servicos[i]; //utilizamos essa variavel para guardar o valor especifico de csda posição para inserir no hmtl.
    
    htmlAcumulado += `<li class= "servico-card"><h3>${nomeServico}</h3> <p>Clique para saber mais sobre o serviço${nomeServico}</p> </li>`;
}

lista_servicos.innerHTML = htmlAcumulado;
