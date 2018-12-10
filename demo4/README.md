## 原型式继承（Prototypal Inheritance）

> 借助原型基于已有对象创造新对象

1.创造新对象

```javascript
function object (o){
    function F () {}
    F.prototype = o
    return new F()
}
```
可以看出整个过程分为三步：
- 声明一个临时构造函数F
- 参数o作为构造函数F的原型
- 返回F实例

使用过程：

```javascript
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
}
var anotherPerson = object(person)
anotherPerson.name = "Greg"
anotherPerson.friends.push("Rob")

var yetAnotherPerson = object(person)
yetAnotherPerson.name = "Linda"
yetAnotherPerson.friends.push("Barbie")

console.log('person: ')
console.log(person)
console.log('anotherPerson: ')
console.log(anotherPerson)
console.log('yetAnotherPerson: ')
console.log(yetAnotherPerson)
```

![](https://raw.githubusercontent.com/mayfine/Inheritance-in-Javascript/master/images/res_5.png)

可以看出 `friends` 实现了共享，因为通过`object`传入的参数是引用类型，新实例的原型上只是挂着共享对象的副本。另一方面，对 `name` 的赋值不会影响原型链上的 `name`，而是发生在构造函数内。

ES5新增的Object.create()方法规范了原型式继承的实现：
```javascript
var person = {
    name: 'Nicholas',
    friends: ['Shelby', 'Court', 'Van']
}

var anotherPersonES5 = Object.create(person)
anotherPersonES5.name = 'Greg'
anotherPersonES5.friends.push('Rob')

var yetAnotherPersonES5 = Object.create(person)
yetAnotherPersonES5.name = 'Linda'
yetAnotherPersonES5.friends.push('Barbie')
```

结果完全一致，另外，Object.create()接收的第二个参数可以直接覆盖原型对象上的同名属性。

```javascript
var yetAnotherPerson2 = Object.create(person, {
    name: {
        value: 'test'
    },
    else: {
        value: 'test2'
    }
})
console.log(yetAnotherPerson2)
```

![](https://raw.githubusercontent.com/mayfine/Inheritance-in-Javascript/master/images/res_6.png)

综上，可以看出原型式继承方式应该适合那种需多端同步信息的，始终保持信息一致的场景，所以考虑要用继承时，需根据各类继承的特点谨慎选择，以免采坑。

