export class Negociacao{

    #data;
    #quantidade;
    #valor

    constructor(data, quantidade, valor){

        this.#data =(data.value);
        this.#quantidade = Number(quantidade);
        this.#valor = Number(valor);

    };

    get data(){
        return this.data;

    };

    get quantidade(){
        return this.#quantidade;

    };

    get valor(){
        return this.#valor ;
    };
   

};

 