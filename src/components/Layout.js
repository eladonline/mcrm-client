import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';

class Layout extends PureComponent {
  render() {
    return (
      <Fragment>
        <h4 style={{ color: 'red', padding: '.5em' }}>
          Im redered from: src/componentns.Layout.js <br />
          And Im wrapping all pages in the site, because I render them as my chilren. <br/> under this red
          text my child is rendered
        </h4>
        {this.props.query.children}
      </Fragment>
    );
  }
}
const Routed = withRouter(props => <Layout query={props} />);

export default Routed;
