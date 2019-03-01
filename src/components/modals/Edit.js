import { Modal } from 'antd';

export default class EditModal extends React.Component {
  handleOk = e => {
    this.props.handleClose();
    this.props.handleAccepet()
  };

  handleCancel = e => {
    this.props.handleClose();
  };

  render() {
    const { children, visible } = this.props;
    return (
      <div>
        <Modal
          title="Edit user"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {children}
        </Modal>
      </div>
    );
  }
}
