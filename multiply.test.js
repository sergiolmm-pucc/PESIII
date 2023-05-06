
const multi = require('./multiply')

test(

    'Passando um parametro só',
    () => { expect(multi.multiply('1')).toBe(1); }
);

test(
    'Passando dois numeros',
    () => { expect(multi.multiply('4,6')).toBe(24);}
);
