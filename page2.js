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
let playground=document.getElementById("main");
let player=0;
let count1=0;
let count2=0;
//addEvent
//toggel between player
playground.addEventListener("click",()=>{
    if(player==0){
        player=1;
    }
    else{
        player=0;
    }
});
let box1eventcount=0;
box1.addEventListener("click",()=>{
    if(box1eventcount===0){
        if(player==0){
            document.getElementById("sbox1-1").classList.add("common-format");
            document.getElementById("sbox1-1").innerHTML="&#9711;";
            document.getElementById("sbox1-1").style.color="green";
            box1eventcount=1; 
            calculate("1-1",0);
        }
        else{
            document.getElementById("sbox1-1").classList.add("common-format");
            document.getElementById("sbox1-1").innerHTML="&times;";
            document.getElementById("sbox1-1").style.color="red";
            box1eventcount=1; 
            calculate("1-1",1);
        }
    }
        
});
let box2eventcount=0;
box2.addEventListener("click",()=>{
    if(box2eventcount===0){
        if(player==0){
            document.getElementById("sbox1-2").classList.add("common-format");
            document.getElementById("sbox1-2").innerHTML="&#9711;";
            document.getElementById("sbox1-2").style.color="green";
            box2eventcount=1; 
            calculate("1-2",0);
        }
        else{
            document.getElementById("sbox1-2").classList.add("common-format");
            document.getElementById("sbox1-2").innerHTML="&times;";
            document.getElementById("sbox1-2").style.color="red";
            box2eventcount=1; 
            calculate("1-2",1);
        }
    }
        
});
let box3eventcount=0;
box3.addEventListener("click",()=>{
    if(box3eventcount===0){
        if(player==0){
            document.getElementById("sbox1-3").classList.add("common-format");
            document.getElementById("sbox1-3").innerHTML="&#9711;";
            document.getElementById("sbox1-3").style.color="green";
            box3eventcount=1; 
            calculate("1-3",0);
        }
        else{
            document.getElementById("sbox1-3").classList.add("common-format");
            document.getElementById("sbox1-3").innerHTML="&times;";
            document.getElementById("sbox1-3").style.color="red";
            box3eventcount=1; 
            calculate("1-3",1);
        }
    }
        
});
let box4eventcount=0;
box4.addEventListener("click",()=>{
    if(box4eventcount===0){
        if(player==0){
            document.getElementById("sbox2-1").classList.add("common-format");
            document.getElementById("sbox2-1").innerHTML="&#9711;";
            document.getElementById("sbox2-1").style.color="green";
            box4eventcount=1; 
            calculate("2-1",0);
        }
        else{
            document.getElementById("sbox2-1").classList.add("common-format");
            document.getElementById("sbox2-1").innerHTML="&times;";
            document.getElementById("sbox2-1").style.color="red";
            box4eventcount=1; 
            calculate("2-1",1);
        }
    }
        
});
let box5eventcount=0;
box5.addEventListener("click",()=>{
    if(box5eventcount===0){
        if(player==0){
            document.getElementById("sbox2-2").classList.add("common-format");
            document.getElementById("sbox2-2").innerHTML="&#9711;";
            document.getElementById("sbox2-2").style.color="green";
            box5eventcount=1; 
            calculate("2-2",0);
        }
        else{
            document.getElementById("sbox2-2").classList.add("common-format");
            document.getElementById("sbox2-2").innerHTML="&times;";
            document.getElementById("sbox2-2").style.color="red";
            box5eventcount=1; 
            calculate("2-2",1);
        }
    }
        
});
let box6eventcount=0;
box6.addEventListener("click",()=>{
    if(box6eventcount===0){
        if(player==0){
            document.getElementById("sbox2-3").classList.add("common-format");
            document.getElementById("sbox2-3").innerHTML="&#9711;";
            document.getElementById("sbox2-3").style.color="green";
            box6eventcount=1; 
            calculate("2-3",0);
        }
        else{
            document.getElementById("sbox2-3").classList.add("common-format");
            document.getElementById("sbox2-3").innerHTML="&times;";
            document.getElementById("sbox2-3").style.color="red";
            box6eventcount=1; 
            calculate("2-3",1);
        }
    }
        
});
let box7eventcount=0;
box7.addEventListener("click",()=>{
    if(box7eventcount===0){
        if(player==0){
            document.getElementById("sbox3-1").classList.add("common-format");
            document.getElementById("sbox3-1").innerHTML="&#9711;";
            document.getElementById("sbox3-1").style.color="green";
            box7eventcount=1; 
            calculate("3-1",0);
        }
        else{
            document.getElementById("sbox3-1").classList.add("common-format");
            document.getElementById("sbox3-1").innerHTML="&times;";
            document.getElementById("sbox3-1").style.color="red";
            box7eventcount=1; 
            calculate("3-1",1);
        }
    }
        
});
let box8eventcount=0;
box8.addEventListener("click",()=>{
    if(box8eventcount===0){
        if(player==0){
            document.getElementById("sbox3-2").classList.add("common-format");
            document.getElementById("sbox3-2").innerHTML="&#9711;";
            document.getElementById("sbox3-2").style.color="green";
            box8eventcount=1; 
            calculate("3-2",0);
        }
        else{
            document.getElementById("sbox3-2").classList.add("common-format");
            document.getElementById("sbox3-2").innerHTML="&times;";
            document.getElementById("sbox3-2").style.color="red";
            box8eventcount=1; 
            calculate("3-2",1);
        }
    }
        
});
let box9eventcount=0;
box9.addEventListener("click",()=>{
    if(box9eventcount===0){
        if(player==0){
            document.getElementById("sbox3-3").classList.add("common-format");
            document.getElementById("sbox3-3").innerHTML="&#9711;";
            document.getElementById("sbox3-3").style.color="green";
            box9eventcount=1; 
            calculate("3-3",0);
        }
        else{
            document.getElementById("sbox3-3").classList.add("common-format");
            document.getElementById("sbox3-3").innerHTML="&times;";
            document.getElementById("sbox3-3").style.color="red";
            box9eventcount=1; 
            calculate("3-3",1);
        }
    }
        
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
            if((string==(`${a}-${b}`)) && (currentplayer==0))
                div0.push((`${a}-${b}`)); 
            if((string==(`${a}-${b}`)) && (currentplayer==1))
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
