import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';

class Layout extends PureComponent {
  render() {
    return <Fragment>{this.props.query.children}</Fragment>;
  }
}
const Routed = withRouter(props => <Layout query={props} />);

export default Routed;
