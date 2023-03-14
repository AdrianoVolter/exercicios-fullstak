import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { NegociacoesViews } from "../views/negociacoesView.js"
export class NegociacaoController{

    #campoData;
    #campoQuantidade;
    #campoValor;
    #negociacoes = new ListaNegociacoes();

    constructor(){

        this.#campoData = document.querySelector('#data');
        this.#campoQuantidade = document.querySelector('#quantidade');
        this.#campoValor = document.querySelector('#valor');
        this.negociacoesView = new NegociacoesViews('#negociacoesView');
        this.negociacoesView.update(this.#negociacoes);

    }
    
    criarNegociacao(){

        let d_data = this.#campoData;
        let d_quantidade = this.#campoQuantidade;
        let d_valor = this.#campoValor;
        let data = new Date(d_data.value.replace(/-/g, ','));
        let quantidade = parseInt(d_quantidade.value);
        let valor = parseFloat(d_valor.value);
        let negociacao = new Negociacao(data, quantidade, valor);
        this.#negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.#negociacoes);
        console.log(this.#negociacoes);

    };

};

