import React from "react";

class Age extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date(),
        bday: new Date(1999, 2, 3, 9, 49) // Js counts months from 0, so 0=Jan, 11=Dec
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        10
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: ((new Date() - this.state.bday)/31556952000).toFixed(11).toLocaleString()
      });
    }
    render() {
      return (
        <p className="App-clock">
          {this.state.time.toLocaleString()}
        </p>
      );
    }
  }

export default Age;