const aurora = document.querySelector('.aurora');

function changeAuroraColor() {
    const colors = ['rgba(255, 0, 0, 0.1)', 'rgba(0, 255, 0, 0.1)', 'rgba(0, 0, 255, 0.1)', 'rgba(255, 255, 0, 0.1)', 'rgba(0, 255, 255, 0.1)', 'rgba(255, 0, 255, 0.1)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    aurora.style.background = `radial-gradient(circle, ${randomColor}, rgba(0,0,0,0))`;
}

setInterval(changeAuroraColor, 1000);