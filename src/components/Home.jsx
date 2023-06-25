// import './Home.css'
import "./grid.css"
import FirstFrame from './FirstFrame';
import TopColleges from './TopColleges';
import OurServices from './OurServices';
import Alumni from './Alumni';
import AboutUs from './AboutUs';
import Footer from './Footer';


function Home() {
    return <>
        <div id="home" className="grid-container">
            <FirstFrame />
            <TopColleges />
            <OurServices />
            <Alumni />
            <AboutUs />
           <Footer />
        </div>
    </>
}

export default Home;
