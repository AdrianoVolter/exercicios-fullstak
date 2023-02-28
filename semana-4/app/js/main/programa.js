import { NegociacaoController } from "../controllers/negociacaoController.js";

const controller = new NegociacaoController() ;
const formulario = document.getElementById("form")

formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();
    controller.criarNegociacao();
    //console.log(formulario.value)

});