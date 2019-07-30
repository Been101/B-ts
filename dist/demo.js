var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(user.toString());
var Color;
(function (Color) {
    Color["Red"] = "a";
    Color["Green"] = "b";
    Color["Blue"] = "c";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var prettySure = {
    a: function () {
        console.log('a');
    }
};
prettySure = 'string';
console.log(111, process.cwd());
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
var str = 123654;
var len = str.length;
var len2 = str.length;
var a = [1, 2, 3];
var b = [2, 3, 4];
b.push(4);
var ro = [];
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var search = function (sour, subStr) {
    return true;
};
var myArray;
myArray = ["Bob", "Fred"];
