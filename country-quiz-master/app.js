
  const quizType = document.getElementById('quizType')
  const quizCard = document.getElementById('quizCard')
  const flagCard = document.getElementById('flagCard')
  const flagCard1 = document.getElementById('flagCard1')
  const flagCard2 = document.getElementById('flagCard2')
  const flagCard3 = document.getElementById('flagCard3')
  const resultCard = document.getElementById('resultCard')
  const resultCard1 = document.getElementById('resultCard1')
  const resultCard2 = document.getElementById('resultCard2')
  const resultCard3 = document.getElementById('resultCard3')
  const doneCard = document.getElementById('doneCard')
  const doneCardf = document.getElementById('doneCardf')
  const nextButt1 = document.getElementById('nextButt1')
  const nextButt2 = document.getElementById('nextButt2')
  const nextButt3 = document.getElementById('nextButt3')
  const nextButtlast = document.getElementById('nextButtlast')
  const nextButtr = document.getElementById('nextButtr')
  const nextButtr0 = document.getElementById('nextButtr0')
  const prevButt = document.getElementById('prevButt')
  const nextButtf1 = document.getElementById('nextButtf1')
  const nextButtf2 = document.getElementById('nextButtf2')
  const nextButtf3 = document.getElementById('nextButtf3')
  const nextButtf4 = document.getElementById('nextButtf4')
  const submitButt = document.getElementById('submitButt')
  let clickCount = 0 




  const outerDiv1 = document.getElementById('name1').parentElement
  const outerDiv2 = document.getElementById('name2').parentElement
  const outerDiv3 = document.getElementById('name3').parentElement
  const outerDiv4 = document.getElementById('name4').parentElement
  
  const outerDiv11 = document.getElementById('name11').parentElement
  const outerDiv21 = document.getElementById('name21').parentElement
  const outerDiv31 = document.getElementById('name31').parentElement
  const outerDiv41 = document.getElementById('name41').parentElement
  
  const outerDiv12 = document.getElementById('name12').parentElement
  const outerDiv22 = document.getElementById('name22').parentElement
  const outerDiv32 = document.getElementById('name32').parentElement
  const outerDiv42 = document.getElementById('name42').parentElement
  
  const outerDiv13 = document.getElementById('name13').parentElement
  const outerDiv23 = document.getElementById('name23').parentElement
  const outerDiv33 = document.getElementById('name33').parentElement
  const outerDiv43 = document.getElementById('name43').parentElement




  const flagDiv1 = document.getElementById('namef1').parentElement
  const flagDiv2 = document.getElementById('namef2').parentElement
  const flagDiv3 = document.getElementById('namef3').parentElement
  const flagDiv4 = document.getElementById('namef4').parentElement
  
  const flagDiv11 = document.getElementById('namef11').parentElement
  const flagDiv21 = document.getElementById('namef21').parentElement
  const flagDiv31 = document.getElementById('namef31').parentElement
  const flagDiv41 = document.getElementById('namef41').parentElement
  
  const flagDiv12 = document.getElementById('namef12').parentElement
  const flagDiv22 = document.getElementById('namef22').parentElement
  const flagDiv32 = document.getElementById('namef32').parentElement
  const flagDiv42 = document.getElementById('namef42').parentElement
  
  const flagDiv13 = document.getElementById('namef13').parentElement
  const flagDiv23 = document.getElementById('namef23').parentElement
  const flagDiv33 = document.getElementById('namef33').parentElement
  const flagDiv43 = document.getElementById('namef43').parentElement




const outerDivr1 = document.getElementById('namer1').parentElement
const outerDivr2 = document.getElementById('namer2').parentElement
const outerDivr3 = document.getElementById('namer3').parentElement
const outerDivr4 = document.getElementById('namer4').parentElement

const outerDivr11 = document.getElementById('namer11').parentElement
const outerDivr21 = document.getElementById('namer21').parentElement
const outerDivr31 = document.getElementById('namer31').parentElement
const outerDivr41 = document.getElementById('namer41').parentElement

const outerDivr12 = document.getElementById('namer12').parentElement
const outerDivr22 = document.getElementById('namer22').parentElement
const outerDivr32 = document.getElementById('namer32').parentElement
const outerDivr42 = document.getElementById('namer42').parentElement

const outerDivr13 = document.getElementById('namer13').parentElement
const outerDivr23 = document.getElementById('namer23').parentElement
const outerDivr33 = document.getElementById('namer33').parentElement
const outerDivr43 = document.getElementById('namer43').parentElement


let correctCount = document.getElementById('correctCount')
let correctCountf = document.getElementById('correctCountf')
let addone = 0
let addtwo = 0
let addthree = 0
let addfour = 0           //values to be added together to get the results of the quiz

nextButt1.disabled = true       // to disable the next buttons
   
if(nextButt1.disabled = true){    // to style the disabled next buttons
  nextButt1.style.opacity = 0.7
}

nextButtf1.disabled = true       // to disable the next buttons
   
if(nextButtf1.disabled = true){    // to style the disabled next buttons
  nextButtf1.style.opacity = 0.5
}

//CHOICE CONFIGURATION FOR THE FIRST QUESTION
function choice1(){
  
nextButt1.disabled = false
  nextButt1.style.opacity = 1
  addone = 0

  outerDiv1.style.backgroundColor = '#F9A826'     //to select an option
  outerDiv1.style.color = 'white'
  outerDiv1.style.border = 'none'

  outerDiv2.style.backgroundColor = 'white'
  outerDiv2.style.color = '#5256A1'
  outerDiv2.style.border = '1px solid #5256A1'
  
  outerDiv3.style.backgroundColor = 'white'
  outerDiv3.style.color = '#5256A1'
  outerDiv3.style.border = '1px solid #5256A1'
  
  outerDiv4.style.backgroundColor = 'white'
  outerDiv4.style.color = '#5256A1'
  outerDiv4.style.border = '1px solid #5256A1'

  //FOR FIRST RESULT CARD
    outerDivr1.style.backgroundColor = '#EA8282' //red
    outerDivr1.style.color = 'white'
    outerDivr1.style.border = 'none'

    outerDivr3.style.backgroundColor = 'white'
    outerDivr3.style.color = '#5256A1'
    outerDivr3.style.border = '1px solid #5256A1'
    
    outerDivr2.style.backgroundColor = 'white'
    outerDivr2.style.color = '#5256A1'
    outerDivr2.style.border = '1px solid #5256A1'

    outerDivr4.style.backgroundColor = '#60BF88' //green
    outerDivr4.style.color = 'white'
    outerDivr4.style.border = 'none'
    
}
function flagged1(){
  nextButtf1.disabled = false  
  nextButtf1.style.opacity = 1
  addone = 0


  flagDiv1.style.backgroundColor = '#F9A826'
  flagDiv1.style.color = 'white'
  flagDiv1.style.border = 'none'

  flagDiv2.style.backgroundColor = 'white'
  flagDiv2.style.color = '#5256A1'
  flagDiv2.style.border = '1px solid #5256A1'
  
  flagDiv3.style.backgroundColor = 'white'
  flagDiv3.style.color = '#5256A1'
  flagDiv3.style.border = '1px solid #5256A1'
  
  flagDiv4.style.backgroundColor = 'white'
  flagDiv4.style.color = '#5256A1'
  flagDiv4.style.border = '1px solid #5256A1'
}

function choice2(){
  addone = 0
  
nextButt1.disabled = false
nextButt1.style.opacity = 1

  outerDiv2.style.backgroundColor = '#F9A826'
  outerDiv2.style.color = 'white'
  outerDiv2.style.border = 'none'

  outerDiv1.style.backgroundColor = 'white'
  outerDiv1.style.color = '#5256A1'
  outerDiv1.style.border = '1px solid #5256A1'
  
  outerDiv3.style.backgroundColor = 'white'
  outerDiv3.style.color = '#5256A1'
  outerDiv3.style.border = '1px solid #5256A1'
  
  outerDiv4.style.backgroundColor = 'white'
  outerDiv4.style.color = '#5256A1'
  outerDiv4.style.border = '1px solid #5256A1'

  
  //FOR FIRST RESULT CARD
  outerDivr4.style.backgroundColor = '#60BF88' //green
  outerDivr4.style.color = 'white'
  outerDivr4.style.border = 'none'

  outerDivr2.style.backgroundColor = '#EA8282' //red
  outerDivr2.style.color = 'white'
  outerDivr2.style.border = 'none'

  outerDivr3.style.backgroundColor = 'white'
  outerDivr3.style.color = '#5256A1'
  outerDivr3.style.border = '1px solid #5256A1'
  
  outerDivr1.style.backgroundColor = 'white'
  outerDivr1.style.color = '#5256A1'
  outerDivr1.style.border = '1px solid #5256A1'

}
function flagged2(){
  nextButtf1.disabled = false  
  nextButtf1.style.opacity = 1
  addone = 1


  flagDiv2.style.backgroundColor = '#F9A826'
  flagDiv2.style.color = 'white'
  flagDiv2.style.border = 'none'

  flagDiv1.style.backgroundColor = 'white'
  flagDiv1.style.color = '#5256A1'
  flagDiv1.style.border = '1px solid #5256A1'
  
  flagDiv3.style.backgroundColor = 'white'
  flagDiv3.style.color = '#5256A1'
  flagDiv3.style.border = '1px solid #5256A1'
  
  flagDiv4.style.backgroundColor = 'white'
  flagDiv4.style.color = '#5256A1'
  flagDiv4.style.border = '1px solid #5256A1'
}

function choice3(){
  addone = 0
  nextButt1.style.opacity = 1
  
nextButt1.disabled = false
  

  outerDiv3.style.backgroundColor = '#F9A826'
  outerDiv3.style.color = 'white'
  outerDiv3.style.border = 'none'

  outerDiv2.style.backgroundColor = 'white'
  outerDiv2.style.color = '#5256A1'
  outerDiv2.style.border = '1px solid #5256A1'
  
  outerDiv1.style.backgroundColor = 'white'
  outerDiv1.style.color = '#5256A1'
  outerDiv1.style.border = '1px solid #5256A1'
  
  outerDiv4.style.backgroundColor = 'white'
  outerDiv4.style.color = '#5256A1'
  outerDiv4.style.border = '1px solid #5256A1'



  //FOR FIRST RESULT CARD
  outerDivr4.style.backgroundColor = '#60BF88' //green
  outerDivr4.style.color = 'white'
  outerDivr4.style.border = 'none'

  outerDivr3.style.backgroundColor = '#EA8282' //red
  outerDivr3.style.color = 'white'
  outerDivr3.style.border = 'none'

  outerDivr1.style.backgroundColor = 'white'
  outerDivr1.style.color = '#5256A1'
  outerDivr1.style.border = '1px solid #5256A1'
  
  outerDivr2.style.backgroundColor = 'white'
  outerDivr2.style.color = '#5256A1'
  outerDivr2.style.border = '1px solid #5256A1'
  
}
function flagged3(){
  nextButtf1.disabled = false  
  nextButtf1.style.opacity = 1
  addone = 0


  flagDiv3.style.backgroundColor = '#F9A826'
  flagDiv3.style.color = 'white'
  flagDiv3.style.border = 'none'

  flagDiv2.style.backgroundColor = 'white'
  flagDiv2.style.color = '#5256A1'
  flagDiv2.style.border = '1px solid #5256A1'
  
  flagDiv1.style.backgroundColor = 'white'
  flagDiv1.style.color = '#5256A1'
  flagDiv1.style.border = '1px solid #5256A1'
  
  flagDiv4.style.backgroundColor = 'white'
  flagDiv4.style.color = '#5256A1'
  flagDiv4.style.border = '1px solid #5256A1'
}

function choice4(){
  addone = 1
  
  nextButt1.disabled = false
  nextButt1.style.opacity = 1
  
  outerDiv4.style.backgroundColor = '#F9A826'
  outerDiv4.style.color = 'white'
  outerDiv4.style.border = 'none'

  outerDiv2.style.backgroundColor = 'white'
  outerDiv2.style.color = '#5256A1'
  outerDiv2.style.border = '1px solid #5256A1'
  
  outerDiv3.style.backgroundColor = 'white'
  outerDiv3.style.color = '#5256A1'
  outerDiv3.style.border = '1px solid #5256A1'
  
  outerDiv1.style.backgroundColor = 'white'
  outerDiv1.style.color = '#5256A1'
  outerDiv1.style.border = '1px solid #5256A1'



  //FOR FIRST RESULT CARD
  outerDivr4.style.backgroundColor = '#60BF88' //green
  outerDivr4.style.color = 'white'
  outerDivr4.style.border = 'none'

  outerDivr1.style.backgroundColor = 'white'
  outerDivr1.style.color = '#5256A1'
  outerDivr1.style.border = '1px solid #5256A1'

  outerDivr3.style.backgroundColor = 'white'
  outerDivr3.style.color = '#5256A1'
  outerDivr3.style.border = '1px solid #5256A1'
  
  outerDivr2.style.backgroundColor = 'white'
  outerDivr2.style.color = '#5256A1'
  outerDivr2.style.border = '1px solid #5256A1'
  

}
function flagged4(){
  nextButtf1.disabled = false  
  nextButtf1.style.opacity = 1
  addone = 0


  flagDiv4.style.backgroundColor = '#F9A826'
  flagDiv4.style.color = 'white'
  flagDiv4.style.border = 'none'

  flagDiv2.style.backgroundColor = 'white'
  flagDiv2.style.color = '#5256A1'
  flagDiv2.style.border = '1px solid #5256A1'
  
  flagDiv3.style.backgroundColor = 'white'
  flagDiv3.style.color = '#5256A1'
  flagDiv3.style.border = '1px solid #5256A1'
  
  flagDiv1.style.backgroundColor = 'white'
  flagDiv1.style.color = '#5256A1'
  flagDiv1.style.border = '1px solid #5256A1'
}

nextButt2.disabled = true
   
if(nextButt2.disabled = true){
  nextButt2.style.opacity = 0.7
}

nextButtf2.disabled = true       // to disable the next buttons
   
if(nextButtf2.disabled = true){    // to style the disabled next buttons
  nextButtf2.style.opacity = 0.5
}


//CHOICE CONFIGURATION FOR THE SECOND QUESTION
function choice11(){
  nextButt2.disabled = false
  nextButt2.style.opacity = 1
  addtwo = 0

  outerDiv11.style.backgroundColor = '#F9A826'
  outerDiv11.style.color = 'white'
  outerDiv11.style.border = 'none'

  outerDiv21.style.backgroundColor = 'white'
  outerDiv21.style.color = '#5256A1'
  outerDiv21.style.border = '1px solid #5256A1'
  
  outerDiv31.style.backgroundColor = 'white'
  outerDiv31.style.color = '#5256A1'
  outerDiv31.style.border = '1px solid #5256A1'
  
  outerDiv41.style.backgroundColor = 'white'
  outerDiv41.style.color = '#5256A1'
  outerDiv41.style.border = '1px solid #5256A1'

    

  //FOR SECOND RESULT CARD
  outerDivr11.style.backgroundColor = '#EA8282' //red
  outerDivr11.style.color = 'white'
  outerDivr11.style.border = 'none'
  
  outerDivr21.style.backgroundColor = 'white'
  outerDivr21.style.color = '#5256A1'
  outerDivr21.style.border = '1px solid #5256A1'

  outerDivr31.style.backgroundColor = '#60BF88' //green
  outerDivr31.style.color = 'white'
  outerDivr31.style.border = 'none'

  outerDivr41.style.backgroundColor = 'white'
  outerDivr41.style.color = '#5256A1'
  outerDivr41.style.border = '1px solid #5256A1'


}
function flagged11(){
  nextButtf2.disabled = false
  nextButtf2.style.opacity = 1
  addtwo = 0

  flagDiv11.style.backgroundColor = '#F9A826'
  flagDiv11.style.color = 'white'
  flagDiv11.style.border = 'none'

  flagDiv21.style.backgroundColor = 'white'
  flagDiv21.style.color = '#5256A1'
  flagDiv21.style.border = '1px solid #5256A1'
  
  flagDiv31.style.backgroundColor = 'white'
  flagDiv31.style.color = '#5256A1'
  flagDiv31.style.border = '1px solid #5256A1'
  
  flagDiv41.style.backgroundColor = 'white'
  flagDiv41.style.color = '#5256A1'
  flagDiv41.style.border = '1px solid #5256A1'

}

function choice21(){
  nextButt2.disabled = false
  nextButt2.style.opacity = 1
  addtwo = 0

  outerDiv21.style.backgroundColor = '#F9A826'
  outerDiv21.style.color = 'white'
  outerDiv21.style.border = 'none'

  outerDiv11.style.backgroundColor = 'white'
  outerDiv11.style.color = '#5256A1'
  outerDiv11.style.border = '1px solid #5256A1'
  
  outerDiv31.style.backgroundColor = 'white'
  outerDiv31.style.color = '#5256A1'
  outerDiv31.style.border = '1px solid #5256A1'
  
  outerDiv41.style.backgroundColor = 'white'
  outerDiv41.style.color = '#5256A1'
  outerDiv41.style.border = '1px solid #5256A1'
  
  


  //FOR SECOND RESULT CARD
  outerDivr31.style.backgroundColor = '#60BF88' //green
  outerDivr31.style.color = 'white'
  outerDivr31.style.border = 'none'

  outerDivr21.style.backgroundColor = '#EA8282' //red
  outerDivr21.style.color = 'white'
  outerDivr21.style.border = 'none'

  outerDivr41.style.backgroundColor = 'white'
  outerDivr41.style.color = '#5256A1'
  outerDivr41.style.border = '1px solid #5256A1'
  
  outerDivr11.style.backgroundColor = 'white'
  outerDivr11.style.color = '#5256A1'
  outerDivr11.style.border = '1px solid #5256A1'

  
}
function flagged21(){
  nextButtf2.disabled = false
  nextButtf2.style.opacity = 1
  addtwo = 0

  flagDiv21.style.backgroundColor = '#F9A826'
  flagDiv21.style.color = 'white'
  flagDiv21.style.border = 'none'

  flagDiv11.style.backgroundColor = 'white'
  flagDiv11.style.color = '#5256A1'
  flagDiv11.style.border = '1px solid #5256A1'
  
  flagDiv31.style.backgroundColor = 'white'
  flagDiv31.style.color = '#5256A1'
  flagDiv31.style.border = '1px solid #5256A1'
  
  flagDiv41.style.backgroundColor = 'white'
  flagDiv41.style.color = '#5256A1'
  flagDiv41.style.border = '1px solid #5256A1'

}

function choice31(){
  nextButt2.disabled = false
  nextButt2.style.opacity = 1
  addtwo = 1


  outerDiv31.style.backgroundColor = '#F9A826'
  outerDiv31.style.color = 'white'
  outerDiv31.style.border = 'none'

  outerDiv21.style.backgroundColor = 'white'
  outerDiv21.style.color = '#5256A1'
  outerDiv21.style.border = '1px solid #5256A1'
  
  outerDiv11.style.backgroundColor = 'white'
  outerDiv11.style.color = '#5256A1'
  outerDiv11.style.border = '1px solid #5256A1'
  
  outerDiv41.style.backgroundColor = 'white'
  outerDiv41.style.color = '#5256A1'
  outerDiv41.style.border = '1px solid #5256A1'

  

  //FOR SECOND RESULT CARD
  outerDivr31.style.backgroundColor = '#60BF88' //green
  outerDivr31.style.color = 'white'
  outerDivr31.style.border = 'none'

  outerDivr21.style.backgroundColor = 'white'
  outerDivr21.style.color = '#5256A1'
  outerDivr21.style.border = '1px solid #5256A1'

  outerDivr41.style.backgroundColor = 'white'
  outerDivr41.style.color = '#5256A1'
  outerDivr41.style.border = '1px solid #5256A1'
  
  outerDivr11.style.backgroundColor = 'white'
  outerDivr11.style.color = '#5256A1'
  outerDivr11.style.border = '1px solid #5256A1'


}
function flagged31(){
  nextButtf2.disabled = false
  nextButtf2.style.opacity = 1
  addtwo = 0


  flagDiv31.style.backgroundColor = '#F9A826'
  flagDiv31.style.color = 'white'
  flagDiv31.style.border = 'none'

  flagDiv21.style.backgroundColor = 'white'
  flagDiv21.style.color = '#5256A1'
  flagDiv21.style.border = '1px solid #5256A1'
  
  flagDiv11.style.backgroundColor = 'white'
  flagDiv11.style.color = '#5256A1'
  flagDiv11.style.border = '1px solid #5256A1'
  
  flagDiv41.style.backgroundColor = 'white'
  flagDiv41.style.color = '#5256A1'
  flagDiv41.style.border = '1px solid #5256A1'

}

function choice41(){
  nextButt2.disabled = false
  nextButt2.style.opacity = 1
  addtwo = 0

    outerDiv41.style.backgroundColor = '#F9A826'
    outerDiv41.style.color = 'white'
    outerDiv41.style.border = 'none'
  
    outerDiv21.style.backgroundColor = 'white'
    outerDiv21.style.color = '#5256A1'
    outerDiv21.style.border = '1px solid #5256A1'
    
    outerDiv31.style.backgroundColor = 'white'
    outerDiv31.style.color = '#5256A1'
    outerDiv31.style.border = '1px solid #5256A1'
    
    outerDiv11.style.backgroundColor = 'white'
    outerDiv11.style.color = '#5256A1'
    outerDiv11.style.border = '1px solid #5256A1'
  
    
  
    //FOR SECOND RESULT CARD
    outerDivr31.style.backgroundColor = '#60BF88' //green
    outerDivr31.style.color = 'white'
    outerDivr31.style.border = 'none'
  
    outerDivr41.style.backgroundColor = '#EA8282' //red
    outerDivr41.style.color = 'white'
    outerDivr41.style.border = 'none'
  
    outerDivr21.style.backgroundColor = 'white'
    outerDivr21.style.color = '#5256A1'
    outerDivr21.style.border = '1px solid #5256A1'
    
    outerDivr11.style.backgroundColor = 'white'
    outerDivr11.style.color = '#5256A1'
    outerDivr11.style.border = '1px solid #5256A1'
  
  
}
function flagged41(){
  nextButtf2.disabled = false
  nextButtf2.style.opacity = 1
  addtwo = 1

    flagDiv41.style.backgroundColor = '#F9A826'
    flagDiv41.style.color = 'white'
    flagDiv41.style.border = 'none'
  
    flagDiv21.style.backgroundColor = 'white'
    flagDiv21.style.color = '#5256A1'
    flagDiv21.style.border = '1px solid #5256A1'
    
    flagDiv31.style.backgroundColor = 'white'
    flagDiv31.style.color = '#5256A1'
    flagDiv31.style.border = '1px solid #5256A1'
    
    flagDiv11.style.backgroundColor = 'white'
    flagDiv11.style.color = '#5256A1'
    flagDiv11.style.border = '1px solid #5256A1'

}

nextButt3.disabled = true
   
if(nextButt3.disabled = true){
  nextButt3.style.opacity = 0.7
}
nextButtf3.disabled = true       // to disable the next buttons
   
if(nextButtf3.disabled = true){    // to style the disabled next buttons
  nextButtf3.style.opacity = 0.5
}


//CHOICE CONFIGURATION FOR THE THIRD QUESTION
function choice12(){
  addthree = 1
nextButt3.disabled = false
nextButt3.style.opacity = 1


  outerDiv12.style.backgroundColor = '#F9A826'
  outerDiv12.style.color = 'white'
  outerDiv12.style.border = 'none'

  outerDiv22.style.backgroundColor = 'white'
  outerDiv22.style.color = '#5256A1'
  outerDiv22.style.border = '1px solid #5256A1'
  
  outerDiv32.style.backgroundColor = 'white'
  outerDiv32.style.color = '#5256A1'
  outerDiv32.style.border = '1px solid #5256A1'
  
  outerDiv42.style.backgroundColor = 'white'
  outerDiv42.style.color = '#5256A1'
  outerDiv42.style.border = '1px solid #5256A1'


  //FOR THE THIRD RESULT CARD
    outerDivr12.style.backgroundColor = '#60BF88' //green
    outerDivr12.style.color = 'white'
    outerDivr12.style.border = 'none'
    
    outerDivr22.style.backgroundColor = 'white'
    outerDivr22.style.color = '#5256A1'
    outerDivr22.style.border = '1px solid #5256A1'

    outerDivr32.style.backgroundColor = 'white'
    outerDivr32.style.color = '#5256A1'
    outerDivr32.style.border = '1px solid #5256A1'

    outerDivr42.style.backgroundColor = 'white'
    outerDivr42.style.color = '#5256A1'
    outerDivr42.style.border = '1px solid #5256A1'

  
  
}
function flagged12(){
  addthree = 1
nextButtf3.disabled = false
nextButtf3.style.opacity = 1


  flagDiv12.style.backgroundColor = '#F9A826'
  flagDiv12.style.color = 'white'
  flagDiv12.style.border = 'none'

  flagDiv22.style.backgroundColor = 'white'
  flagDiv22.style.color = '#5256A1'
  flagDiv22.style.border = '1px solid #5256A1'
  
  flagDiv32.style.backgroundColor = 'white'
  flagDiv32.style.color = '#5256A1'
  flagDiv32.style.border = '1px solid #5256A1'
  
  flagDiv42.style.backgroundColor = 'white'
  flagDiv42.style.color = '#5256A1'
  flagDiv42.style.border = '1px solid #5256A1'

}

function choice22(){
  addthree = 0
  nextButt3.style.opacity = 1
nextButt3.disabled = false


  outerDiv22.style.backgroundColor = '#F9A826'
  outerDiv22.style.color = 'white'
  outerDiv22.style.border = 'none'

  outerDiv12.style.backgroundColor = 'white'
  outerDiv12.style.color = '#5256A1'
  outerDiv12.style.border = '1px solid #5256A1'
  
  outerDiv32.style.backgroundColor = 'white'
  outerDiv32.style.color = '#5256A1'
  outerDiv32.style.border = '1px solid #5256A1'
  
  outerDiv42.style.backgroundColor = 'white'
  outerDiv42.style.color = '#5256A1'
  outerDiv42.style.border = '1px solid #5256A1'


  //FOR THE THIRD RESULT CARD
    outerDivr12.style.backgroundColor = '#60BF88' //green
    outerDivr12.style.color = 'white'
    outerDivr12.style.border = 'none'

    outerDivr22.style.backgroundColor = '#EA8282' //red
    outerDivr22.style.color = 'white'
    outerDivr22.style.border = 'none'

    outerDivr32.style.backgroundColor = 'white'
    outerDivr32.style.color = '#5256A1'
    outerDivr32.style.border = '1px solid #5256A1'

    outerDivr42.style.backgroundColor = 'white'
    outerDivr42.style.color = '#5256A1'
    outerDivr42.style.border = '1px solid #5256A1'


}
function flagged22(){
  addthree = 0
  nextButtf3.style.opacity = 1
nextButtf3.disabled = false


  flagDiv22.style.backgroundColor = '#F9A826'
  flagDiv22.style.color = 'white'
  flagDiv22.style.border = 'none'

  flagDiv12.style.backgroundColor = 'white'
  flagDiv12.style.color = '#5256A1'
  flagDiv12.style.border = '1px solid #5256A1'
  
  flagDiv32.style.backgroundColor = 'white'
  flagDiv32.style.color = '#5256A1'
  flagDiv32.style.border = '1px solid #5256A1'
  
  flagDiv42.style.backgroundColor = 'white'
  flagDiv42.style.color = '#5256A1'
  flagDiv42.style.border = '1px solid #5256A1'

}

function choice32(){
  addthree = 0
  nextButt3.style.opacity = 1
nextButt3.disabled = false


  outerDiv32.style.backgroundColor = '#F9A826'
  outerDiv32.style.color = 'white'
  outerDiv32.style.border = 'none'

  outerDiv22.style.backgroundColor = 'white'
  outerDiv22.style.color = '#5256A1'
  outerDiv22.style.border = '1px solid #5256A1'
  
  outerDiv12.style.backgroundColor = 'white'
  outerDiv12.style.color = '#5256A1'
  outerDiv12.style.border = '1px solid #5256A1'
  
  outerDiv42.style.backgroundColor = 'white'
  outerDiv42.style.color = '#5256A1'
  outerDiv42.style.border = '1px solid #5256A1'

  

    //FOR THE THIRD RESULT CARD
    outerDivr12.style.backgroundColor = '#60BF88' //green
    outerDivr12.style.color = 'white'
    outerDivr12.style.border = 'none'

    outerDivr42.style.backgroundColor = '#EA8282' //red
    outerDivr42.style.color = 'white'
    outerDivr42.style.border = 'none'

    outerDivr22.style.backgroundColor = 'white'
    outerDivr22.style.color = '#5256A1'
    outerDivr22.style.border = '1px solid #5256A1'

    outerDivr32.style.backgroundColor = 'white'
    outerDivr32.style.color = '#5256A1'
    outerDivr32.style.border = '1px solid #5256A1'

}
function flagged32(){
  addthree = 0
  nextButtf3.style.opacity = 1
  nextButtf3.disabled = false


  flagDiv32.style.backgroundColor = '#F9A826'
  flagDiv32.style.color = 'white'
  flagDiv32.style.border = 'none'

  flagDiv22.style.backgroundColor = 'white'
  flagDiv22.style.color = '#5256A1'
  flagDiv22.style.border = '1px solid #5256A1'
  
  flagDiv12.style.backgroundColor = 'white'
  flagDiv12.style.color = '#5256A1'
  flagDiv12.style.border = '1px solid #5256A1'
  
  flagDiv42.style.backgroundColor = 'white'
  flagDiv42.style.color = '#5256A1'
  flagDiv42.style.border = '1px solid #5256A1'

}

function choice42(){
  addthree = 0
  nextButt3.style.opacity = 1
nextButt3.disabled = false


    outerDiv42.style.backgroundColor = '#F9A826'
    outerDiv42.style.color = 'white'
    outerDiv42.style.border = 'none'
  
    outerDiv12.style.backgroundColor = 'white'
    outerDiv12.style.color = '#5256A1'
    outerDiv12.style.border = '1px solid #5256A1'
    
    outerDiv32.style.backgroundColor = 'white'
    outerDiv32.style.color = '#5256A1'
    outerDiv32.style.border = '1px solid #5256A1'
    
    outerDiv22.style.backgroundColor = 'white'
    outerDiv22.style.color = '#5256A1'
    outerDiv22.style.border = '1px solid #5256A1'
  

    //FOR THE THIRD RESULT CARD
      outerDivr12.style.backgroundColor = '#60BF88' //green
      outerDivr12.style.color = 'white'
      outerDivr12.style.border = 'none'
  
      outerDivr42.style.backgroundColor = '#EA8282' //red
      outerDivr42.style.color = 'white'
      outerDivr42.style.border = 'none'
  
      outerDivr22.style.backgroundColor = 'white'
      outerDivr22.style.color = '#5256A1'
      outerDivr22.style.border = '1px solid #5256A1'
  
      outerDivr32.style.backgroundColor = 'white'
      outerDivr32.style.color = '#5256A1'
      outerDivr32.style.border = '1px solid #5256A1'
  
  
  
}
function flagged42(){
  addthree = 0
  nextButtf3.style.opacity = 1
nextButtf3.disabled = false


    flagDiv42.style.backgroundColor = '#F9A826'
    flagDiv42.style.color = 'white'
    flagDiv42.style.border = 'none'
  
    flagDiv12.style.backgroundColor = 'white'
    flagDiv12.style.color = '#5256A1'
    flagDiv12.style.border = '1px solid #5256A1'
    
    flagDiv32.style.backgroundColor = 'white'
    flagDiv32.style.color = '#5256A1'
    flagDiv32.style.border = '1px solid #5256A1'
    
    flagDiv22.style.backgroundColor = 'white'
    flagDiv22.style.color = '#5256A1'
    flagDiv22.style.border = '1px solid #5256A1'

}

nextButtlast.disabled = true 
if(nextButtlast.disabled = true){
  nextButtlast.style.opacity = 0.7
}

nextButtf4.disabled = true
if(nextButtf4.disabled = true){
  nextButtf4.style.opacity = 0.7
}


//CHOICE CONFIGURATION FOR THE FOURTH QUESTION
function choice13(){
  addfour = 0
  nextButtlast.style.opacity = 1
nextButtlast.disabled = false



  outerDiv13.style.backgroundColor = '#F9A826'
  outerDiv13.style.color = 'white'
  outerDiv13.style.border = 'none'

  outerDiv23.style.backgroundColor = 'white'
  outerDiv23.style.color = '#5256A1'
  outerDiv23.style.border = '1px solid #5256A1'
  
  outerDiv33.style.backgroundColor = 'white'
  outerDiv33.style.color = '#5256A1'
  outerDiv33.style.border = '1px solid #5256A1'
  
  outerDiv43.style.backgroundColor = 'white'
  outerDiv43.style.color = '#5256A1'
  outerDiv43.style.border = '1px solid #5256A1'


//FOR THE fourth RESULT CARD
outerDivr13.style.backgroundColor = '#EA8282' //red
outerDivr13.style.color = 'white'
outerDivr13.style.border = 'none'

outerDivr23.style.backgroundColor = '#60BF88' //green
outerDivr23.style.color = 'white'
outerDivr23.style.border = 'none'

outerDivr33.style.backgroundColor = 'white'
outerDivr33.style.color = '#5256A1'
outerDivr33.style.border = '1px solid #5256A1'

outerDivr43.style.backgroundColor = 'white'
outerDivr43.style.color = '#5256A1'
outerDivr43.style.border = '1px solid #5256A1'

}
function flagged13(){
  addfour = 0
  nextButtf4.style.opacity = 1
nextButtf4.disabled = false



  flagDiv13.style.backgroundColor = '#F9A826'
  flagDiv13.style.color = 'white'
  flagDiv13.style.border = 'none'

  flagDiv23.style.backgroundColor = 'white'
  flagDiv23.style.color = '#5256A1'
  flagDiv23.style.border = '1px solid #5256A1'
  
  flagDiv33.style.backgroundColor = 'white'
  flagDiv33.style.color = '#5256A1'
  flagDiv33.style.border = '1px solid #5256A1'
  
  flagDiv43.style.backgroundColor = 'white'
  flagDiv43.style.color = '#5256A1'
  flagDiv43.style.border = '1px solid #5256A1'

}

function choice23(){
  addfour = 1
  nextButtlast.style.opacity = 1
nextButtlast.disabled = false


  outerDiv23.style.backgroundColor = '#F9A826'
  outerDiv23.style.color = 'white'
  outerDiv23.style.border = 'none'

  outerDiv13.style.backgroundColor = 'white'
  outerDiv13.style.color = '#5256A1'
  outerDiv13.style.border = '1px solid #5256A1'
  
  outerDiv33.style.backgroundColor = 'white'
  outerDiv33.style.color = '#5256A1'
  outerDiv33.style.border = '1px solid #5256A1'
  
  outerDiv43.style.backgroundColor = 'white'
  outerDiv43.style.color = '#5256A1'
  outerDiv43.style.border = '1px solid #5256A1'


//FOR THE fourth RESULT CARD
outerDivr23.style.backgroundColor = '#60BF88' //green
outerDivr23.style.color = 'white'
outerDivr23.style.border = 'none'

outerDivr13.style.backgroundColor = 'white'
outerDivr13.style.color = '#5256A1'
outerDivr13.style.border = '1px solid #5256A1'

outerDivr33.style.backgroundColor = 'white'
outerDivr33.style.color = '#5256A1'
outerDivr33.style.border = '1px solid #5256A1'

outerDivr43.style.backgroundColor = 'white'
outerDivr43.style.color = '#5256A1'
outerDivr43.style.border = '1px solid #5256A1'

}
function flagged23(){
  addfour = 0
  nextButtf4.style.opacity = 1
nextButtf4.disabled = false


  flagDiv23.style.backgroundColor = '#F9A826'
  flagDiv23.style.color = 'white'
  flagDiv23.style.border = 'none'

  flagDiv13.style.backgroundColor = 'white'
  flagDiv13.style.color = '#5256A1'
  flagDiv13.style.border = '1px solid #5256A1'
  
  flagDiv33.style.backgroundColor = 'white'
  flagDiv33.style.color = '#5256A1'
  flagDiv33.style.border = '1px solid #5256A1'
  
  flagDiv43.style.backgroundColor = 'white'
  flagDiv43.style.color = '#5256A1'
  flagDiv43.style.border = '1px solid #5256A1'

}

function choice33(){
  addfour = 0
  nextButtlast.style.opacity = 1
nextButtlast.disabled = false


  outerDiv33.style.backgroundColor = '#F9A826'
  outerDiv33.style.color = 'white'
  outerDiv33.style.border = 'none'

  outerDiv23.style.backgroundColor = 'white'
  outerDiv23.style.color = '#5256A1'
  outerDiv23.style.border = '1px solid #5256A1'
  
  outerDiv13.style.backgroundColor = 'white'
  outerDiv13.style.color = '#5256A1'
  outerDiv13.style.border = '1px solid #5256A1'
  
  outerDiv43.style.backgroundColor = 'white'
  outerDiv43.style.color = '#5256A1'
  outerDiv43.style.border = '1px solid #5256A1'

 
  //FOR THE fourth RESULT CARD
  outerDivr23.style.backgroundColor = '#60BF88' //green
  outerDivr23.style.color = 'white'
  outerDivr23.style.border = 'none'

  outerDivr13.style.backgroundColor = 'white'
  outerDivr13.style.color = '#5256A1'
  outerDivr13.style.border = '1px solid #5256A1'

  outerDivr33.style.backgroundColor = '#EA8282' //red
  outerDivr33.style.color = 'white'
  outerDivr33.style.border = 'none'

  outerDivr43.style.backgroundColor = 'white'
  outerDivr43.style.color = '#5256A1'
  outerDivr43.style.border = '1px solid #5256A1'
}
function flagged33(){
  addfour = 1
  nextButtf4.style.opacity = 1
nextButtf4.disabled = false


  flagDiv33.style.backgroundColor = '#F9A826'
  flagDiv33.style.color = 'white'
  flagDiv33.style.border = 'none'

  flagDiv23.style.backgroundColor = 'white'
  flagDiv23.style.color = '#5256A1'
  flagDiv23.style.border = '1px solid #5256A1'
  
  flagDiv13.style.backgroundColor = 'white'
  flagDiv13.style.color = '#5256A1'
  flagDiv13.style.border = '1px solid #5256A1'
  
  flagDiv43.style.backgroundColor = 'white'
  flagDiv43.style.color = '#5256A1'
  flagDiv43.style.border = '1px solid #5256A1'

}

function choice43(){
  addfour = 0
  nextButtlast.style.opacity = 1
nextButtlast.disabled = false


    outerDiv43.style.backgroundColor = '#F9A826'
    outerDiv43.style.color = 'white'
    outerDiv43.style.border = 'none'
  
    outerDiv13.style.backgroundColor = 'white'
    outerDiv13.style.color = '#5256A1'
    outerDiv13.style.border = '1px solid #5256A1'
    
    outerDiv33.style.backgroundColor = 'white'
    outerDiv33.style.color = '#5256A1'
    outerDiv33.style.border = '1px solid #5256A1'
    
    outerDiv23.style.backgroundColor = 'white'
    outerDiv23.style.color = '#5256A1'
    outerDiv23.style.border = '1px solid #5256A1'
      
      //FOR THE fourth RESULT CARD
      outerDivr23.style.backgroundColor = '#60BF88' //green
      outerDivr23.style.color = 'white'
      outerDivr23.style.border = 'none'
    
      outerDivr13.style.backgroundColor = 'white'
      outerDivr13.style.color = '#5256A1'
      outerDivr13.style.border = '1px solid #5256A1'
    
      outerDivr33.style.backgroundColor = 'white'
      outerDivr33.style.color = '#5256A1'
      outerDivr33.style.border = '1px solid #5256A1'
  
      outerDivr43.style.backgroundColor = '#EA8282' //red
      outerDivr43.style.color = 'white'
      outerDivr43.style.border = 'none'
}
function flagged43(){
  addfour = 0
  nextButtf4.style.opacity = 1
  nextButtf4.disabled = false


    flagDiv43.style.backgroundColor = '#F9A826'
    flagDiv43.style.color = 'white'
    flagDiv43.style.border = 'none'
  
    flagDiv13.style.backgroundColor = 'white'
    flagDiv13.style.color = '#5256A1'
    flagDiv13.style.border = '1px solid #5256A1'
    
    flagDiv33.style.backgroundColor = 'white'
    flagDiv33.style.color = '#5256A1'
    flagDiv33.style.border = '1px solid #5256A1'
    
    flagDiv23.style.backgroundColor = 'white'
    flagDiv23.style.color = '#5256A1'
    flagDiv23.style.border = '1px solid #5256A1'

}


function cquests(){
    quizType.style.display = 'none'
    quizCard.style.display = 'block'
    submitButt.style.display = 'none'

    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        var countCap = JSON.parse(this.responseText)
        const randomCountry = countCap
  
        document.getElementById('countryName').innerHTML = countCap[10].capital
        document.getElementById('name1').innerHTML = randomCountry[153].name
        document.getElementById('name2').innerHTML = randomCountry[171].name.split(' ', 1)
        if(document.getElementById('name2').innerHTML.endsWith(',') || document.getElementById('name2').innerHTML.endsWith('(')){
          document.getElementById('name2').innerHTML = document.getElementById('name2').innerHTML.slice(0, document.getElementById('name2').innerHTML.length-1)
        }
        document.getElementById('name3').innerHTML = randomCountry[135].name
        document.getElementById('name4').innerHTML = randomCountry[10].name
        
        document.getElementById('countryNamer').innerHTML = countCap[10].capital
        document.getElementById('namer1').innerHTML = randomCountry[153].name
        document.getElementById('namer2').innerHTML = randomCountry[171].name.split(' ', 1)
        if(document.getElementById('namer2').innerHTML.endsWith(',') || document.getElementById('name2').innerHTML.endsWith('(')){
          document.getElementById('namer2').innerHTML = document.getElementById('name2').innerHTML.slice(0, document.getElementById('name2').innerHTML.length-1)
        }
        document.getElementById('namer3').innerHTML = randomCountry[135].name
        document.getElementById('namer4').innerHTML = randomCountry[10].name
  
      }
    }
    xhttp.open('GET', 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag', true)
    xhttp.send()

}

function fquests(){
    quizType.style.display = 'none'
    flagCard.style.display = 'block'

    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        var countCap = JSON.parse(this.responseText)
        const randomCountry = countCap
  
  
        document.getElementById('flagImage1').src = randomCountry[230].flag

        document.getElementById('namef1').innerHTML = randomCountry[30].name
        document.getElementById('namef2').innerHTML = randomCountry[230].name
        document.getElementById('namef3').innerHTML = randomCountry[180].name
        document.getElementById('namef4').innerHTML = randomCountry[160].name
      }
    }
    xhttp.open('GET', 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag', true)
    xhttp.send()

}

function resultShow(){
  doneCard.style.display = 'none'
  resultCard.style.display = 'block'
  clickCount = 0
}

function tryAgain(){
    window.location.reload()
}


function nextBut(){
  clickCount++            //increases the count of clickcount via iteration
  
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      var countCap = JSON.parse(this.responseText)
      const randomCountry = countCap

      if(clickCount===1){    

        quizCard.style.display = 'none'
        quizCard1.style.display = 'block'
        quizCard2.style.display = 'none'
        quizCard3.style.display = 'none'
        
        document.getElementById('countryName1').innerHTML = countCap[50].capital
        document.getElementById('name11').innerHTML = randomCountry[201].name
        document.getElementById('name21').innerHTML = randomCountry[21].name
        document.getElementById('name31').innerHTML = randomCountry[50].name
        document.getElementById('name41').innerHTML = randomCountry[95].name
        
      }
  
      if(clickCount===2){
        quizCard.style.display = 'none'
        quizCard1.style.display = 'none'
        quizCard2.style.display = 'block'
        quizCard3.style.display = 'none'
  
      document.getElementById('countryName2').innerHTML = countCap[100].capital
      document.getElementById('name12').innerHTML = randomCountry[100].name
      document.getElementById('name22').innerHTML = randomCountry[22].name
      document.getElementById('name32').innerHTML = randomCountry[39].name
      document.getElementById('name42').innerHTML = randomCountry[121].name
      }
  
      if(clickCount===3){
        quizCard.style.display = 'none'
        quizCard1.style.display = 'none'
        quizCard2.style.display = 'none'
        quizCard3.style.display = 'block'
  
        nextButtlast.innerHTML = 'Submit'
          submitButt.style.display = 'block'
          
          
          document.getElementById('countryName3').innerHTML = countCap[150].capital
          document.getElementById('name13').innerHTML = randomCountry[15].name
          document.getElementById('name23').innerHTML = randomCountry[150].name
          document.getElementById('name33').innerHTML = randomCountry[230].name
          document.getElementById('name43').innerHTML = randomCountry[220].name
      } 
    }
  }
  xhttp.open('GET', 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag', true)
  xhttp.send()


  if(clickCount===4){
      quizCard3.style.display = 'none'
      flagCard.style.display = 'none'
      doneCard.style.display = 'block'
      correctCount.innerHTML = addone + addtwo + addthree + addfour // Displays the quiz score
  }

}

function nextButf(){
  clickCount++            //increases the count of clickcount via iteration

  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      var countCap = JSON.parse(this.responseText)
      const randomCountry = countCap

      if(clickCount===1){    

        flagCard.style.display = 'none'
        flagCard1.style.display = 'block'
        flagCard2.style.display = 'none'
        flagCard3.style.display = 'none'
        
        document.getElementById('flagImage2').src = randomCountry[211].flag

        document.getElementById('namef11').innerHTML = randomCountry[111].name
        document.getElementById('namef21').innerHTML = randomCountry[124].name
        document.getElementById('namef31').innerHTML = randomCountry[78].name
        document.getElementById('namef41').innerHTML = randomCountry[211].name
        
      }
  
      if(clickCount===2){
        flagCard.style.display = 'none'
        flagCard1.style.display = 'none'
        flagCard2.style.display = 'block'
        flagCard3.style.display = 'none'
  
        
        document.getElementById('flagImage3').src = randomCountry[103].flag

        document.getElementById('namef12').innerHTML = randomCountry[103].name
        document.getElementById('namef22').innerHTML = randomCountry[5].name
        document.getElementById('namef32').innerHTML = randomCountry[96].name
        document.getElementById('namef42').innerHTML = randomCountry[199].name
      }
  
      if(clickCount===3){
        flagCard.style.display = 'none'
        flagCard1.style.display = 'none'
        flagCard2.style.display = 'none'
        flagCard3.style.display = 'block'
  
        nextButtf4.innerHTML = 'Submit'
          
          
        
        document.getElementById('flagImage4').src = randomCountry[159].flag

        document.getElementById('namef13').innerHTML = randomCountry[167].name
        document.getElementById('namef23').innerHTML = randomCountry[77].name
        document.getElementById('namef33').innerHTML = randomCountry[159].name
        document.getElementById('namef43').innerHTML = randomCountry[38].name
      } 

    }
  }
  xhttp.open('GET', 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag', true)
  xhttp.send()

  if(clickCount===4){
    flagCard3.style.display = 'none'
    doneCardf.style.display = 'block'
    correctCountf.innerHTML = addone + addtwo + addthree + addfour // Displays the quiz score
}

}

function nextButr(){
  clickCount++ 
            
  
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      var countCap = JSON.parse(this.responseText)
      const randomCountry = countCap

      if(clickCount===1){     //DO THINGS WHEN NEXT BUTTON IS CLICKED ONCE
  
        prevButt.style.display = 'block'
        resultCard.style.display = 'none'
        resultCard1.style.display = 'block'
        resultCard2.style.display = 'none'
        resultCard3.style.display = 'none'
        
        document.getElementById('countryNamer1').innerHTML = countCap[50].capital
        document.getElementById('namer11').innerHTML = randomCountry[201].name
        document.getElementById('namer21').innerHTML = randomCountry[21].name
        document.getElementById('namer31').innerHTML = randomCountry[50].name
        document.getElementById('namer41').innerHTML = randomCountry[95].name
        
      }
    
      if(clickCount===2){
      
        prevButt.style.display = 'block'
        resultCard.style.display = 'none'
        resultCard1.style.display = 'none'
        resultCard2.style.display = 'block'
        resultCard3.style.display = 'none'
        
      document.getElementById('countryNamer2').innerHTML = countCap[100].capital
      document.getElementById('namer12').innerHTML = randomCountry[100].name
      document.getElementById('namer22').innerHTML = randomCountry[22].name
      document.getElementById('namer32').innerHTML = randomCountry[39].name
      document.getElementById('namer42').innerHTML = randomCountry[121].name
    
      }
    
      if(clickCount===3){
      
        nextButtr0.innerHTML = 'Home'
        nextButtr0.addEventListener('click', function(){
          window.location.reload()
        })
          prevButt.style.display = 'block'
    
          resultCard.style.display = 'none'
          resultCard1.style.display = 'none'
          resultCard2.style.display = 'none'
          resultCard3.style.display = 'block'
          
          document.getElementById('countryNamer3').innerHTML = countCap[150].capital
          document.getElementById('namer13').innerHTML = randomCountry[15].name
          document.getElementById('namer23').innerHTML = randomCountry[150].name
          document.getElementById('namer33').innerHTML = randomCountry[230].name
          document.getElementById('namer43').innerHTML = randomCountry[220].name
          
      }
    }
  }
  xhttp.open('GET', 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag', true)
  xhttp.send()
  
}
       
function prevButr(){
  clickCount--
  function countries(){
    var http = new XMLHttpRequest()
    http.onreadystatechange = function(){
        if(this.readyState === 4){
          if(this.status === 200){
            
  if(clickCount===0){
    prevButt.style.display = 'none'
    nextButtr.style.display = 'block'
    resultCard2.style.display = 'none'
    resultCard1.style.display = 'none'
    resultCard.style.display = 'block'
    resultCard3.style.display = 'none'

    document.getElementById('countryNamer').innerHTML = JSON.parse(countCap)[10].capital
    document.getElementById('namer1').innerHTML = randomCountry[153].name
    document.getElementById('namer2').innerHTML = randomCountry[171].name.split(' ', 1)
    if(document.getElementById('namer2').innerHTML.endsWith(',') || document.getElementById('name2').innerHTML.endsWith('(')){
      document.getElementById('namer2').innerHTML = document.getElementById('name2').innerHTML.slice(0, document.getElementById('name2').innerHTML.length-1)
    }
    document.getElementById('namer3').innerHTML = randomCountry[135].name
    document.getElementById('namer4').innerHTML = randomCountry[10].name
  }

  if(clickCount===1){
    nextButtr.style.display = 'block'
    resultCard.style.display = 'none'
    resultCard2.style.display = 'none'
    resultCard1.style.display = 'block'
    resultCard3.style.display = 'none'


    document.getElementById('countryNamer1').innerHTML = JSON.parse(countCap)[50].capital
    document.getElementById('namer11').innerHTML = randomCountry[201].name
    document.getElementById('namer21').innerHTML = randomCountry[21].name
    document.getElementById('namer31').innerHTML = randomCountry[50].name
    document.getElementById('namer41').innerHTML = randomCountry[95].name
    
  }

  if(clickCount===2){
    nextButtr.style.display = 'block'
    resultCard.style.display = 'none'
    resultCard1.style.display = 'none'
    resultCard2.style.display = 'block'
    resultCard3.style.display = 'none'


  document.getElementById('countryNamer2').innerHTML = JSON.parse(countCap)[100].capital
  document.getElementById('namer12').innerHTML = randomCountry[100].name
  document.getElementById('namer22').innerHTML = randomCountry[22].name
  document.getElementById('namer32').innerHTML = randomCountry[39].name
  document.getElementById('namer42').innerHTML = randomCountry[121].name

  }
  
          }
        }
    }
    http.open('GET', 'https://restcountries.eu/rest/v2/all?fields=name;capital', true)
    http.send()
  }
  
  countries()
  
  
}


