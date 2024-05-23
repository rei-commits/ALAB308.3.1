let cvsString = `ID,Name, Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

let cell = ""
let row = [] // current row and cell datas

// For loop each charac of the CVS string
for (let i = 0; i < cvsString.length; i++) {
    let charac = cvsString[i]
    // move to next cell if  the charac is a comma
    if (charac === ",") {
        row.push(cell) // storing the current data
        cell = "" // Reset for next cell
    }
    // Move to the next row if the charac is  the start of a new line
    else if (charac === "\n") {
        row.push(cell) // storing
        console.log(...row) // logging the current row data
        row = [] // reset the row data for the next one
        cell = "" // reset the cell data for  the next one
    }
    // Else not, append the charac to the current cell
    else {
        cell += charac
    }
}

// Now lets log each row of data
if (cell !== "") {
    row.push(cell)
    console.log(...row)
}