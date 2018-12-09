## 原型链继承

>原型链继承即子类的原型对象重新赋值为父类的实例

step1：声明一个父类
```javascript
function Base () {
    this.name = 'fine'
    this.labels = ['A', 'B']
    this.properties = {
        p1: 'guangdong',
        p2: 'shenzhen'
    }
}

Base.prototype.getName = function () {
    return 'My name is: ' + this.name
}
```

step2：声明一个子类并实现原型链继承
```javascript
function Student (name) {
    this.type = 'computer'
}
Student.prototype = new Base()
```

现在我们实例化一个子类
```javascript
var xiaoming = new Student()
console.log(xiaoming.name)
console.log(xiaoming.labels)
console.log(xiaoming.properties)
console.log(xiaoming.getName())
```

![](https://raw.githubusercontent.com/mayfine/Inheritance-in-Javascript/master/images/res_1.png)

可以看出子类Student已经继承了父类Base所有的原型属性及方法，其实实现过程只是将Student原型指针指向了Base的实例。

通常我们使用继承是因为有共享的属性和方法集，需要进行独立维护，当继承的原型方法不能满足实际场景时，我们也可以进行覆盖：

```javascript
Student.prototype.getName = function () {
    return 'private name is: ' + this.name
}
```

另外，如果我们通过对象字面量来创建原型方法的话，实际是重写原型链，这将使原型链继承失效。

```javascript
Student.prototype = {
    getName: function () {
        console.log('name: ' + this.name)
    }
}

var xiaoli = new Student()
console.log(xiaoli.name)
console.log(xiaoli.labels)
console.log(xiaoli.properties)
xiaoli.getName()
```
![](https://raw.githubusercontent.com/mayfine/Inheritance-in-Javascript/master/images/res_2.png)

那我们对继承过来的共享对象进行赋值操作呢？
为了便于阅读，这里还是复用上面实例过的 `xiaoming`

```javascript
var xiaoming = new Student()
xiaoming.name = 'xiaoming_2'
console.log(xiaoming.name) // xiaoming_2
```

当然是OK的，现在当前Student类仅有xiaoming一个实例，也看不出啥。那我们多实例一个 `xiaoli`：

```javascript
var xiaoming = new Student()
xiaoming.name = 'xiaoming_2'
console.log(xiaoming.name) // xiaoming_2

var xiaoli = new Student()
console.log(xiaoli.name) // fine
```

这样看好像没啥问题，小红书上讲的 `影响所有实例` 在这里并未体现出来，于是我重新试了其他属性：

```javascript
var xiaoming = new Student()
xiaoming.name = 'xiaoming_2'
xiaoming.labels.push('C')
xiaoming.properties['else'] = 'go'
console.log(xiaoming.name)
console.log(xiaoming.labels)
console.log(xiaoming.properties)

var xiaoli = new Student()
console.log(xiaoli.name)
console.log(xiaoli.labels)
console.log(xiaoli.properties)

var xiaohong = new Base()
console.log(xiaohong.name)
console.log(xiaohong.labels)
console.log(xiaohong.properties)
```

![](https://raw.githubusercontent.com/mayfine/Inheritance-in-Javascript/master/images/res_3.png)

从结果看出，`所有引用类型的改变会影响所有子类的实例`，这就暴露出原型链这种继承方式的其中一个缺点，也决定了这种方式的第二个缺点，`无法在不影响子类所有对象实例的情况下，向父类构造函数中传递参数`，而实际开发中，我们也很少单独使用原型链去实现继承。

