console.log("---Aula 07 -> DOM ---")
//Buscando elementos dos meus documentos HTML e CSS para manipula-los !
//camalCase - snake_case - SCREMING_SNAKE_CASE - PascalCase -> estrutura de formatação do texto 

const tituloPrincipal = document.getElementById("titulo-principal");
const subtitulo = document.querySelector("#subtitulo"); //geralmente usado para trabalhar com CSS, mas é possivel para HTML também.
const lista_servicos = document.getElementById("lista-servicos"); //tb pode ser usado para trocar estilo. 

console.dir(tituloPrincipal); //inspecionar a tag no DOM. 

//MODIFICANDO OS CONTEUDOS E ESTILOS 

tituloPrincipal.textContent = "Boas vindas ao Mundo do PETLOVER !";
tituloPrincipal.style.color = '#ff7f50';
tituloPrincipal.style.textAlign = 'center';
tituloPrincipal.style.fontWeight = '700';

subtitulo.textContent = 'O melhor lugar para o seu melhor amigu ><';
subtitulo.style.backgroundColor = "#ff7f50";
subtitulo.style.padding = '15px';
subtitulo.style.borderRadius = '12px';
subtitulo.style.textAlign = 'center';
subtitulo.style.color = '#444';
subtitulo.style.boxShadow = '0 2px 6px'

//criando HTML
const array_servicos  = ["Banho e Tosa" , "Consulta Veterinaria" , "Aplicação de Vacina" , "Adestramento" , "Venda de Ração" , "Venda de Brinquedos" , "Hotel para Pets"];

function criarHTMLdeServicos(lista){
    let htmlAcumulado = "";
    for (let i = 0; i < lista.length; i++){
        htmlAcumulado += `<li class="servico-card"><h3>${lista[i]}</h3>
        <p>Descrição do serviço ${lista[i].toLowerCase()}.</p></li>`;
    }
    return htmlAcumulado; 
}

lista_servicos.innerHTML = criarHTMLdeServicos(array_servicos); 