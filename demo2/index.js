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

var instance3 = new Student('mike')
console.log(instance3.sayName())



