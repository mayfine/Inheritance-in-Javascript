## 构造函数继承

>直接在子类构造函数中通过apply()或call()调用父类

示例：
```javascript
function Base (name) {
    this.name = name || 'fine'
    this.labels = ['A', 'B']
    this.properties = {
        p1: 'guangdong',
        p2: 'shenzhen'
    }
    this.sayName = function () {
        console.log(this.name)
    }
}

Base.prototype.getName = function () {
    return 'My name is: ' + this.name
}

function Student (name) {
    Base.call(this, name)
}

var instance1 = new Student()
instance1.labels.push('C')
console.log(instance1.labels)

var instance2 = new Student('mary')
console.log(instance2.name)
console.log(instance2.labels)
```

![](https://raw.githubusercontent.com/mayfine/Inheritance-in-Javascript/master/images/res_4.png)

从结果可以看出，借用构造函数实现继承可以避免上一篇[《原型链继承》](https://github.com/mayfine/Inheritance-in-Javascript/tree/master/demo1)中提到的两个缺点：

`1.子类实例对继承的属性赋值会影响到所有子类实例；`
`2.子类实例不能在对子类实例无影响的情况下向父类构造函数进行参数传递。`

再看下原型方法：

```javascript
var instance3 = new Student('mike')
console.log(instance3.getName())
```

><font color="#DC143C" face="微软雅黑">TypeError: instance3.getName is not a function</font>


暴露出问题：`父类原型上的方法对子类不可见，即子类无法继承父类的原型方法，只有在构造函数中定义的方法才可以被继承`

```javascript
function Base (name) {
    this.name = name || 'fine'
    this.labels = ['A', 'B']
    this.properties = {
        p1: 'guangdong',
        p2: 'shenzhen'
    }
    this.sayName = function () {
        console.log(this.name)
    }
}
...
var instance4 = new Student('mike')
console.log(instance4.sayName()) // mike
```

那么这样一来，我们想要复用父类原型上的方法时，要么拷贝到实例自身来定义，要么父类所有原型方法都定义在构造函数中，这样就撤了父类的原型链，没办法通过原型链实现方法的复用，跟我们使用继承的目的相违背，使用继承无非就是想要达到属性及方法的复用。