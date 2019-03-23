import React, {Component} from 'react';
import Animal from './Animal.jsx';

class AnimalList extends Component {
    render() {
        const animals = this.props.animals; 

        //sort animals from most to least votes
        animals.sort(function(a, b) {
            return b.votes - a.votes;
        });
        let index = 0;

        const animalList = animals.map((animal) => {
            index++;
            return  <Animal key={index} id={index} animal={animal.type} votes={animal.votes} triggerUpVote={this.props.triggerUpVote} triggerDownVote={this.props.triggerDownVote} />;
        });

        return (
            <main className="container fill">
                {animalList}
            </main>
        );
    };
};

export default AnimalList;