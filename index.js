var templeaudio = new Audio('tttimg/temple.mp3');
var swordaudio=new Audio('tttimg/swordhit.mp3');
var shieldaudio=new Audio('tttimg/shieldhit.mp3');
var wrongaudio=new Audio('tttimg/wrong.mp3')
var demonaudio=new Audio('tttimg/demonmusic.mp3')
var winsound=new Audio('tttimg/winsound.wav')
var girlmusic=new Audio('tttimg/girlmusic.mp3')
var hashiramusic=new Audio('tttimg/hashiramusic.mp3')
var startmusic=new Audio('tttimg/startmusic.mp3')
var boymusic=new Audio('tttimg/boymusic.mp3')
let box=Array.from(document.getElementsByClassName("box"))
let res=document.getElementById("result")
let game=document.querySelector(".game")
let music=document.getElementById("music")
let line=document.querySelector(".line")
let main=document.getElementById("main")
let change=document.getElementById("change")
let theme=document.getElementById("themee")
let drawimg=document.getElementById("drawimg")
let win=document.getElementById("win")
let restart=document.getElementById("restartm")
let exit=document.getElementById("exit")
let drawtext=document.getElementById("drawtext")
let ctheme=0
let turn="X"
let flag=1
var c=0
// console.log(button)
console.log(box)

const changeturn=()=>{
   turn=turn=="X"?"0":"X";
}
console.log(box[0].img)

let winrule=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let winner=()=>{
    winrule.forEach((e)=>{
        if(box[e[0]].style.opacity=="100"&&box[e[1]].style.opacity=="100"&&box[e[2]].style.opacity=="100"||box[e[0]].style.opacity=="99"&&box[e[1]].style.opacity=="99"&&box[e[2]].style.opacity=="99")
        {
            //res.textContent="winner is X"
            console.log("Winner")
            demonaudio.pause()
            winsound.play()
            box[e[0]].classList.remove("box")
            box[e[0]].classList.add("box2")
            box[e[1]].classList.remove("box")
            box[e[1]].classList.add("box2")
            box[e[2]].classList.remove("box")
            box[e[2]].classList.add("box2")
            setTimeout(() => {
            box[e[0]].classList.remove("box2")
            box[e[0]].classList.add("box3")
            box[e[1]].classList.remove("box2")
            box[e[1]].classList.add("box3")
            box[e[2]].classList.remove("box2")
            box[e[2]].classList.add("box3")
            }, 2000);
            setTimeout(rem,3500)
            function rem(){
            for(i=0;i<=8;i++)
            {
                if(i==e[0]||i==e[1]||i==e[2])
                {
                    continue
                }
                else
                {
                    box[i].style.width="0"
                    box[i].style.border="0"
                }
            }
            
           }
           setTimeout(() => {
            if(box[e[0]].style.opacity=="99")
            {boyimg.style.width="0"
            boyimg.style.transition="width 1s"}
            else
            {
                girlimg.style.width="0"
                girlimg.style.transition="width 0.5s"
            }
            gridbox.style.width="0"
            
            
            setTimeout(() => {
                if(box[e[0]].style.opacity=="99"){
                girlimg.style.width="0%"
                girlimg.style.transition="width 0s"}
                else
               {boyimg.style.width="0"
                boyimg.style.transition="width 0s"}
            }, 2000);
            gridbox.style.opacity="0"
            gridbox.style.transition="opacity 0s"
        }, 3000);
        setTimeout(()=>{
            if(box[e[0]].style.opacity=="99")
            {demonaudio.pause()
                startmusic.play()
            girlmusic.play()
            main.style.backgroundImage="url('tttimg/shinobubeatgiyu.gif')"}
            else
            {demonaudio.pause()
                startmusic.play()
                boymusic.play()
                main.style.backgroundImage="url('tttimg/giyuwin.gif')"}
        },5000)
        finaltext=()=>{
            girlmusic.pause()
            boymusic.pause()
            if(ctheme==0)
            {main.style.backgroundImage="url('tttimg/demonback.jpg')"}
            else
            {main.style.backgroundImage="url('tttimg/japanback.jpg')"}
            gridbox.style.display="flex"
            gridbox.style.opacity="1"
            win.style.opacity="1"
            restart.style.opacity="1"
            restart.style.zIndex="1"
            exit.style.opacity="1"
            exit.style.zIndex="1"
            gridbox.style.width="35%"
        }
            if(box[e[0]].style.opacity=="99")
            {setTimeout(finaltext,18000)}
            else
            {setTimeout(finaltext,17300)}
        }
        else
        {
            if(c==9 && (box[e[0]].style.opacity=="100"&&box[e[1]].style.opacity=="100"&&box[e[2]].style.opacity=="100"||box[e[0]].style.opacity=="99"&&box[e[1]].style.opacity=="99"&&box[e[2]].style.opacity=="99"))
            {
                 console.log("yo")
            }
            else if(c==9)
            {
                gridbox.style.opacity="0"
                gridbox.style.transition="opacity 0s ease-in"
                gridbox.style.width="0"
                drawimg.style.opacity="1"
                drawtext.style.opacity="1"
                restart.style.opacity="1"
                restart.style.zIndex="1"
                exit.style.opacity="1"
                exit.style.zIndex="1"

            }
        }
    })
}
restart.addEventListener("click",()=>{
    c=0
    startmusic.pause()
    demonaudio.play()
    gridbox.style.opacity="1"
    gridbox.style.transition="opacity 1s ease-in"
    gridbox.style.margin="5vw"
    gridbox.style.width="35%"
    drawimg.style.opacity="0"
    drawtext.style.opacity="0"
    restart.style.opacity="0"
    restart.style.zIndex="-1"
    exit.style.opacity="0"
    exit.style.zIndex="-1"
    win.style.opacity="0"
    box.forEach((re)=>{
        for(i=0;i<=8;i++)
        {
            box[i].style.width="6rem"
            box[i].style.border="solid 4px black"
            box[i].classList.remove("box3")
            box[i].classList.add("box")
            box[i].style.opacity="10"
        }
        gridbox.style.display="grid"
        boyimg.style.width="25%"
        boyimg.style.height="85%"
        girlimg.style.width="35%"
        boyimg.style.transition="width 2s ease-in"
        girlimg.style.transition="width 2s ease-in"
        document.querySelector(".ssimg").parentNode.removeChild(document.querySelector(".ssimg"))
    })
    

})
// themee.addEventListener("click",()=>{
//     main.style.backgroundImage="url('tttimg/japanback.jpg')"
//     themee.style.width="14rem"
// })
startmusic.loop=true
startmusic.play()
box.forEach((elem)=>{
    elem.addEventListener("click",()=>{ 
        console.log("clicked")
        console.log(box[0].img)
        if(elem.style.opacity=="100"||elem.style.opacity=="99")
       {console.log("you cant do")
        wrongaudio.play()}
       else{
        c++
        const img = document.createElement("img");
        if(turn=="X")
        {
        swordaudio.play()
        boyimg.style.height="90%"
        girlimg.style.height="80%"
        boyimg.style.animation="beat"
        img.src = "tttimg/crossed_swords.png";
        img.setAttribute("class","ssimg")
        elem.style.opacity="100"
        img.style.width="100%";
        img.style.height="100%"
        img.style.borderRadius="20%"
        }
        else
       { 
         shieldaudio.play()
         girlimg.style.height="90%"
         boyimg.style.height="80%"
         img.src="tttimg/shield.png";
         elem.style.opacity="99";
         img.setAttribute("class","ssimg")
         img.style.width="100%";
         img.style.height="100%"
         img.style.borderRadius="20%"}
         elem.appendChild(img);
        //  draw();
         winner();
         changeturn();}
    })
})
music.addEventListener("click",()=>{
    startmusic.pause()
    if(flag==0)
    {
        console.log("clicked")
        flag=1
        demonaudio.loop=true
        demonaudio.play()
        document.getElementById("mimg").src="tttimg/sound.png"
        
    }
    else
    {
        console.log("else clicked")
        demonaudio.pause()
        document.getElementById("mimg").src="tttimg/mute.png"
        flag=0
    }
})
let boyimg=document.getElementById("boyimg")
let gridbox=document.getElementById("gridbox")
let girlimg=document.getElementById("girlimg")
let playexit=document.getElementById("playex")
let heading=document.getElementById("head")
change.addEventListener("click",()=>{
    console.log("clicked")
    startmusic.pause()
    demonaudio.loop=true
    demonaudio.play()
    playexit.style.opacity="0"
    playexit.style.zIndex="-1"
    heading.style.opacity="0"
    heading.style.zIndex="-1"
    gridbox.style.zIndex="1"
    boyimg.style.width="25%"
    boyimg.style.height="85%"
    boyimg.style.margin="5vw"// w-[25%] m-[5vw] h-[80%] 
    gridbox.style.margin="5vw"
    gridbox.style.width="35%"
    gridbox.style.opacity="1"//m-[5vw] w-[35%]
    girlimg.style.width="35%"
    girlimg.style.height="80%"
    girlimg.style.margin="5vw"//h-[70%] m-[5vw] w-[30%]

})

let  bimg=document.getElementById("bimg")
let gimg=document.getElementById("gimg")
theme.addEventListener("click",()=>{
    if(ctheme==0)
    {main.style.backgroundImage="url('tttimg/japanback.jpg')"
    ctheme=1
    }
    else{
        main.style.backgroundImage="url('tttimg/demonback.jpg')"
        ctheme=0
    }

})

// const myDiv = document.createElement("img");
// myDiv.id = "myDiv";
// myDiv.class = "box";
// myDiv.style.width="8vw"
// myDiv.style.height="13vh"
// myDiv.style.border="solid 50% black"
// myDiv.style.backgroundSize="contain"
// myDiv.src="tttimg/cross sword.webp"
// document.getElementById("main").appendChild(myDiv);
// console.log(document.getElementById("main"))


// My Thoughts
//so finally i learn lot from this project i started this project to learn animation and tailwind css and be good with javascript so by the end i can say i am now very comfortable with tailwind css in know now how to give  class name how to use taiwlind configg.css to add new feature using css like animation and you can use it directly in tailwind css and how you can also make direct change using square bracket lastly i need to do reponsiveness of this website which is remaining and that i can do in few days that will make me ready with tailwind css
// javascript
// In javascript i revised many topics and learn so many things on how to createelement using createelement and how to give it attribute of class and id and all and how to append it using append child and then i learn few more things on how to add animation in javascript it can be done using remove and add classs list and i learn mostly every concept of javascript and i am now ready for react and frontend 
// Thank you so much