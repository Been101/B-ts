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
po.indexOf(2)
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
// 可索引

// TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

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


interface Counter {
    (start: number): string;  // 此行可以知道  这是 函数类型
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
// 接口同样会继承到类的private和protected成员。
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现

interface K {
    a: number
}

interface BE {
    cd: ''
}
class B {
    constructor() {
        this.hh()
    }
    cd: "";
    private b: number
    hh() {
        console.log('this.b-----', this.b)
    }
}


interface K extends B {
    c: string
}

class BC extends B implements K {
    // 子类中不能使用父类的 private 属性
    constructor() {
        super()
    }
    a: 1;
    c: ''
    cd: ''
}

new BC()

class Wig {
    private state: any
}

interface Selectable extends Wig {
    select()
}

//  必须继承， 不然不能实现 继承了类的接口
class Button extends Wig implements Selectable {
    select() { }
}

// 

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
    private age: number = 20
}

let ming = new Person().name  // name public type
// let age = new Person().age  // age private type, can't use out of class Person

// TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

class Github {
    private age = 20
    protected page = 33
    name: 'github'
    getAge() {
        console.log(this.age, 'this age')
    }
}

class Gitlab extends Github {
    hou: '20'
    getAgeFromChild() {
        // console.log(this.age) // 报错
        console.log(this.page) // 能够直接访问protected 修饰的属性， 不能访问 private 修饰的属性
    }
}

let github = new Github()
let gitlab = new Gitlab()
gitlab.getAge()


// 类中的 readonly 必须在声明时或构造函数里被初始化
class Animal2 {
    readonly name: string
    readonly age: number = 12
    constructor(thename: string) {
        this.name = thename
    }
}

// 或直接初始化 readonly 属性
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

let dog = new Animal2('ming')
// dog.name = 'hong' // readonly 修饰的属性 不能修改值， 只能访问

// 存取器 

class PPP {
    _name: string = 'ming'
    get name() {
        return this._name
    }

    set name(newName) {
        if (newName !== this._name) {
            this._name = newName
        } else {
            console.log('不要重复赋值')
        }
    }
}

const pp = new PPP()
console.log(pp.name, '++++pp.name')
pp.name = 'konglopii'
console.log(pp.name, '++++pp.nest')
pp.name = 'konglopii'


// 静态属性
// static  这些属性存在于类本身上面而不是类的实例上
class Grid {
    static origin = { x: 0, y: 0 }
}

const grid = new Grid()
// grid.origin  // 实例的属性
// Grid.origin //  类的属性

// 抽象类
// 派生类的基类
// 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// 抽象方法的语法与接口方法相似， 两者都是定义方法签名但不包含方法体

// 函数类型的 接口
interface Ko {
    (name: string): number
}

const l: Ko = function (name: string): number {
    return 5
}

abstract class Kko {
    abstract getName(): string
}

// 派生类 必须实现 抽象类的 抽象方法
class Koo extends Kko {
    getName() {
        return ''
    }
}

// 构造函数

class Greater {
    great() { }
}

let greater: Greater // 意思是 Greater类的实例的类型是 Greater
greater = new Greater()

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greeting, 'greeter======')
console.log(greeter1.greet());  //  'Hello there'

let greeterMaker: typeof Greeter = Greeter; // 意思是取Greeter类的类型
greeterMaker.standardGreeting = "Hey there!";
// console.log(greeterMaker.greet()) //错。  类类型只有静态属性和构造函数

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet()); // Hey there

// 类也可以作为接口来使用
class Points {
    x: number;
    y: number;
}

interface Point3d extends Points {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };



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
    console.log(employee.fullName);
}

// 函数类型

function add(x: number, y: number): number {
    return x + y
}

// 书写完整函数类型

let addM: (x: number, y: number) => number
    = function (x: number, y: number): number {
        return x + y
    }

// 可选参数和默认参数

function sum(x: number, y?: number) {
    if (y) {
        return x + y
    } else {
        return x
    }
}

console.log(sum(1))
console.log(sum(1, 8))

// 可选参数必选放在后面， 
// 默认值参数可以放在必须参数前面 ， 但必须传个 undefined

function all(sub = 'child', key: string): string {
    return sub + '==' + key
}

console.log(all(undefined, 'keysub'))

// 剩余参数 b  是一个数组

function rest(i: number, ...b: string[]): void {
    console.log(b[i])
}

rest(1, 'a', 's', 'c')

// this 参数

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();


interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}

interface Card {
    suit: string
    card: number
}

// 重载

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

pickCard([{ suit: 'a', card: 2 }])



