function randomDeg(){
    rand=(Math.random()*(1080-360))+360
    
    console.log("losuje")
    return rand
}
function roll() {
    let x = document.getElementById("box") 
    x.style.rotate="0deg"
    deg=randomDeg()
    text=deg.toString()
    text+="deg"
    console.log(text)
    x.style.rotate = text
    x.style.transition = "2s"
}
function reset() {
    let x = document.getElementById("box")
    x.style.rotate="0deg"
    x.style.transition = "0s"
}