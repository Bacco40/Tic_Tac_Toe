let start=document.querySelector(".Start");

let winner=(()=>start.addEventListener('click',(ev)=>{
    ev.preventDefault();
    const winner="";
    let set=0;
    let name1=document.querySelector("#player1");
    let name2=document.querySelector("#player2");
    let simbol=document.querySelector("#selection");
    function setSimbol2(simbol){
        if(simbol.value=="X"){
            const simbol2="O";
            return simbol2;
        }else{
            const simbol2="X";
            return simbol2;
        }
    }
    const simbol2=setSimbol2(simbol);
    function player(name,simbol){
        this.name=name;
        this.simbol=simbol;
    }
    const player1=[]
    player1[set]=new player(name1.value,simbol.value);
    const player2=[]
    player2[set]=new player(name2.value,simbol2);
    function startGame(){
        if(name1.value=="" || name2.value=="" || simbol.value=="null"){
            return (alert("Please enter the player name or select a simbol beore continuing!"))
        }else{
            page.style.cssText="opacity:100%"
            popUp.style.cssText="display:none;" 
            const player1Simbol=document.querySelector("#simbol1")
            const player2Simbol=document.querySelector("#simbol2")
            player1Name.textContent=player1[set].name;
            player2Name.textContent=player2[set].name;
            player1Simbol.textContent=player1[set].simbol;
            player2Simbol.textContent=player2[set].simbol;
        }  
    }
    const popUp=document.querySelector(".popUp");
    const player1Name=document.querySelector("#name1")
    const player2Name=document.querySelector("#name2")
    const page=document.querySelector(".page")
    startGame();
    player1Name.style.color="orange"
    function board(id){
        this.id=id;
    }
    const gameboard=document.querySelectorAll(".field")
    const point1=document.querySelector("#point1");
    const point2=document.querySelector("#point2");
    const win=document.querySelector(".winner")
    const message=document.querySelector(".winMessage")
    const restart=document.querySelector(".restart")
    let boardStatus=[];
    let boardStatus1=[];
    let boardStatus2=[];
    let index=0;
    let index1=0;
    let index2=0;
    let turn=0;
    let points1=0;
    let points2=0;
    const winMatch=[];
    winMatch[0]=["0","1","2"]
    winMatch[1]=["3","4","5"]
    winMatch[2]=["6","7","8"]
    winMatch[3]=["0","3","6"]
    winMatch[4]=["1","4","7"]
    winMatch[5]=["2","5","8"]
    winMatch[6]=["0","4","8"]
    winMatch[7]=["2","4","6"]
    
    function statusBoard(boardSelection){
        boardStatus[index]=boardSelection;
        index=index+1;
    }

    function player1Board(boardSelection){
        boardStatus1[index1]=boardSelection;
        index1=index1+1;
    }
    function player2Board(boardSelection){
        boardStatus2[index2]=boardSelection;
        index2=index2+1;
    }

    function resetBoard(){
        boardStatus.length=0;
        boardStatus1.length=0;
        boardStatus2.length=0;
        index=0;
        index1=0;
        index2=0;
        const newBoard=document.querySelectorAll(`.field`);
        for(let i=0;i<newBoard.length;i++){
            newBoard[i].innerHTML="";
        }
    }
    
    function winMessage(points,name){
        if(points==5){
            message.innerHTML=`Congratulations ${name}!<p>You are the winner!!</p>`
            win.style.cssText="display:flex;"
            page.style.cssText="opacity:40%;"
        }else{
            alert(`Congratulations ${name}! You won the game! but the battle is just began!`)
            resetBoard();
        }
    }

    function checkEnd(turn){
        let select="";
        if(turn==0){
            select=JSON.stringify(boardStatus1);
        }else{
            select=JSON.stringify(boardStatus2);
        }
        for(let i=0;i<=7;i++){
            if(winMatch[i].every(id=> select.includes(id))==true){
                if(turn==0){
                    points1=points1+1;
                    point1.textContent=points1;
                    winMessage(points1,player1[set].name);
                }else{
                    points2=points2+1;
                    point2.textContent=points2;
                    winMessage(points2,player2[set].name);
                }
            }else if(winMatch[i].every(id=> select.includes(id))==false && boardStatus.length==9){
                alert("it's a Tie! well played both of you!");
                resetBoard();
            }
        } 
    }

    gameboard.forEach((gameboard)=>{
        gameboard.addEventListener('click',()=>{
            if(turn==0){
                const check=boardStatus.filter(boardStatus=>(boardStatus.id===gameboard.id))
                if(check.length==0){
                    const boardSelection=new board(gameboard.id);
                    statusBoard(boardSelection);
                    player1Board(boardSelection);
                    gameboard.textContent=player1[set].simbol;
                    checkEnd(turn);
                    turn=1
                    player2Name.style.color="orange"
                    player1Name.style.color="rgb(107, 106, 106)"
                }
                else{
                    return
                }
            }else{
                const check=boardStatus.filter(boardStatus=>(boardStatus.id===gameboard.id))
                if(check.length==0){
                    const boardSelection=new board(gameboard.id);
                    statusBoard(boardSelection);
                    player2Board(boardSelection);
                    gameboard.textContent=player2[set].simbol;
                    checkEnd(turn);
                    turn=0;
                    player1Name.style.color="orange"
                    player2Name.style.color="rgb(107, 106, 106)"
                }
                else{
                    return
                } 
            }
        })   
    })

    restart.addEventListener('click',()=>{
        win.style.cssText="display:none;"
        resetBoard();
        set=set+1;
        turn==0;
        points1=0;
        points2=0;
        document.getElementById("form").reset();
        popUp.style.cssText="display:flex;" 
        player1Name.style.color="orange"
        player2Name.style.color="rgb(107, 106, 106)"
        point1.textContent=points1;
        point2.textContent=points2;
    })
    {
        return winner;
    }
}))();