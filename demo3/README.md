## 组合继承（combination inheritance） 
－ 伪经典继承

> 将原型链和构造函数的技术组合到一块，从而发挥二者之长的继承方式

看到定义，我觉得我们有必要大致回顾下原型链及构造函数二者的长处。

`原型链继承的优势是：原型方法的复用`

`构造函数继承的优势：子类实例重置父类继承过来的属性时不影响其他实例，以及可以对父类构造函数进行传参`

根据定义，我们大致可以想到该方式的实现代码，示例如下：

```javascript
function Base (name) {
    this.name = name || 'fine'
    this.labels = ['A', 'B']
    this.properties = {
        p1: 'guangdong',
        p2: 'shenzhen'
    }
}

Base.prototype.getName = function () {
    return 'My name is: ' + this.name
}

function Student (name) {
    // 继承属性
    Base.call(this, name)
}

// 继承方法
Student.prototype = new Base()

var instance1 = new Student('mary')
console.log(instance1.labels) // ["A", "B"]
console.log(instance1.getName()) // My name is: mary
```

组合继承巧妙地融合了原型链继承以及构造函数继承的优点，同时也规避了两者缺陷，这也决定了该方式在实际开发中的高使用率。