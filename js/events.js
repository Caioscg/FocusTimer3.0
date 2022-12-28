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
    main,
    treeInputSlider,
    rainInputSlider,
    houseInputSlider,
    fireInputSlider
} from './variables.js'

export function Events( {sound, controls, timer} ) {

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
        sound.resetSounds()
        sound.TreeSound()

        treeCard.classList.add("clicked")

        rainInputSlider.value = 0
        houseInputSlider.value = 0
        fireInputSlider.value = 0
    })
    
    rainCard.addEventListener("click", () => { 
        sound.resetSounds()
        sound.RainSound()

        rainCard.classList.add('clicked')

        treeInputSlider.value = 0
        houseInputSlider.value = 0
        fireInputSlider.value = 0
    })
    
    houseCard.addEventListener("click", () => {
        sound.resetSounds()
        sound.HouseSound()

        houseCard.classList.add('clicked')

        treeInputSlider.value = 0
        rainInputSlider.value = 0
        fireInputSlider.value = 0
    })
    
    fireCard.addEventListener("click", () => {
        sound.resetSounds()
        sound.FireSound()

        fireCard.classList.add('clicked')

        treeInputSlider.value = 0
        rainInputSlider.value = 0
        houseInputSlider.value = 0
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
