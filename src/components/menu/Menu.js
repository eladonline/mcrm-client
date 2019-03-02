import { Menu, Icon } from 'antd';
import { cbk_A_R_E, cbk_search } from './componentByKey';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
  handleClick = e => {
    const [key, section] = e.keyPath;
    if (section === 'A_R_E') {
      this.props.handleMenuClick(cbk_A_R_E(key));
    } else if (section === 'search') {
      this.props.handleMenuClick(cbk_search(key));
    }
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['add']}
        defaultOpenKeys={['A_R_E']}
        mode="inline"
        theme="dark"
        inlineIndent="25"
      >
        <SubMenu
          key="A_R_E"
          title={
            <span>
              <Icon type="appstore" />
              <span>Add / Remove / Edit</span>
            </span>
          }
        >
          {/* <MenuItemGroup key="g1" title="Group"> */}
            <Menu.Item key="add">Add</Menu.Item>
            <Menu.Item key="remove">Remove</Menu.Item>
            <Menu.Item key="edit">Edit</Menu.Item>
          {/* </MenuItemGroup> */}
        </SubMenu>
        <SubMenu
          key="search"
          title={
            <span>
              <Icon type="appstore" />
              <span>Search</span>
            </span>
          }
        >
          <Menu.Item key="all">All</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;
