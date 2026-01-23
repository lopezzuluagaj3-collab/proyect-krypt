const startBtn = document.getElementById("back-Main");
const btnInstructions = document.getElementById("instructios");

if(btnInstructions){
    btnInstructions.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "./template/instructios.html";
});
}

startBtn.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "../index.html";
});

