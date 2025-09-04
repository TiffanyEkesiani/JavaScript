console.log("Olá, Mundo!! Hello world!! Meu primeiro código em JAVASCRIPT"); //tipo de dado: String (texto)
//Comentário de uma linha no javascript
//Atalho no teclado: Ctrl + ; (ponto e vírgula)

//O console.log pode ser utilizado para mostrar vários tipos de dados:
//Números: 
console.log(1234567890); //Tipo de dado: Number/ Interger(inteiro)
console.log(3.14); //Tipo de dado: Number /Float (decimal)


//Podemos fazer operações matemáticas:
console.log(5+7);

//Podemos mostrar multiplos tipos de dados em um único console.log():

//1. Um número dentro das aspas, será considerado um texto (string), com isso perde suas propriedadesde número (fazer contas, por exemplo)
console.log("Calculando o total de serviços do dia: ", "120"  , 12); //dá pra usar a vígula ou sinal de mais para concatenar 

//2. Ao utilizar o + com dois dados do tipo texto (string), o JS irá concatenar (juntar) os textos. Assim como a vígula, que nos ajuda a trazer multiplos tipos de dados.
console.log("Calculando o total de serviços do dia: " + "120" + 12);

//3.Ao utilizar o + com tipos númericos (number/integer/float), o JS irá somar os valores.
console.log("Calculando o total de serviços do dia: ", 120+300+59);


//atividade  nome/idade/senac/expressão matematica/ mensagem concatenada
console.log("Nome: Ana Bela da Silva Gonçalves");
console.log(27);
console.log("Senac - Lapa Tipo");
console.log(25*9);
console.log("Nome: Ana Bela da Silva Gonçalves tenho", 2025-1997, "anos");
