function calcular(){
var total = document.getElementById("total").value;
document.write(total*100);

var brancos = document.getElementById("votos brancos").value;
document.write(brancos/total*100);

var nulos = document.getElementById("votos nulos").value;
document.write(nulos/total*100);

var validos = document.getElementById("votos validos").value;
document.write(validos/total*100);

}

