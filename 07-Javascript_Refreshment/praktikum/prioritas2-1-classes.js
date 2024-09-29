class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


const person1 = new Person("Prasetyo", 30);
person1.introduce();
const person2 = new Person("Edi", 25);
person2.introduce();  
