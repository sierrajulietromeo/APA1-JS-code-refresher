const score = 75;
const grade = score >= 90 ? "A" : 
              score >= 80 ? "B" :
              score >= 70 ? "C" :
              score >= 60 ? "D" : "F";

console.log(`Your grade is: ${grade}`);