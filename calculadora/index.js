console.log("holaaa");

let miVariable = 33; 
var miVariable2 = 47;

const miConstante =55;

console.log("mi edad ES: " + miVariable2);

// condicionales en JS

let miNumero =6;
let miNombre = "Nelson";
// if (miNumero == 6){
//     console.log("si mi numero vale " + miNumero);
// } else{
//     console.log("estas loco NO, el valor es: " + miNumero);
// }

//Uso de boleanos TRUE / FALSE 
// let resultadoPregunta = miNumero == 66;
// console.log(resultadoPregunta);

// uso de condicionales para varias preguntas
// if (miNumero > 2 && miNombre === "Nelson" ){
//     console.log("SI")
// }else{
//     console.log("NO")
// }
// uso de condicionales para varias preguntas OR
// if (miNumero > 2 || miNombre == "Nel5son" ){
//     console.log("SI")
// }else{
//     console.log("NO")
// }

// uso de CICLOS while / for

// let contador = 0;
// while(contador < 5){
//     //console.log("Hola a todos")
//     contador = contador + 1
//     console.log("Hola a todos: " + contador)
// };

// uso del FOR por convencion contador es igual a i
// for( let i = 0; i < 10; ci = i ++ ){
//     console.log("Hola a todos: " + i)
// }

//##funciones: una maquina que me hace tareas la que no recibe nada y no regresa nada
// function saludar(){
//     console.log("Hola a todos: ")
// }
// saludar();

//#### funciones con argumentos
// function saludar(nombre, edad){
//     console.log("Hola a todos mi NOMBRE es : "+ nombre)
//     console.log("Mi edad Es : "+ edad +" Años")
// }
// saludar("Nelson B.", 26);

//### funciones con RETURN para este caso los (num1,num2 ) argumentos, son eficientes cuando tines que pasarlo por varias funciones, encadena funciones

function multiplicar (num1,num2, msj){
    let resultado = num1 * num2 + msj;
    return resultado;
}
console.log("No puedo ver el resultado de la variable : "+ multiplicar +" multiplicar")

let recibidor = multiplicar(5,30," es esl resultado");
//console.log("creo una variable para almacenar el retorno variable recibidor = "+ recibidor +" Años")
console.log("creo una variable para almacenar el retorno variable recibidor = "+ recibidor );

//## los ARREGLOS 
let miArreglo = ["juan", "pedro", "Jhon", "Pocho"];
console.log(miArreglo);
console.log("Esta es una forma de visualizar el arreglo con un CONSOL.LOG "+ miArreglo);
//recorrer e arreglo fon un FOR 
for(let i = 0; i < 4; i++){
    console.log("accediendo a los indices " + i);
    let mostrarArreglo = miArreglo[i];
    console.log("Mostrando ARREGLOS "+ mostrarArreglo)

}
//## vamos ahora con los OBJETOS usan llaves y valores 
let persona = {
    nombre: "Catalina",
    edad: 9,
    masculino:false ,
}
console.log(persona)
//agregamos mas porpiedades a un objeto

persona.comida = "SOPA DE PASTA"

let persona2 = {
    nombre: "JUAN ESTEBAN",
    edad: 11,
    masculino: true,
}
console.log(persona, persona2.nombre)


