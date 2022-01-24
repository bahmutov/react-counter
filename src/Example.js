import React from 'react'
import './Example.css'

export class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div className="Example">
        <p className="full">
          You clicked <span data-cy="count">{this.state.count}</span> times
        </p>
        <button
          className="full"
          data-cy="add"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click me
        </button>
      </div>
    )
  }
}
