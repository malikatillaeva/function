let chislo = prompt('Kolichestvo primerov')

function randNum(min=0, max=0) {
    return Math.round(Math.random()*(max-min)) + min
}
for (let i = 0; i < chislo; i++) {
    let a = randNum(20, 80)
    let b = randNum(10, 50)
    let c = randNum(1, 4)
    if (c == 1) {
        var sum = a + b
        var answer = prompt(`${a} + ${b} = ?`)
    } else if (c == 2) {
        var sum = a - b
        var answer = prompt(`${a} - ${b} = ?`)
    } else if (c == 3) {
        var sum = a * b
        var answer = prompt(`${a} * ${b} = ?`)
    } else {
        var sum = a / b
        var answer = prompt(`${a} / ${b} = ?`)
    }

    if (sum == answer) {
        console.log("Sizning javob to'g'ri: " + sum);
    } else {
        console.log("Sizning javob noto'g'ri:" + answer + "! To'g'ri javob:" + sum);
    }
}


