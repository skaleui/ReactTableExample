
import React from 'react';
import { Container } from 'reactstrap';

export const MainContainer = (props)=>{
    return (
      <Container fluid style={props.style} id="main">
        {props.children}
      </Container>
    )
}