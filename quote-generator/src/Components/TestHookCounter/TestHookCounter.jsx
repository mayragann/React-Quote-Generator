import React, { useState } from 'react'

const TestHookCounter = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
        <h1> This is now {count}</h1>
        <button onClick={() => setCount(count +1)}> Add 1</button>

    </div>
  )
}

export default TestHookCounter