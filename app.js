let numberOfDrumButtons = document.querySelectorAll('.drum').length

for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function(){
    
    this.style.color = 'pink'
 
})

}


/*
 let audio = new Audio('./sounds/tom-1.mp3');
    audio.play(); 
    */