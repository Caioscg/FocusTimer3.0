import Sounds from './sounds.js'
let sound = Sounds()

export default function( {minutesDisplay, secondsDisplay, resetControls} ) {

    let minutes = minutesDisplay.textContent
    let seconds = Number(secondsDisplay.textContent)
    let newMinutes = minutes
    let timerTimeOut

    function Clock() {
        newMinutes = prompt("Digite a quantidade de minutos: ") || minutes
        if (newMinutes > 60) newMinutes = 60
        if (newMinutes < 0) newMinutes = 0

        minutes = newMinutes
        updateTimer(minutes, 0)
    }

    function Stop() {
        resetControls()
        resetTimer()
    }

    function Plus() {
        if (minutes <= 55) {
            minutes = Number(minutes) + 5
        }
        else {
            minutes = Number(minutes) + (60 - minutes)
            seconds = 0
        }
        updateTimer(minutes, seconds)
    }

    function Minus() {
        if (minutes >= 5) {
            minutes = Number(minutes) - 5
        }
        else {
            minutes = Number(minutes) + (0 - minutes)
        }
        updateTimer(minutes, seconds)
    }

    
    function updateTimer(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function resetTimer() {
        minutes = 0
        seconds = 0
        updateTimer(minutes, seconds)

        sound.timeEnd()
    }

    function countDown() {

        timerTimeOut = setTimeout(() => {
    
            if (seconds <= 0) {
                if (minutes <= 0) {
                    resetControls()
                    resetTimer()
    
                    return
                }
                seconds = 60
                --minutes   
    
            }
            --seconds
            updateTimer(minutes, seconds)
    
            countDown()
    
        }, 1000)
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        Clock, Stop, Plus, Minus, countDown, hold
    }

}