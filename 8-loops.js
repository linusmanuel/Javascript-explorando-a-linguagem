console.log(`Trabalhando com loops \n`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcomphado = true;
let temPassagemComprada = false;
let destino = 'Salvador';

const podeComprar = idadeComprador >= 18 || estaAcomphado == true;

console.log('Destinos Possíveis: ');

let contador = 0;

while (true) {
	if (listaDeDestinos[contador] === destino) {
		console.log('Destino encontrado');
	} else {
		console.log('Destino não encontrado');
	}
	contador += 1;
}
