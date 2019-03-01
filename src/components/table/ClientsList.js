const ClientsList = ({ list, handleClick, type, readOnly }) => {
  return list.map((obj, i) => {
    return (
      <div key={`remove_client_table_${i}`} className="table-container">
        <table className="defaultTable">
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
              <span className="mobileOnly bold">Name: </span> {obj.Name}
            </td>
            <td>
              <span className="mobileOnly bold">Last Name: </span>
              {obj.LastName}
            </td>
            <td>
              <span className="mobileOnly bold">Email: </span>
              {obj.Email}
            </td>
            <td>
              <span className="mobileOnly bold">Phone: </span>0{obj.Phone}
            </td>
          </tr>
        </table>
      </div>
    );
  });
};

export default ClientsList;
