import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon } from 'mdb-react-ui-kit';

const SearchBar = () => {
  return (
    <MDBInputGroup className="p-3">
      <MDBInput label='Pesquisar modalidade' />
      <span className="input-group-text">
        <MDBIcon icon="search" fas />
      </span>
    </MDBInputGroup>
  );
};

export default SearchBar;
