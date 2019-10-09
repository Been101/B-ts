const isOk: boolean = true

const num: number = 12

const namea: string = 'bob'
const nameaa: string = `${namea} is ${num} year old.`

const list: number[] = [1, 2, 3]
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

enum Color {
    Red = 1,
    Green,
    Blue
}
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

// Type assertions  // 类型断言
// 1. 
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 2 
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // 这样只检测传入的变量中是否有 必须属性就可以通过
printLabel({ label: "Size 10 Object" }); // 这样只检测传入的变量中的属性 必须和接口一样， 不能多不能少

// 只读属性
interface ReadonlyProperty {
    readonly width: number;
    readonly height: number;
}

let readonlyP: ReadonlyProperty = { width: 20, height: 30 }
// readonlyP.width = 30 //  error  不能给只读属性赋值

// ReadonlyArray

let aa: number[] = [1, 2, 3]
let po: ReadonlyArray<number> = aa
// po[0] = 6  // 不能给只读数组 修改值
// po.push(99) // 只读数组的 方法不能使用
// aa = po // error
// aa = po as number[]

//  对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候
//  如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误

// interface area {
//     width?: number
//     height?: number
// }

function cacule(config: area) {
    console.log(config.width * config.height)
}

// cacule({width: 20, height: 30})

// 跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量, 因为 squareOptions不会经过额外属性检查
// cacule({width2: 20, height: 30}) // 会报错，可以将这个对象赋值给一个另一个变量,
// const config = {width2: 20, height: 30}
// cacule(config)
// 最佳的方式是能够添加一个字符串索引签名
interface area {
    width?: number
    height?: number
    [x: string]: any  // 这个 x 也可以是别的名字，但后面的string 不能省略  [x: string]: any
}

cacule({ widtah: 20, height: 30 })

// 函数类型

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let searchTheme: SearchFunc = function (src: string, sub: string) {
    return src.indexOf(sub) > -1
}










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

let search: SearchFunc = function (sour, subStr): boolean {
    return true
}

//可索引  它描述了对象索引的类型，还有相应的索引返回值类型。 
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

interface Point1 {
    x: number
    y: number
    z: number // New member
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

class BC extends B implements K {
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