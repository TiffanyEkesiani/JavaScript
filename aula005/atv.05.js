console.log("Meus Hobbies:")

const hobbies = ["Ler Biografias" , "Tirar foto dos meus amigos" , "Ver series repetidas"];

const lista_hobbies = document.getElementById("lista-hobbies");

let htmlAcumulado = "";

for(let i = 0; i< hobbies.length; i++){
    const nomeHobbie = hobbies[i];

    htmlAcumulado += `<li class = "hobbies-container">${nomeHobbie}</li>`;
}

lista_hobbies.innerHTML = htmlAcumulado;