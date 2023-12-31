const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let currenctActive = 1;

next.addEventListener('click', () => {
    currenctActive++;
    if (currenctActive > circles.length) {
        currenctActive = circles.length;
    }
    console.log(currenctActive);
    update();
});

prev.addEventListener('click', () => {
    currenctActive--;
    if (currenctActive < 1) {
        currenctActive = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, i) => {
        if (i < currenctActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    const actives = document.querySelectorAll('.active');

    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currenctActive === 1) {
        prev.disabled = true;
    } else if (currenctActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
