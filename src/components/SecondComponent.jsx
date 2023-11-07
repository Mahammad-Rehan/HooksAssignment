import React, { useState } from 'react';
import { useCalculator } from './useCalculator';

const FirstComponent = () => {
    const { result, add } = useCalculator();
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const handleAdd = () => {
        add(Number(a), Number(b));
    }

    return (
        <div>
            <h1>First Component</h1>
            <input type="number" value={a} onChange={e => setA(e.target.value)} />
            <input type="number" value={b} onChange={e => setB(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <p>Result: {result}</p>
        </div>
    );
}

export default FirstComponent;
