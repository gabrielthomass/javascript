const casasNoTabuleiro = 64;
var quantidadeTotal = 0;
    
    //corre as 64 casas
    for (var count = 0; count < casasNoTabuleiro; count++) {
        quantidadeTotal += Math.pow(2, count); 
        //escreve o acumulado de grãos por casa
        console.log("até a casa "+ (count+1) + " tem " + quantidadeTotal + " grãos acumulados");
    }
    