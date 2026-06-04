//your JS code here. If required.
const container = document.getElementById("container");

const colors = [
    "#e74c3c",
    "#8e44ad",
    "#3498db",
    "#f1c40f",
    "#2ecc71"
];

// Create 800 boxes
for (let i = 0; i < 800; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
        const color = getRandomColor();

        square.style.backgroundColor = color;

        setTimeout(() => {
            square.style.backgroundColor = "#1d1d1d";
        }, 4000ms);
    });

    container.appendChild(square);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}