console.log(`Trabalhando com loops \n`);

const listaDeDestinos = new Array(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`,
	`Luanda`
);

const idadeComprador = 18;
const estaAcomphado = true;
let temPassagemComprada = false;
let destino = 'So Paulo';
let destinoExiste = false;
const podeComprar = idadeComprador >= 18 || estaAcomphado == true;

console.log('Destinos Possíveis: ');
console.log(listaDeDestinos);

for (let cont = 0; cont < listaDeDestinos.length; cont++) {
	if (listaDeDestinos[cont] === destino) {
		destinoExiste = true;
		break;
	}
}

console.log('Destino existe: ', destinoExiste);

if (podeComprar && destinoExiste) {
	console.log('Boa Viagem!');
} else {
	console.log('Desculpe, Tivemos um erro...');
}
