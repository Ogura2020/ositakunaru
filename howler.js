const sound = new Howl({
    src: ['audio/電気のスイッチを入れる.mp3']
});

sound.play();

// HTML側に`<button id="button1" />`がある前提で

const click = document.getElementById('click').addEventListener('click', (e) => {
    if (sound.playing()) {
        sound.stop();
        console.log('otoganaru')
    } else {
        sound.play();
    }
});