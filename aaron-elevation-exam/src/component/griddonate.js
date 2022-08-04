import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import zobel from '../img/zobel.png';
import donie from '../img/donie.png';
import slater from '../img/slater.png';
import gaisano from '../img/gaisano.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';

function GridDonateContainer() {
    return(
        <Container className="main-grid-donate" fluid>
            <Row className="row1 flex-md-row">
                <Col xs={12} lg={6} className="p-0">
                    <img src={zobel} alt='Fernando Zobel de Ayala' />
                </Col>
                <Col>
                    <div className="main-grid-wrapper">
                        <h2 className="main-title">I am Fernando Zobel de Ayala, a Habitat for Humanity Volunteer Leader.</h2>
        
                        <div className="main-grid-container-button">
                            <a className="main-grid-button" href="#">DONATE NOW  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    
                </Col>
            </Row>
            <Row className="row2 flex-column-reverse flex-md-row">
                <Col xs={12} lg={6} className="p-0">
                    <div className="main-grid-wrapper">
                        <h2 className="main-title">I am Donnie Tantoco, retailer, husband, and a lifelong student.</h2>
                        <p className="main-desc main-grid-desc">I have started business at a young age because of my grandfather.
                        When one of our sister companies encountered a major problem, my grandfather asked us to help. So I, together with our team, did our best and even made sacrifices to address this.</p>
                        <p className="main-desc main-grid-desc">Resilience comes from the relationships you form with other people. You build trust, respect, and genuine care for each other.</p>
                        <p className="main-desc main-grid-desc">Help me continue to share the success with those who make the success possible.</p>
                        <p className="main-desc main-grid-desc">Together, we can make a difference! Join me and this cause by <b>donating to my Habitat Fundraising page</b> or email <b>info@habitat.org.ph</b> if you want to make an offline donation.</p>
                        <p className="main-desc main-grid-desc">Your donation will support families in their desire to own dream homes and provide a sustainable livelihood for families in Habitat communities.</p>
                        <div className="main-grid-container-button">
                            <a className="main-grid-button" href="#">DONATE NOW  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    
                </Col>
                <Col>
                    <img src={donie} />
                </Col>
            </Row>
            <Row className="row3 flex-md-row">
                <Col xs={12} lg={6} className="p-0">
                    <img src={slater} />
                </Col>
                <Col>
                    <div className="main-grid-wrapper">
                        <h2 className="main-title">I am Slater Young and I am a Green Builder. I am Kryz Uy and I am an advocate for positive change.</h2>
                        <p className="main-desc main-grid-desc">We use our online presence to influence the youth to support our personal advocacies.</p>
                        <p className="main-desc main-grid-desc">It’s important that we have a purpose behind everything we do – that makes it more meaningful. It makes it a lot easier to succeed when you know that people are behind you and ready to support you.</p>
                        <p className="main-desc main-grid-desc">Forming strong support systems can make Filipinos more resilient and, in turn, offer their help other people in need. We continue to lean on our family, friends, and loved ones.</p>
                        <p className="main-desc main-grid-desc">Together we can make a difference! Help us get our message across by donating to our Habitat fundraising page or email info@habitat.org.ph if you want to make an offline donation.</p>
                        <p className="main-desc main-grid-desc">Your donation will support families in their desire to own dream homes and provide a sustainable livelihood for families in Habitat communities.</p>
                        <p className="main-desc main-grid-desc">Read more about Slater Young’s sustainable Liteblock here.</p>
                        <p className="main-desc main-grid-desc">Follow Slater Young and Kryz Uy online.</p>
                        <div className="main-grid-container-button">
                            <a className="main-grid-button" href="#">DONATE NOW  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    
                </Col>
            </Row>
            <Row className="row2 flex-column-reverse flex-md-row">
                <Col xs={12} lg={6} className="p-0">
                    <div className="main-grid-wrapper">
                        <h2 className="main-title">I am Edward Gaisano, businessman, a doctor at heart.</h2>
                        <p className="main-desc main-grid-desc">I left my profession as a doctor to fulfill my duties in our family business.</p>
                        <p className="main-desc main-grid-desc">My father was a working man all his life. Seeing him treat our staff as part of the family made me realize how communities play an important role in how we make ourselves.</p>
                        <p className="main-desc main-grid-desc">All our successes boil down to everyone’s generosity and compassion.</p>
                        <p className="main-desc main-grid-desc">Together we can make a difference! Join me in helping Filipino communities by donating to my Habitat Fundraising page or email info@habitat.org.ph if you want to make an offline donation.</p>
                        <p className="main-desc main-grid-desc">Your donation will support families in their desire to own dream homes and provide a sustainable livelihood for families in Habitat communities.</p>
                        <div className="main-grid-container-button">
                            <a className="main-grid-button" href="#">DONATE NOW  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    
                </Col>
                <Col>
                    <img src={gaisano} />
                </Col>
            </Row>
            
        </Container>
    );
}

export default GridDonateContainer;