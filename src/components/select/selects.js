import { Select } from 'antd';

export const SearchMethodSelect = ({ handleChange }) => (
  <Select onChange={handleChange} placeholder="Please select a search method">
    <Select.Option value="name">Name</Select.Option>
    <Select.Option value="LlastName">Last name</Select.Option>
    <Select.Option value="phone">Phone</Select.Option>
    <Select.Option value="email">Email</Select.Option>
  </Select>
);
