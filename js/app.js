const div=document.getElementById("jokes")
const button=document.getElementById("btn")

function generateJoke(){

    fetch("https://api.chucknorris.io/jokes/random")
    .then(function(response){
    response.json().then(function(data){
        console.log(data)
        console.log(data.value)
        div.innerHTML=`
        <p>${data.value}</p>
        `
    })
    })
}

button.addEventListener("click",function(){
    // alert("hello")
    generateJoke()
})
window.addEventListener("DOMContentLoaded",function(){
    generateJoke()
})