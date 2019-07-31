var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 类实现接口的话， 接口里的所有属性都要有
var MyPoint = /** @class */ (function () {
    function MyPoint() {
    }
    return MyPoint;
}());
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
var BC = /** @class */ (function (_super) {
    __extends(BC, _super);
    function BC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BC;
}(B));
// 类
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        var _this = _super.call(this, name) || this;
        _this.move();
        return _this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'ming';
    }
    return Person;
}());
var ming = new Person().name;
// 类中的 readonly 必须在声明时或构造函数里被初始化
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.age = 12;
        this.name = name;
    }
    return Animal2;
}());
var dog = new Animal2('ming');
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
