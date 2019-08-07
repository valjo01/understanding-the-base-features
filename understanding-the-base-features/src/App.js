import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Phil', age: 30 },
      { name: 'Steffen', age: 27 },
      { name: 'Valentin', age: 25 },
      { name: 'Samuel', age: 26 },
      { name: 'Finja', age: 25 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DONT DO THIS: this.state.persons[].name;
    this.setState(
      {
        persons: [
          { name: 'Frank', age: 63 },
          { name: 'Mr. Fels', age: 47 },
          { name: newName, age: 42 },
          { name: 'Mr.T', age: 50 },
          { name: 'Dirk', age: 38 },
        ]
      }
    )
  }

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Frank', age: 63 },
          { name: 'Mr. Fels', age: 47 },
          { name: 'Mr. T', age: 42 },
          { name: event.target.value, age: 50 },
          { name: 'Dirk', age: 38 },
        ]
      }
    )
  }

  randomizeNumber = () => {
     const min = 1;
     const max = 100;
     const rand = min + Math.random() * (max - min);
     console.log(rand);
  }

  render() { 
    return (
      <div className="App">
        <h1>Hi Ich bin eine React App</h1>
        <button onClick={
          //Weg 1
          () => this.switchNameHandler('Creck!')}>switch name</button>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        <Person
          name='Samuel'
          age='25'
          clickAsAReference={
            //Weg 2 empfohlen
            this.switchNameHandler.bind(this, 'Bachmann!')}>Mein Hobby ist surfen!</Person>
        <Person 
          changed={this.nameChangeHandler}
          name={this.state.persons[3].name}
        />
        <Person
          name='Frank' age='63' />           
      </div>
    );
  }
}

export default App;
