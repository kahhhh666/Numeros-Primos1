let maxNumber = 100;
const grid = document.getElementById("grid");

const images = document.querySelectorAll(".carousel img");
let current = 0;

document.getElementById("next").addEventListener("click", () => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
    images[current].classList.remove("active");
    current = (current - 1 + images.length) % images.length;
    images[current].classList.add("active");
});

function abrirPDF() {
    window.open("questao/Questões sobre números primos com gabarito.pdf", "_blank");
}

function createGrid() {
    grid.innerHTML = "";
    for (let i = 2; i <= maxNumber; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = i;
        cell.onclick = () => markMultiples(i);
        grid.appendChild(cell);
    }
}

function markMultiples(num) {
    document.querySelectorAll(".cell").forEach(cell => {
        const value = parseInt(cell.textContent);
        if (value % num === 0 && value !== num) {
            cell.classList.add("marked");
        }
    });
}

function resetGrid() {
    createGrid();
}

function reduceNumbers() {
    if (maxNumber > 10) {
        maxNumber -= 10;
        createGrid();
    }
}

function addNumbers() {
    if (maxNumber < 200) {
        maxNumber += 10;
        createGrid();
    }
}

function displayPrimes() {
    document.querySelectorAll(".cell").forEach(cell => {
        const num = parseInt(cell.textContent);
        if (!isPrime(num)) {
            cell.classList.add("marked");
        }
    });

    // Corrigido: certifique-se de que existe um elemento com id "mensagem"
    const msg = document.getElementById("mensagem");
    if (msg) {
        msg.innerHTML = "Só sobraram os primos!";
    }
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


createGrid();
