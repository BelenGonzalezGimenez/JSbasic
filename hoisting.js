/*hoisting sucede cuando en algun lenguaje es 
necesario declarar primero las variables y 
las funciones para luego poder utilizarlas o
invocarlas*/

/*aqui javascript reconoce que el argumento con el que se llama a console.log
es una variable, pero como no se ha declarado antes jcompiler la declara por nosotros y
lo inicializa en undefine, luego retorna el control a la funcion e imprime en la consola
undefine*/
//console.log(miNombre);

var miNombre; //declaracion
//miNombre = "Diego"; //inicializacion

//console.log(miNombre);

/*funcionara siempre y cuando las variables que utiliza esten declaradas antes
de invocar a la funcion 
el compilador llega hasta la invocacion, busca la implementacion, la manda hasta arriba
encuentra las variables no */
hey();
function hey(){
    console.log("Hola " + miNombre);
}