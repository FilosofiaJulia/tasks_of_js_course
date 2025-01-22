const button = document.querySelector('.button');
const pinkBoxInterval = document.querySelector('.interval');
const yellowBoxTimeout = document.querySelector('.timeout');
const blueBoxAnimation = document.querySelector('.anim');

button.addEventListener('click', () => {
    let pinkAngle = 0;
    let yellowAngle = 0;
    let blueAngle = 0;
    
    function rotatePinkBox() {
        const interval = setInterval(() => {
            pinkAngle += 6;
            pinkBoxInterval.style.transform = `rotate(${pinkAngle}deg)`;
    
            if(pinkAngle >= 360) {
                clearInterval(interval);
            } 
        }, 30);
    }

    rotatePinkBox();
    
    function rotateYellowBox() {
        yellowAngle -= 6;
        yellowBoxTimeout.style.transform = `rotate(${yellowAngle}deg)`;

        if (yellowAngle > -360) { 
        setTimeout(rotateYellowBox, 30); 
        } 
    }
    rotateYellowBox();

    function rotateBlueBox() {
        blueAngle += 3;
        blueBoxAnimation.style.transform = `rotate(${blueAngle}deg)`;

        if (blueAngle < 360) { 
            requestAnimationFrame(rotateBlueBox); 
        } 
    }
    rotateBlueBox();
});
    
