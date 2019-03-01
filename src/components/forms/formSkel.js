import React, { PureComponent } from 'react';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber } from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

class FormComponent extends PureComponent {
  state = { trackPasswordInput: '' };
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      // eslint-disable-next-line standard/no-callback-literal
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validatePassword = (rule, value, callback) => {
    this.setState({ trackPasswordInput: value });
    const passwordReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])(?=.{8,})/gi);
    const isPasswordValid = passwordReg.test(value);
    const form = this.props.form;
    if (value && isPasswordValid) {
      form.validateFields(['confirm'], { force: true });
    } else if (!isPasswordValid) {
      callback('Should be at least 1 uppercase letter, 1 digit, 1 symbol, and 8 characters long');
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item {...formItemLayout} label="Email" hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              },
              {
                validator: this.validateToNextPassword
              }
            ],
            initialValue: 'dksfksdf'
          })(<Input placeholder="unavailable choice" id="error" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                validator: this.validatePassword
              }
            ]
          })(<Input placeholder="unavailable choice" id="error" type="password" />)}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'Form' })(FormComponent);
export default WrappedRegistrationForm;
