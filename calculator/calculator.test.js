

const add = require ('./calculator') .add;
const sub = require ('./calculator') .sub;
const multi = require ('./calculator') .multi;
const div = require ('./calculator') .div;

test('addition av 1 och 2 ska vara 3', () => {
    //Skriv tetskoden här
    expect (add(1,2)).toBe(3);
});

test('Subtration av 5 från 10 ska vara 5', () => {
    //Skriv tetskoden här
    expect (sub(10,5)).toBe(5);
});

test('multiplikation av 5 med 5 ska vara 25', () => {
    expect (multi(5,5)).toBe(25);
});

test('divition av 25 med 5 ska vara 5', () => {
    expect (div(25,5)).toBe(5);
    expect (div(5, 0)).toBe("kan inte dela med 0!");
});

