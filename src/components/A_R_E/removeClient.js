import React, { PureComponent } from 'react';
import { Form, Input, Select } from 'antd';
import { Req } from 'src/components/req';
import ClientList from 'src/components/table/ClientTable';
import { deleteClient } from 'src/components/asyncs';
import FindByParam from 'src/components/find/FindByParamSelect';

const req = new Req();

class RemoveClient extends PureComponent {
  state = { listOfClients: [], serverMessage: '' };

  handleDeleteReq = (index, id) => {
    // req.delete(`api/client/delete/${id}`);
    deleteClient(`api/client/delete/${id}`, res => {
      // deleted successfuly
      if (res.data === 'deleted successfuly') {
        // update the UI
        const state = this.state;
        state.listOfClients.splice(index, 1);
        this.setState({ listOfClients: [...state.listOfClients] });

        // deleted unsuccessfuly
      } else {
        this.setState({ listOfClients: [], serverMessage: res.data });
      }
    });
  };

  handleFindClientResults = (val, props) => {
    this.setState({ listOfClients: [...val], ...props });
  };

  render() {
    return (
      <div className="remove-client">
        {/**Find: render select and input */}
        <Form id="remove-client-form">
          <FindByParam form={this.props.form} handleResults={this.handleFindClientResults} />
        </Form>

        {/** list of the Users found in DB */}
        <ClientList
          type="DELETE"
          handleClick={this.handleDeleteReq}
          list={this.state.listOfClients}
        />
        {/** server Message */}
        <div className="server-response-reject">{this.state.serverMessage}</div>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'Form' })(RemoveClient);
export default WrappedRegistrationForm;
