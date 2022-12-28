export default function() {

    const buttonPressAudio = new Audio("./assets/sounds/audios_button-press.wav")
    const kitchenTimer = new Audio("./assets/sounds/audios_kichen-timer.mp3")
    const tree = new Audio('./assets/sounds/Floresta.wav')
    const rain = new Audio("./assets/sounds/Chuva.wav")
    const house = new Audio("./assets/sounds/audios_bg-audio.mp3")
    const fire = new Audio("./assets/sounds/Lareira.wav")

    function TreeSound() {
        tree.loop = true
        tree.volume = .4

        tree.play()
        rain.pause()
        house.pause()
        fire.pause()
    }

    function RainSound() {
        rain.loop = true
        rain.volume = .3

        rain.play()
        tree.pause()
        house.pause()
        fire.pause()
    }

    function HouseSound() {
        house.loop = true
        house.volume = .3

        house.play()
        rain.pause()
        tree.pause()
        fire.pause()
    }

    function FireSound() {
        fire.loop = true
        fire.volume = .8

        fire.play()
        rain.pause()
        house.pause()
        tree.pause()
    }
    
    function buttonClickSound() {
        buttonPressAudio.volume = 0.3
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.volume = 0.03
        kitchenTimer.play()
    }
    

    return { buttonClickSound, timeEnd, TreeSound, RainSound, HouseSound, FireSound }

}