document.addEventListener("DOMContentLoaded", function (event) {
    var btnNo = document.getElementById("btnNo")
    var btnSi = document.getElementById("btnSi")
    var divMain=document.getElementById("me-per")
    var divMainMeper=document.getElementById("me-perdono")
    var widht = 88
    var height = 54
    var words = ["Estas segurisima?", "si es si te regalo un cupón siono", "no sé que mas poner", "ya perdonalo Alejandra", "andale si","siono?","ya dispensame","es la última"]
    var wordsCounter = 0
    btnNo.onclick = function () {
        btnSi.style.width = widht + "px"
        btnSi.style.height = height + "px"
        btnNo.innerHTML = words[wordsCounter]
        widht += 50
        height += 50
        if (words[wordsCounter] == "es la última") {
            wordsCounter = 0
            widht = 120
            height = 54
        }
        wordsCounter++

    }
    btnSi.onclick = function () {
        divMain.style.display="none"
        divMainMeper.style.display="block"
    }
});

