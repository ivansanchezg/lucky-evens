import React, { Component } from 'react';

function rollDice() {
  const sides = 6;
  return Math.floor((Math.random() * sides) + 1);
}

class LuckyEven extends Component {
  state = {
    plays: 0,
    roll: null,
    wins: 0,    
  }

  render() {
    return (
      <div>
        <h1>Lucky Evens</h1>
        <div>You rolled a {this.state.roll}</div>
        <div>Wins: {this.state.wins}</div>
        <div>Plays: {this.state.plays}</div>
        <button
          onClick = {
            (_event) => {
              const roll = rollDice();
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
