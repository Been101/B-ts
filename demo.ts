class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = new Student("Jane", "M.", "User");
console.log(user.toString())

enum Color { Red = 'a', Green = 'b', Blue = 'c' }
let c: Color = Color.Green;
console.log(c)

let prettySure: Object = {
    a() {
        console.log('a')
    }
};
prettySure = 'string'
declare let process: any
console.log(111, process.cwd())

/**
 * boolean
 * string
 * number
 * enum
 * any
 * void
 * null
 * undefined
 * 
 * 
 * Array
 * Object
 */

//  类型断言
let str: any = 123654
let len: number = (<string>str).length
let len2: number = (str as string).length


// 

interface Option {
    width?: number,
    height?: number,
}

interface Point {
    readonly x: string
}

let a: number[] = [1, 2, 3]
let b: Array<number> = [2, 3, 4]
b.push(4)

let ro: ReadonlyArray<any> = []

// 可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：

// e = ro as number[];

// 可选属性 就是这两个属性可有可没有， 但不能有除此之外的属性
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

// 如果要存在除了可选属性之外的属性 可以用字符串索引签名

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}


// 函数类型

interface SearchFunc {
    (source: string, subString: string): boolean;
  }

let search: SearchFunc = function(sour, subStr): boolean{
    return true
}

//可索引  它描述了对象索引的类型，还有相应的索引返回值类型。 
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];


