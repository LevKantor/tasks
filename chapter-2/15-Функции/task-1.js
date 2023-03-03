// 1 вариант
function checkAge(age) {
    (age > 18) ? true : confirm('Родители разрешили?')
}

// 2 вариант
function checkAge(age) {
    (age > 18) || confirm('Родители разрешили?')
}