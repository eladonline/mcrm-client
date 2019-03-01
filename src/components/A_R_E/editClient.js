import React, { PureComponent } from 'react';
import { Form } from 'antd';
import ClientList from 'src/components/table/ClientsList';
import { findClients, updateClients } from 'src/components/asyncs';
import EditModal from 'src/components/modals/Edit';
import ClientEditForm from 'src/components/forms/clientEdit';
import FindByParam from 'src/components/find/FindByParam';
class EditClient extends PureComponent {
  state = {
    listOfClients: [],
    serverMessage: '',
    modalVisible: false,
    clientSelected: {}
  };
  /**
   * @param {object} newValues - the new client values
   */
  handleEditReq = newValues => {
    const data = { url: `api/client/put/client`, body: newValues };
    updateClients(data).then(res => {
      if (res.data === 'edit successfuly') {
        // call clients again to refresh the list

        const { select } = this.searchValues();
        const params = {
          url: `api/client/query/find?${select}=${this.state.clientSelected[select]}`
        };

        this.findClientsCall(params);
        // reset the values to default (which is the selected client)
        this.props.form.resetFields();
      }
    });
  };
  /**
   * sets the client object in the state
   * and open the modal
   * @param {number} index - index of the client in the  listOfClients (state)
   */
  handleEditClick = index => {
    const client = this.state.listOfClients[index];

    // show modal and update client select
    this.setState({ modalVisible: true, clientSelected: client });
  };
  /**
   * close the modal when click on cancel button
   */
  handleModalClose = () => {
    this.setState({ modalVisible: false });
  };

  /**
   * submit the changes after clicking the modal ok
   */
  handleAccepet = () => {
    // here will be the submit of the edit call
    const { clientSelected } = this.state;
    const newValues = this.clientValues();
    // update new values to over old
    const newClient = { ...clientSelected, ...newValues };
    this.handleEditReq(newClient);
  };

  handleFindClientResults = (val, props) => {
    this.setState({ listOfClients: [...val], ...props });
  };
  // call to find clients and set them in state
  findClientsCall = data => {
    findClients(data, (val, props) => this.setState({ listOfClients: [...val], ...props }));
  };
  // get the values in the search inputs
  searchValues() {
    return this.props.form.getFieldsValue(['select', 'value']);
  }
  /**
   * @return get client fields values
   */
  clientValues() {
    return this.props.form.getFieldsValue(['Name', 'LastName', 'Email', 'Phone']);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { modalVisible, serverMessage, listOfClients, clientSelected } = this.state;

    return (
      <div className="edit-client">
        <Form id="edit-client-form">
          <FindByParam form={this.props.form} handleResults={this.handleFindClientResults} />
        </Form>

        {/** list of the Users found in DB */}
        <ClientList type="EDIT" handleClick={this.handleEditClick} list={listOfClients} />
        {/** server Message */}
        <div className="server-response-reject">{serverMessage}</div>
        {/** the form of the client wit edit option */}
        <EditModal
          handleAccepet={this.handleAccepet}
          handleClose={this.handleModalClose}
          visible={modalVisible}
        >
          <ClientEditForm
            form={this.props.form}
            handleFieldsChange={this.handleFieldsChange}
            {...clientSelected}
          />
        </EditModal>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'Form' })(EditClient);
export default WrappedRegistrationForm;
