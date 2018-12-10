function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var person = {
    name: 'Nicholas',
    friends: ['Shelby', 'Court', 'Van']
}
var anotherPerson = object(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('Rob')

var yetAnotherPerson = object(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('Barbie')

console.log('person: ')
console.log(person)
console.log('anotherPerson: ')
console.log(anotherPerson)
console.log('yetAnotherPerson: ')
console.log(yetAnotherPerson)

// ES5规范
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

var yetAnotherPerson2 = Object.create(person, {
    name: {
        value: 'test'
    },
    else: {
        value: 'test2'
    }
})
console.log(yetAnotherPerson2)
