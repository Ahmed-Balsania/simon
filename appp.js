 let gameseq = [];
 let playerseq = [];
 let items = ["yellow","red","blue","green"];
 let high = 0;

 let level = 0;
 let start = false;

 let h2 = document.querySelector("h2");


 document.addEventListener("keypress",()=>{
  if(start == false){
  console.log("game started");
   start = true;
   
   levelup();
  }
 });


 function levelup(){
  level++;
  h2.innerText=`Level ${level}`;

  let rannum = Math.floor(Math.random()*4);
  let rancol = items[rannum];
  let randombut = document.querySelector(`.${rancol}`);
  flash(randombut);
  gameseq.push(rancol);
  console.log(gameseq);
  playerseq=[];
 }


 function flash(btn){
 btn.classList.add("flash");
 setTimeout(()=>{
  btn.classList.remove("flash");
 },250);
 }

function userflash(){
  let btn = this;
  flash(btn); 
  console.log(this);

  let id = btn.getAttribute("id");
  playerseq.push(id);
  console.log(playerseq);
  check(playerseq.length-1);
}

 let btns = document.querySelectorAll(".btn");
  for(btn of btns){
   btn.addEventListener("click",userflash);
  }

  function check(idx){
   
   if(gameseq[idx]===playerseq[idx]){
    if(playerseq.length===gameseq.length){
     setTimeout(levelup,1000);
    }
    console.log("same");
   }else {
    console.log("game over");
   

    reset();
   }
   
  }
  function reset(){
   gameseq=[];
   playerseq=[];
   start = false;
   if(high<level){
    high=level;
   }
   console.log(high);
   h2.innerHTML=`Game over! your score was ${level} <br> Press any key to start again`;
   let h3 = document.querySelector("h3");
   h3.innerText=`Highest Score = ${high}`;
   level=0;
  }
 
 
 