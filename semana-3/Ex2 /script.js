let idade = parseInt(prompt("Digite uma idade:"))

if(idade >= 0 && idade <=  12){
    console.log("Você é criança !")
}else if(idade<0) {
    console.log("ERRO , digite uma idade entre 0 e 110")
}else if(idade > 12 && idade < 18){
    console.log("Você é adolescente !")
}else if(idade >= 18 && idade < 66){
    console.log("Você é um adulto !")
}else if(idade >= 66 && idade < 111){
    console.log("Você é Sênior !!!")
}else if( idade > 110){
    console.log("ERRO !!!!\nDigite uma idade entre 0 e 110")
}else if(idade != NaN){
    console.log("ERRO !!!!\nDigite somente numeros")
}