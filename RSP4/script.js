const rock=document.querySelector(".rock")
const scissor=document.querySelector(".scissor")
const paper=document.querySelector(".paper")

let match=["d", "d"]
playerScore = 0
opntScore = 0

const result = () =>{

    if(match==[0, 1] & match==[1, 2] & match==[2, 0]){
        alert("win!")
        playerScore++
    }

    else if(match==[0, 0] & match==[1, 1] & match==[2, 2]){
        alert("Draw")
    }

    else{
        alert("Rose")
        opntScore++
    }
}

const leadrock = () =>{
    let opnt = Math.floor(Math.random() * 3)

    match.splice(0,1,0)
    match.splice(1,1,opnt)
    result(match)
}

const leadscissor = () =>{
    let opnt = Math.floor(Math.random() * 3)

    match.splice(0,1,1)
    match.splice(1,1,opnt)
    result(match)
}

const leadpaper = () =>{
    let opnt = Math.floor(Math.random() * 3)

    match.splice(0,1,2)
    match.splice(1,1,opnt)
    result(match)
}

rock.addEventListener("click", leadrock)
scissor.addEventListener("click", leadscissor)
paper.addEventListener("click", leadpaper)