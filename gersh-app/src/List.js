import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

  renderGershThings(array) {
    return array.map((x, index) => {
      return <ListItem key={index} text={x} />
    });
  }

  render() {
    return (
        <ul>
          { this.renderGershThings(this.props.list) }
        </ul>
    );
  }
}

export default List;

