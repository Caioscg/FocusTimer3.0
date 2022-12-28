import { treeInputSlider, rainInputSlider, houseInputSlider, fireInputSlider, treeCard, rainCard, houseCard, fireCard } from "./variables.js"

export default function() {

    const buttonPressAudio = new Audio("./assets/sounds/audios_button-press.wav")
    const kitchenTimer = new Audio("./assets/sounds/audios_kichen-timer.mp3")
    const tree = new Audio('./assets/sounds/Floresta.wav')
    const rain = new Audio("./assets/sounds/Chuva.wav")
    const house = new Audio("./assets/sounds/audios_bg-audio.mp3")
    const fire = new Audio("./assets/sounds/Lareira.wav")

    treeInputSlider.oninput = function() {
        tree.volume = (this.value)/100
    }
    rainInputSlider.oninput = function() {
        rain.volume = (this.value)/100
    }
    houseInputSlider.oninput = function() {
        house.volume = (this.value)/100
    }
    fireInputSlider.oninput = function() {
        fire.volume = (this.value)/100
    }

    function TreeSound() {
        tree.loop = true

        tree.play()
        rain.pause()
        house.pause()
        fire.pause()

        treeInputSlider.value = tree.volume * 100
    }

    function RainSound() {
        rain.loop = true

        rain.play()
        tree.pause()
        house.pause()
        fire.pause()

        rainInputSlider.value = rain.volume * 100
    }

    function HouseSound() {
        house.loop = true

        house.play()
        rain.pause()
        tree.pause()
        fire.pause()

        houseInputSlider.value = house.volume * 100
    }

    function FireSound() {
        fire.loop = true

        fire.play()
        rain.pause()
        house.pause()
        tree.pause()

        fireInputSlider.value = fire.volume * 100
    }
    
    function buttonClickSound() {
        buttonPressAudio.volume = 0.3
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.volume = 0.03
        kitchenTimer.play()
    }

    function resetSounds() {
        treeCard.classList.remove('clicked')
        rainCard.classList.remove('clicked')
        houseCard.classList.remove('clicked')
        fireCard.classList.remove('clicked')
    }
    

    return { buttonClickSound, timeEnd, TreeSound, RainSound, HouseSound, FireSound, resetSounds}

}