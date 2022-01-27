console.log("fireball loaded")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const fireball = new Image()
fireball.src = "images/fireBall.png"

fireball.addEventListener(
    "load",
    ()=>ctx.drawImage(
    fireball,
    0,0,
    150, 100
)

)