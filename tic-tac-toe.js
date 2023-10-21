window.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll("#board div");
    let turn="X";
    const winner=[];
    const combo1=[0,1,2];
    const combo2=[3,4,5];
    const combo3=[6,7,8];
    const combo4=[0,3,6];
    const combo5=[1,4,7];
    const combo6=[2,5,8];
    const combo7=[0,4,8];
    const combo8=[2,4,6];
    const winningCombo=[combo1,combo2,combo3,combo4,combo5,combo6,combo7,combo8];
    //put function here 

    //document.getElementsByTagName("div")
//console.log(document.querySelectorAll("#board div"));

    squares.forEach(function(elem, index) {
        
        elem.setAttribute("class","square");
        elem.addEventListener("click",function(e){
            if (turn=="X"){
                e.target.textContent="X";
                e.target.classList.add('X');
                winner.push("X");
                turn="O";
                //call back function here

            }
            else {
                e.target.textContent="O";
                e.target.classList.add('O');
                winner.push("O");
                turn="X";
                //
                for (let winner1 = 0; winner1< winningCombo.length; winner1++){
                    //for (const realwinner in winner){
                        if (winner[winner1[0]] && winner[winner1[1]]==winner[winner1[0]]  && winner[winner1[2]]==winner[winner1[0]]){
                            console.log("x is the winner") 
                        }

                    //}
                    
                    //if (winner==winner1){
                        

                    
                    //console.log(winner1);
                }//put line 34-47 in a func
                //
            }
            console.log(winner);
            });
            elem.addEventListener('mouseover', function(e) {
                e.target.classList.add('hover');
            });
        
            elem.addEventListener('mouseout', function(e) {
                e.target.classList.remove('hover');
            });

           
        
    });
});