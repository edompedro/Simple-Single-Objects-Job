class Fraction {
    constructor(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator;
        if (this._denominator === undefined) {
            this._denominator = 1;
        }
        this.canReduce = true;
        if (this._numerator===1) {
            this.canReduce = false;
        }
    }
    get numerator() {
        return this._numerator;
    }
    get denominator() {
        return this._denominator;
    }
    toString() {
        return `${this._numerator}/${this._denominator}`;
    }
    plus(f2) {
        let d=0;
        let n =0;
        n = this.numerator + f2.numerator;
        d = this.denominator;
        return new Fraction(n, d);
    }
    reduce() {
        let rn2, rn3, rn4, rn5, rd2, rd3, rd4, rd5, d, n = 0;
        rn2 = this._numerator%2;
        rd2 = this._denominator%2;
        rn3 = this._numerator%3;
        rd3 = this._denominator%3;
        rn4 = this._numerator%4;
        rd4 = this._denominator%4;
        rn5 = this._numerator%5;
        rd5 = this._denominator%5;
        if (rd5===0&&rn5 === 0) {
            this._denominator = this.denominator/5;
            this._numerator = this.numerator/5;
            this.canReduce = false;
        } else {
            if (rd4===0 && rn4 === 0) {
                this._denominator = this.denominator/4;
                this._numerator = this.numerator/4;
                this.canReduce = false;
            } else {
                if (rd3===0&&rn3 === 0) {
                    this._denominator = this.denominator/3;
                    this._numerator = this.numerator/3;
                    this.canReduce = false;
                } else {
                    if (rd2===0&&rn2 === 0) {
                        this._denominator = this.denominator/2;
                        this._numerator = this.numerator/2;
                        this.canReduce = false;
                    } else {
                        return this.canReduce = false;
                    }
                }
            }
        }
    }
    divide(f2) {
        let d=0;
        let n =0;
        n = this.numerator * f2.denominator;
        d = this.denominator * f2.numerator;
        return new Fraction(n, d);
    }
    multiply(f2) {
        let d=0;
        let n = 0;
        n = this.numerator * f2.numerator;
        d = this.denominator * f2.denominator;
        return new Fraction(n, d);
    }
    greaterThan(f2) {
        let f1 = 0;
        let f = 0;
        f = this.numerator/this.denominator;
        f1 = f2.numerator/f2.denominator;
        if (f>f1) {
            return true;
        } else {
            return false;
        }
    }
    lessThan(f2) {
        let f1 = 0;
        let f = 0;
        f = this.numerator/this.denominator;
        f1 = f2.numerator/f2.denominator;
        if (f1>f) {
            return true;
        } else {
            return false;
        }
    }
    equals(f2) {
        let f1 = 0;
        let f = 0;
        f = this.numerator/this.denominator;
        f1 = f2.numerator/f2.denominator;
        if (f1===f) {
            return true;
        } else {
            return false;
        }
    }
}
// Fraction(numerator, denominator)
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
fr.numerator = 10;
fr.denominator = 10;
// -----------------------
const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');
const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');
const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus
const teste = new Fraction(9, 15);
const todo = teste.plus(f1);
console.log(todo.toString()=== '13/15');
console.log(f3.toString()==='9/15');
const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);
const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);
f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce
f3.reduce();
console.log(f3.toString() === '3/5');
console.log(f3.canReduce === false);
f1.reduce();
console.log(f1.canReduce === false);

const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);
const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"
// TODO: escreva mais 3 casos de teste com divide
const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);
const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"
// TODO: escreva mais 3 casos de teste com multiply
const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);
console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);
const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);
// TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
console.log(f14.greaterThan(f15)===true);
console.log(f14.lessThan(f15)===false);
console.log(f14.equals(f15)===false);
console.log(f15.greaterThan(f16)===false);
console.log(f15.lessThan(f16)===false);
console.log(f15.equals(f16)===true);
console.log(f16.greaterThan(f14)===false);
console.log(f16.lessThan(f14)===true);
console.log(f16.equals(f14)===false);


const f17 = new Fraction(4);
// TODO: escreva casos de teste para o valor que se espera de f17
console.log(f17.toString()==='4/1');
console.log(f17.equals(f15)===false);
console.log((f17.multiply(f16)).toString()==='4/3');
// TODO: escreva casos de teste para o valor que se espera de f18
