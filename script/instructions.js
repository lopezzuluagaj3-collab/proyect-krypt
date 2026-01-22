const startBtn = document.getElementById("back-Main");
const btnInstructions = document.getElementById("instructios");

startBtn.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "../index.html";
});

btnInstructions.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "./template/instructios.html";
});

