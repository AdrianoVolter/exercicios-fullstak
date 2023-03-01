import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { NegociacoesView } from "../views/negociacoesview.js";
export class NegociacaoController{

    #campoData;
    #campoQuantidade;
    #campoValor;
    #negociacoes = new ListaNegociacoes();

    constructor(){

        this.#campoData = document.getElementById("data");
        this.#campoQuantidade  =document.getElementById("quantidade");
        this.#campoValor = document.getElementById("valor");
        //console.log(this.#campoValor)
        this.negociacoesView = new NegociacoesView(document.querySelector("#dados"))
        this.negociacoesView.update(this.#negociacoes)
    }
    

    criarNegociacao(){

        let data = this.#campoData;
        let quantidade = this.#campoQuantidade.value;
        let valor =this.#campoValor.value;
        let negocio = new Negociacao(data, quantidade, valor);
        this.#negociacoes.adcicionar(negocio)
        
        console.log(this.#negociacoes.negociacoes); 
    };

};

