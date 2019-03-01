import AddClient from 'components/A_R_E/addClient';
import RemoveClient from 'components/A_R_E/removeClient';
import EditClient from 'components/A_R_E/editClient';
import SearchAll from 'components/Search/All';

export const cbk_A_R_E = key => {
  switch (key) {
    case 'add':
      return <AddClient />;
    case 'remove':
      return <RemoveClient />;
    case 'edit':
      return <EditClient />;
  }
};
export const cbk_search = key => {
  switch (key) {
    case 'all':
      return <SearchAll />;
  }
};
