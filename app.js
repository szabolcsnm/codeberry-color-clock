function colorClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(hours < 10) {
        hours = '0' + hours;
    }

    let clockFace = hours + ':' + minutes + ':' + seconds;
    // let hexColor = '#' + hours + seconds + minutes;

    document.getElementById('clock').innerHTML = clockFace;
    // document.body.style.background = hexColor;
}

function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbCode = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.body.style.background = rgbCode;

    let rComp = 255 - r;
    let gComp = 255 - g;
    let bComp = 255 - b;
    let rgbCodeComplementary = 'rgb(' + rComp + ',' + gComp + ',' + bComp + ')';
    document.getElementById('clock').style.color = rgbCodeComplementary;
}

setInterval(function() {
    colorClock();
    changeColor();
}, 1000);







