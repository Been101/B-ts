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

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = new Student("Jane", "M.", "User");
console.log(user.toString())

enum Color {Red = 'a', Green = 'b', Blue = 'c'}
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
let len: number = (<string> str).length
let len2: number = (str as string).length


// ReadonlyArray<T>