import '../css/mainpage.css';
import GridContainer from '../component/grid';
import OurPartnersIcons from '../component/ourpartner';
import Footer from '../component/footer';
import mainimg from '../img/main-screen.png';

function Main() {
    return (
        <div className='main'>
            <section className='main-banner'>
                <img src={mainimg} alt='Main-Page' />
            </section>
            <section className='main-sub-banner'>
                <h2 className='main-title main-sub-banner-title'>Help us give more Filipino families a decent home, bigger opportunities, and a better chance at life.</h2>
                <p className='main-desc main-sub-banner-desc'>Habitat for Humanity Philippines, by building strength, stability, and self-reliance through shelter, aims to strengthen its vision of a world where everyone has a decent place to live. With over 140,000 families being served by our ministry, you can help us continue our mission of putting God’s love into action by bringing people together to build homes, communities, and hope.</p>
                <div className="main-sub-banner-container-button">
                    <a className="main-sub-banner-button" href="#">LEARN MORE</a>
                </div>
            </section>
            <GridContainer></GridContainer>
            <section className='main-our-partner'>
                <h2 className='main-title main-our-partner-title'>Our Partners</h2>
                <p className='main-desc main-our-partner-desc'>Various individuals and groups have helped pave the way to strengthen communities, build safer and decent homes, and transform the lives of families living in them.</p>
                <div className='main-our-partner-icons'>
                    <OurPartnersIcons />
                </div>
                <div className="main-our-partner-container-button">
                    <a className="main-our-partner-button" href="#">VIEW MORE</a>
                </div>
            </section>
            <Footer></Footer>
        </div>    
    );
}

export default Main;

