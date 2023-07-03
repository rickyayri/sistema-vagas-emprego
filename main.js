let vagas = [
    // {nome: 'vaga teste', descricao: 'apenas um teste', data: '06/05', candidatos: ['João', 'Weslyn', 'Murilos']}, 
]

function listarVagas() {
    let vagasStr = String()
    for (let i = 0; i < vagas.length; i++) {
        vagasStr += `${vagas.indexOf(vagas[i])}. Nome: ${vagas[i].nome}, Quantidade de candidatos: ${vagas[i].candidatos.length}\n`
    }
    alert(vagasStr)
}

function criaVaga() {
    const novaVaga = Object()

    novaVaga.nome = prompt('Qual o nome da vaga?')
    novaVaga.descricao = prompt('Qual a descrição da vaga?')
    novaVaga.data = prompt('Qual a data limite da vaga?')
    novaVaga.candidatos = []

    const confirmacao = confirm(`Você quer criar uma vaga com estas informações?\n\nNome: ${novaVaga.nome}\nDescrição: ${novaVaga.descricao}\nData limite: ${novaVaga.data}`)

    if (confirmacao) {
        vagas.push(novaVaga)
        alert('Vaga criada.')
    }
    console.log(vagas)
}

function visualizarVagas() {
    if (vagas.length === 0) {
        alert('Não há vagas disponíveis!')
        return;
    }
    const indiceVaga = prompt('Qual o índice da vaga a ser visualizada?')
    const vaga = vagas[indiceVaga]
    let vagasStr = String()

    const candidatosStr = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return `${textoFinal}\n - ${candidato} `
    }, '')

    vagasStr += `Vaga ${indiceVaga}\n\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.data}\nQuantidade de candidatos: ${vaga.candidatos.length}\nCandidatos: ${candidatosStr}`

    alert(vagasStr)
}

function inscreverCandidato() {
    const nomeCandidato = prompt('Quem você quer inscrever para a vaga?')
    const indiceVaga = prompt(`Qual o índice da vaga que você quer inscrever ${nomeCandidato}?`)
    const vaga = vagas[indiceVaga]

    const confirmacao = confirm(`Você quer inscrever ${nomeCandidato} nesta vaga?\n\nVaga ${indiceVaga}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.data}`)

    if (confirmacao) {
        vaga.candidatos.push(nomeCandidato)
        alert('Candidato inscrito!') 
    }
}

function excluirVaga() {
    const indiceVaga = prompt('Qual o índice da vaga que você deseja excluir?')
    const vaga = vagas[indiceVaga]

    const confirmacao = confirm(`Você quer excluir esta vaga?\n\nVaga ${indiceVaga}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.data}`)

    if (confirmacao) {
        vagas.splice(indiceVaga, 1)
        alert('Vaga excluída!')
    }
}

function menu() {
    return prompt("O que deseja fazer?\n\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair")
}

function executar() {
    let escolha

    do {
        escolha = menu()

        switch (escolha) {
            case '1':
                if (vagas.length === 0) {
                    alert('Não há vagas disponíveis!')
                    break
                } else {
                    listarVagas()
                    break
                }
            case '2':
                criaVaga()
                break
            case '3':
                if (vagas.length === 0) {
                    alert('Não há vagas disponíveis!')
                    break
                } else {
                    visualizarVagas()
                    break
                }
            case '4':
                if (vagas.length === 0) {
                    alert('Não há vagas disponíveis!')
                    break
                } else {
                    inscreverCandidato()
                    break
                }
            case '6':
                alert('Finalizando...')
                break
            case '5':
                if (vagas.length === 0) {
                    alert('Já não há vagas disponíveis!')
                    break
                } else {
                    excluirVaga()
                    break
                }
            default:
                alert('Opção inválida!')
                break
        }

    } while (escolha !== '6')
}

executar()