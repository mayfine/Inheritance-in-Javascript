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
console.log(instance1.labels)
console.log(instance1.getName())