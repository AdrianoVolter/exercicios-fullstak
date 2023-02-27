export class ListaNegociacoes{
    #negociacoes =[];

    adcicionar(negociacoes){
        this.#negociacoes.push(negociacoes)
       
    }
    c
    get negociacoes(){
        return [].concat(this.#negociacoes);

         console.log(this.#negociacoes)
    }
}