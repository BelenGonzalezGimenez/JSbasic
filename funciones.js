//funciones declarativas

function miFuncion(){
    return 3;
}

//la llamamos con el nombre de la funcion, pasandole los parametros que necesita

//funciones de expresion/anonimas
    //se llama anonima porque la funcion dentro de la variable no tiene un nombre

var miFuncion = function(/*Parametros */){
    return "a"+"b"
}

//como las llamamos con el nombre de la variable, pasandole los parametros que necesita

//ejemplos
    //Ejemplo1
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
}

saludarEstudiantes("Diego")

    //Ejemplo2
function sumar(a,b){
    var resultado = a + b;
    return resultado;
}

sumar(1,2);