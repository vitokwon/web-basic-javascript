let age = 32;
let userName = "MAx";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

function calculatteAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculatteAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculatteAdultYears(age);

console.log(totalAdultYears);

let person = { //Object
    name: 'Max', //Property, bluebokx
    greet() { //Method, purplebox
      console.log('Hello!');
    }
};

person.greet();