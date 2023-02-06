console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push('Luanda');

const idadeComprador = 18;
const estaAcomphado = true;
console.log('Destinos Possíveis: ');
console.log(listaDeDestinos);

const maiorIdade = idadeComprador >= 18;

if (maiorIdade || estaAcomphado) {
	listaDeDestinos.splice(2, 1);
	console.log('Boa viagem!!!');
	estaAcomphado ? console.log('Comprador está acompanhado!') : '';
} else {
	console.log('Você não é maior de idade, não posso vender!');
}

console.log(listaDeDestinos);
