import { useState } from 'react';

export const useCalculator = () => {
    const [result, setResult] = useState(0);

    const add = (a, b) => setResult(a + b);
    const subtract = (a, b) => setResult(a - b);
    const multiply = (a, b) => setResult(a * b);
    const divide = (a, b) => setResult(b !== 0 ? a / b : 'Error: Division by zero');

    return { result, add, subtract, multiply, divide };
}
