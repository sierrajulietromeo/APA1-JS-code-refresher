const person = {
    name: "Alice",
    age: 30,
    city: "Manchester"
  };
  
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log(typeof person === 'array');





