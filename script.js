const btn = document.getElementById('button');
const character = document.getElementById('character');
let isVisible = true;

btn.addEventListener('click', () => {
    isVisible = false;
    btn.style.transition = 'opacity 1s';
    btn.style.opacity = '0';
    character.style.display = 'block';
    setTimeout(() => {
        btn.style.opacity = '1';
        character.style.display = 'none';
    }, 6000);
});