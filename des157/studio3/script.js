(function(){
    "user strict";
    console.log("loading js....");

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const player1win = new Audio('media/player1win.m4a');
    const player2win = new Audio('media/player2win.m4a');
    const start = new Audio('media/start.m4a');
    const rollsound = new Audio('media/roll.m4a');

    //set information for gameData
    var gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 
            'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    //after click on start button, it hide instruction and start the game
    startGame.addEventListener("click",function(){
        gameData.index = Math.round(Math.random());
        
        start.play();//play the start sound

        document.getElementById('overlay').className = 'showing';
        document.getElementById('intro').className = 'hidden';


        gameControl.innerHTML = `<h2>The Game Has Started</h2>`;
        gameControl.innerHTML = `<button id="quit">Wanna Quit?</button>`;

        //if click on quit, go back to the main site
        document.getElementById('quit').addEventListener("click",function(){
            location.reload();
        });

        setUpTurn();
    });

    //start rolling the dice
    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click',function(){
            rollsound.play(); //play the sound of roll
            throwDice();
        });

    }

    function throwDice(){
        actionArea.innerHTML = '';
        //randomly roll 2 dice
        gameData.roll1 = Math.floor(Math.random()*6) + 1;
        gameData.roll2 = Math.floor(Math.random()*6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if both dice is 1, give 0 points to this player
        if(gameData.rollSum === 2){
            game.innerHTML += `<p>Oh snap! Snake eyes!</p>`;
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0): (gameData.index = 1);
            //show the current score
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        // if one dice is point 1, move to the next player
        }else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            //show the current score
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        //else score up
        }else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            console.log(gameData.index, gameData.score[gameData.index], gameData.rollSum);
            actionArea.innerHTML = `<button id="rollagain"> Roll again</button> or <button id = "pass">Pass</button>`;
            
            document.getElementById('rollagain').addEventListener( 'click' , function () {
                console.log("play");
                rollsound.play(); //play the sound of roll
                setUpTurn() ;
            });
            document.getElementById('pass').addEventListener( 'click', function() {
                rollsound.play(); //play the sound of roll
                gameData.index ? (gameData.index = 0):(gameData.index = 1);     
                setUpTurn();
            });

            console.log("check winning condition!")
            checkWinningCondition();            
        }
       
    }

    function checkWinningCondition(){ 
        //if score is greater than 30
        if(gameData.score[gameData.index] > gameData.gameEnd){ 
            //display the result
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`; 
            //start the audio that state who wins the game
            if(gameData.players[gameData.index] === "player 1"){
                console.log("player1 win")
                player1win.play();
            }else if(gameData.players[gameData.index] === "player 2"){
                console.log("player2 win")
                player2win.play();
            }
            actionArea.innerHTML = ""; 
            document.getElementById('quit').innerHTML = "Start a New Game?"; 
        } else { 
            // Show current score
            console.log("show score");
            showCurrentScore();
        } 
    }

    function showCurrentScore(){
        score.innerHTML = `<p><strong>Current Score: </strong> <br/>${gameData.players[0]}: ${gameData.score[0]} <br/> ${gameData.players[1]}: ${gameData.score[1]} <br/></p> `;  

    }

})();