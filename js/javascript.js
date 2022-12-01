'use strict';

/*
console.log("archivo enlazado")
let nombreusuario = prompt('Nombre de Usuario');
console.log(nombreusuario);

let edadusuario = prompt('Edad de Usuario');
console.log(edadusuario);

let nombreyedad =nombreusuario + " " + edadusuario;
document.write(nombreyedad); */

//OPERADORES
/*
let numero1= parseInt(prompt('Ingrese el primer numero'));
let numero2= parseInt(prompt('Ingrese el Segundo numero'));


let resultado= numero1+numero2;
document.write("el resultado de la suma es:", numero1,"+ ",numero2,"=", resultado);
document.write('<br>')

resultado= numero1 - numero2
document.write("el resultado de la Resta es:", numero1,"+ ",numero2,"=", resultado);
document.write('<br>')

resultado= numero1 * numero2
document.write("el resultado de la Multiplicación es:", numero1,"+ ",numero2,"=", resultado);
document.write('<br>')

resultado= numero1 / numero2
document.write("el resultado de la División es:", numero1,"+ ",numero2,"=", resultado);
document.write('<br>')

resultado= numero1 % numero2
document.write("el resto de la División o modulo es:", numero1,"+ ",numero2,"=", resultado);
document.write('<br>')*/
/* Cadenas literales */
/*
const nombre1 = 'Johnnathan';
const nombre2 = 'Alexander';
const apellido1 = 'Gallego';
const apellido2 = 'Romero';

//const nombreApellido = nombre + ' ' + apellido;
const nombreApellido = `Los apellidos de ${nombre1} ${nombre2} es ${apellido1} ${apellido2}`;
console.log(nombreApellido);
document.write(`Los apellidos de ${nombre1} ${nombre2} es ${apellido1} ${apellido2}`);
*/
/*
let numero1= parseInt(prompt('Ingrese el primer numero'));
let numero2= parseInt(prompt('Ingrese el Segundo numero'));

let resultado = numero1 + numero2;

numero1++;
console.log(numero1);
numero2--;
console.log(numero2);

resultado = numero1 * numero2;
document.write(`el valor multiplicado de ${numero1} * ${numero2} es = ${resultado} `);
*/

//comparación (== : igual que , === : identico a, !== , !=== no es identivo, <, >, <=, >=, )

/*
let variable1 = '10';
let variable2 = 10 ;

let resultado = variable1 == variable2;
console.log ('resultado:', resultado)

let variable3 = '10';
let variable4 = 10 ;

let resultado1 = variable3 !== variable4; 
console.log ('resultado1:', resultado1) */

// OPERADORES LOGICOS
/*
let variable1 = 1;
let variable2 = 2;

let resultado = variable1 === 1 && variable2 === 22; // && cumplen las dos variable1 Y variable2
resultado = variable1 === 1 || variable2 === 22; // || cumple una de las dos, variable1 O variable2
console.log('resltado:',resultado)
console.log('resltado:',!resultado) // ! de negación : pasa al lado contrario el resultado
*/


//ejercicio 



let nombre = prompt('ingrese su nombre');
let pepita = 'pepita';

let resultado = nombre === pepita;
console.log(resultado);
document.write(`su nombre es ${nombre}`);
document.write('<br>');




let edad = Number(prompt('ingrese su edad'));
let numeroedad = '18';

resultado= edad === 18;
console.log(resultado);
document.write(`su edad es ${edad}`);










