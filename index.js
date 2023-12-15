alert("Children! Santa has the magical power to open one extra gift!!")
window.onload=function(){
   backgroundsound();
}
function backgroundsound(){
   let click=new Audio("./assets/jingle-bells.mp3");
   click.volume=0.2;
   click.play();
   click.loop=true;
}

let userName = document.getElementById("user");
userName.innerText = localStorage.getItem("username");
let AllBoxes = document.querySelectorAll(".box");
let ImageGit = document.querySelectorAll(".gift");
let s = 0;
let c = 0;
let a =[];
let b =[];
let TickedBoxes = 0;
let playerScore = document.getElementById("val2");
let computerScore = document.getElementById("val1");
let selectdBoxes = [];
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
  let Id = Number(event.target.id);

  AllBoxes[Id].innerHTML = " ";

  let ImageIndex = ImagesArray[Math.floor(Math.random() * ImagesArray.length)];

  let Image = document.createElement("img");

  Image.src = ImageIndex;

  Image.style.width = "100%";

  ImageGit[Id].style.display = "none";

  AllBoxes[Id].appendChild(Image);
  //   AllBoxes[Id].onclick = null;

  AllBoxes[Id].removeEventListener("click", UserclickFunction);

  ImageGit[Id].removeEventListener("click", UserclickFunction);

  selectdBoxes.push(Id);

  TickedBoxes++;
  pointReader(ImageIndex, "Computer");
  ComputerSelection();
}
setTimeout(()=>{
   

},200)
function ComputerSelection() {
  let ranDomDivNumber = ranDOmGenerateDiv();
  let ranDomeImage = ranDOmGenerateImage();

  let NumId = ranDomDivNumber;

  if (selectdBoxes.includes(ranDomDivNumber)) {
    ranDomDivNumber = "";
    ranDomeImage = "";
    ComputerSelection();
  }
  ranDomDivNumber = AllBoxes[ranDomDivNumber];

  ranDomeImage = ImagesArray[ranDomeImage];

  ranDomDivNumber.innerHTML = " ";

  let ImageCreation = document.createElement("img");

  ImageCreation.src = ranDomeImage;

  ImageCreation.style.width = "100%";

  ranDomDivNumber.appendChild(ImageCreation);

  ranDomDivNumber.removeEventListener("click", UserclickFunction);

  selectdBoxes.push(NumId);
  TickedBoxes++;
  pointReader(ranDomeImage, "User");
}
console.log(AllBoxes);

for (let i = 0; i < AllBoxes.length; i++) {
  AllBoxes[i].addEventListener("click", UserclickFunction);
}

function ranDOmGenerateDiv() {
  let ranDomDivNumber = Math.floor(Math.random() * 25);

  return ranDomDivNumber;
}

function ranDOmGenerateImage() {
  let ranDomeImage = Math.floor(Math.random() * 12);

  return ranDomeImage;
}

function pointReader(imageFromArray, Player) {
  if (Player == "User") {
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
    playerScore.innerText = s;
    a.push(s)
  } else if (Player == "Computer") {
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
    computerScore.innerText = c;
    b.push(c)
   }
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
   localStorage.setItem("score",b[12]);
}
