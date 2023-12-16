var button=document.getElementById("btn");
var score=document.getElementById("score");
var userscore=localStorage.getItem("score")//geting username in localstorage
score.innerText=userscore;
button.addEventListener("click",function(){
    let backgroundsound=new Audio("./assets/click.wav");// clicking audio
    backgroundsound.volume=0.2;
    backgroundsound.play();
    setTimeout(()=>{
        window.location.href="./index.html"// going to index page
    },500)
})
document.getElementById('winner').addEventListener('click', function() {
    this.classList.toggle('expanded');//toggle effect
});
let click=new Audio("./assets/wishes.mp3");//Background audio
click.volume=0.2;
click.play();
click.loop=true;
var text=document.getElementById("text2");
//array
let array=[
    "You rock",
    "Bravo",
    "My Hero",
    "Good job"
]
var num=Math.floor(Math.random()*4);
text.innerText=array[num];//innertext
text.style.color="#fe6c01";
text.style.marginLeft="46%";