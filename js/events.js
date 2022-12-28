import {
    playButton,
    pauseButton,
    clockButton,
    stopButton,
    plusButton,
    minusButton,
    treeCard,
    rainCard,
    houseCard,
    fireCard,
    darkTheme,
    lightTheme,
    main
} from './variables.js'

export default function( {sound, controls, timer} ) {

    playButton.addEventListener("click", () => {
        sound.buttonClickSound()
    
        controls.Play()
        timer.countDown()
    })
    
    pauseButton.addEventListener("click", () => {
        sound.buttonClickSound()
    
        controls.Pause()
        timer.hold()
    })
    
    
    clockButton.addEventListener("click", () => {
        sound.buttonClickSound()
        timer.Clock()
    })
    
    stopButton.addEventListener("click", () => {
        sound.buttonClickSound()
        timer.Stop()
    })
    
    
    plusButton.addEventListener("click", () => {
        sound.buttonClickSound()
        timer.Plus()
    })
    
    minusButton.addEventListener("click", () => {
        sound.buttonClickSound()
        timer.Minus()
    })
    
    treeCard.addEventListener("click", () => {
        treeCard.classList.add('clicked')
        rainCard.classList.remove('clicked')
        houseCard.classList.remove('clicked')
        fireCard.classList.remove('clicked')
    
        sound.TreeSound()
    })
    
    rainCard.addEventListener("click", () => {
        rainCard.classList.add('clicked')
        treeCard.classList.remove('clicked')
        houseCard.classList.remove('clicked')
        fireCard.classList.remove('clicked')
    
        sound.RainSound()
    })
    
    houseCard.addEventListener("click", () => {
        houseCard.classList.add('clicked')
        rainCard.classList.remove('clicked')
        treeCard.classList.remove('clicked')
        fireCard.classList.remove('clicked')
    
        sound.HouseSound()
    })
    
    fireCard.addEventListener("click", () => {
        fireCard.classList.add('clicked')
        rainCard.classList.remove('clicked')
        houseCard.classList.remove('clicked')
        treeCard.classList.remove('clicked')
    
        sound.FireSound()
    })

    darkTheme.addEventListener("click", () => {
        themeSet()
    })

    lightTheme.addEventListener("click", () => {
        themeSet()
    })

    function themeSet() {
        darkTheme.classList.toggle("hide")
        lightTheme.classList.toggle("hide")

        main.classList.toggle("dark")
    }
}