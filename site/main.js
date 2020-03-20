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

    if(window_width <= 999){
        picture.src = `med/${num}_med.png`;
        console.log(num);
    }
    else if(window_width >= 1000){
        picture.src = `large/${num}_large.png`;
    }
    
    //window.location.reload();
    popup.hidden = false;
}

btns.forEach(btn => {
    btn.addEventListener('click', event =>{
        handleButtonClick(event);
    });
});

popup.addEventListener('click', event =>{
    popup.hidden = true;
})