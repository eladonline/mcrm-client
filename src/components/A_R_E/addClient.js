import React, { PureComponent } from 'react';
import { Form, Input, } from 'antd';
import { Req } from 'src/components/req';

const req = new Req();

class AddClient extends PureComponent {
  validateLength = (rule, value, callback) => {
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
        console.log('Received values of form: ', values);
        const data = {
          url: 'api/client/add',
          body: values
        };
        req.post(data).then(({ data }) => {
          if (data.success) {
            this.props.form.setFieldsValue({ ['Name']: '' });
            this.props.form.setFieldsValue({ ['LastName']: '' });
            this.props.form.setFieldsValue({ ['Email']: '' });
            this.props.form.setFieldsValue({ ['Phone']: '' });
          }
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form id="add-client-form">
        <Form.Item label="Name" hasFeedback>
          {getFieldDecorator('Name', {
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
          {getFieldDecorator('LastName', {
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
          {getFieldDecorator('Email', {
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
          {getFieldDecorator('Phone', {
            rules: [
              {
                required: true,
                message: 'Phone is required'
              }
            ]
          })(<Input placeholder="Phone" id="error" type="tel" />)}
        </Form.Item>
        <div className="button-container">
          <button type="submit" className="btnLight" onClick={this.onSubmit}>
            Submit
          </button>
        </div>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'Form' })(AddClient);
export default WrappedRegistrationForm;
