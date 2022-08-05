import React, { useState, useEffect } from 'react'

const TestHookCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count} time`
    }, [count])
    

  return (
    <div>
        <div> Update Title</div>
        <button onClick={() => setCount(count +1)}> Increment</button>

    </div>
  )
}

export default TestHookCounter