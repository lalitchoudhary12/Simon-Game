let gameSeq = []
let userSeq =[]

let gameStarted = false
let level = 0
let highscore =  1
let h2 = document.querySelector("h2")
let hs = document.querySelector("#highscore")
let allBtn = document.querySelectorAll(".btn")

let color = ["orange","purple","blue","green"]

document.addEventListener("keypress",()=>{
    if(gameStarted==false){
        console.log("************************************")
        console.log("Game Started")
        gameStarted=true
        levelUp()
    }
})

function levelUp() {
    userSeq=[]
    console.log("************************************")
    level++
    h2.innerText = `Level ${level}`
    if(level >= highscore){
        highscore = level;
    }

    let btnIdx = Math.floor(Math.random()*4)
    // console.log(btnIdx+1)
    let btnColor = color[btnIdx]
    // console.log(btnColor)
    let btn = document.querySelector(`.${btnColor}`)
    gameSeq.push(btnColor)
    console.log("Level",level)
    console.log("GameSeq =",gameSeq)
    setTimeout(()=>{flashUp(btn)},750)
}


function flashUp(btn){
    btn.classList.add("white");
    setTimeout(()=>{
        btn.classList.remove("white")
    },250);
}


function btnPress() {
    let btn = this
    flashUp(btn)
    // console.log("Btn was pressed")
    userColor = btn.getAttribute("id")
    userSeq.push(userColor)
    console.log("UserSeq =",userSeq)
    checkAns(userSeq.length-1)
}


for(btn of allBtn) {
    btn.addEventListener("click",btnPress)
}


function checkAns(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp(),250)
        }
    } else {
        h2.innerHTML = `Game Over! Your score was ${level}.<br>Press any key to start.`
        hs.innerHTML =`Highest Score =  ${highscore}`;
        console.log("Game Over!")
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white"
        },250)
        reset()
    }
}


function reset(){
    gameSeq=[]
    userSeq=[]
    level = 0
    gameStarted = false
}
