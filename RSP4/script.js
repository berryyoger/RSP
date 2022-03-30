const rock=document.querySelector(".rock")
const scissor=document.querySelector(".scissor")
const paper=document.querySelector(".paper")

// let match=["d", "d"]
playerScore = 0
opntScore = 0

let match = "d"

let opnt = Math.floor(Math.random() * 3)

const result = () =>{


    alert(match-opnt)

    if(match-opnt == -2||match-opnt == -1||match-opnt == 2){
        alert("win!")
        playerScore++
    }

    else if(match==opnt){
        alert("Draw")
    }

    else{
        alert("Rose")
        opntScore++
    }
}

const leadrock = () =>{
    opnt = Math.floor(Math.random() * 3)
    match = 0
    // match.splice(0,1,0)
    // match.splice(1,1,opnt)
    result(match)
}

const leadscissor = () =>{
    opnt = Math.floor(Math.random() * 3)
    match = 1
    // match.splice(0,1,1)
    // match.splice(1,1,opnt)
    result(match)
}

const leadpaper = () =>{
    opnt = Math.floor(Math.random() * 3)
    match = 2
    // match.splice(0,1,2)
    // match.splice(1,1,opnt)
    result(match)
}

rock.addEventListener("click", leadrock)
scissor.addEventListener("click", leadscissor)
paper.addEventListener("click", leadpaper)