export default function( {clockButton, stopButton, playButton, pauseButton} ) {
    
    function Play() {
        togglePlayButton()

        clockButton.classList.add("hide")
        stopButton.classList.remove("hide")
    }

    function Pause() {
        togglePlayButton()
    }

    function togglePlayButton() {
        playButton.classList.toggle("hide")
        pauseButton.classList.toggle("hide")
    }

    function resetControls() {
        clockButton.classList.remove("hide")
        stopButton.classList.add("hide")
    
        playButton.classList.remove('hide')
        pauseButton.classList.add('hide')
    }

    return {
        Play, Pause, resetControls
    }
}