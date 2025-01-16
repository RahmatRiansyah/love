const aurora = document.querySelector('.aurora');
const numLights = 100;
const lights = [];

for (let i = 0; i < numLights; i++) {
    const light = document.createElement('div');
    light.classList.add('light');
    light.style.setProperty('--x', `${Math.random() * 2000 - 1000}px`);
    light.style.setProperty('--y', `${Math.random() * 2000 - 1000}px`);
    aurora.appendChild(light);
    lights.push(light);
}

function formHeart() {
    lights.forEach((light, index) => {
        const angle = (index / numLights) * Math.PI * 2;
        const x = 16 * Math.sin(angle) ** 3;
        const y = 13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle);
        light.style.setProperty('--x', `${x * 10}px`);
        light.style.setProperty('--y', `${-y * 10}px`);
    });
}

setTimeout(formHeart, 10000);