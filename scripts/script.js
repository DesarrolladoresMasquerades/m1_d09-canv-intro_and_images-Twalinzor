const canvas = document.querySelector("canvas")

canvas.width = 800
canvas.height = 800

const ctx = canvas.getContext("2d")

// SQUARES
ctx.fillStyle = "black"
ctx.fillRect(100, 100, 300, 100)

ctx.fillStyle = "blue"
ctx.fillRect(400, 400, 400, 400)

ctx.fillStyle = "yellow"
ctx.fillRect(300, 300, 100, 100)

// LINES

ctx.beginPath();
ctx.moveTo(0, 400)
ctx.lineTo(800, 400)
ctx.strokeStyle = "red"
ctx.stroke()


ctx.ellipse

// ARC, CIRCLE

// ctx.beginPath()
// ctx.arc(400, 400, 300, 0, Math.PI * 2, false)
// ctx.stroke()
// ctx.strokeStyle = "darkgreen"

// ctx.beginPath()
// ctx.arc(200, 200, 100, 0, Math.PI * 2, false)
// ctx.stroke()
// ctx.strokeStyle = "darkorange"

for (let i = 0; i < 89; i++) {
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height

    ctx.beginPath()
    ctx.arc(100, y, 100, 0, Math.PI * 2, false)
    ctx.stroke()
    ctx.strokeStyle = "darkorange"

}