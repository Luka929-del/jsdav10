let fruit = prompt('Enter fruit name: ');
if(fruit[0] === "A" || fruit[0] === "E" || fruit[0] === "I" || fruit[0] === "O" || fruit[0] === "U"){
    console.log(`სიტყვა იწყება ხმოვანით, რომელიც არის ${fruit[0]}`);
} else{
    console.log(`სიტყვა არ იწყება ხმოვანით, რადგან ის არის ${fruit[0]}`);
}