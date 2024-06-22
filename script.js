document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.movable');
    
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            image.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});

function respond(message) {
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = `${message} entonces go mi vida bella`;
}