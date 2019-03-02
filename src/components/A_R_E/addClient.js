import React, { PureComponent } from 'react';
import { Form, Input, Textarea } from 'antd';
import { Req } from 'src/components/req';

const { TextArea } = Input;
const req = new Req();

class AddClient extends PureComponent {
  state = { serverMessage: ' ' };
  validateLength = (rule, value, callback) => {
    if (!value) return callback();
    const form = this.props.form;
    if (value.length >= 2) {
      form.validateFields(['confirm'], { force: true });
    } else {
      callback('Minimum length is 2');
    }
    callback();
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          url: 'api/client/add',
          body: values
        };
        // es5 post call just to show I know older version
        // all rest of the calls is es6
        req.post(data).then(({ data }) => {
          this.setState({ serverMessage: data });
          // reset the server message
          setTimeout(() => {
            this.setState({ serverMessage: ' ' });
          }, 1400);
          // reset fields
          this.props.form.resetFields();
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form id="add-client-form">
        <Form.Item label="Name" hasFeedback>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Name is required'
              },
              {
                validator: this.validateLength
              }
            ]
          })(<Input placeholder="Name" id="error" />)}
        </Form.Item>
        <Form.Item label="Last name" hasFeedback>
          {getFieldDecorator('lastName', {
            rules: [
              {
                required: true,
                message: 'Last name is required'
              },
              {
                validator: this.validateLength
              }
            ]
          })(<Input placeholder="Last Name" id="error" />)}
        </Form.Item>
        <Form.Item label="Email" hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'not a valid email'
              },
              {
                required: true,
                message: 'Email is required'
              }
            ]
          })(<Input placeholder="Email" id="error" />)}
        </Form.Item>
        <Form.Item label="Phone" hasFeedback>
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: 'Phone is required'
              }
            ]
          })(<Input placeholder="Phone" id="error" type="tel" />)}
        </Form.Item>
        {/** Purchase */}
        <Form.Item label="Product" hasFeedback>
          {getFieldDecorator('product', {
            rules: []
          })(<TextArea rows={4} placeholder="Product" id="error" type="text" />)}
        </Form.Item>
        <Form.Item label="Price" hasFeedback>
          {getFieldDecorator('price', {
            rules: []
          })(<Input placeholder="price" id="error" type="number" />)}
        </Form.Item>
        <div className="button-container">
          <button type="submit" className="btnLight" onClick={this.onSubmit}>
            Submit
          </button>
        </div>
        <div className="server-response-accept">{this.state.serverMessage}</div>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'Form' })(AddClient);
export default WrappedRegistrationForm;
