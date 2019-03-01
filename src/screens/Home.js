import React, { PureComponent, useState } from 'react';
import Menu from 'src/components/menu/Menu';
import AddClient from 'components/A_R_E/addClient';

const Homepage = () => {
  // initial view
  // state = { view: <AddClient /> };
  const [view, setView] = useState(<AddClient />);

  const handleMenuClick = view => {
    setView(view);
  };

  return (
    <div className="homepage">
      <Menu handleMenuClick={handleMenuClick} />
      <div className="homepage__main-content">{view}</div>
    </div>
  );
};

export default Homepage;
