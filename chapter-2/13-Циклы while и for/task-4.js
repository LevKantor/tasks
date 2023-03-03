let n = 10

label:
for (let num = 2; num <= n; num ++ ) {

    for(let i = 2; i < num; i++) {
        if (num % i == 0) continue label
    }
    console.log(num)
}