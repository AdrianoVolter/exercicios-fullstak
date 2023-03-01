export class NegociacoesView {


    constructor(elemento) {
       this._elemento = elemento
    }

    _template(model) {
        return `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th> <th>Quantidade</th> <th>Valor</th> <th>Altura</th> <th>IMC</th> <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.#negociacoes.map((negociacoes, indice) => {
                    return `
                        <tr>
                            <td>
                                ${indice}
                            </td>
                            <td>${negociacoes.data}</td>
                            <td>${negociacoes.quantidade}</td>
                            <td>${negociacoes.valor}</td>
                                                     
                        </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `
    }

    // nao precisa do metodo update aqui pq vc herda da super class
}


    // atualizar(){
        
    // }
//}