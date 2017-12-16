const React = require('react')
const ReactDOM = require('react-dom')

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prefAnimal: ""
    };
  } 

handleRadioChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

render() {
  const {prefAnimal} = this.state;  
  return  (
  <div>
    <p> Do you prefer cats, dogs or giraffes? </p>
    <div>
      Cats
        <input
          type="radio"
          name="prefAnimal"
          value={"cats"}
          checked={prefAnimal === "cats"}
          onChange={this.handleRadioChange}
        />
    </div>
    <div>
      Dogs
        <input
          type="radio"
          name="prefAnimal"
          value={"dogs"}
          checked={prefAnimal === "dogs"}
          onChange={this.handleRadioChange}
        />
    </div>
    <div>
      Giraffes
        <input
          type="radio"
          name="prefAnimal"
          value={"giraffes"}
          checked={prefAnimal === "giraffes"}
          onChange={this.handleRadioChange}
          />
        </div>
        <button disabled={!prefAnimal}> submit </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
