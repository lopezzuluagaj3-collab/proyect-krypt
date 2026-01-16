// Pregunta numero 1
const questionLists = [
    "¿Cuál es tu comida favorita?",
    "¿Qué lugar te gustaría visitar algún día?",
    "¿Prefieres la mañana o la noche?",
    "¿Cuál es tu película favorita?",
    "¿Qué música escuchas más seguido?",

];

function getRandomQuestions1() {
    const indice = Math.floor(Math.random() * questionLists.length);
    return questionLists[indice];
}

// pregunta numero 2

const questionLists2 = [
    "¿Cuál es tu comida favorita?",
    "¿Qué lugar te gustaría visitar algún día?",
    "¿Prefieres la mañana o la noche?",
    "¿Cuál es tu película favorita?",
    "¿Qué música escuchas más seguido?",

];

function getRandomQuestions2() {
    const indice = Math.floor(Math.random() * questionLists2.length);
    return questionLists2[indice];
}

// pregunta numero 3

const questionLists3 = [
    "¿Cuál es tu comida favorita?",
    "¿Qué lugar te gustaría visitar algún día?",
    "¿Prefieres la mañana o la noche?",
    "¿Cuál es tu película favorita?",
    "¿Qué música escuchas más seguido?",

];

function getRandomQuestions3() {
    const indice = Math.floor(Math.random() * questionLists3.length);
    return questionLists3[indice];
}



//pasar al dar click al contenerdo padre
const containerQuestionMain = document.getElementById('containerQuestionMain');
const textMainFromGame = document.getElementById(`textMainFromGame`);
const contenedor = document.getElementById("containerQuestionMain");

const frases = ["hola", "qué más", "todo bien", "nos vemos"];
let indice = 0;


function refreshMainContainer (){
    const NumberClickFromUser = 0
    while (NumberClickFromUser == 2) {
        containerQuestionMain.addEventListener('click', (e) =>{
            e.defaultPrevented;

            indice++;

            if (indice >= frases.length){
                return None;
            }

            document.textContent = 'textMainFromGame' = document.textContent = 'getRandomQuestions1'
        })
        NumberClickFromUser++
        
    }
}




