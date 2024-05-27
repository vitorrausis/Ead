const songList = document.querySelector('.songs');

songList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'LI') {
        // Lógica para reproduzir a música
        const songName = target.innerText;
        console.log(`Tocando a música: ${songName}`);
    }
});
