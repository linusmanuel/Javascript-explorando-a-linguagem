console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push('Luanda');

console.log(listaDeDestinos);
listaDeDestinos.splice(2, 1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2]);
