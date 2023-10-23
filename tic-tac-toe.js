window.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll("#board div");
    let player="X";
    let playerXWins=false;
    let playerOWins=false;
    const gameStatus = document.getElementById("status");
    const newGameBtn = document.querySelectorAll(".btn")
    const playerX=[];
    const playerO=[];
    const combo1=[0,1,2];
    const combo2=[3,4,5];
    const combo3=[6,7,8];
    const combo4=[0,3,6];
    const combo5=[1,4,7];
    const combo6=[2,5,8];
    const combo7=[0,4,8];
    const combo8=[2,4,6];
    const winningCombo=[combo1,combo2,combo3,combo4,combo5,combo6,combo7,combo8];
    
    function checkcombo(combo,listOfPlays) {
        let checkCondition=true;
        combo.forEach(function(elem, index){
            if (listOfPlays.includes(elem.toString())==false){
                checkCondition=false;
            };
        })
        return checkCondition;
    }

    function checkWinner(combos,listOfPlays){
        let checkCondition=false;
        combos.forEach(function(elem, index){
            if (checkcombo(elem,listOfPlays)==true){
                checkCondition=true;
            };
        })
        return checkCondition;
    }

    function makePlay(player, elem){
        if (!(elem.target.textContent=="X" || elem.target.textContent=="O") && (playerXWins==false && playerOWins==false)){
            elem.target.textContent=player
            elem.target.classList.add(player)
        }
    }

    squares.forEach(function(elem, index) {
        elem.setAttribute('id', index);
        elem.setAttribute("class","square");
        elem.addEventListener("click",function(e){
            if (player=="X"){
                makePlay(player, e)
                playerX.push(e.target.id);
                playerXWins=checkWinner(winningCombo,playerX);
                if (playerXWins==true){
                    gameStatus.innerHTML="Congratulations! X is the Winner!"
                    gameStatus.classList.add("you-won")
                }
                player="O";
            }
            else {
                makePlay(player, e)
                playerO.push(e.target.id);
                playerOWins=checkWinner(winningCombo,playerO);
                if (playerOWins==true){
                    gameStatus.innerHTML="Congratulations! O is the Winner!"
                    gameStatus.classList.add("you-won")
                }
                player="X";
              
            }
            //console.log(`playerO: ${playerO}`);
            //console.log(`playerX: ${playerX}`);
            console.log(checkWinner(winningCombo,playerO));
            console.log(checkWinner(winningCombo,playerX));
            });

            elem.addEventListener('mouseover', function(e) {
                e.target.classList.add('hover');
            });
        
            elem.addEventListener('mouseout', function(e) {
                e.target.classList.remove('hover');
            });   
    });
    //console.log(newGameBtns)
    newGameBtn.forEach(function(button){
        button.addEventListener("click", function(e){
            squares.forEach(function(elem,index){
                elem.textContent="";
                elem.classList.remove('X');
                elem.classList.remove('O');
                gameStatus.innerHTML="Move your mouse over a square and click to play an X or an O."
                gameStatus.classList.remove("you-won")
            })
        })
    })
});