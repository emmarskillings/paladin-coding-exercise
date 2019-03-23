import React, {Component} from 'react';
import AnimalList from './AnimalList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      animals: [
        { type: 'Cat', votes: 11 },
        { type: 'Dog', votes: 9 },
        { type: 'Bird', votes: 8 },
        { type: 'Horse', votes: 10 },
        { type: 'Fish', votes: 6 },
      ]
    };

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote = function(animalType) {
    this.state.animals.map((animal) => {
      if (animal.type == animalType) {
        return this.setState({
          votes: animal.votes += 1
        })
      }
    })
  }
  downVote = function(animalType) {
    this.state.animals.map((animal) => {
      if (animal.type == animalType && animal.votes > 0) {
        return this.setState({
          votes: animal.votes -= 1
        })
      }
    })
  }
  render() {
    return (
      <div>
        <header className="d-flex justify-content-center">
          <h1>Vote for your favourite animals!</h1>
        </header>
        <AnimalList triggerUpVote={this.upVote} triggerDownVote={this.downVote} animals={this.state.animals}/>
      </div>

    );
  }
}
export default App;
