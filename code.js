function doAnimation(editclass, text, div, num){
    console.log()
    toEdit = document.getElementById(editclass)
    toEdit.classList.remove('show')
    toEdit.classList.add('hide')
    textObj = document.getElementById(text)
    textObj.classList.remove("hide")
    textObj.classList.add("show")
    if(num == 1){
        document.getElementById(div).style.backgroundColor = 'wheat';
    }else{
        document.getElementById(div).style.backgroundColor = '#66a3bb';

    }
    textObj.style.display='';
    // toEdit.style.display = "none";
}

function doAnimationButUndo(editclass, text, div, num){
    console.log()
    toEdit = document.getElementById(editclass)
    toEdit.classList.remove('hide')
    toEdit.classList.add('show')
    
    textObj = document.getElementById(text)
    
    textObj.classList.remove("show")
    textObj.classList.add("hide")
    // toEdit.style.display = "block";
    if(num == 1){
        document.getElementById(div).style.backgroundColor = '#66a3bb';
    }else{
        document.getElementById(div).style.backgroundColor = 'wheat';

    }
    textObj.style.display='none';
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
        window.location.href='mobile/index.html'
        
        
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


