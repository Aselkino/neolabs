const keyboard = {
    a: 97,
    s: 115,
    d: 100,
    f: 102,
    g: 103,
    h: 104,
    j: 106
}


document.addEventListener('keypress', function(event) {
    const key = keyboard[event.key];

    // const key = keyboard[event.key];
    if (key) {
        const sound = document.querySelector(`audio[data-key="${key}"]`);
        const keyboard = document.querySelector(`div[data-key="${key}"]`);

        sound.play();

        keyboard.classList.add('active');
    

        setTimeout(() => {
            keyboard.classList.remove('active')
        }, 1000);
    }
});
//     switch (event.keyCode) {
//         case keyboard.a:
//             doSoundFile.play();
//             break;

//         case keyboard.s:
//             reSoundFile.play();
//             break;

//         case keyboard.d:
//             miSoundFile.play();
//             break;

//         case keyboard.f:
//             faSoundFile.play();
//             break;

//         case keyboard.g:
//             solSoundFile.play();
//             break;

//         case keyboard.h:
//             ljaSoundFile.play();
//             break;

//         case keyboard.j:
//             siSoundFile.play();
//             break;

//         default:
//             return;
//     }
// });