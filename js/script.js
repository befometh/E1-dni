function validar(){
    var dni=document.getElementById("i03").value;
    var letra="TRWAGMYFPDXBNJZSQVHLCK"
    letra=letra.split("");
    //"12345678Z"
    var l=dni.split(""); // [1,2,3,4,5,6,7,8,"Z"]
    l.pop(); // [1,2,3,4,5,6,7,8,"Z"]
    var x=parseInt(l.join("")); // [1,2,3,4,5,6,7,8] -> "12345678" -> 12345678    var letra="TRWAGMYFPDXBNJZSQVHLCKE" //orden de las letras en que se identifican los elementos según su posición.
    l=dni.split("");
    l=l.pop();
    l=l.toUpperCase();
    var result=x%23; //14
    if(letra[result]==l){
        result="DNI Válido";    
    }
    else{
        result="DNI Minusválido";
    }
    document.getElementById("res").innerHTML=result;
}
