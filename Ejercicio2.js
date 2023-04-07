import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

dayjs.extend(relativeTime)

/* const today = dayjs()
today.add(5,"days").format("YYYY/MM/DD")
console.log(dayjs("1912-04-14").fromNow()) */

function humanize(date) {
    const today = new Date()
    const dateToCompare = new Date(date)
    const A_MINUTE_IN_MS = 1 * 60 * 1000;
    const AN_HOUR_IN_MS = A_MINUTE_IN_MS * 60;
    const A_DAY_IN_MS = AN_HOUR_IN_MS * 24;
    const A_WEEK_IN_MS = A_DAY_IN_MS * 7;
    const A_MONTH_IN_MS = A_DAY_IN_MS * 30;
    const A_YEAR_IN_MS = A_DAY_IN_MS * 365;
    const months = {
        0: "Enero",
        1: "Febrero",
        2: "Marzo",
        3: "Abril",
        4: "Mayo",
        5: "Junio",
        6: "Julio",
        7: "Agosto",
        8: "Septiembre",
        9: "Octubre",
        10: "Noviembre",
        11: "Diciembre"
    };
    let month = dateToCompare.getMonth();
    month = months[month];
    let day = dateToCompare.getDate();
    let year = dateToCompare.getFullYear();
 

    const diffInMilliseconds = today.getTime() - dateToCompare.getTime()
    const diffInDays = Math.floor(diffInMilliseconds / A_DAY_IN_MS)
    
    if (today.getFullYear() != year) {
                return `${month} ${day+1}, ${year}`// regresa la fecha completa
    }else {
        if (diffInMilliseconds < A_MONTH_IN_MS) {
        if (diffInMilliseconds < A_DAY_IN_MS) {
            if (diffInMilliseconds < AN_HOUR_IN_MS) {
                let minutes = Math.floor( diffInMilliseconds / A_MINUTE_IN_MS);
                return `Hace ${minutes} minutos`
            } else {
                console.log(A_DAY_IN_MS)
                console.log(diffInMilliseconds)
                let hours = Math.floor(diffInMilliseconds / AN_HOUR_IN_MS);
                return `Hace ${hours} Horas`
            }           
        } else {
            let weeks = Math.floor(diffInMilliseconds / A_WEEK_IN_MS);
            return `Hace ${weeks} Semanas`
        }
        } else if (diffInMilliseconds < A_YEAR_IN_MS) {
        
        return `${month} ${day+1}`
        }
    }
}

console.log(humanize("2022-01-15"))
console.log(humanize("2023-02-24"))
console.log(humanize("2023-01-02"))
