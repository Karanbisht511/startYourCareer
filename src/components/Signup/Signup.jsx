import "./signup.css";

function Signup() {
    return <>
        <div className="container">
            <div className="components left">
                <div className="content">
                    <div className="brand-txt">
                        <div className="fontDetailWelcome" >Welcome to
                        </div>
                        <div className="fontTitle">
                            startyourcareer.in
                        </div>
                    </div>

                    <img className="girl" src={require("../../images/young_woman.png")} alt="Image" />
                </div>
            </div>

            <div className="components right">
                <div className="content">
                    <div className="fontTitle" >Sign Up</div>
                    <div><button className="icon-wrapper"> <googleIcon></googleIcon> Sign up with Google</button>
                        <button className="icon-wrapper"> <fbIco></fbIco> Sign up with Facebook</button></div>
                    <form action="">
                        <div>
                            <label htmlFor="" className="fontLabel">Email</label>
                            <br />
                            <input type="text" id="" className="inputCredential fontInput" placeholder="Enter Email" />
                        </div>
                        <div>
                            <label htmlFor="" className="fontLabel">Create Password</label>
                            <br />
                            <input type="text" id="" className="inputCredential fontInput" placeholder="8+ characters" />
                        </div>
                        <div>

                            <p className="fontTerms"><input type="checkbox" name="" id="" />Creating an account means you’re okay with our <a href="">Terms of Service, Privacy Policy</a> .</p>
                            <button id="btn-signup">Signup</button>
                        </div>
                        <div className="fontTerms">Already have an account? <a href="">Log in</a> </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Signup
