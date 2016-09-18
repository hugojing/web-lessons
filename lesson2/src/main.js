import pokemonGif from 'pokemon-gif'

const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', () => {
    console.log('click')
    const gifUrl = pokemonGif(25)
    console.log(gifUrl)
    if (gifUrl) {
        const img = document.createElement('img')
        img.src = gifUrl
        const body = document.getElementsByTagName('body')[0]
        body.removeChild(btn)
        body.appendChild(img)
    }
})
