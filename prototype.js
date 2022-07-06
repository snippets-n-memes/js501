const APrototype = {
    name: '',
    f1(){
        console.log(`${this.name} has function 1!`)
    }
}

function A(name) {
    this.name = name
}

// let original = Object.create(A)

A.prototype = APrototype
A.prototype.construction = A

let original = new A('original')

original.f1()

delete A.prototype.f1

try {
    original.f1()
} catch (e) {
    console.log()
}