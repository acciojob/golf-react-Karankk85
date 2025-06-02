import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0, // position in pixels
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Handle start button click
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Handle ArrowRight key press
  handleKeyDown(event) {
    if (event.keyCode === 39) {
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: newPos + "px" }
        };
      });
    }
  }

  // Add event listener on mount
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Clean up on unmount
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Render either button or ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
