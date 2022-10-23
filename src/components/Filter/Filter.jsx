import { Component } from 'react';


export class Filter extends Component {
  render() {
    const { onChangeName, filter } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeName}
        />
      </>
    );
  }
}

