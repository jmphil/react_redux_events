import {Carousel, Row, Col} from 'react-bootstrap'
import balloon from './balloon_festival.jpg'
import Container from 'react-bootstrap/Container'
import learn from './learn_python.jpg'
import imagine from './go_imagine.jpg'

function App(props) {
  return (
    <>
    
  
    <Container className="container-fixed col-xl-1 text-4xl h-25">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={balloon}
            alt="Go Explore!"
          />
          <Carousel.Caption>
            <h3>Go Explore!</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 text-4xl"
            src={learn}
            alt="Go Learn!"
          />

          <Carousel.Caption>
            <h3>Go Learn!</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
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
    {/* start of event search and map links */}
    <Container>
      <Row className="justify-content-center">
        <Col className="text-right">
          Search for events by category
        </Col>
        
        <Col>
          Search for events using your location 
        </Col>
      </Row>
    </Container>
    {/* end of page */}
    </>
  );
}

export default App;
