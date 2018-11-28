import React, { Component } from 'react';

function rollDice(sides) {
  return Math.floor((Math.random() * sides) + 1);
}

class LuckyEven extends Component {
  state = {
    plays: 0,
    roll: '?',
    sides: this.props.sides || 6,
    wins: 0,
  }

  render() {
    return (
      <div>
        <h1>{this.props.title || "Lucky Evens"}</h1>
        <div>Dice sides: <input
            onChange = {(event) => {
              this.setState({sides: event.target.value});  
            }}
            value = {this.state.sides}
            size = "3"
            maxLength = "3"
          ></input>
        </div>
        <div>You rolled a {this.state.roll}</div>
        <div>Wins: {this.state.wins}</div>
        <div>Plays: {this.state.plays}</div>
        <button
          onClick = {
            (_event) => {
              const roll = rollDice(this.state.sides);
              const increment = roll % 2 === 0 ? 1 : 0;
              
              this.setState({
                plays: this.state.plays + 1,
                roll,
                wins: this.state.wins + increment,
              });
              
            }
          }
        
        >Click Me</button>
      </div>
    );
  }
}

export default LuckyEven;
