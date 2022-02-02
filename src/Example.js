import React from 'react'
import './Example.css'

export class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount || 0,
    }
  }

  double() {
    console.log('doubling the current value', this.state.count)
    this.setState({ count: this.state.count * 2 })
  }

  render() {
    return (
      <div className="Example">
        <p className="full">
          Click count is <span data-cy="count">{this.state.count}</span>
        </p>
        <button
          className="full"
          data-cy="add"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click me
        </button>

        <button className="full" data-cy="double" onClick={() => this.double()}>
          Double me
        </button>
      </div>
    )
  }
}
