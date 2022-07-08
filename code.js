function doAnimation(editclass, text){
    console.log()
    toEdit = document.getElementById(editclass)
    toEdit.classList.remove('show')
    toEdit.classList.add('hide')
    textObj = document.getElementById(text)
    textObj.classList.remove("hide")
    textObj.classList.add("show")
    // toEdit.style.display = "none";
}

function doAnimationButUndo(editclass, text){
    console.log()
    toEdit = document.getElementById(editclass)
    toEdit.classList.remove('hide')
    toEdit.classList.add('show')
    
    textObj = document.getElementById(text)
    
    textObj.classList.remove("show")
    textObj.classList.add("hide")
    // toEdit.style.display = "block";
} 


function stopAnimation(){
    console.log("inside stop animation")
    document.getElementById("myvideo").style.display = "none";
    document.getElementById("vidcont").style.display = "none";
    //github please
}

function onLoad() {
    // get the resolution of the screen
    var x = window.innerWidth;
    var y = window.innerHeight;
    // calculate the aspect ratio of the screen
    var aspectRatio = x / y;
    // if the screen is vertical (taller than wide) make the website empty
    if (aspectRatio < 1) {
        alert("Please use a horizontal screen");
        location.replace("https://github.com/nwvbug")
    }

    document.getElementById("myvideo").play()
    console.log("played video")
    setTimeout(stopAnimation, 2000)
    
    

}

function showSBinfo(m){
    if(m == "prompt"){
        document.getElementById("extra1").innerHTML = "The prompt for SpamBot has been intricately designed to acheive maximum performance. Personalities can be added to SpamBot using RyCorp's proprietary prompt addition system, running on the spaCy AI engine."
    }
    else if(m=="mem"){
        document.getElementById("extra2").innerHTML = "SpamBot's memory system can be customized to determine how long it remembers details from conversations. These memories are re-integrated back into the prompt, allowing the SpamBot to have consistent opinions and beliefs."
        
    }
}


