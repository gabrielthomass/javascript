function resultar(){
    var valorinicial = Number(document.getElementById("inicial").value);
    var valorfinal = Number(document.getElementById("final").value);
    var contador = valorinicial;
    var acumulador = 0;


    while(contador<=valorfinal){
        acumulador=acumulador+contador;
        contador++;
    }
    console.log(acumulador);
}
