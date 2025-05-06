// SpeedInTime //

let form = document.querySelector(".form-speed-time")
let input = document.querySelector(".inp")

let walk = document.querySelector(".walk")
let bike = document.querySelector(".bike")
let car = document.querySelector(".car")
let airplane = document.querySelector(".airplane")

let speedWalk = 3.6
let speedBike = 20.1
let speedCar = 70
let speedAirplane = 800

form.addEventListener("submit", function (evt) {
    evt.preventDefault()

    function timeKm() {
        function timeWalk() {
            let timeHours = input.value / speedWalk
            let hours = Math.floor(timeHours)
            let minutes = Math.round((timeHours - hours) * 60)

            walk.textContent = `${hours} hours, ${minutes} min`
        }

        function timeBike() {
            let timeHours = input.value / speedBike
            let hours = Math.floor(timeHours)
            let minutes = Math.round((timeHours - hours) * 60)

            bike.textContent = `${hours} hours, ${minutes} min`
        }

        function timeCar() {
            let timeHours = input.value / speedCar
            let hours = Math.floor(timeHours)
            let minutes = Math.round((timeHours - hours) * 60)

            car.textContent = `${hours} hours, ${minutes} min`
        }

        function timeAirplane() {
            let timeHours = input.value / speedAirplane
            let hours = Math.floor(timeHours)
            let minutes = Math.round((timeHours - hours) * 60)

            airplane.textContent = `${hours} hours, ${minutes} min`
        }

        timeWalk()
        timeBike()
        timeCar()
        timeAirplane()
    }

    timeKm()
})

// SpeedInTime //



// Temperature //

let formTemp = document.querySelector(".form-temperature")
let inputTemp1 = document.querySelector(".inp1")
let inputTemp2 = document.querySelector(".inp2")

formTemp.addEventListener("submit", function (evt) {
    evt.preventDefault()

    function celsiusInFahrenheit() {
        let celsius = (inputTemp1.value * 9/5) + 32
        inputTemp2.value = celsius
    }

    celsiusInFahrenheit()
})

// Temperature //