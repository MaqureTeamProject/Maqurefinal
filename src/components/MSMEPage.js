import { Link } from "react-router-dom";


const MSME = () => {
          
    return(
        <>
        <html className="msme-main-page" style={{backgroundImage : `url("https://i.postimg.cc/LscmGmck/494664.jpg")`}}>
        <Link className="navbar-brand" to ="/">
      <img src="https://i.postimg.cc/vBJyHM1F/Maqurelogo.png" alt="" width="180" height="70"></img>
    </Link>
        <Link to="/MSME/ConnectWallet">
            <button class="btn-address-msme"><b>Connect Wallet</b></button>
        </Link>
            <div>
                <h1 className="msme-text">Welcome to the</h1>
                <h2 className="msme-subtext"><b>MSME club</b></h2>
            </div>
            <img className="msme-image" src="https://i.postimg.cc/V64xpjB8/MSME-3.jpg"></img>
            <div class="d-grid col-4">
                <Link to="/SignUp">
                    <button class="btn btn-primary-2" type="button"><b>Register</b></button>
                </Link>
                <Link to="/MSME/Profile">
                    <button class="btn btn-primary-2" type="button"><b>View Profile</b></button>
                </Link>
                <Link to="/MSME/Loan">
                <button class="btn btn-primary-2" type="button"><b>Apply for Loan</b></button>
                </Link>
                <Link to="/MSME/TransactionHistory">
                <button class="btn btn-primary-2" type="button"><b>Loan & Transaction History</b></button>
                </Link>
            </div>
            <div className="footer-2">
        <div className="page-foot-2" id="login">
                            <div className="contact-info">
                                <h1>CONTACT-INFO</h1> 
                                <h3>
                                    <ul>
                                        <li>+91 9840120486</li>
                                        <li>+91 8114790959</li>
                                        <li>+91 9327686198</li>
                                        <li>+91 8277609858</li>
                                    </ul>
                                </h3>  
                                <div>
                                    <p>
                                        <a href="https://www.whatsapp.com/" className="contact-icons">
                                            <i class="fa-brands fa-whatsapp" id="contact-icons"></i>
                                        </a>
                                        <a href="https://www.instagram.com/cfi_iitm_/" className="contact-icons">
                                            <i class="fa-brands fa-instagram" id="contact-icons"></i>
                                        </a>
                                        <a href="https://twitter.com/" className="contact-icons">
                                            <i class="fa-brands fa-twitter" id="contact-icons"></i>
                                        </a>
                                    </p>    
                                </div>                     
                            </div>
                        </div>
                        </div>
        </html>
        </>
    )
}
export default MSME;