const filterEvenNumbers = (array: number[]) => {
    const even = array.filter(element => element % 2 === 0);
    return even;
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

const reverseString = (array: string): string => {
    const n: number = array.length;
    let reversed: string = "";
    for (let i = n - 1; i >= 0; i--) {
        reversed += array[i];
    }
    return reversed;
};
console.log(reverseString("Typescript"));

function checkType(type: string | number): string | number {
    const mainType = typeof type;
    if (mainType == "string") {
        return "string";
    } else {
        return "number";
    }
}
console.log(checkType(42));

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
};
const user = {
    id: 1,
    name: "John Doe",
    age: 21
};
console.log(getProperty(user, "name"));

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
    return {
        ...book,
        isRead: true
    };
};
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};
console.log(toggleReadStatus(myBook));

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student1 = new Student("John", 21, "A");
console.log(student1.getDetails());

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((num) => arr2.includes(num));
};

console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
