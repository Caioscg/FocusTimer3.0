const playButton = document.querySelector(".play")
const pauseButton = document.querySelector(".pause")
const clockButton = document.querySelector(".set")
const stopButton = document.querySelector(".stop")
const plusButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus")
const treeCard = document.querySelector(".tree")
const rainCard = document.querySelector(".rain")
const houseCard = document.querySelector(".house")
const fireCard = document.querySelector(".fire")
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
const darkTheme = document.querySelector("#dark")
const lightTheme = document.querySelector("#light")
const main = document.querySelector("main")
const treeInputSlider = document.querySelector(".tree input")
const rainInputSlider = document.querySelector(".rain input")
const houseInputSlider = document.querySelector(".house input")
const fireInputSlider = document.querySelector(".fire input")

export {
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
    minutesDisplay,
    secondsDisplay,
    darkTheme,
    lightTheme,
    main,
    treeInputSlider,
    rainInputSlider,
    houseInputSlider,
    fireInputSlider
}