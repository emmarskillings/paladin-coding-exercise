import React, {Component} from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

class Animal extends Component {

  render() {

    const animal = this.props.animal;
    const votes = this.props.votes;
    const triggerUpVote = this.props.triggerUpVote;
    const triggerDownVote = this.props.triggerDownVote;
    return (
      <div className="d-flex justify-content-between animal">
        <div>{animal}: {votes} votes</div>
        <div className="vote">
            <button className="vote up" onClick={() => triggerUpVote(this.props.animal)}><FaThumbsUp /></button>
            <button className="vote down" onClick={() => triggerDownVote(this.props.animal)}><FaThumbsDown /></button>
        </div>
      </div>
    )
  }
}
export default Animal;