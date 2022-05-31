import './App.css';
import { Button, Nav, Row, Col, Container } from 'react-bootstrap';
import mainbg from './bg.jpg';

function App() {
  return (
    <div className="App">
      <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>
      <div className="main-bg" style={{backgroundImage : 'url(' + mainbg + ')'}}></div>

      <Container>
      <Row>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>  
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>  
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>  
        </Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
