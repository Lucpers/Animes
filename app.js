function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
      // Se estiver vazio, exibe uma mensagem de erro na seção de resultados
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um Personagens ou Animes</p>";
      return; // Interrompe a função
    }
  
    // Converte a pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      // Converte os dados para minúsculas para facilitar a comparação
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar uma correspondência, adiciona o resultado à string de resultados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atualiza a seção de resultados com os resultados da pesquisa
    section.innerHTML = resultados;
  }
  
  // Obtém o elemento do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa");
  
  // Adiciona um evento de escuta para a tecla Enter
  campoPesquisa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      pesquisar(); // Chama a função de pesquisa quando o Enter é pressionado
    }
  });