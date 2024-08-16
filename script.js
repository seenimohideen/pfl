const menu = document.querySelector(".toogle")
const menulist = document.querySelector("header ul") 
menu.addEventListener('click',()=>{
    menulist.classList.toggle('showmenu')

})


var skills = document.querySelector(".skills-one")
function showskill(){
    skills.style.display = "block"
}
function closeskill(){
    skills.style.display = "none"
}

var ed = document.querySelector(".ed-one")
function showed(){
    ed.style.display = "block"
}
function closeed(){
    ed.style.display = "none"
}

var pj = document.querySelector(".pj-one")
function showpj(){
    pj.style.display = "block"
}
function closepj(){
    pj.style.display = "none"
}
var darkmode = document.querySelector(".dark")

function click(){
    darkmode.style.backgroundColor = "blue"
}