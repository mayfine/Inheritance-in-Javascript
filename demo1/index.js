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

function Student (name) {
    this.type = 'computer'
}
Student.prototype = new Base()

Student.prototype.getName = function () {
    return 'private name is: ' + this.name
}

var xiaoming = new Student()
xiaoming.name = 'xiaoming_2'
xiaoming.labels.push('C')
xiaoming.properties['else'] = 'go'
console.log(xiaoming.name)
console.log(xiaoming.labels)
console.log(xiaoming.properties)

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

var xiaohong = new Base()
console.log(xiaohong.name)
console.log(xiaohong.labels)
console.log(xiaohong.properties)

