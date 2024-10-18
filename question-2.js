const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let half = students.filter(half => half.score>50)
console.log(half)

let add = half.map(add => add.score += add.score*0.1)
console.log(add)

let sum = add.reduce((acc,cur)=>acc += cur,0)
console.log("Total score is "+sum)

// let result = students.filter(result => result.score>50).map(result => result.score += result.score*0.1).reduce((acc,cur)=>acc += cur,0)
// console.log("Total score is " + result)
//  พอรันข้างบนละรันข้างล่างต่อค่ามันเปลี่ยนละงงด้วยพี่55555555555555555555555
// ลืมไปค่ามันเปลี่ยนไปแล้วเสียเวลาเลย T^T