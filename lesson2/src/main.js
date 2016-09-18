import pokemonGif from 'pokemon-gif'

const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', () => {
    console.log('Clicked!')
    const randomId = Math.ceil(Math.random() * 721)
    const gifUrl = pokemonGif(randomId)
    console.log(gifUrl)
    if (gifUrl) {
        const img = document.createElement('img')
        img.src = gifUrl
        const body = document.getElementsByTagName('body')[0]
        body.removeChild(btn)
        body.appendChild(img)
    }
})
