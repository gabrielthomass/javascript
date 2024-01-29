function analisaValor(){
    var valor1 = Number(document.getElementById("valor1").value);
    var valor2 = Number(document.getElementById("valor2").value);
    var valor3 = Number(document.getElementById("valor3").value);
    
    if((valor1+valor2>valor3) && (valor1+valor3>valor2) && (valor2+valor3>valor1)){
        if((valor1==valor2)&&(valor1==valor3)){
         document.write("É um triângulo equilátero");
        }else{
             if ((valor1!=valor2)&&(valor1!=valor3)&&(valor2!=valor3)){
             document.write("É um triângulo escaleno");
             }else{
               document.write("É um triângulo isósceles");
           }

        }
    }else{
        document.write("Não é um triângulo");

    }
}
