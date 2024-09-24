let cvsString = `ID,Name, Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

let cell = ''
let row = [] // current row and cell datas

// For loop each charac of the CVS string
for (let i = 0; i < cvsString.length; i++) {
  let charac = cvsString[i]
  // move to next cell if  the charac is a comma
  if (charac === ',') {
    row.push(cell) // storing the current data
    cell = '' // Reset for next cell
  }
  // Move to the next row if the charac is  the start of a new line
  else if (charac === '\n') {
    row.push(cell) // storing
    console.log(...row) // logging the current row data
    row = [] // reset the row data for the next one
    cell = '' // reset the cell data for  the next one
  }
  // Else not, append the charac to the current cell
  else {
    cell += charac
  }
}

// Now lets log each row of data
if (cell !== '') {
  row.push(cell)
  console.log(...row)
}


// part 4

// Assuming you now have an array of people from Part 3
let people = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];

// Step 1: Remove the last element
people.pop();

// Step 2: Insert new object at index 1
people.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Step 3: Add a new object to the end
people.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Step 4: Calculate the average age
let totalAge = 0;

for (let person of people) {
  totalAge += Number(person.age);  // Convert the age to number
}

let averageAge = totalAge / people.length;
console.log("Average Age:", averageAge);

// Output the new array to see the changes
console.log(people);


// Part 5 

 // Step 1: Define the CSV header
 let csvHeader = "ID,Name,Occupation,Age\n";
  
 // Step 2: Convert each object in the array to a CSV row
 let csvRows = people.map(person => {
   return `${person.id},${person.name},${person.occupation},${person.age}`;
 }).join("\n");
 
 // Step 3: Combine the header and rows to create the final CSV string
 let finalCSV = csvHeader + csvRows;
 
 console.log(finalCSV);
 