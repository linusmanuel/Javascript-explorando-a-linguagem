console.log(`Trabalhando com loops \n`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcomphado = true;
let temPassagemComprada = false;
let destino = 'São Paul';
let destinoExiste = false;
const podeComprar = idadeComprador >= 18 || estaAcomphado == true;

console.log('Destinos Possíveis: ');
console.log(listaDeDestinos);

let contador = 0;

while (true) {
	if (listaDeDestinos[contador] === destino) {
		destinoExiste = true;
		break;
	} else {
		destinoExiste = false;
	}
	contador += 1;
}

console.log('Destino existe: ', destinoExiste);
