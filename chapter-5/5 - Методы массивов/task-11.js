const getAverageAge = (users) => {
  let sumOfAges = 0
  users.forEach((element) => {
    ((sumOfAges += element.age))
  })
  return sumOfAges / users.length
}

let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 29 }

let arr = [vasya, petya, masha]

console.log(getAverageAge(arr)) // (25 + 30 + 29) / 3 = 28
