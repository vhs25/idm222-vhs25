const btns = document.querySelectorAll('.btn');
const popup = document.getElementById('pop-up');
const picture = document.getElementById('picture');
var window_width = window.screen.availWidth;
console.log(' width: ', window_width);

const handleButtonClick = whichOne =>{
    
    console.log(whichOne);
    console.log(whichOne.target);
    console.log(whichOne.target.id);
    const num = whichOne.target.id;

    if(window_width <= 900){
        picture.src = `med/${num}_med.png`;
        console.log(num);
    }
    else if(window_width >= 900){
        picture.src = `large/${num}_large.png`;
    }
    
    popup.hidden = false;
}

btns.forEach(btn => {
    btn.addEventListener('click', event =>{
        //window.location.reload();
        handleButtonClick(event);
    });
});

popup.addEventListener('click', event =>{
    popup.hidden = true;
})