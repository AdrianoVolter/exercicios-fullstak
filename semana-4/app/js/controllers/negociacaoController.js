import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{

    constructor(){

        this.campoData = document.getElementById("data");
        this.campoQuantidade  =document.getElementById("quantidade");
        this.campoValor = document.getElementById("valor");

    }

    criarNegociacao(){

        let data = this.campoData;
        let quantidade = this.campoQuantidade.value;
        let valor =this.campoValor.value;

        let negocio = new Negociacao(data, quantidade, valor);
        
        console.log(negocio);
            
    };

};

