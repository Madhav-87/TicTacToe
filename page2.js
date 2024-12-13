const playername1 = localStorage.getItem("player1");
const playername2 = localStorage.getItem("player2");
//page2
let box1=document.getElementById("box1-1");
let box2=document.getElementById("box1-2");
let box3=document.getElementById("box1-3");
//Box 2
let box4=document.getElementById("box2-1");
let box5=document.getElementById("box2-2");
let box6=document.getElementById("box2-3");
//Box 3
let box7=document.getElementById("box3-1");
let box8=document.getElementById("box3-2");
let box9=document.getElementById("box3-3");
let playground=document.querySelectorAll(".child-box");
let player=1;
let count1=0;
let count2=0;
//addEvent
//toggel between player
playground.forEach((div)=>{
    div.addEventListener("click",()=>{
    if(div.innerText===""){
    if(player==0){
        player=1;
    }
    else{
        player=0;
    }
    }
})
});
function marker(event){//event object is pass to access its properties
    if(player==0){
    div=event.target;//which element hit the event specifically among severals
    div.classList.add("common-format");
    div.innerHTML="&#9711;";
    div.style.color="green";
    calculate(div.getAttribute("id").toString(),0);
    div.removeEventListener("click",marker);
    } 
    else{
    const div=event.target;//which element hit the event specifically among severals
    div.classList.add("common-format");
    div.innerHTML="&times;";
    div.style.color="red";
    calculate(div.getAttribute("id").toString(),1);
    div.removeEventListener("click",marker);   
    }
}
playground.forEach((div)=>{
    div.addEventListener("click",marker)
});
let div0=[];
let div1=[];
let a;
let b;
let c;
let result=[['1-1','2-1','3-1'],
            ['1-1','1-2','1-3'],
            ['2-1','2-2','2-3'],
            ['3-1','3-2','3-3'],
            ['1-1','2-2','3-3'],
            ['1-3','2-2','3-1'],
            ['1-2','2-2','3-2'],
            ['1-3','2-3','3-3']];
function calculate(string,currentplayer){
    for(a=1;a<=3;++a){
        for(b=1;b<=3;++b){
            if((string==(`box${a}-${b}`)) && (currentplayer==0))
                div0.push((`${a}-${b}`)); 
            if((string==(`box${a}-${b}`)) && (currentplayer==1))
                div1.push((`${a}-${b}`)); 
      }
    }
    if(1<div1.length)
    perform();
}
function perform(){
        div0.sort();
        div1.sort();
        for(b=0;b<=7;++b){
            for(c=0;c<div0.length;++c){
            for(a=0;a<=2;++a){
                if(result[b][a]===div0[c]){
                    ++count1;
                    if(count1===3){
                       alert(`${playername1} Wins!\n${playername2} Loose`);
                       box9eventcount=1;box8eventcount=1;box7eventcount=1;
                       box6eventcount=1;box5eventcount=1;box4eventcount=1;
                       box3eventcount=1;box2eventcount=1;box1eventcount=1;
                       playAgain();
                    }
                }   
                }
            }
            count1=0;
        }
    for(b=0;b<=7;++b){
        for(c=0;c<div1.length;++c){
        for(a=0;a<=2;++a){
            if(result[b][a]===div1[c]){
                ++count2;
                if(count2===3){
                   alert(`${playername2} Wins!\n${playername1} Loose`);
                    box9eventcount=1;box8eventcount=1;box7eventcount=1;
                    box6eventcount=1;box5eventcount=1;box4eventcount=1;
                    box3eventcount=1;box2eventcount=1;box1eventcount=1;
                    playAgain();
                }
            } 
            }
        }
        count2=0;
    }
}
function playAgain(){
    document.querySelector(".passion-one-regular").style.visibility="visible";
    document.querySelector(".passion-one-regular").addEventListener("click",()=>{
        window.location.reload();//reload current document
    });
}