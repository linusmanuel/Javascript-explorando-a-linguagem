console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push('Luanda');

const idadeComprador = 12;
const estaAcomphado = false;
console.log('Destinos Possíveis: ');
console.log(listaDeDestinos);

const maior = 18;

if (idadeComprador >= maior) {
	listaDeDestinos.splice(2, 1);
} else {
	if (estaAcomphado) {
		console.log('Comprador esta acompanhado!');
		listaDeDestinos.splice(2, 1);
	}
	console.log('Você não é maior de idade, não posso vender!');
}

console.log(listaDeDestinos);
