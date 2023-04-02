import React from 'react';
import { useState, useEffect } from 'react';

const inc = (count: number) => count + 1;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputState, setInputState] = useState(0);

  const handleCountChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !inputState ? setCount(0) : setCount(inputState);
  };

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount((count) => count - 1)}>
          ➖ Decrement
        </button>
        <button>🔁 Reset</button>
        <button onClick={() => setCount((count) => count + 1)}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form onSubmit={(e) => handleCountChange(e)}>
          <input
            type="number"
            value={inputState}
            onChange={(e) => setInputState(e.target.valueAsNumber)}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
