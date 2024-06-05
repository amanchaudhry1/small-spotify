console.log("welcome to spotify");

let songIndex=0;
let audioElement = new Audio('1.p3');
let masterPlay = document.getElementById('masterPlay');
let MyprogressBar = document.getElementById('myProgressBar');

let songs=[
    {songName:"salame ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"}
   
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

myProgressBar.addEveentListener('timeupdate',()=>{
    console.log('timeupdate');
})


