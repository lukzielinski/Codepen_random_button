const btn = document.getElementById('button');
let isVisible = true;

btn.addEventListener('click', () => {
    isVisible = false;
    btn.style.transition = 'opacity 1s';
    btn.style.opacity = '0';
    setTimeout(() => {
        btn.style.opacity = '1';
    }, 5000);
});