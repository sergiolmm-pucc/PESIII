
const  calcularImposto  = require("../pages/Grupo02/calcularImposto")

describe('calc tax function',()=>{
    it('empty value',()=>{
        expect(calcularImposto('',0.10)).toBe("Por favor digite numeros validos.")
    });
    it('NaN value',()=>{
        expect(calcularImposto(NaN,0.15)).toBe("Por favor, digite um valor numérico válido.")
    });
    it('neagtive value',()=>{
        expect(calcularImposto(-10,0.15)).toBe("Por favor, digite um valor positivo no campo de tributo.")
    })
    it('correct values',()=>{
        expect(calcularImposto(10,0.10)).toBe(1)
    })
})