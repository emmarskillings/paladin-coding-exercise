import React, {Component} from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

class Animal extends Component {

  render() {

    const animal = this.props.animal;
    const votes = this.props.votes;
    const triggerUpVote = this.props.triggerUpVote;
    const triggerDownVote = this.props.triggerDownVote;

    //assign number-1 id to animal in the lead 
    const numberOne = "number-" + (this.props.id);

    return (
      <div className="d-flex justify-content-between animal">
        <div id={numberOne} className="information">{animal}: {votes} votes</div>
        <div className="vote">
            <button className="up" onClick={() => triggerUpVote(animal)}><FaThumbsUp /></button>
            <button className="down" onClick={() => triggerDownVote(animal)}><FaThumbsDown /></button>
        </div>
      </div>
    )
  }
}
export default Animal;