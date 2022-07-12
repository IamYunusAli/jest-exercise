const calculator= require('./calculator');

describe('Addition',()=>{
    test('',()=>{
        expect(calculator.add(1,2)).toBe(3)
    })
    test('',()=>{
        expect(calculator.add(6,2)).toBe(8)
    })
    test('',()=>{
        expect(calculator.add(10,20)).toBe(30)
    })
    test('',()=>{
        expect(calculator.add(50,70)).toBe(120)
    })
})


describe('Substraction',()=>{
    test('',()=>{
        expect(calculator.substract(1,2)).toBe(-1)
    })
    test('',()=>{
        expect(calculator.substract(6,2)).toBe(4)
    })
    test('',()=>{
        expect(calculator.substract(20,10)).toBe(10)
    })
    test('',()=>{
        expect(calculator.substract(50,70)).toBe(-20)
    })
})

describe('Multiplication',()=>{
    test('',()=>{
        expect(calculator.multipy(1,2)).toBe(2)
    })
    test('',()=>{
        expect(calculator.multipy(6,2)).toBe(12)
    })
    test('',()=>{
        expect(calculator.multipy(10,20)).toBe(200)
    })
    test('',()=>{
        expect(calculator.multipy(50,70)).toBe(3500)
    })
})

describe('division',()=>{
    test('',()=>{
        expect(calculator.divide(1,2)).toBe(1)
    })
    test('',()=>{
        expect(calculator.divide(6,2)).toBe(3)
    })
    test('',()=>{
        expect(calculator.divide(20,20)).toBe(1)
    })
    test('',()=>{
        expect(calculator.divide(350,70)).toBe(5)
    })
})