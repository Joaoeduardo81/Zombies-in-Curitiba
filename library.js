// Array com objetos do objeto 
let neighboorhoodsPop = Object.values(neighborhoods);
console.log("Array com os objetos do objeto neighborhood " + neighboorhoodsPop);

// Array com chaves dos objetos = nomes dos bairros
let neighborhoodsNames = Object.keys(neighborhoods);
console.log(neighborhoodsNames);

// montar humansArray de humans
function humansPerNeighborhood() {
  return neighboorhoodsPop.map(function(obj) {
    return obj.humans;
  });
}
console.log("Humans per neighborhood " + humansPerNeighborhood());

// soma dos valores de human do objeto neighborhoods
function totalHumans() {
  return Object.values(neighborhoods).reduce((acc, value) => {
    return acc + value.humans;
  }, 0);
}
console.log("Total humans per neighborhood " + totalHumans());

// montar Array de zombies
function zombiesPerNeighborhood() {
  return neighboorhoodsPop.map(function(obj) {
    return obj.zombies;
  });
}
console.log("Zombies per neighborhood before infection " + zombiesPerNeighborhood());


//aplicar fator de progressao randomico a cada bairro (humansArray) p/ humans
function startInfection() {
  let humansArr = humansPerNeighborhood();
  return humansArr.map(function(block) {
    return Math.floor(block * ((Math.random() * 9) / 100));
  });
}
console.log("Ohhh my gosh! Humans infected at start " + startInfection());



//subtrair da populacao inicial os infectados, bairro a bairro
function humansRemaining() {
  let humansArr = humansPerNeighborhood();
  let infectedhumansArray = startInfection();
  return humansArr.map(function(block, index) {
    return block - infectedhumansArray[index];
  });
}
console.log("Humans remaining are now " + humansRemaining());



// totalizar humanos que sobreviveram
function totalHumansRemaining() {
  let humansArr = humansRemaining();
  return humansArr.reduce((acc, value) => {
    return acc + value;
  }, 0);
}
console.log("Total humans remaining in town " + totalHumansRemaining());


// totalizar Zumbis na cidade
function totalZombies() {
  let zombiesPerNeighborhoodArr = startInfection();
  return zombiesPerNeighborhoodArr.reduce((acc, value) => {
    return acc + value;
  }, 0);
}
console.log("Total zombies at large " + totalZombies());

//atualizar o banco com a populaçao atual de Humans e Zombies
function updater() {
  let humansUpdaterArr = humansRemaining();
  let zombiesUpdaterArr = startInfection();
Object.keys(neighborhoods).forEach(function(nomeDoMeuBairro, i) {
  neighborhoods[nomeDoMeuBairro].humans =  humansUpdaterArr[i];
  neighborhoods[nomeDoMeuBairro].zombies = zombiesUpdaterArr[i];
});
};

updater();



//gerar status - humans/zombies - OK
function gameStatus() { 
  return ((totalZombies() / totalHumansRemaining()) * 100).toFixed(2);
}
console.log("The city is infested with " + gameStatus() + "%" + " of zombies");

alert ("Curitiba is facing a struggle, no one knows how it has begun, there have been reports of vicious attacks by some mutated deceased, people call them zombies. It is your task to manage the infection and hold it until scientists can find a cure. " + "Now the city is infested with " + gameStatus() + "%" + " of zombies")

