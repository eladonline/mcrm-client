import React, { PureComponent } from 'react';
import { Form } from 'antd';
import ClientList from 'src/components/table/ClientsList';
import FindByParam from 'src/components/find/FindByParam';

class FindClients extends PureComponent {
  state = { listOfClients: [], serverMessage: '' };

  handleFindClientResults = (val, props) => {
    this.setState({ listOfClients: [...val], ...props });
  };

  render() {
    return (
      <div className="find-clients">
        <Form id="search-form">
          <FindByParam form={this.props.form} handleResults={this.handleFindClientResults} />
        </Form>
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
