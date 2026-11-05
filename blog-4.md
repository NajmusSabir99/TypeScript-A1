With Inheritence we can use properties and methods from another class. Let's say we are building an EdTech product where all Students,Teacher,Admins have a name,age,emai etc. We can declare name,age,email in the main class and later extends them or pull them where ever we need. That way we don't need to declare ever and ever again.

class Person {
    constructor(
        public name: string,
        public email: string
    ) {}
}

class Student extends Person {
    constructor(name: string, email: string, public studentId: number) {
        super(name, email);
    }
}

class Teacher extends Person {
    constructor(name: string, email: string, public subject: string) {
        super(name, email);
    }
}



Polymorphism is the way to using a method in different classes. An example look like this->
class User {
    login(): string {
        return "User logged in";
    }
}

class Student extends User {
    login(): string {
        return "Student logged in";
    }
}

class Admin extends User {
    login(): string {
        return "Admin logged in";
    }
}

const users: User[] = [new Student(), new Admin()];

users.forEach(user => console.log(user.login()));

Abstraction means hiding that's needed to be hidden and only essential functionality are exposed to the outter world. For example: Everybody doesn't need my bankbalance. So we hide it. or a payment system that needs only payment processing algorithm or system the application has. It doesn't need internal information of any specific user or others.

abstract class Payment {
    abstract processPayment(amount: number): void;
}

class BkashPayment extends Payment {
    processPayment(amount: number): void {
        console.log(`Paid ${amount} using bKash`);
    }
}

class CardPayment extends Payment {
    processPayment(amount: number): void {
        console.log(`Paid ${amount} using Card`);
    }
}

Encapsulation means encapsulate a specific data that shouldn't be modified ever by external function, people or anything and if we want to use it we can create a state within where the data is present, then use that state to do other things where it's needed. As a result, the function for example never touches my raw original data, it touches the state and work with it.

For Example:
class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}