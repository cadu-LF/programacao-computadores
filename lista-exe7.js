function principal(){

    var nros = []
    entrada(nros)
    console.log(nros)
    media(nros)
}

function entrada(vetor){

    var numero = Number(prompt(`Informe um número: `))
    do{

        vetor.push(numero)
        numero = Number(prompt(`Informe um número, positivo continua, negativo sai: `))
        
    }
    while(numero >= 0)
}

function media(vet){
    var soma = 0
    for(var i=0; i<vet.length; i++){
        soma += ve[i]
    }
    console.log(`A média é ${soma / i}`)
}

principal()