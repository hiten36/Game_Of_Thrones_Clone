var music=new Audio('music/music.mp3');
music.loop=true;
document.querySelector('.m2').addEventListener('click',(e)=>{
    document.querySelector('.m1').classList.toggle('m4');
    document.querySelector('.m2').classList.toggle('m3');
    music.play();
})
document.querySelector('.m1').addEventListener('click',(e)=>{
    document.querySelector('.m1').classList.toggle('m4');
    document.querySelector('.m2').classList.toggle('m3');
    music.pause();
})