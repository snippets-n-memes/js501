class A {
    constructor(name) {
        this.name = name
    }

    f1() {
        console.log(`${this.name} has function 1!`)
    }

    f2() {
        console.log(`${this.name} has function 2!`)
    }
}

let original = new A("original");

original.f1()
original.f2()

delete A.prototype.f2

console.log()

let mutant = new A("mutant");

try {
    mutant.f1()
    mutant.f2()
} catch (e) {
    console.log(e.message)
}

console.log()

try {
    original.f1()
    original.f2()
} catch (e) {
    console.log(e.message)
}

console.log()

if (typeof original === typeof mutant) {
    console.log("Types are still equal after modifying the prototype! How cool!")
}