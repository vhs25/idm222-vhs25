const btns = document.querySelectorAll('.btn');
const popup = document.getElementById('pop-up');
const picture = document.getElementById('picture');


const handleButtonClick = whichOne =>{
    console.log(whichOne);
    console.log(whichOne.target);
    console.log(whichOne.target.id);
    const num = whichOne.target.id;
    picture.src = `med/${num}_med.png`;

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