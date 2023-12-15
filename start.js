let click=new Audio("./assets/jingle-family.mp3");
click.volume=0.2;
click.play();
click.loop=true;
var input = document.getElementById("input");
var button = document.getElementById("btn");
let getE = []; //array
let s=" ";
button.addEventListener("click", function () {
  let store = input.value; //storing input box value in variable store
  input.innerHTML=" ";
  getE.push(store); //pushing data
  if(store.trim()!==""){
    localStorage.setItem("username",getE); // storing to localstorage to reuse it
    setTimeout(() => {
      window.location.href = "./home.html";
    }, 00); //500 ms to go to index.html
  }else{
    alert("Please enter name");
  }
  
});
