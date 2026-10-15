const box = document.querySelector('.box');
const coords = document.querySelector('.coords');
let x = 0, y = 0;
const speed = 4;
const keys = {};

document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    if (e.key.startsWith('Arrow')) e.preventDefault();
});
document.addEventListener('keyup', (e) => { keys[e.key] = false; });

function loop() {
    if (keys.ArrowUp || keys.k) y -= speed;
    if (keys.ArrowDown || keys.j) y += speed;
    if (keys.ArrowLeft || keys.h) x -= speed;
    if (keys.ArrowRight || keys.l) x += speed;

    box.style.transform = `translate(${x}px, ${y}px)`;
    coords.textContent = `x: ${x}, y: ${y}`;
    requestAnimationFrame(loop);
}
loop();
