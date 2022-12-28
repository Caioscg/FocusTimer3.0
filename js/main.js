import Controls from './controls.js'
import Timer from './timer.js'
import Sounds from './sounds.js'
import {
    playButton,
    pauseButton,
    clockButton,
    stopButton,
    minutesDisplay,
    secondsDisplay
} from './variables.js'
import Events from './events.js'

let controls = Controls( {clockButton, stopButton, playButton, pauseButton} )
let timer = Timer( {minutesDisplay, secondsDisplay, resetControls: controls.resetControls} )
let sound = Sounds()

Events( {sound, controls, timer} )