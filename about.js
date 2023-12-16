var click=document.getElementById("btn2");  //js code to go to second aboutpage(about2.html)
click.addEventListener("click",function(){
    let backgroundsound=new Audio("./assets/click.wav");//adding clicking sound
    backgroundsound.volume=0.2;//volume
    backgroundsound.play(); 
    setTimeout(()=>{
        window.location.href="./about2.html"//moving to next page
    },700)
})
let backgroundsound=new Audio("./assets/joyful-jingle.mp3");//bacground audio
backgroundsound.volume=0.2;//voulme
backgroundsound.play();
backgroundsound.loop=true;
//giving text in variable text to run para in word by word
var text=`Embark on a thrilling holiday adventure with our new game, "Gift Box Gauntlet!" In this epic battle against Krampus, you'll face 25 mysterious gift boxes, each containing either delightful goodies or mischievous monster candies.
Your mission is to outsmart Krampus by selecting the right gift boxes filled with the sweetest delights, earning you precious positive points. However, beware! Choose the wrong box, and those pesky monster candies will cost you valuable points.
As the excitement builds over the course of 25 intense rounds, every decision counts. Will you emerge victorious with a higher score than Krampus, or will the mischievous creature prevail?
The fate of the holiday season rests in your hands! Unleash your candy-crushing skills, dodge those devious monster candies, and claim the title of Gift Box Gauntlet champion. Are you up for the challenge?`
let i=0;//index 0
function typeLetter(){
    const a=document.getElementById("text");//Id from html to store text value
    a.textContent+=text[i];//storing text content in a
    i++;//increament

    if(i<text.length){
        setTimeout(typeLetter,23);//23 ms to print each word
    }
}
document.addEventListener("DOMContentLoaded",function(){
    typeLetter();//calling
})

