import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './navMenu/NavMenu';

//TODO: Need to convert this to a functional component.
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
