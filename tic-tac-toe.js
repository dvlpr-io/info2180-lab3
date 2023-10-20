window.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll("#board div");
    let turn="X";

    //document.getElementsByTagName("div")
//console.log(document.querySelectorAll("#board div"));

    squares.forEach(function(elem, index) {
        
        elem.setAttribute("class","square");
        elem.addEventListener("click",function(e){
            if (turn=="X"){
                e.target.textContent="X";
                turn="O";
            }
            else {
                e.target.textContent="O";
                turn="X";
            }
            
        });
        //elem.addEventListener('mouseover', function(e) {
    //     e.target.classList.add('hover');
    // });
    
    // elem.addEventListener('mouseout', function(e) {
    //     e.target.classList.remove('hover');
    // });
    });
});