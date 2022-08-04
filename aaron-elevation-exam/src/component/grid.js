import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';

function GridContainer() {
    return(
        <Container className="main-grid" fluid>
            <Row className="row1 flex-md-row">
                <Col xs={12} lg={6} className="p-0">
                    <img src={image3} />
                </Col>
                <Col xs={12} lg={6} className="p-0">
                    <div className="main-grid-wrapper">
                        <h2 className="main-title">Build With Us</h2>
                        <p className="main-desc main-grid-desc">DONATE NOW to support the housing ministry and its projects</p>
                        <p className="main-desc main-grid-desc">VOLUNTEER to help build strength, stability, sustainability, and self-reliance through shelter</p>
                        <p className="main-desc main-grid-desc">PARTNER with us in uplifting the lives of families through housing and community development</p>
                        <div className="main-grid-container-button">
                            <a className="main-grid-button" href="#">START BUILDING  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    
                </Col>
            </Row>
            <Row className="row2 flex-column-reverse flex-md-row">
                <Col xs={12} lg={6} className="p-0">
                    <div className="main-grid-wrapper">
                        <h2 className="main-title">Unexpected Blessings</h2>
                        <p className="main-desc main-grid-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="main-grid-container-button">
                            <a className="main-grid-button" href="#">READ MORE  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    
                </Col>
                <Col xs={12} lg={6}className="p-0">
                    <img src={image2} />
                </Col>
            </Row>
            <Row className="row3 flex-md-row">
                <Col xs={12} lg={6} className="p-0">
                    <img src={image1} />
                </Col>
                <Col xs={12} lg={6} className="p-0">
                    <div className="main-grid-wrapper">
                        <h2 className="main-title">Story: Motivated By a Dream</h2>
                        <p className="main-desc main-grid-desc">Shirley and Felisa have a dream: they want a new house and a better life for their families. The Habitat Hypar house is a symbol of that dream. And they are hoping, even working – towards it becoming a reality.</p>
                        <div className="main-grid-container-button">
                            <a className="main-grid-button" href="#">READ MORE  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    
                </Col>
            </Row>
            
        </Container>
    );
}

export default GridContainer;