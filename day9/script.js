const sounds = ['applause', 'explosion','heaven','swoosh','victory']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementsById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})