import React, { PureComponent } from 'react';
import { Form, Input } from 'antd';
//{ Name, LastName, Phone, Email }
const EditClientForm = ({ form, Name, LastName, Phone, Email }) => {
  const { getFieldDecorator } = form;
  return (
    <div className="edit-client">
      <div id="edit-one-client-form">
        <div className="make-row">
          <Form.Item label="Name">
            {getFieldDecorator('Name', { initialValue: Name })(<Input placeholder="Enter Name" />)}
          </Form.Item>
          <Form.Item label="Last name">
            {getFieldDecorator('LastName', {
              initialValue: LastName
            })(<Input placeholder="Enter Last name" />)}
          </Form.Item>
        </div>
        <div className="make-row">
          <Form.Item label="Phone">
            {getFieldDecorator('Phone', { initialValue: `0${Phone}` })(
              <Input placeholder="Enter Phone" />
            )}
          </Form.Item>
          <Form.Item label="Email">
            {getFieldDecorator('Email', { initialValue: Email })(
              <Input placeholder="Enter Email" />
            )}
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default EditClientForm;
