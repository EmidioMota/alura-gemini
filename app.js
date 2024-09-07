function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém a pesquisa HTML onde os valores da pesquisa serão exibidos
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo sobre a imersão.</p>"
        return
    }
    // Transformando todas as letras em minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item da lista de resultados da pesquisa
    for (let item of itens) {
        titulo = item.titulo.toLowerCase()
        descricao = item.descricao.toLowerCase()
        tags = item.tags.toLowerCase()
        // Cria uma div para cada item, formatando-a com HTML
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${item.titulo}</a>
                </h2>
                <p class="descricao-meta">${item.descricao}</p>
                <a href=${item.link} target="_blank">Mais informações</a>
            </div>`
        }

        if(!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }

    }

    // Atualiza o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
}



