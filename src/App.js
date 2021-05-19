import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MainContainer } from './Containers/MainContainer'
import { TableContainer } from './Containers/TableContainer'
import { HeaderContainer } from './Containers/HeaderContainer'
import { NavbarContainer } from './Containers/NavbarContainer';
import { LeftNavContainer } from './Containers/LeftNavContainer';

function App() {

  return (
    <div className="jumbotron text-center">
      <HeaderContainer title='Price Optimization' />
      <NavbarContainer style={{backgroundColor: 'lightblue'}}/>
      <MainContainer style={{display: 'inline-flex', position: 'relative', marginTop: 50}}>
        <LeftNavContainer />
        <TableContainer />
      </MainContainer>
    </div>
  );
}

export default App;
