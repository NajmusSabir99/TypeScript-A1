Generics allow use to write one function that we can use multiple type with different types rather than declaring everytime. We declare it with T and TypeScript determines from the data passed to the function.

Example:

const getFirstElement = <T>(array: T[]): T => {
    return array[0];
};

const number = getFirstElement([10, 20, 30]);
const name = getFirstElement(["John", "David", "Alex"]);

Here, when we pass number, T becomes number, when we pass string, it becomes T.
