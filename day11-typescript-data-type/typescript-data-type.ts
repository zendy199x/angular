let john = "John";
john = '123'
console.log(john);

let someString: string; // string, char
let someNumber: number; // float, double, int
let someBoolean: boolean; // true, false
let something: any; // có thể gán sang cho bất kỳ dữ liệu nào khác
let someStringArray: string[]; // tương tự number[], boolean[], any[] // Array<string>
let someObject: object;
let someNull: null;
let someUndefined: undefined;
let someUnknown: unknown;
let someNever: never; // ví dụ như một hàm throw exception
let someTuple: [string, number]; // là array số lượng giá trị xác định sẵn trước và có kiểu giá trị giống hoặc khác nhau
let someVoidFunction: () => void; // một hàm không trả về giá trị gì khi thực thi
let someFunction: () => string; // một hàm trả về giá trị có type "string" sau khi thực thi

// function someFunc(): never  {
//     throw new Error();
// }

// function someError(): string | never {
//     if (true) {
//         throw new Error();
//     }
// }

interface User {
    firstName: string;
    lastName: string;
    age?: number;
}

// type UserType = {
//     firstName: string;
//     lastName: string;
// age?: number;
// }

const user: User = {
    firstName: 'Zendy',
    lastName: 'Developer',
    age: 27,
}


// Generics
// Type Parameter
// T[]
const numbers = [1, 2, 3, 4, 5];
const strings = ['abc', 'xyz'];
numbers.forEach(num => num);
strings.forEach(str => str);

export abstract class BaseService<T> {
    protected model!: T;

    find(): T[] {
        return [this.model];
    }

    findOne(): T {
        return this.model;
    }
}

interface Dog {
    back(): void;
}

interface Cat {
    meow(): void;
}

export class DogService extends BaseService<Dog>{ }
export class CatService extends BaseService<Cat>{ }

const dogService = new DogService();
const catService = new CatService();
dogService.findOne().back();
catService.findOne().meow();
