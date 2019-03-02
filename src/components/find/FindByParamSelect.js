import React, { PureComponent } from 'react';
import { findClients } from 'src/components/asyncs';
import { Form, Input, Select } from 'antd';

export default class Find extends PureComponent {
  state = { listOfClients: [], serverMessage: '' };
  findClientsCall = data => {
    findClients(data, this.props.handleResults);
  };
  /**
   * find the all clients
   */
  onSubmitFind = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { select, value } = values;
        const data = {
          url: `api/client/query/find?${select}=${value}`
        };

        this.findClientsCall(data);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <>
        <Form.Item label="Find by">
          {getFieldDecorator('select', {
            rule: [{ required: true, message: 'Please select property' }]
          })(
            <Select
              onChange={() => this.setState({ serverMessage: '' })}
              placeholder="Please select a search method"
            >
              <Select.Option value="name">Name</Select.Option>
              <Select.Option value="lastName">Last name</Select.Option>
              <Select.Option value="phone">Phone</Select.Option>
              <Select.Option value="email">Email</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="value">
          {getFieldDecorator('value', {
            rules: [
              {
                required: true,
                message: 'value is required'
              }
            ]
          })(<Input placeholder="Value" />)}
        </Form.Item>
        <div className="button-container">
          <button type="submit" className="btnLight" onClick={this.onSubmitFind}>
            Submit
          </button>
        </div>
      </>
    );
  }
}
