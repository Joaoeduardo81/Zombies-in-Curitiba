

//1a rodada - escolher movimento: Hide, Evade, Fight, Bomb.

//Hide
function hide() {
      // Infecção bairro a bairro com o movimento Hide
      function evadeMove() {
        let humansArr = humansRemaining();//
        return humansArr.map(function(block) {
          return Math.floor(block * ((Math.random() * (1) + 2) / 100)); //chance entre 1 e 2% de de morrer enquanto escondido.
        });
      }
      console.log("You've ordered the population to hide, still " + evadeMove() + " got infected." );
      
      
      // Atualização dos humanos bairro a bairro
      function updatedHumansRemaining() {
        let humansArr = humansRemaining(); //
        let infectedhumansArray = evadeMove();
        return humansArr.map(function(block, index) {
          return block - infectedhumansArray[index];
        });
      }
      console.log("Humans remaining after Hide are now " + updatedHumansRemaining());

      // Total de humanos na cidade depois de Hide
      function updatedTotalHumansRemaining() {
        let humansArr = updatedHumansRemaining();
        return humansArr.reduce((acc, value) => {
          return acc + value;
        }, 0);
      }
      console.log("Total humans remaining in town after Hide " + updatedTotalHumansRemaining());
      

      // Atualização dos zumbis bairro a bairro
      function updatedZombiesPerNeighborhood() {
        let newZombies = evadeMove(); //
        let previousZombies = zombiesPerNeighborhood();
        return previousZombies.map(function(block, index) {
          return block + newZombies[index];
          });
        };
          console.log("Zombies per neighborhood after Hide are " + updatedZombiesPerNeighborhood());

       // Total de zumbis na cidade depois de Hide
      function updatedTotalZombiesPerNeighborhood() {
        let zombiesArr = updatedZombiesPerNeighborhood();
        return zombiesArr.reduce((acc, value) => {
          return acc + value;
        }, 0);
      }
      console.log("Total zombies remaining in town after Evade " + updatedTotalZombiesPerNeighborhood());
   
        // posição do jogo
        function gameStatus() { 
          return ((updatedTotalZombiesPerNeighborhood() / updatedTotalHumansRemaining()) * 100).toFixed(2);
        }

        function updater() {
          let humansUpdaterArr = updatedHumansRemaining();
          let zombiesUpdaterArr = updatedZombiesPerNeighborhood();
        Object.keys(neighborhoods).forEach(function(nomeDoMeuBairro, i) {
          neighborhoods[nomeDoMeuBairro].humans =  humansUpdaterArr[i];
          neighborhoods[nomeDoMeuBairro].zombies = zombiesUpdaterArr[i];
        });
        };
        
        updater();

        console.log("The city is infested with " + gameStatus() + "%" + " of zombies");
        alert (" Hide is a safe play to by time. Smart move! Still, the city is now infested with " + gameStatus() + "%" + " of zombies");
        
    };
    
    // End of Hide

    function evade() {
      // Infecção bairro a bairro com o movimento Evade
      function evadeMove() {
        let humansArr = humansRemaining();//
        return humansArr.map(function(block) {
          return Math.floor(block * ((Math.random() * (3) + 5) / 100)); // chance entre 3 e 5  de conseguir fugir
        });
      }
      console.log("You've ordered the population to Evade, " + evadeMove() + " managed to get out of the city." );
      
      function evadeFail() {
        let humansArr = humansRemaining();//
        return humansArr.map(function(block) {
          return Math.floor(block * ((Math.random() * (3) + 5) / 100)); // chance entre 3 e 5 de conseguir fugir
        });
      }
      console.log("You've ordered the population to Evade, still " + evadeFail() + " died in the way out." );

      // Somar mortos e fugidos
      function evadedPlusFailed() {
        let evadedArr = evadeMove(); //
        let failedArray = evadeFail();
        return evadedArr.map(function(block, index) {
          return block + failedArray[index];
        });
      }
      console.log("After the Evade order, there number of humans has been reduced by " + evadedPlusFailed() );

      // Atualização dos humanos bairro a bairro
      function updatedHumansRemaining() {
        let humansArr = humansRemaining(); //
        let lesshumansArray = evadedPlusFailed();
        return humansArr.map(function(block, index) {
          return block - lesshumansArray[index];
        });
      }
      console.log("Humans remaining after Evade are now " + updatedHumansRemaining());

      // Total de humanos na cidade depois de Evade
      function updatedTotalHumansRemaining() {
        let humansArr = updatedHumansRemaining();
        return humansArr.reduce((acc, value) => {
          return acc + value;
        }, 0);
      }
      console.log("Total humans remaining in town after Evade " + updatedTotalHumansRemaining());
      

      // Atualização dos zumbis bairro a bairro
      function updatedZombiesPerNeighborhood() {
        let newZombies = evadeFail(); //
        let previousZombies = zombiesPerNeighborhood();
        return previousZombies.map(function(block, index) {
          return block + newZombies[index];
          });
        } 
        console.log("Zombies per neighborhood after Evade are" + updatedZombiesPerNeighborhood());

            // Total de zumbis na cidade depois de Evade
      function updatedTotalZombiesPerNeighborhood() {
        let zombiesArr = updatedZombiesPerNeighborhood();
        return zombiesArr.reduce((acc, value) => {
          return acc + value;
        }, 0);
      }
      console.log("Total zombies remaining in town after Evade " + updatedTotalZombiesPerNeighborhood());

        // posição do jogo
        function gameStatus() { 
          return ((updatedTotalZombiesPerNeighborhood() / updatedTotalHumansRemaining()) * 100).toFixed(2);
        }

        function updater() {
          let humansUpdaterArr = updatedHumansRemaining();
          let zombiesUpdaterArr = updatedZombiesPerNeighborhood();
        Object.keys(neighborhoods).forEach(function(nomeDoMeuBairro, i) {
          neighborhoods[nomeDoMeuBairro].humans =  humansUpdaterArr[i];
          neighborhoods[nomeDoMeuBairro].zombies = zombiesUpdaterArr[i];
        });
        };
        
        updater();


        console.log("The city is infested with " + gameStatus() + "%" + " of zombies");
        alert ("Evade is the best way to keep people safe from the desease, but there`s a risk. Frot that, the city is by now infested with " + gameStatus() + "%" + " of zombies");
    };
     
    // End of Evade

    function fight() {
        // Infecção bairro a bairro com o movimento Fight
        function fightMove() {
          let previousZombies = zombiesPerNeighborhood();// 
          return previousZombies.map(function(block) {
            return Math.floor(block * ((Math.random() * (4) + 6) / 100)); // chance entre 4 e 6  de matar zumbis na luta
          });
        }
        console.log("You've ordered the population to Fight, they have killed as many Zombies as " + fightMove());
        
        function fightFail() {
          let humansArr = humansRemaining();//
          return humansArr.map(function(block) {
            return Math.floor(block * ((Math.random() * (4) + 6) / 100)); // chance entre 4 e 6 de morrer na luta
          });
        }
        console.log("You've ordered the population to Fight, though some have died in the struggle " + fightFail());
    
        // Atualização dos humanos bairro a bairro
        function updatedHumansRemaining() {
          let humansArr = humansRemaining(); //
          let lesshumansArray = fightFail();
          return humansArr.map(function(block, index) {
            return block - lesshumansArray[index];
          });
        }
        console.log("Humans remaining after Fight are now " + updatedHumansRemaining());
    
        // Total de humanos na cidade depois de Fight
        function updatedTotalHumansRemaining() {
          let humansArr = updatedHumansRemaining();
          return humansArr.reduce((acc, value) => {
            return acc + value;
          }, 0);
        }
        console.log("Total humans remaining in town after Fight " + updatedTotalHumansRemaining());
    
        // Contabilizar humanos e zumbis mortos 
      function casualties() {
        let deadHumansArr = fightFail(); //
        let deadZombiesArray = fightMove();
        return deadHumansArr.map(function(block, index) {
          return block - deadZombiesArray[index];
        });
      }
      console.log("Since dead humans turns into zombies but dead zombies desapear, the update to the zombies at large will be " + casualties() );

        // Atualização dos zumbis bairro a bairro
        function updatedZombiesPerNeighborhood() {
          let newZombies = casualties(); //
          let previousZombies = zombiesPerNeighborhood();
          return previousZombies.map(function(block, index) {
            return block + newZombies[index];
            });
          } 
      console.log("Zombies per neighborhood after Fight are " + updatedZombiesPerNeighborhood());

        // Total de zumbis na cidade depois de Fight
        function updatedTotalZombiesPerNeighborhood() {
          let zombiesArr = updatedZombiesPerNeighborhood();
          return zombiesArr.reduce((acc, value) => {
            return acc + value;
          }, 0);
      }
      console.log("Total zombies remaining in town after Fight " + updatedTotalZombiesPerNeighborhood());
    
          // posição do jogo
          function gameStatus() { 
            return ((updatedTotalZombiesPerNeighborhood() / updatedTotalHumansRemaining()) * 100).toFixed(2);
          }

          function updater() {
            let humansUpdaterArr = updatedHumansRemaining();
            let zombiesUpdaterArr = updatedZombiesPerNeighborhood();
          Object.keys(neighborhoods).forEach(function(nomeDoMeuBairro, i) {
            neighborhoods[nomeDoMeuBairro].humans =  humansUpdaterArr[i];
            neighborhoods[nomeDoMeuBairro].zombies = zombiesUpdaterArr[i];
          });
          };
          
          updater();


          console.log("The city is infested with " + gameStatus() + "%" + " of zombies");
          alert ("We all hate those m0th3rFu#ing zombies! Kill them is a thrill, but the fight has costed us. The city is infested with " + gameStatus() + "%" + " of zombies");
      };
        
      //End of Fight
  

      function bomb() {
          // Impacto das bombas bairro a bairro sobre os humanos
          function bombMoveOverHumans() {
            let humansArr = humansRemaining();//
            return humansArr.map(function(block) {
              return Math.floor(block * ((Math.random() * (2) + 15) / 100)); // chance entre 2 e 15 de morrer no bombardeio.
            });
          }
          console.log("You've ordered the bombing, the impact over the human population was in the order of " + bombMoveOverHumans());

          // Impacto das bombas bairro a bairro sobre os zumbis
          function bombMoveOverZombies() {
            let previousZombies = zombiesPerNeighborhood();//
            return previousZombies.map(function(block) {
              return Math.floor(block * ((Math.random() * (2) + 15) / 100)); // chance entre 2 e 15 de morrer no bombardeio.
            });
          }
          console.log("You've ordered the bombing, the impact over the zombies were in the order of " + bombMoveOverZombies());

          // Atualização dos humanos bairro a bairro
          function updatedHumansRemaining() {
            let humansArr = humansRemaining(); //
            let bombedHumansArray = bombMoveOverHumans();
            return humansArr.map(function(block, index) {
              return block - bombedHumansArray[index];
            });
          }
          console.log("Humans remaining after Bomb are now " + updatedHumansRemaining());

          // Total de humanos na cidade depois de Bomb
          function updatedTotalHumansRemaining() {
            let humansArr = updatedHumansRemaining();
            return humansArr.reduce((acc, value) => {
              return acc + value;
            }, 0);
          }
          console.log("Total humans remaining in town after Bomb " + updatedTotalHumansRemaining());
          

          // Atualização dos zumbis bairro a bairro
          function updatedZombiesPerNeighborhood() {
            let bombedZombies = bombMoveOverZombies(); //
            let previousZombies = zombiesPerNeighborhood();
            return previousZombies.map(function(block, index) {
              return block + bombedZombies[index];
              });
            } 
            console.log("Zombies per neighborhood after Bomb are" + updatedZombiesPerNeighborhood());

          // Total de zumbis na cidade depois de Bomb
          function updatedTotalZombiesPerNeighborhood() {
            let zombiesArr = updatedZombiesPerNeighborhood();
            return zombiesArr.reduce((acc, value) => {
              return acc + value;
            }, 0);
          }
          console.log("Total zombies remaining in town after Bomb " + updatedTotalZombiesPerNeighborhood());

            // posição do jogo
            function gameStatus() { 
              return ((updatedTotalZombiesPerNeighborhood() / updatedTotalHumansRemaining()) * 100).toFixed(2);
            }

            function updater() {
              let humansUpdaterArr = updatedHumansRemaining();
              let zombiesUpdaterArr = updatedZombiesPerNeighborhood();
            Object.keys(neighborhoods).forEach(function(nomeDoMeuBairro, i) {
              neighborhoods[nomeDoMeuBairro].humans =  humansUpdaterArr[i];
              neighborhoods[nomeDoMeuBairro].zombies = zombiesUpdaterArr[i];
            });
            };
            
            updater();

            console.log("The city is infested with " + gameStatus() + "%" + " of zombies");
            alert ("With great powers come great responsabilities, the choice to bomb puts everyone at risk, but it`s a way to kill zombies and prevent people from turning. Due to the bombing, the city is infested with " + gameStatus() + "%" + " of zombies");
    };
      
// How the game runs

//contador de rodadas
  let gameRounds = 0;

// contador de humanos vivos
let cityInfestationStatus = gameStatus();
console.log( "City infestation is now at " + cityInfestationStatus + "%");

//Pop de Game Over
function myPop() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
};


//regra de jogo
  function gamePlay() {
    if (cityInfestationStatus > 100) { myPop() }
    else  { return gameRounds++; }
  };

  gamePlay()

  console.log("This is the gameplay # " + gameRounds);
  
  //mostrar jogadas até o momento ???
  function changeText(){
    document.getElementById("rounds-counter").innerHTML = gameRounds;
  };

// atualizar player
  const sendBtn = document.getElementById("send-name")
sendBtn.addEventListener('click', newPlayer)

// armazenando os objetos jogador numa array
const players = [];

// lançar valor do novo jogador na array players
function newPlayer() {
  let name = document.getElementById("player-name").value
  players.push(new Player(name));
}
//objeto jogador
class Player {
  constructor(name) {
    this.name = name
    this.rounds;
  }

}


//rascunho
/* 
    Object.keys(neighborhoods).forEach(function(nomeDoMeuBairro) {
      neighborhoods[nomeDoMeuBairro].humans += 10;
    });
    console.log('Nova pop', humansPerNeighborhood());


 window.onload = function() {
  document.getElementById("Hide").onclick = function() {
    startGame();
  };

  function startGame() {
    while (totalHumans > 0 ) {
  //zombieProgressionStart(
    //each loop = round + 1;

}
 return alert("Game Over")}    
  };



//Rodada 
let rounds;
function roundCounter() {
while (totalHumans > 0 ) {


}


(rounds = 0; totalHumans > 0; rounds++); 
else { alert("Game Over")}
}; */

    // Somar populaçao dos bairros, humanos e zumbis para calcular impacto da bomba.
    // function addHumansAndZombies() {
    //   let humansArr = humansRemaining(); //
    //   let previousZombies = zombiesPerNeighborhood();//
    //   return previousZombies.map(function(block, index) {
    //      return block + humansArr[index];
    //      });
    //     }
    //   console.log("Adding humans and zombies per neighborhood" + addHumansAndZombies());