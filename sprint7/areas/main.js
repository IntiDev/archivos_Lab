var read = require('readline-sync');
var circulo = require('./circulo.js');
var cuadrado = require('./cuadrado.js');
var triangulo = require('./triangulo.js');
var esfera = require('./esfera.js');

console.log('\t \t ***  C A L C U L A D O R A ***');

let opc = parseInt(read.question('\n \n Elige la operacion a realizar: \n \t 1. Area de un circulo \n \t 2. Area de un triangulo \n \t 3. Area de un cuadrado \n \t 4. Volumen de una esfera \n OPCION: '));

switch (opc) {
	case 1:
	    console.log('\n \t \t ***  AREA CIRCULO  ***');
		let r = Number(read.question('\n \n Ingresa el valor del radio: '));
		let areaCir =  circulo(r);
		return console.log('\n A = ' + areaCir);
		break;

	case 2:
		console.log('\n \t \t ***  AREA TRIANGULO ***');
		let b = Number(read.question('\n \n Ingresa el valor de la base: '));
		let h = Number(read.question('Ingresa el valor de la altura: '));
		let areaT = triangulo(b,h);
		return console.log('\n A = ' + areaT);
		break;
	case 3:
		console.log('\n \t \t ***  AREA CUADRADO ***');
		let l = Number(read.question('\n \n Ingresa el valor de un lado: '));
		let areaC = cuadrado(l);
		return console.log('\n A = ' + areaC);
		break;
    case 4:
		console.log('\n \t \t ***  VOLUMEN ESFERA ***');
		let rE = Number(read.question('\n \n Ingresa el valor del radio: '));
		let volumen = esfera(rE);
		return console.log('\n V = ' + volumen);
		break;
	default:
	console.log('\n Lo sentimos el valor ingresado no es valido :(');
}
