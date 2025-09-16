console.log("--- Aula 6: Funções e Escopo ---");

// --- DADOS ---
// Mantemos nossos dados separados da lógica.
const servicosOferecidos = [
    'Banho e Tosa',
    'Consulta Veterinária',
    'Aplicação de Vacinas',
    'Adestramento Básico',
    'Venda de Ração e Brinquedos',
    'Hotel para Pets'
];


// --- FUNÇÕES (Nossas "Máquinas") ---

/**
 * Esta função recebe um array de strings como parâmetro
 * e retorna uma string de HTML com os cards de serviço.
 * @param {string[]} listaDeServicos - O array com os nomes dos serviços.
 * @returns {string} - A string de HTML pronta para ser inserida na página.
 */
function criarHtmlParaServicos(listaDeServicos) {
    let htmlParaInserir = ""; // Variável local, só existe aqui dentro.

    for (let i = 0; i < listaDeServicos.length; i++) {
        const nomeDoServico = listaDeServicos[i];
        htmlParaInserir += `
            <li class="servico-card">
                <h3>${nomeDoServico}</h3>
                <p>Clique para saber mais sobre o serviço de ${nomeDoServico.toLowerCase()}.</p>
            </li>
        `;
    }

    return htmlParaInserir; // A função devolve o HTML construído.
}


// --- EXECUÇÃO (Onde usamos nossas ferramentas) ---

// 1. Pegamos o container da página onde o conteúdo será exibido.
const containerDeServicos = document.getElementById('lista-servicos');

// 2. Chamamos nossa função, passando nosso array de dados como "ingrediente".
// A função nos devolve o HTML, que guardamos em uma constante.
const cardsDeServicosHtml = criarHtmlParaServicos(servicosOferecidos);

// 3. Inserimos o HTML retornado pela função dentro do container.
containerDeServicos.innerHTML = cardsDeServicosHtml;