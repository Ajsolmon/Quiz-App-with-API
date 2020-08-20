const quizType = document.getElementById('quizType')
const quizCard = document.getElementById('quizCard')
const flagCard = document.getElementById('flagCard')
const doneCard = document.getElementById('doneCard')
const prevButt = document.getElementById('prevButt')
const prevButtf = document.getElementById('prevButtf')
const nextButt = document.getElementById('nextButt')
const nextButtf = document.getElementById('nextButtf')
const submitButt = document.getElementById('submitButt')
const submitButtf = document.getElementById('submitButtf')

let clickCount = 0 

function cquests(){
    quizType.style.display = 'none'
    quizCard.style.display = 'block'
    prevButt.style.display = 'none'
    submitButt.style.display = 'none'
}

function fquests(){
    quizType.style.display = 'none'
    flagCard.style.display = 'block'
    prevButtf.style.display = 'none'
    submitButtf.style.display = 'none'
}

         
function nextBut(){
    clickCount++            //increases the count of clickcount via iteration
    
    if(clickCount===1){
        prevButt.style.display = 'block'
        prevButtf.style.display = 'block'
    }

    if(clickCount===3){
        nextButt.style.display = 'none'
        nextButtf.style.display = 'none'
        submitButt.style.display = 'block'
        submitButtf.style.display = 'block'
    }

    if(clickCount===4){
        quizCard.style.display = 'none'
        flagCard.style.display = 'none'
        doneCard.style.display = 'block'
    }
}

function prevBut(){
    clickCount--

    if(clickCount===0){
        prevButt.style.display = 'none'
        prevButtf.style.display = 'none'
    }
}

function tryAgain(){
    doneCard.style.display = 'none'
    quizType.style.display = 'block'
}
