let n = 4

while (true) {
    n++
    let isPrime = true
    let div = 2
    while (div <= n / 2) {
        if (n % div == 0) {
            isPrime = false
            break
        }
        div++
    }
    if (isPrime) {
        console.log(n)
        break
    }
}