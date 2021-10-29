import React, {Component} from 'react';
import Counter from "../../../commonComponents/Counter";

class CounterPageContainer extends Component {

  state = {
      countValue: 0,
      parityType: 'Even Number',
    };

  handleIncrement = () => {
    this.setState({...this.state, countValue: this.state.countValue + 1})
  }


  handleDecrement = () => {
    if (this.state.countValue >= 1) {
      this.setState({...this.state, countValue: this.state.countValue - 1})
    }

  }

  handleReset = () => {
    this.setState({...this.state, countValue: 0});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.countValue !== this.state.countValue) {
      const newParity = this.state.countValue % 2 === 0 ? 'Even Number' : 'Odd Number';

      this.setState({...this.state, parityType: newParity})
    }

  }

  render() {
    return (
      <Counter
      countValue={this.state.countValue}
      parityType={this.state.parityType}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
      handleReset={this.handleReset}
    />
    );
  }
}

export default CounterPageContainer;