export class NegociacaoViews{
    constructor(elemento){
        this._elemento = elemento;
    }
    template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.negociacoes.map(n => {
                    return `
                        <tr>
                            <td>${n.data.getDate()}/${(n.data.getMonth() + 1)}/${n.data.getFullYear()}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
            </tfoot>
        </table>
        `;
    }
    update(model){
        this._elemento.innerHTML = this.template(model);
    }

}