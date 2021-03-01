import {Carousel, Row, Col} from 'react-bootstrap'
import balloon from './balloon_festival.jpg'
import Container from 'react-bootstrap/Container'
import learn from './learn_python.jpg'
import imagine from './go_imagine.jpg'
import './App.css';


function App(props) {
  return (
    <>
    {/* start of image carousel */}
    <Container className="container2 text-4xl mt-50">
      
      <Carousel className="">
        <Carousel.Item>
          <img
            className="d-block w-full object-cover h-60"
            src={balloon}
            alt="Go Explore!"
          />
          <Carousel.Caption>
            <h3>Go Explore!</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-full object-cover h-60  "
            src={learn}
            alt="Go Learn!"
          />

          <Carousel.Caption>
            <h3>Go Learn!</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-full object-cover h-60 "
            src={imagine}
            alt="Go Imagine!"
          />

          <Carousel.Caption>
            <h3>Go Imagine!</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    {/* end of image container */}
    <br/>
    {/* start of event search and map links/images */}
    <Container className="mh-75 text-2xl">
      <Row className="justify-content-center">
        <Col className="text-right">
          <img src="" alt=""/>
          Search for Events
        </Col>
        
        <Col>
          <img src="" alt=""/>
          And find events on the map
        </Col>
      </Row>
    </Container>
    {/* end of event search and map links/images */}
    {/* end of page */}
    </>
  );
}

export default App;
