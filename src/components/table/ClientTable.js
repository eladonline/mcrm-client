const ClientsTable = ({ list, handleClick, type, readOnly }) => {
  return list.map((obj, i) => {
    return (
      <div key={`remove_client_table_${i}`} className="table-container">
        <table className="default-table">
          {/** do not appear in Read only mode */}
          {!readOnly && (
            <span className="overlay">
              <span
                onClick={() => {
                  handleClick(i, obj._id);
                }}
              >
                {type}
              </span>
            </span>
          )}
          <tr>
            <th className="notMobile">Name</th>
            <th className="notMobile">Last Name</th>
            <th className="notMobile">Email</th>
            <th className="notMobile">Phone</th>
          </tr>
          <tr>
            <td>
              <span className="mobileOnly bold">Name: </span> {obj.name}
            </td>
            <td>
              <span className="mobileOnly bold">Last Name: </span>
              {obj.lastName}
            </td>
            <td>
              <span className="mobileOnly bold">Email: </span>
              {obj.email}
            </td>
            <td>
              <span className="mobileOnly bold">Phone: </span>0{obj.phone}
            </td>
          </tr>
          {/** appear only if img uploaded */}
          {obj.img && (
            <>
              <tr className="full-row">
                <th>Photo</th>
              </tr>
              <tr className="full-row">
                <td>ad</td>
              </tr>
            </>
          )}
        </table>
      </div>
    );
  });
};

export default ClientsTable;
