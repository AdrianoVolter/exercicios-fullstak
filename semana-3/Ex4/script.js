let valorPedido = parseFloat(prompt("Digite valor do pedido:"))

if(valorPedido < 10000.00){
    console.log("Classificação do pedido BRONZE !")
    alert("Classificação do pedido BRONZE !")
}else if(valorPedido >= 10000.00 && valorPedido <= 50000.00){
    console.log("Classificação do pedido PRATA !")
    alert("Classificação do pedido PRATA !")
}else if(valorPedido >= 100000.00 && valorPedido <= 500000.00){
    console.log("Classificação do pedido OURO !")
    alert("Classificação do pedido OURO !")
}else if(valorPedido > 500000.00 ){
    console.log("Classificação do pedido PLATINUM !")
    alert("Classificação do pedido PLATINUM !")
}