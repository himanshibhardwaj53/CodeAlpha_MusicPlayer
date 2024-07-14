
var progressStatus =document.querySelector(".progress");
var progressBar =document.querySelector(".progress-bar");


var bars =document.querySelector(".bar");
var cross =document.querySelector(".fa-x");

var list =document.querySelector(".list");

var musicList = document.querySelector(".musicList");

var music = document.querySelector("#music");
var audio = document.querySelector("audio");
var play = document.querySelector(".play ");
var icon = document.querySelector(".play i");
var volume = document.querySelector(".vol");



var img = document.querySelector('img');

var volumeBox = document.querySelector(".volume-box");
var volumeRange = document.querySelector(".range-feild");
var volumeicon = document.querySelector(".volumeicon");


var next = document.querySelector(".next");
var previous = document.querySelector(".previous");
var title = document.querySelector(".song-name h1");
var artist = document.querySelector(".artist-name h3");
var listItem = document.querySelector(".listItem");




const song = [{
    title:"Ghumshudaa",
    artist:"King"
},
{
    title:"Bad Boy X Bad Girl",
    artist:"Badshah"
},
{
    title:"Hua Main",
    artist:"Bhushan Kumar"
},
{
    title:"Pehle Bhi Main",
    artist:"Bhushan Kumar"
},
{
    title:"Laapata",
    artist:"King"
},
{
    title:"tu hai kahan",
    artist:"Usman Ali"
},
{
    title:"Tum Saath Rehnaa",
    artist:"King"
}
];

console.log(song)



song.forEach(e => {
    var listItem=document.createElement("div");
    list.appendChild(listItem);
    listItem.classList.add("listItem");
    var h2  = document.createElement("h2");
    h2.innerText = e.title;
    listItem.appendChild(h2);
});



music.addEventListener("timeupdate",()=>{
    var progress = Math.floor(100*music.currentTime/music.duration);
    progressStatus.style.width=progress+'%';
   
})
progressBar.addEventListener("click",(e)=>{
    
    music.currentTime = ((e.offsetX/progressBar.offsetWidth)*music.duration);
    var progress = Math.floor(100*music.currentTime/music.duration);
    // progressStatus.style.width = music.currentTime;
    progressStatus.style.width=progress+'%';
})

var isplay = false;

function playMusic(){
    isplay = true;
    music.play();
    icon.classList.replace('fa-play','fa-pause');
    
}


function pauseMusic(){
    isplay = false;
    music.pause();
    icon.classList.replace('fa-pause','fa-play');
}

play.addEventListener("click",(e)=>{
    isplay?pauseMusic():playMusic();
})


var index=0;
title.textContent = song[0].title;
artist.textContent = song[0].artist;
next.addEventListener("click",()=>{
    index++;
    if(index>song.length-1){
        index = 0;
    }
    title.textContent = song[index].title;
    artist.textContent = song[index].artist;
    music.src=`music/${song[index].title}.mp3`;
    img.src = `image/${index}.webp`;
    music.play();
    icon.classList.replace('fa-play','fa-pause');   
    
    // console.log(music.src);
    
    
    
})
previous.addEventListener("click",()=>{
    index--;
    if(index<0){
        index = song.length-1;
    }
    
    title.textContent = song[index].title;
    artist.textContent = song[index].artist;
    music.src=`music/${song[index].title}.mp3`;
    img.src = `image/${index}.webp`;
    music.play();
        icon.classList.replace('fa-play','fa-pause'); 
})


volumeRange.addEventListener("click",()=>{
    volumeBox.textContent = volumeRange.value;
    audio.volume =  volumeBox.textContent/100;
})


bars.addEventListener("click",()=>{
    musicList.style.right = "0px";
    bars.style.display = "none";
    document.querySelector(".right-main").style.display = "none";
})
cross.addEventListener("click",()=>{
    musicList.style.right = "-100%";
    bars.style.display = "block";
    document.querySelector(".right-main").style.display = "block";
})

list.addEventListener("click",(e)=>{
    var count = -1
    song.forEach(ele => {
        count++;
       if(e.target.innerText === ele.title ){

        music.src=`music/${song[count].title}.mp3`;
        img.src = `image/${count}.webp`;
        title.textContent = song[count].title;
    artist.textContent = song[count].artist;
    icon.classList.replace('fa-play','fa-pause');
}
music.play();
});
})
    

var isvol = true;
volume.addEventListener("click",()=>{
    if (isvol === true){
        volume.classList.replace('fa-volume-high','fa-volume-xmark');
        isvol = false;
        audio.volume = "0";
    }
    else{
        volume.classList.replace('fa-volume-xmark','fa-volume-high');
        isvol = true;
        audio.volume = volumeBox.textContent/100;

    }
})




