//declarando variáveis DOM
var image = document.getElementById('img')
var on = document.getElementById('turn-on') 
var off = document.getElementById('turn-off')

on.addEventListener('click',()=>{
    image.src="images/acesa.gif"
})
off.addEventListener('click',()=>{
    image.src="images/apagada.gif"
})
image.addEventListener('dblclick',()=>{
    image.src="images/quebrada.jpg"
})

//outra forma de criar as funções
/*function acender(){
    image.src="images/acesa.gif"
}
function apagar(){
    image.src="images/apagada.gif"
}
function quebrar(){
    image.src="images/quebrada.jpg"
}*/