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

mutant.f1()
try {
    mutant.f2()
} catch (e) {
    console.log(e.message)
}

console.log()

original.f1()
try {
    original.f2()
} catch (e) {
    console.log(e.message)
}

console.log()

if (typeof original === typeof mutant) {
    console.log("Types are still equal after modifying the prototype! How cool!")
}