import { Select } from 'antd';

export const SearchMethodSelect = ({ handleChange }) => (
  <Select onChange={handleChange} placeholder="Please select a search method">
    <Select.Option value="Name">Name</Select.Option>
    <Select.Option value="LastName">Last name</Select.Option>
    <Select.Option value="Phone">Phone</Select.Option>
    <Select.Option value="Email">Email</Select.Option>
  </Select>
);
