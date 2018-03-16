import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Wrap top level app component in a provider component (that returns a context object)
// To use the data, use a consumer component with a render prop child as a function
// actions can also be passed down

//create new context
const MyContext = React.createContext();

//create provider component
class MyProvider extends Component {
  state = {
    name: "Grayson",
    age: 29,
    cool: true
  }
  render() { 
    return ( 
      <MyContext.Provider value={{
          state: this.state,
          growOlder: () => this.setState({
            name: this.state.name + "n"
          })
        }}>
        {this.props.children}
      </MyContext.Provider>
     )
  }
}

class Person extends Component {
  render() { 
    return ( 
      <div className="person">I am the person. 
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>My name is {context.state.name}.</p>
              <button onClick={context.growOlder}>GROW</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
     )
  }
}

const Family = (props) => (
  <div className="family">
  <Person />
  I am the family.
  </div>
)
 

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <div>I am the app.</div>
          <Family/>
        </div>
      </MyProvider>
    );
  }
}

export default App;
