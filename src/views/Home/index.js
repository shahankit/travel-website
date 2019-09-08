import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Model from './model';
import Main from './model-views/Main';

class Home extends Component {
  constructor(props) {
    super(props);
    this.model = new Model(this);
    this.model.actions.syncProps(this.props);
  }

  componentDidUpdate() {
    this.model.actions.syncProps(this.props);
  }

  render() {
    return (
      <Provider model={this.model}>
        <Main />
      </Provider>
    );
  }
}

export default Home;
