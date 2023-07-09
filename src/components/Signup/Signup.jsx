import "./signup.css";
import girlImg from '../../images/young_woman.png'

function Signup() {
    return <>
        <div className="container">
            <div id="left" className="components">
                {/* <div className="content"> */}
                <div className="brand-txt">
                    <div className="fontDetailWelcome signup-secondary">Welcome to</div>
                    <div className="fontTitle signup-primary">startyourcareer.in</div>
                </div>
                <div className="image-wrapper">
                    <img className="girl" src={girlImg} alt="" />
                </div>
                {/* </div> */}
            </div>

            <div id="right" className="components">
                <div className="content">
                    <div className="fontTitle signup-secondary" >Sign Up</div>
                    <div className="signup-thirdParty">
                        <button className="icon-wrapper"> <googleIcon></googleIcon> Sign up with Google</button>
                        <button className="icon-wrapper"> <fbIco></fbIco> Sign up with Facebook</button>
                    </div>
                    {/* <form className="signup-form" action=""> */}
                        
                        <div className="input-email">
                            <label htmlFor="" className="fontLabel">Email</label>
                            <br />
                            <input type="text" id="" className="inputCredential fontInput" placeholder="Enter Email" />
                        </div>
                        
                        <div className="input-password">
                            <label htmlFor="" className="fontLabel">Create Password</label>
                            <br />
                            <input type="text" id="" className="inputCredential fontInput" placeholder="8+ characters" />
                        </div>
                        
                        <div className="terms-conditions">
                            <p className="fontTerms"><input type="checkbox" name="" id="" />Creating an account means you’re okay with our <a href="">Terms of Service, Privacy Policy</a> .</p>
                        </div>

                        <div className="btn-signup-wrapper"> <button id="btn-signup">Sign Up</button> </div>

                        <div className="haveAccount">Already have an account? <a href="">Log in</a> </div>
                    
                    {/* </form> */}
                </div>
            </div>
        </div>
    </>
}

export default Signup
