const isOk: boolean = true

const num: number = 12

const namea: string = 'bob'
const nameaa: string = `${namea} is ${num} year old.`

const list: number[] = [1,2,3]
let list2: Array<number> = [1, 2]

// Tuple元组
let x: [string, number]
x = ['asd', 12]
// 这个元组的第一位为是字符串类型， 第二位是数字类型， 
x[0].substr(0)  //正确， 因为第一位是字母
// x[1].substr(0)  //不行， 因为第二位是数字

// 越界元素是这两种类型种的一种 v3.3.33

// v3.1.0 之后的版本 会报错  Accessing an element outside the set of known indices fails with an error:
// x[3] = 1
// x[4] = 'afa'

// enum 枚举

enum Color{
    Red = 1,
    Green,
    Blue
}
// TODO: 3.2 下
// 枚举可以反查

// var Color;
// (function (Color) {
//     Color[Color["Red"] = 1] = "Red";
//     Color[Color["Green"] = 2] = "Green";
//     Color[Color["Blue"] = 3] = "Blue";
// })(Color || (Color = {}))

// 联合类型 
let unit: number | string = 1   // unit 是string 或 string 类型的
unit = 'string'

// Type assertions
// 1. 
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 2 
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;


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

// enum Color { Red = 'a', Green = 'b', Blue = 'c' }
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

interface Point1 {
    x: number;
    y: number;
    z: number; // New member
  }
  // 类实现接口的话， 接口里的所有属性都要有
  class MyPoint implements Point1 {
    // ERROR : missing member `z`
    x: number;
    y: number;
    z: number;
  }


  // 不知道 用类实现这个接口怎么写
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

//接口继承类(了解的不是很透彻)

interface K {
    a: number
}

interface BE {
    cd: ''
}
class B {
    cd: "";
    private b: number
}


interface K extends B {
    c: string
}

class BC extends B implements K{
    a: 1;
    c: ''
}



// 类

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
        this.move()
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam: Snake = new Snake("Sammy the Python");
let tom: Horse = new Horse("Tommy the Palomino");


class Person {
    name: string = 'ming'
}

let ming = new Person().name


// 类中的 readonly 必须在声明时或构造函数里被初始化
class Animal2 {
    readonly name: string
    readonly age: number = 12
    constructor(name: string) {
        this.name = name
    }
}

let dog = new Animal2('ming')

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}