let input = require("fs").readFileSync("dev/stdin", "utf8");
let lines = input.split("\n");

const cleanDaysString = (data) => {
    let days = []
    data.filter( e => { 
        if (e.includes('Dia ')){
            let newElement = e.replace('Dia ', '')
            days.push(parseInt(newElement))
        }
    })
    return days
}


const clearHoursString = (data) => {
    let hours = []
    data.filter( e => { 
        if (!e.includes('Dia ')){
            hours.push(e.split(' : '))
        }

    })

    return hours

}


const convertToSeconds = (day, [hour, minutes, seconds]) => {
    return parseInt(seconds) + parseInt(minutes*60) + parseInt(hour*60*60) + parseInt(day*60*60*24)
}

const calcTime = (initial, end) => {
    return end - initial
}

const showTime = (time) => {

    console.log(`${parseInt(time/(60*60*24))} dia(s)`)
    time = time % (60*60*24)
    console.log(`${parseInt(time/(60*60))} hora(s)`)
    time = time % (60*60)
    console.log(`${parseInt(time/60)} minuto(s)`)
    time = time % 60
    console.log(`${time} segundo(s)`)

}


let [diaInicial, diaFinal] = cleanDaysString(lines)
let hours = clearHoursString(lines)

let horaInicial = hours[0]
let horaFinal = hours[1]

let q1 = convertToSeconds(diaInicial, horaInicial)
let q2 = convertToSeconds(diaFinal, horaFinal)

let tempo = calcTime(q1, q2)

showTime(tempo)

