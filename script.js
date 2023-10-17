let container = document.getElementById("container");
let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let squares = 500

for (let i = 0; i < squares; i++) {
    let square = document.createElement("div")

    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}

function setColor(e) {
    let color = getRandomColor()

    e.style.background = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(e) {
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}
function getRandomColor() {
    let randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor]
}