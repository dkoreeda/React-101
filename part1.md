Part 1:

{ let a = 'I am declared inside an anonymous block'; }
console.log(a); // ReferenceError: a is not defined

It throws an error because the variable "a" is declared within a scope, so that it is a local variable. It would log "a" if console.log were within the same scope.

------------------------------------------------------
Ex 2

const gods = [
  {name: 'Douglas Crockford'},
  {name: 'Guido van Rossum'},
  {name: 'Raffaele Esposito'}
];

const godsAcc = [];

const newArr = (array) => {

  array.map((x, index) => {
    const arr = [
      {acc: 'Javascript'},
      {acc: 'Python'},
      {acc: 'Pizza Margherita'}
    ];
  
    const obj = {};
    obj.name = x.name;
    obj.acc = arr[index].acc;
    // console.log(obj);
    godsAcc.push(obj);
  });
}

newArr(gods);

console.log("gods and accomplishments", godsAcc);

------------------------------------------------------
Ex 3

const letters = ["a", "z", "b", "c", "u"];

const filterVowels = (value) => {
  
  return value.match(/[aeiou]/i); 
  
  //i stands for case-insensitive
}

const filtered = letters.filter(filterVowels);
console.log(filtered);

------------------------------------------------------
Ex 4

class Phone {
  constructor(brand, model){
    this.brand = brand;
    this.model = model;
  }
}

------------------------------------------------------
Ex 5

const Phone = class {
  constructor(brand, model){
    this.brand = brand;
    this.model = model;
  }

  ring() {
    return "your " + this.brand + " " + this.model + " is getting a call";
  }  
}

const phone = new Phone("Samsung", "Galaxy S5");
console.log(phone.ring());
