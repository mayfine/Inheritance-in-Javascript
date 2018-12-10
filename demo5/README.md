## 寄生式继承（Parasitic Inheritance）

> 原型式继承的增强实现

光看类型名“寄生式”，第一感觉也是一脸懵逼，先看示例：

```javascript
function object (o) {
    function F () {}
    F.prototype = o
    return new F()
}

function createAnother (original) {
    var clone = object(original)
    clone.sayHi = function () {
        console.log('hi')
    }
    return clone
}
```

可以看出，实现过程和原型式继承非常相似，只是在对象克隆后，类似工厂模式那样给对象添加方法，以实现对象增强。

使用过程：

```javascript
var person = {
    name: 'Nicholas',
    friends: ['Shelby', 'Court', 'Van']
}
var anotherPerson = createAnother(person)
anotherPerson.sayHi() // hi
```

使用寄生式继承来为对象添加函数，会由于不能做到函数的复用而降低效率，这一点与[构造函数模式](https://github.com/mayfine/Inheritance-in-Javascript/tree/master/demo2)类似

