console.log("probando")

const ir_arriba = document.getElementById("ir_arriba");

window.onscroll = function(){
    if (window.scrollY > 100) {
        ir_arriba.setAttribute("style","display:inline")
    } else {
        ir_arriba.setAttribute("style","display:none")
    }
}