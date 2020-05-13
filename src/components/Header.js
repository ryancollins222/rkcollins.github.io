import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components
import NavComponent from './Nav';

class Header extends Component {

  state = {
    isVisible: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }))
  }

  render() {
    return (
      <>
        <NavComponent />
        <Row className="header-padding">
          <Col>
            <div className="title-underline"></div>
            <h6 className="my-4">Web Developer/Musician</h6>
          </Col>
        </Row>
      </>
    );
  }
}

export default Header;