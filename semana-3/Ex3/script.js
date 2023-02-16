let peso = parseInt(prompt('Qual peso do carro?'))
let comprimento = parseInt(prompt('Qual o comprimento do carro? '))


if(peso > 1500 && comprimento > 5){
    alert("Alerta! Seu carro não pode passar !\nUltrapassou as medidas de segurança ")
}else{
    alert("Tudo OK !! Pode prosseguir")
}