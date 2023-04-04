function validar(){
    var dni=document.getElementById("i03").value; //"12345678z"
    var letra="TRWAGMYFPDXBNJZSQVHLCK"  // cadena de comprobación
    dni=calcularNIE(dni); // Calcula si el DNI es un NIE y realiza la conversión a DNI
    letra=letra.split(""); // letra = letra [letra1,letra2,...,letraN];
    var l=dni.split(""); // [1,2,3,4,5,6,7,8,"z"]
    l.pop(); // l = [1,2,3,4,5,6,7,8]
    var x=parseInt(l.join("")); // l="12345678" -> l=12345678 (numérico) -> x
    l=dni.split(""); // l = [1,2,3,4,5,6,7,8,"z"]
    l=l.pop(); //l="z"
    l=l.toUpperCase(); // l = "Z"
    var result=x%23; //14
    if(letra[result]==l){ // comprueba que letra[result] sea igual a l
        result="DNI Válido";    // es igual
    }
    else{
        result="DNI No Válido"; // no es igual
    }
    document.getElementById("res").innerHTML=result; // modifica el string constructor del resultado
}

// Validador especial para el NIE
function calcularNIE(dni){
    var l=dni[0]; // l="x" de dni="x1234...Z"
    l=l.toUpperCase(); // asegura la mayúscula l="X"
    switch (l){ // comprueba l
        case "X":
            dni=dni.replace(l,0) // si l es igual a "X" reemplaza "X" por 0 en dni (dni="0123...Z")
        break;
        case "Y":
            dni=dni.replace(l,1) // si l es igual a "Y" reemplaza "Y" por 1 en dni (dni="1123...Z")
        break;
        case "Z":
            dni=dni.replace(l,2) // si l es igual a "Z" reemplaza "Z" por 2 en dni (dni="2123...Z")
        break;
    }
    return dni; // entrega dni modificado.
}
