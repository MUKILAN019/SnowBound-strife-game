var containers=document.getElementsByClassName("button");
let backgroundsound=new Audio("./assets/joyful-jingle.mp3");//background audio
backgroundsound.volume=0.2;
backgroundsound.play();
backgroundsound.loop=true;
Array.from(containers).forEach(function(containers,i){
    containers.addEventListener("click",function(){
        if (i==0){
            funcNo1();
        }
        else if(i==1){
            funcNo2();
        }
        else if(i==2){
            funcNo3();
        }
    })
})
function funcNo1(){
    console.log("started")
    //click
    let backgroundsound=new Audio("./assets/click.wav");//clicking audio
    backgroundsound.volume=0.2;
    backgroundsound.play(); 
    const image = document.getElementById('santahome');
    //adding motion to image
    image.style.transform = 'translateY(-100px)';//to santa claus img
     // Adjust the duration to match the CSS animation duration
    setTimeout(() => {
        image.style.transform = 'translateY(0)';//initial position
        
      }, 500);
     
     setTimeout(()=>{
        window.location.href="./start.html";
     },1000);
    }

function funcNo2(){
    const image = document.getElementById('santahome');
    //adding motion to image
    image.style.transform = 'translateY(-100px)';//to santa claus img
    //click
    let backgroundsound=new Audio("./assets/click.wav");
    backgroundsound.volume=0.2;
    backgroundsound.play(); 
    // Adjust the duration to match the CSS animation duration
    setTimeout(() => {
        image.style.transform = 'translateY(0)';
        }, 500);
    setTimeout(()=>{
            window.location.href="./about1.html";
        },1000);
}
function funcNo3(){
    //click
    let backgroundsound=new Audio("./assets/click.wav");//clicking audio
    backgroundsound.volume=0.2;
    backgroundsound.play(); 
    window.location.href="https://google.com"
    window.close();
}

