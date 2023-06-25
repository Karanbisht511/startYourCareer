import { Link } from "react-router-dom";
import Search from "./Search/Search";

function FirstFrame() {

    return <>
        <div id='first-frame' className="grid-item">
            <div className="nav-menu flexbox-container">
                <div className="nav-inner flexbox-container">
                    <div className="nav-item"><Link to="/">StartyourCareer.in</Link></div>
                    <div className="nav-item"><Link to="/">Home</Link></div>
                    <div className="nav-item"><Link to='/compare'>Compare</Link></div>
                    <div className="nav-item"><Link to="/college">College</Link></div>
                    <div className="nav-item"><Link to="/courses">Courses</Link></div>
                    <div className="nav-item"><Link to="/library">Library</Link></div>
                </div>
                <div className="user-cred flexbox-container">
                    <div className="nav-item"><Link to="/signup">Login</Link></div>
                    <div className="nav-item"><button><Link to="/signup">Signup</Link></button></div>
                </div>
            </div>
            <div>
                <Search />
            </div>
        </div>
    </>;
}

export default FirstFrame;