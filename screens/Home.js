import React, { Component } from 'react';
import Menu from 'src/components/menu/Menu';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div>
          I render here from src/components/screens/Home, <br />
          and my Component displayed in pages/index.js
        </div>
      </div>
    );
  }
}
