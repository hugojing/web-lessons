import 'normalize.css'
import './main.css'
import 'modernizr'
import musicUrl from './The_End_Of_The_World.mp3'

const container = document.getElementById('music')

if (Modernizr.audio) {
    const music = new Audio(musicUrl)
    music.controls = 'controls'
    container.appendChild(music)
} else {
    const musicIntro = document.createElement('p')
    musicIntro.textContent = '史琪特·戴维丝 1963 年演唱的《The End Of The World》（世界末日）被评为当年最受欢迎的歌曲，被无数人翻唱过，但无人能及她原唱的魅力，这首歌也是她唯一的传世之作。'
    container.appendChild(musicIntro)
}
