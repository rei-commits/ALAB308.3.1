// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
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