import React, {Component} from 'react';
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars

export default class Activities extends Component {
  static propTypes = {
    facts: PropTypes.array
  };

  state = {

  };


  render() {
    const {facts} = this.props;
    console.log(facts);
    return (
      <ul>
        {facts.map((fact, index) => <li key={index}>{fact.text}</li>)}
      </ul>
    );
  }
}