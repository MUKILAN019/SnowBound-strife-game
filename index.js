alert("Children! Santa has the magical power to open one extra gift!!")//alert
window.onload=function(){
   backgroundsound();
}
function backgroundsound(){
   let click=new Audio("./assets/jingle-bells.mp3");//background music
   click.volume=0.2;
   click.play();
   click.loop=true;
}

let userName = document.getElementById("user");
userName.innerText = localStorage.getItem("username");
let AllBoxes = document.querySelectorAll(".box");//each and one div
let ImageGit = document.querySelectorAll(".gift");
let s = 0;//counting 
let c = 0;//counting
let a =[];//empty array
let b =[];//emty array
let TickedBoxes = 0;
let playerScore = document.getElementById("val2");
let computerScore = document.getElementById("val1");
let selectdBoxes = [];//empty array
//array --> images
let ImagesArray = [
  "./assets/candy1.png",
  "./assets/candy2.png",
  "./assets/candy3.png",
  "./assets/candy4.png",
  "./assets/candy5.png",
  "./assets/candy6.png",
  "./assets/danger1.png",
  "./assets/danger2.png",
  "./assets/danger3.png",
  "./assets/danger4.png",
  "./assets/danger5.png",
  "./assets/danger6.png",
];
function UserclickFunction(event) {
  let Id = Number(event.target.id);//if the id is 4 the log in number 4

  AllBoxes[Id].innerHTML = " ";//effectively clearing its content

  let ImageIndex = ImagesArray[Math.floor(Math.random() * ImagesArray.length)];//running random number to generate random image in ImagesArray

  let Image = document.createElement("img");//Creating element image

  Image.src = ImageIndex;//running random images

  Image.style.width = "100%";//image width 100%

  ImageGit[Id].style.display = "none";//while clicking gift box the image gifte box display;none

  AllBoxes[Id].appendChild(Image);//the image get append to respective div

  AllBoxes[Id].removeEventListener("click", UserclickFunction);//removing a function for div once one click over

  ImageGit[Id].removeEventListener("click", UserclickFunction);//removing a function to gift box

  selectdBoxes.push(Id);//selected box id tore in selectedboxes

  TickedBoxes++;//increament for (check 25)
  pointReader(ImageIndex, "Computer");//calling function with two parameters
  ComputerSelection();//calling computer to play next
}
//computer turn
function ComputerSelection() {
  let ranDomDivNumber = ranDOmGenerateDiv();//calling function for random div generate
  let ranDomeImage = ranDOmGenerateImage();//calling function for random image generate

  let NumId = ranDomDivNumber; //storing random div in object numId

  if (selectdBoxes.includes(ranDomDivNumber)) {//if random div avilable
    ranDomDivNumber = "";//empty string
    ranDomeImage = "";//empty image
    ComputerSelection();// calling again computerSelection function
  }
  ranDomDivNumber = AllBoxes[ranDomDivNumber];//randomdiv  will store in random div

  ranDomeImage = ImagesArray[ranDomeImage];//randomimage will store random images

  ranDomDivNumber.innerHTML = " ";//effectively clearing its content

  let ImageCreation = document.createElement("img");// creating element image

  ImageCreation.src = ranDomeImage;// generating random images

  ImageCreation.style.width = "100%";// image width 100%

  ranDomDivNumber.appendChild(ImageCreation);//appending random image in div

  ranDomDivNumber.removeEventListener("click", UserclickFunction);//removing function to stop one div to make another random image

  selectdBoxes.push(NumId);//pushing id into selectedboxes
  TickedBoxes++;//increament (clicking 25)
  pointReader(ranDomeImage, "User");//calling function with two parameters 
}
console.log(AllBoxes);// output (no any purpose to do here)

for (let i = 0; i < AllBoxes.length; i++) {
  AllBoxes[i].addEventListener("click", UserclickFunction);
}

function ranDOmGenerateDiv() {//function to generate random div
  let ranDomDivNumber = Math.floor(Math.random() * 25);

  return ranDomDivNumber;//returning
}

function ranDOmGenerateImage() {//function to generate random images
  let ranDomeImage = Math.floor(Math.random() * 12);

  return ranDomeImage;//returning
}

function pointReader(imageFromArray, Player) {//function with two parameters
  if (Player == "User") { //if it's computer
    if (imageFromArray == ImagesArray[0]) {
      s = s + 2;
    } else if (imageFromArray == ImagesArray[1]) {
      s = s + 3;
    } else if (imageFromArray == ImagesArray[2]) {
      s = s + 5;
    } else if (imageFromArray == ImagesArray[3]) {
      s = s + 4;
    } else if (imageFromArray == ImagesArray[4]) {
      s = s + 5;
    } else if (imageFromArray == ImagesArray[5]) {
      s = s + 6;
    } else if (imageFromArray == ImagesArray[6]) {
      s = s - 3;
    } else if (imageFromArray == ImagesArray[7]) {
      s = s - 2;
    } else if (imageFromArray == ImagesArray[8]) {
      s = s - 2;
    } else if (imageFromArray == ImagesArray[9]) {
      s = s - 1;
    } else if (imageFromArray == ImagesArray[10]) {
      s = s - 3;
    } else if (imageFromArray == ImagesArray[11]) {
      s = s - 2;
    }
    playerScore.innerText = s;//score to innertext
    a.push(s)// pushing to array
  } else if (Player == "Computer") {//if it's player
    if (imageFromArray == ImagesArray[0]) {
      c = c + 2;
    } else if (imageFromArray == ImagesArray[1]) {
      c = c + 3;
    } else if (imageFromArray == ImagesArray[2]) {
      c = c + 5;
    } else if (imageFromArray == ImagesArray[3]) {
      c = c + 4;
    } else if (imageFromArray == ImagesArray[4]) {
      c = c + 5;
    } else if (imageFromArray == ImagesArray[5]) {
      c = c + 6;
    } else if (imageFromArray == ImagesArray[6]) {
      c = c - 3;
    } else if (imageFromArray == ImagesArray[7]) {
      c = c - 2;
    } else if (imageFromArray == ImagesArray[8]) {
      c = c - 2;
    } else if (imageFromArray == ImagesArray[9]) {
      c = c - 1;
    } else if (imageFromArray == ImagesArray[10]) {
      c = c - 3;
    } else if (imageFromArray == ImagesArray[11]) {
      c = c - 2;
    }
    computerScore.innerText = c;//score to innertext
    b.push(c)//pushing array
   }
   //checking for winner
  if (b[12] > a[11] && TickedBoxes == 25) {
   setTimeout(()=>{
      window.location.href = "./win.html";
   },1)} else if (a[11] > b[12] && TickedBoxes == 25) {
    setTimeout(()=>{
      window.location.href = "./lose.html";
    },1)
   }else if(a[11]===b[12] && TickedBoxes==25){
      alert(Draw)
      setTimeout(()=>{
         window.location.href = "./home.html";
       },100)
   }
   localStorage.setItem("score",b[12]);// storing in localstorage
}
