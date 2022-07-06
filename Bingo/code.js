var gamemode = 0
const calledNums= []
var amtRan = 0
clearToBegin = false
doTrivia = false
arrayLength=0
triviaQuestions= ""
var doingTrivia
triviaInstructions = document.getElementById("triviaChoice")
textBlock = "";
// TODO: figure out why textblock is not filling with data

function instructions(){
    
    document.getElementById("instructions2").innerHTML="Standard: Regular Bingo- connect a line of 5 to win. Horizontal, diagonal, and vertical are allowed. X: Create an X that begins at each corner and meets in the middle. +: Create a plus along the N column, but it can be met by any horizontal line. 4: Fill in each corner. Crazy: Standard, but the bingo game will tell you to remove a space sometimes"
    document.getElementById("instructions").innerHTML = "To begin, select the type of bingo that you would like to play. Then, press enter or click on 'roll' to roll a new number. Click 'bingo' once someone wins and input the numbers to double check."
    document.getElementById("clearInst").innerHTML="Dismiss"
    

}

function loadQuestions() {
    reader.addEventListener('load', function() {
        textBlock = this.result;
    })
}

function getRandomQuestion() {
    console.log("random question ran")
    let arrayText = textBlock.split("\n")
    let random_number = Math.floor(Math.random() * 321);
    let random_question = arrayText[random_number];
    var questionArray= JSON.parse(random_question)
    console.log((questionArray))
    return random_question
        // document.getElementById('file').innerText = this.result; // places text into webpage
}

function standard(){
    console.log("standard ran");
    doingTrivia = Math.floor(Math.random()*11)
    console.log(doingTrivia)
    if (doTrivia == true && doingTrivia == 1){
        triviaQuestion = getRandomQuestion()
        console.log(triviaQuestion)
        
        document.getElementById("triviaQuestionDisplay").innerHTML = "this is where trivia questions go"
        document.getElementById("triviaQuestionAnswer").innerHTML = "Click me when you are ready to reveal the answer"


        
    }
    else{
        call = Math.floor(Math.random()*76)
    if (calledNums.indexOf(call) !== -1){
        console.log("reset")
        amtRan +=1
        if (amtRan > 1000){
            document.getElementById("called").innerHTML="All Numbers Called"
            document.getElementById("reset").innerHTML="Reset the game"
            alert("All numbers have been called.")
        }
        else{
            standard()
        }
        
    }
    else{
        
        if(call>0 && call<=15){
            
            document.getElementById("called").innerHTML="B- " + call;
            calledNums.push(call)
            console.log(calledNums)
            
        }
        if (call>15 && call<=30){
            document.getElementById("called").innerHTML="I- "+call;
            calledNums.push(call)
            console.log(calledNums)
    
        }
        if(call>30 && call<=45){
            document.getElementById("called").innerHTML="N- "+call;
            calledNums.push(call)
            console.log(calledNums)
    
        }
        if(call>45 && call<=60){
            document.getElementById("called").innerHTML="G- "+call;
            calledNums.push(call)
            console.log(calledNums)
    
        }
        if (call>60 && call<= 75){
            document.getElementById("called").innerHTML="O-" +call;
            calledNums.push(call)
            console.log(calledNums)
    
        }
    }
    }
    
    
}

function X(){
    console.log("x ran");
    call = Math.floor(Math.random()*76)
    if (calledNums.indexOf(call) !== -1){
        console.log("reset")
        amtRan +=1
        if (amtRan > 1000){
            document.getElementById("called").innerHTML="All Numbers Called"
            document.getElementById("reset").innerHTML="Reset the game"
            alert("All numbers have been called.")
        }
        else{
            X()
        }
        
    }
    else{
        
        if(call>0 && call<=15){
            document.getElementById("called").innerHTML="B- " + call;
            calledNums.push(call)
            console.log(calledNums)
            
        }
        if (call>15 && call<=30){
            document.getElementById("called").innerHTML="I- "+call;
            calledNums.push(call)
            console.log(calledNums)
    
        }
        if(call>30 && call<=45){
            console.log("N ran")
            calledNums.push(call)
            amtRan+=1
            if (amtRan > 1000){
                document.getElementById("called").innerHTML="All Numbers Called"
                document.getElementById("reset").innerHTML="Reset the game"
            }
            else{
                X()
            }
            
    
        }
        if(call>45 && call<=60){
            document.getElementById("called").innerHTML="G- "+call;
            calledNums.push(call)
            console.log(calledNums)
    
        }
        if (call>60 && call<= 75){
            document.getElementById("called").innerHTML="O-" +call;
            calledNums.push(call)
            console.log(calledNums)
    
        }
    }
    
}


function fourCorners(){
    console.log("four corners ran");
    call = Math.floor(Math.random()*76)
    if (calledNums.indexOf(call) !== -1){
        console.log("reset")
        amtRan +=1
        if (amtRan > 1000){
            document.getElementById("called").innerHTML="All Numbers Called"
            document.getElementById("reset").innerHTML="Reset the game"
            alert("All numbers have been called.")
        }
        else{
            fourCorners()
        }
        
    }
    else{
        
        if(call>0 && call<=15){
            document.getElementById("called").innerHTML="B- " + call;
            calledNums.push(call)
            console.log(calledNums)
            
        }
        if (call>15 && call<=30){
            calledNums.push(call)
            amtRan+=1
            if (amtRan > 1000){
                document.getElementById("called").innerHTML="All Numbers Called"
                document.getElementById("reset").innerHTML="Reset the game"
            }
            else{
                fourCorners()
            }
    
        }
        if(call>30 && call<=45){
            console.log("N ran")
            calledNums.push(call)
            amtRan+=1
            if (amtRan > 1000){
                document.getElementById("called").innerHTML="All Numbers Called"
                document.getElementById("reset").innerHTML="Reset the game"
            }
            else{
                fourCorners()
            }
            
    
        }
        if(call>45 && call<=60){
            calledNums.push(call)
            amtRan+=1
            if (amtRan > 1000){
                document.getElementById("called").innerHTML="All Numbers Called"
                document.getElementById("reset").innerHTML="Reset the game"
            }
            else{
                fourCorners()
            }
    
        }
        if (call>60 && call<= 75){
            document.getElementById("called").innerHTML="O-" +call;
            calledNums.push(call)
            console.log(calledNums)
    
        }
    }
    
}

function crazy(){
    console.log("crazy ran")
    call = Math.floor(Math.random()*76)
    doRemove=Math.floor(Math.random()*3)
    if (calledNums.indexOf(call) !== -1){
        console.log("reset")
        amtRan +=1
        if (amtRan > 1000){
            document.getElementById("called").innerHTML="All Numbers Called"
            document.getElementById("reset").innerHTML="Reset the game"
            alert("All numbers have been called.")
        }
        else{
            crazy()
        }
        
    }
    if (amtRan>5 && doRemove === 1){

        whichRemove = Math.floor(Math.random()*calledNums.length)
        let returnValue=calledNums[whichRemove]


        if(returnValue>0 && returnValue<=15){
            document.getElementById("called").innerHTML="Remove B- " + call;
            
            calledNums.splice(whichRemove, 1);
            console.log(calledNums)
            console.log("crazy ran remove B")
            
        }
        if (returnValue>15 && returnValue<=30){
            document.getElementById("called").innerHTML="Remove I- "+call;
            calledNums.splice(whichRemove, 1);            
            console.log(calledNums)
            console.log("crazy ran remove I")
    
        }
        if(returnValue>30 && returnValue<=45){
            document.getElementById("called").innerHTML="Remove N- "+call;
            calledNums.splice(whichRemove, 1);            
            console.log(calledNums)
            console.log("crazy ran remove N")
    
        }
        if(returnValue>45 && returnValue<=60){
            document.getElementById("called").innerHTML="Remove G- "+call;
            calledNums.splice(whichRemove, 1);
            console.log(calledNums)
            console.log("crazy ran remove G")
    
        }
        if (returnValue>60 && returnValue<= 75){
            document.getElementById("called").innerHTML="Remove O-" +call;
            calledNums.splice(whichRemove, 1);
            console.log(calledNums)
            console.log("crazy ran remove O")
    
        }
    
    }
    else{
        
        if(call>0 && call<=15){
            document.getElementById("called").innerHTML="B- " + call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("crazy ran B")
            
        }
        if (call>15 && call<=30){
            document.getElementById("called").innerHTML="I- "+call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("crazy ran I")
    
        }
        if(call>30 && call<=45){
            document.getElementById("called").innerHTML="N- "+call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("plus ran N")
    
        }
        if(call>45 && call<=60){
            document.getElementById("called").innerHTML="G- "+call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("crazy ran G")
    
        }
        if (call>60 && call<= 75){
            document.getElementById("called").innerHTML="O-" +call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("crazy ran O")
    
        }
    }
}

function plus(){
    console.log("plus ran")
    call = Math.floor(Math.random()*76)
    if (calledNums.indexOf(call) !== -1){
        console.log("reset")
        amtRan +=1
        if (amtRan > 1000){
            document.getElementById("called").innerHTML="All Numbers Called"
            document.getElementById("reset").innerHTML="Reset the game"
            alert("All numbers have been called.")
        }
        else{
            plus()
        }
        
    }
    else{
        
        if(call>0 && call<=15){
            document.getElementById("called").innerHTML="B- " + call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("plus ran B")
            
        }
        if (call>15 && call<=30){
            document.getElementById("called").innerHTML="I- "+call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("plus ran I")
    
        }
        if(call>30 && call<=45){
            document.getElementById("called").innerHTML="N- "+call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("plus ran N")
    
        }
        if(call>45 && call<=60){
            document.getElementById("called").innerHTML="G- "+call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("plus ran G")
    
        }
        if (call>60 && call<= 75){
            document.getElementById("called").innerHTML="O-" +call;
            calledNums.push(call)
            console.log(calledNums)
            console.log("plus ran O")
    
        }
    }
    
}




function prep(){
    document.getElementById("called").innerHTML = "Number shows up here"
    document.getElementById("callButton").innerHTML = "Call a number"
    document.getElementById("done").innerHTML = "Press this when someone wins!"
    document.getElementById("reset").innerHTML="Reset"
}
function decider(selection){
    console.log(selection)
    if (clearToBegin == true){
        if(selection === "standard"){
            gamemode = 1
        }
    
        prep()
    }
    if (clearToBegin== true){
        if(selection === "x"){
            
            gamemode=2
        }
        prep()
    }
    if (clearToBegin == true){
        if(selection === "plus"){
            console.log("above gamemode = 3")
            gamemode=3
        }
        prep()
    }
    if (clearToBegin==true){
        if(selection === "fourCorners"){
            gamemode = 4
        }
        prep()
    }
    if (clearToBegin==true){
        if(selection==="crazy"){
            gamemode=5
        }
        prep()
    }
    else{
        document.getElementById("warning").innerHTML="Please read the instructions and click dismiss to continue."
    }
    
}

function logic(){
    console.log("gamemode is" +gamemode)
    if (gamemode == 1){
        console.log("Logic: Standard")
        standard()
    }
    if (gamemode == 2){
        console.log("Logic: X")
        X()
    }
    if (gamemode == 3){
        plus()
    }
    if (gamemode == 4){
        fourCorners()
    }
    if (gamemode==5){
        crazy()
    }
}

function triviaSelection(){
    document.getElementById("triviaChoice").innerHTML="Would you like to have trivia every couple turns?"
    document.getElementById("triviaYes").innerHTML="yes"
    document.getElementById("triviaNo").innerHTML="no"
    
}



var reader;
function triviaTrue(userchoice){
    if (userchoice === true){
        doTrivia = true
        document.getElementById("triviaChoice").innerHTML=""
        document.getElementById("triviaYes").innerHTML=""
        document.getElementById("triviaNo").innerHTML=""
        document.getElementById("triviaUIchoice").innerHTML="Trivia = On"
        clearToBegin = true
        selection.style.color = "black";
        selection2.style.color = "black";
        selection3.style.color = "black";
        selection4.style.color = "black";
        selection5.style.color = "black";
        selection6.style.color = "black";
        selection7.style.color="black";
        document.getElementById("warning").innerHTML=""
        document.getElementById("triviaChoice").innerHTML="Select the file with the questions and answers."
        fileInput = document.getElementById("fileInput");
        fileInput.style.display = "flex";
        document.getElementById("myBtn").addEventListener("click", function() {
            
            // read the file
            reader = new FileReader();
            loadQuestions()
            // reader.readAsText(document.querySelector('input').files[0]);
            // text = reader.result;
            // console.log(text)
            tryIt = document.getElementById("myBtn")
            tryIt.style.display = "none";
            fileInput.style.display = "none";
            
            triviaInstructions.style.display = "none";

            // tokenize the strings
            // tokenized_answers = text.split('\n');
            // console.log(tokenized_answers)

            

          
        });
        
    }
    if (userchoice === false){
        doTrivia = false
        document.getElementById("triviaChoice").innerHTML=""
        document.getElementById("triviaYes").innerHTML=""
        document.getElementById("triviaNo").innerHTML=""
        document.getElementById("triviaUIchoice").innerHTML="Trivia = Off"
        clearToBegin = true
        selection.style.color = "black";
        selection2.style.color = "black";
        selection3.style.color = "black";
        selection4.style.color = "black";
        selection5.style.color = "black";
        selection6.style.color = "black";
        selection7.style.color="black"
        document.getElementById("warning").innerHTML=""
    }
}

function dismissInst(){
    let selection = document.getElementById("selection")
    let selection2 = document.getElementById("selection2")
    let selection3= document.getElementById("selection3")
    let selection4 = document.getElementById("selection4")
    let selection5 = document.getElementById("selection5")
    let selection6 = document.getElementById("selection6")
    let selection7= document.getElementById("selection7")
    document.getElementById("instructions").innerHTML=""
    document.getElementById("instructions2").innerHTML=""
    document.getElementById("clearInst").innerHTML=""
    document.getElementById("warning").innerHTML=""
    
    triviaSelection()

}

function tutorial(){
    let selection = document.getElementById("selection")
    let selection2 = document.getElementById("selection2")
    let selection3= document.getElementById("selection3")
    let selection4 = document.getElementById("selection4")
    let selection5 = document.getElementById("selection5")
    let selection6 = document.getElementById("selection6")
    let selection7=document.getElementById("selection7")
    selection.style.color = "#c9c9c9";
    selection2.style.color = "#c9c9c9";
    selection3.style.color = "#c9c9c9";
    selection4.style.color = "#c9c9c9";
    selection5.style.color = "#c9c9c9";
    selection6.style.color = "#c9c9c9";
    selection7.style.color="#c9c9c9";

}

function check(){
    
    var first = prompt("Ask the winner for the first number")
    var second = prompt("Ask the winner for the second number")
    var third = prompt("Ask the winner for the third number")
    var fourth = prompt("Ask the winner for the fourth number")
    var fifth = prompt("Ask the winner for the fifth number")

    console.log(first, second, third, fourth, fifth)
    console.log("array contents "+calledNums)
    var uno = calledNums.includes(parseInt(first))
    console.log(uno)
    var dos = calledNums.includes(parseInt(second))
    var tres = calledNums.includes(parseInt(third))
    var quatro = calledNums.includes(parseInt(fourth))
    var cinqo = calledNums.includes(parseInt(fifth))
    console.log(uno, dos, tres, quatro, cinqo)
    if (uno == true && dos == true && tres == true && quatro == true && cinqo == true){
        document.getElementById("done").innerHTML="They won"
    }
    else{
        document.getElementById("done").innerHTML="they did not win"
    }

}


document.addEventListener('keydown', function(event) {
    if (clearToBegin == true){
        if(event.keyCode == 13) { //old standard
            
            logic()
        }
    }    
});

function about(){
    document.getElementById("closeAbt").innerHTML="Close"
    document.getElementById("aboutTextHeader").innerHTML="About the project"
    document.getElementById("aboutText").innerHTML="This project was started by me when I was playing bingo with my family on New Year's Eve. We were playing Four Corners and I remember thinking that you only needed to call the 'B's and the 'O's, and that using the physical bingo caller made this more cumbersome than needed. That sparked the idea for this website."
    image.style.display = "block";
}

function closeAbout(){
    document.getElementById("closeAbt").innerHTML=""
    document.getElementById("aboutTextHeader").innerHTML=""
    document.getElementById("aboutText").innerHTML=""
    document.getElementById("aboutMeHeader").innerHTML=""
    document.getElementById("aboutMe").innerHTML=""
    let image = document.getElementById("nateLogo")
    image.style.display = "none";
}

