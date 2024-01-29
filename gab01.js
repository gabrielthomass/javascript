var limit = 50;
var count;
var index = 1; 
var primesFound = 0;

//faz correr de 1 até 50 usando contador primesFound
while (primesFound < limit) {
    count = 0;

    //faz correr de 1 até o contador dividend
    for (var dividend = 1; dividend <= index; dividend++) {
        //testa se é divisível
        if (index % dividend == 0) {
            count++;
        }
    }
    //se for divisível por dois números (1 e ele mesmo) é primo
    if (count == 2) {
        console.log(index);
    }
    //atualiza os contadores
    index++;
    primesFound++;
}