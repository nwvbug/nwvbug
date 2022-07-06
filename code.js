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