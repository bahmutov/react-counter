import { useState } from 'react'
import './fun-counter.css'

export default function FunCounter({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  const double = () => setCount(count * 2)

  return (
    <div className="fun-counter" data-cy="fun-counter">
      <p className="full">
        Click count <span data-cy="count">{count}</span>
      </p>
      <button
        className="full"
        data-cy="add"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>

      <button className="full" data-cy="double" onClick={double}>
        Double me
      </button>
    </div>
  )
}
