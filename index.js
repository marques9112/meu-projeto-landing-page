var setadireira = window.document.getElementById("setadireita")
var setadireita = window.document.getElementById("setadireita")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setaesquerda = window.document.getElementById("setaesquerda")


function rolarparadireita(){
    samantha.style = "display:flex"
    bruna.style = "display:none"
    setadireira.style = "display:none"
    setaesquerda.style = "display:flex"
}

function rolarparaesquerda(){
   samantha.style = "display:none"
   bruna.style = "display:flex"
   setaesquerda.style = "display:none"
   setadireita.style = "display:flex"

}