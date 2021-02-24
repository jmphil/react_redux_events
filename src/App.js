import {Carousel, Row, Col} from 'react-bootstrap'
import balloon from './balloon_festival.jpg'
import Container from 'react-bootstrap/Container'
import learn from './learn_python.jpg'
import imagine from './go_imagine.jpg'

function App(props) {
  return (
    <>
    {/* start of image carousel */}
    <Container className="container-fluid mw-100 mh-25 col-xl-1 text-4xl h-25">
      
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
            className="d-block w-100"
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
    {/* start of event search and map links/images */}
    <Container className="mh=75 text-2xl">
      <Row className="justify-content-center">
        <Col className="text-right">
          Search for events by category. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aut! Cupiditate, totam. Suscipit, error officia. Facilis reiciendis aspernatur fuga excepturi cupiditate rem quaerat voluptatibus, ea at iste nisi iusto optio?
          Fuga rerum quaerat incidunt non nulla officiis at, earum nemo, quos perferendis consectetur doloribus facilis deserunt? At illum odio corrupti nostrum pariatur illo iste, maxime quaerat expedita, repellendus ad non?
          Qui, non deserunt ipsam molestiae consequatur, autem, illum assumenda eius maxime amet quis nemo nulla quae iste in odit. Asperiores doloribus quia cum harum tempore sunt velit nam soluta tempora!
          Tempore vero, optio facilis accusantium, eum reiciendis omnis dolore rem nihil labore aut quam dicta quidem quaerat recusandae dolorem cumque? Pariatur, labore. Necessitatibus cumque quia doloribus fugiat nostrum iure quas.
          Temporibus minus veritatis quod fuga. Possimus quas saepe at, numquam distinctio magnam sunt excepturi voluptatem, quos quae nemo iste aperiam doloremque hic quibusdam repellendus blanditiis modi, in perspiciatis unde suscipit.
          Iusto error veritatis earum quae dignissimos inventore distinctio facilis id perspiciatis aperiam placeat accusantium vitae, aliquam nostrum quis voluptas fugit minus ex! Placeat exercitationem nostrum assumenda repellat ducimus, at molestias?
          Amet quibusdam voluptas asperiores, culpa vero tenetur cupiditate, dolor ut distinctio, incidunt repellendus labore totam exercitationem animi atque nisi facere voluptates aliquam. Quo, cumque iste enim quae officiis consequuntur adipisci.
          Suscipit ullam exercitationem quia nam? Odio placeat nostrum quaerat laudantium numquam magni sint inventore natus quasi iusto maxime, non accusantium explicabo sit? Nemo corrupti doloremque minus omnis rem, explicabo quaerat!
          Quasi alias ad temporibus llat, explicabo tempore quisquam nobis, id amet, totam a quos fugiat animi impedit sunt tenetur. Quo mini
        </Col>
        
        <Col>
          Search for events using your location.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa alias ullam pariatur cum. Iste odio, nulla fuga esse nobis aperiam ipsa optio nihil, saepe, sit placeat eum ut molestias.
          Autem maxime saepe neque eius. Quos, corrupti ad magnam aspernatur autem reiciendis vitae quis saepe reprehenderit! Culpa aut tempora vel quibusdam itaque modi quisquam ex delectus impedit ullam. Quisquam, modi!
          Nisi iste quibusdam veritatis eum beatae numquam aut, delectus accusantium esse quasi assumenda placeat error eaque in illum unde aliquid, molestias nesciunt provident neque accusamus quo minima eligendi id? Sit.
          Quos provident voluptatum, veniam odio perspiciatis, culpa consequuntur facilis harum similique cum vel ullam deleniti temporibus modi ratione ipsam. Ipsa ut officiis deleniti illo nulla iusto repellendus nostrum blanditiis quam?
          Vitae accusantium quisquam ipsa iure adipisci laudantium quasi blanditiis sapiente incidunt! Dicta sed nesciunt suscipit in quam, facere molestias ipsam quisquam harum, iusto veritatis animi sunt laborum? Accusamus, ipsa illum?
          A neque atque maiores minima accusantium? Fugit quidem totam nam dolore sint dolor debitis doloribus, enim numquam deserunt animi sequi, quia provident. Cupiditate, laudantium placeat? Quae, fugit? Exercitationem, quibusdam doloremque.
          Perspiciatis incidunt obcaecati quibusdam necessitatibus nobis ut unde officia consequuntur nostrum? Natus voluptates ut ducimus dolorem, libero, eius quibusdam harum enim porro aliquam voluptas non inventore quos eum labore fugiat.
          Aspernatur voluptati voluptate venptio incidunt? Eum excepturi, autem adipisci explicabo libero architecto eaque? Id at quae recusandae quisquam ipsam necessitatibus quo doloribus.
        </Col>
      </Row>
    </Container>
    {/* end of event search and map links/images */}
    {/* end of page */}
    </>
  );
}

export default App;
