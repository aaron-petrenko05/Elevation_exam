import '../css/mainpage.css';
import GridDonateContainer from '../component/griddonate';
import Footer from '../component/footer';
import aboutphoto from '../img/about-us.png';

function AboutUs() {
    return (
        <div className='main'>
            <section className='main-banner'>
                <img src={aboutphoto} className='main-about-img' />
            </section>
            <section className='main-sub-banner'>
                <h2 className='main-title main-sub-banner-title'>The 30-year history of Habitat for Humanity Philippines
is much like the story of the Filipino — it is a story of resilience.</h2>
                <p className='main-desc main-sub-banner-desc'>The 30-year history of Habitat for Humanity Philippines
is much like the story of the Filipino — it is a story of resilience.</p>
                <div className="main-sub-banner-container-button">
                    <a className="main-sub-banner-button" href="#">LEARN MORE</a>
                </div>
            </section>
            <GridDonateContainer></GridDonateContainer>
            <section className='main-our-partner'>
                <p className='main-desc main-our-partner-desc'>Every Filipino deserves to have a decent home. And every one of us can help make it happen.</p>
                <div className="main-our-partner-container-button">
                    <a className="main-our-partner-button" href="#">FIND OUT MORE</a>
                </div>
            </section>
            <Footer></Footer>
        </div>    
    );
}

export default AboutUs;

