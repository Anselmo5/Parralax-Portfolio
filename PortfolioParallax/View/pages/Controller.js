const carrosel = document.querySelector('.carrosel-container');

let count = 0;
let nSlides = 4;

function slideForward() {
    if(count < nSlides - 1)
    {
        carrosel.children[count].classList.add('none');
        carrosel.children[count+1].classList.remove('none');
        count++;
    }
}

function slideBackward(){
    if(count > 0)
    {
        carrosel.children[count].classList.add('none');
        carrosel.children[count-1].classList.remove('none');
        count--;
    }
}