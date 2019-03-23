import React, {Component} from 'react';
import AnimalList from './AnimalList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    
    //initial votes for corresponding animal
    this.state = {
      animals: [
        { type: 'Cat', votes: 11 },
        { type: 'Dog', votes: 9 },
        { type: 'Bird', votes: 6 },
        { type: 'Horse', votes: 4 },
        { type: 'Fish', votes: 2 },
      ]
    };

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  //increases animal vote by 1
  upVote = (animalType) => {
    this.state.animals.map((animal) => {
      if (animal.type == animalType) {
        return this.setState({
          votes: animal.votes += 1
        })
      }
    })
  }

  //decreases animal vote by 1
  downVote = (animalType) => {
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
