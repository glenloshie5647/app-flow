/* filename: complex_code.js */

// This code demonstrates a complex library for handling complex numbers in JavaScript

class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(complex) {
        return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
    }

    subtract(complex) {
        return new ComplexNumber(this.real - complex.real, this.imaginary - complex.imaginary);
    }

    multiply(complex) {
        const real = (this.real * complex.real) - (this.imaginary * complex.imaginary);
        const imaginary = (this.real * complex.imaginary) + (this.imaginary * complex.real);
        return new ComplexNumber(real, imaginary);
    }

    divide(complex) {
        const denominator = Math.pow(complex.real, 2) + Math.pow(complex.imaginary, 2);
        const real = ((this.real * complex.real) + (this.imaginary * complex.imaginary)) / denominator;
        const imaginary = ((this.imaginary * complex.real) - (this.real * complex.imaginary)) / denominator;
        return new ComplexNumber(real, imaginary);
    }

    getMagnitude() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }

    getPhase() {
        return Math.atan2(this.imaginary, this.real);
    }

    toString() {
        const sign = this.imaginary < 0 ? '-' : '+';
        return `${this.real} ${sign} ${Math.abs(this.imaginary)}i`;
    }
}

// Usage of the complex number library

function calculate() {
    const num1 = new ComplexNumber(3, 4);
    const num2 = new ComplexNumber(2, -1);

    const sum = num1.add(num2);
    console.log('Sum:', sum.toString());

    const difference = num1.subtract(num2);
    console.log('Difference:', difference.toString());

    const product = num1.multiply(num2);
    console.log('Product:', product.toString());

    const quotient = num1.divide(num2);
    console.log('Quotient:', quotient.toString());

    const magnitude = num1.getMagnitude();
    console.log('Magnitude:', magnitude);

    const phase = num1.getPhase();
    console.log('Phase:', phase);
}

calculate();