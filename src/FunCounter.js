import { useState } from 'react'
import './fun-counter.css'

export default function FunCounter({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  const [doubledCount, setDoubleCount] = useState(initialCount * 2)

  const double = () => setCount(count * 2)

  const increment = () => {
    setCount(count + 1)
    setDoubleCount(doubledCount + 2)
  }

  return (
    <div className="fun-counter" data-cy="fun-counter">
      <p className="full">
        Click count <span data-cy="count">{count}</span>, doubled{' '}
        <span data-cy="doubled">{doubledCount}</span>
      </p>
      <button className="full" data-cy="add" onClick={increment}>
        Click me
      </button>

      <button className="full" data-cy="double" onClick={double}>
        Double me
      </button>
    </div>
  )
}
