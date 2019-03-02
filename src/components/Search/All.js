import React, { PureComponent } from 'react';
import { Form } from 'antd';
import ClientList from 'src/components/table/ClientTable';
import { findClients } from 'src/components/asyncs';

class FindClients extends PureComponent {
  state = { listOfClients: [], serverMessage: '' };
  componentDidMount = () => {
    findClients({ url: `api/client/query/find?` }, (val, props) => {
      this.setState({ listOfClients: val, ...props });
    });
  };

  handleFindClientResults = (val, props) => {
    this.setState({ listOfClients: [...val], ...props });
  };

  render() {
    return (
      <div className="find-clients">
        {/** list of the Users found in DB */}
        <ClientList readOnly={true} list={this.state.listOfClients} />
        {/** server Message */}
        <div className="server-response-reject">{this.state.serverMessage}</div>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'Form' })(FindClients);
export default WrappedRegistrationForm;
