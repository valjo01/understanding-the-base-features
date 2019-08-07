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
    ],
    otherState : 'some other value',
    showPersons: false
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  randomizeNumber = () => {
     const min = 1;
     const max = 100;
     const rand = min + Math.random() * (max - min);
     console.log(rand);
  }

  render() { 
    const buttonStyle = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px'
    };

  {/* Listen anzeigen Java Script Weg*/}
  let persons = null;
  
  if (this.state.showPersons) {
    // einzeln anzeigen
      // persons = (
      //   <Person />
      // );

    // dynamische Listen
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
                      name={person.name} 
                      age={person.age} />
          })}
        </div>

      )
  }

    return (
      <div className="App">

      {/* Start */}
        <h1>Hi Ich bin eine React App</h1>

      {/* Inline Styling, Btn Handling Weg 1 */}
        <button 
          // inline styling
          style={buttonStyle}

          // btn handling Weg 1
          onClick={
          () => this.switchNameHandler('Creck!')}>switch name</button>

        {/* Ausgabe eines states */}
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

        {/* Klick auf Text, Btn handling Weg 2   */}
        <Person
          // Ausgabe
          name='Samuel'
          age='25'
          clickAsAReference={
            //Weg 2 empfohlen
            this.switchNameHandler.bind(this, 'Bachmann!')}>Mein Hobby ist surfen!</Person>

        {/* Output/state live aendern bei Input-Eingabe  */}
        <Person 
          changed={this.nameChangeHandler}
          name={this.state.persons[3].name}
        />

        {/* einfachste Ausgabe */}
        <Person
          name='Frank' age='63' />   

        {/* Listen anzeigen */}
        <button 
          // Button
          style={buttonStyle}
          onClick={this.togglePersonHandler}>show persons</button>
          
          {this.state.showPersons === true ?
          // bei true-> Anzeigen der Liste
            <div>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
              <Person
                name='Samuel'
                age='25'
                clickAsAReference={
                  this.switchNameHandler.bind(this, 'Bachmann!')}>Mein Hobby ist surfen!</Person>
              <Person 
                changed={this.nameChangeHandler}
                name={this.state.persons[3].name}
              />
              <Person
                name='Frank' age='63' />   
            </div> 

          // bei false-> null
          : null}

          {/* Listen anzeigen Java Script Weg*/}
          <button style={buttonStyle}
          onClick={this.togglePersonHandler}>show persons2</button>
        
          {persons}

          {/* dynamische Listen/ Arrays anzeigen */}
      </div>
    );
  }
}

export default App;
