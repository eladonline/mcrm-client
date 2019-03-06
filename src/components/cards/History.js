import React, { useState } from 'react';
import moment from 'moment';

const Client = ({ aPurchases }) => {
  const [open, setOpen] = useState(false);
  const parsePurchases = list => {
    return list.map((purchase, i) => {
      return <PurchaseTable key={`history_${i}`} {...purchase} />;
    });
  };
  return (
    <div className="client-card-history" onClick={() => setOpen(!open)} data-open={open}>
      {!open && <div className="client-card-history__expand">expand</div>}
      {parsePurchases(aPurchases)}
    </div>
  );
};

const PurchaseTable = ({ date, price, product }) => {
  const momentedDate = moment(Number(date)).format('MMMM Do YYYY');
  return (
    <div className="purchase-table">
      <ul>
        <li>Date: {momentedDate}</li>
        <li>Price: {price}</li>
        <li>product: {product}</li>
      </ul>
    </div>
  );
};

export default Client;
