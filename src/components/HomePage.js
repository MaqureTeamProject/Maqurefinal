import React from 'react';
import NavbarHome from './NavbarHome';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <>
                <div className="App">
                    <div className="Main-page" style={{backgroundImage: `url("https://i.postimg.cc/m210hhr7/494664.jpg")`}}>
                        <NavbarHome />

                        <div>
                        <div className="image2position">                  
                            <div id="imagetext">
                                <h2 className="investors-text"><b>Dear Investors!!!</b></h2>
                                <h4 className="investors-sub-text">Be fearful when others are greedy &</h4>
                                <h4 className="investors-sub-text">Be greedy when others are fearful!</h4>
                                <h4 className="glow">Connect your Wallet Now!!</h4>
                            </div>
                        </div>
                                <img className=" investor-image" src="https://i.postimg.cc/KYNXHKVX/investor-image-removebg-preview.png" alt="image2"/>
                    </div> 
                    <div>
                    <div class="row">
                    <div class="col-sm-3">
                      <div class="card" id="card1">
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-cart-shopping" id="cardicons"></i><b>Loan on Debt</b></h3>
                          <p class="card-text"><b>Loan on Debt refers to offering the debt in mutual agreement of returning the principal amount along with the interest rate, fixed by the investor.</b></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="card" id="card2">
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-bag-shopping" id="cardicons"></i><b>Loan on Equity</b></h3>
                          <p class="card-text"><b>Loan on Equity refers to offering a loan on a mutual agreement of returning a particular share of the company depending on the investment</b></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3" id="card3">
                      <div class="card" w-100>
                        <div class="card-body">
                          <h3 class="card-title"><i class="fa-solid fa-coins" id="cardicons"></i><b>Crowdfunding</b></h3>
                          <p class="card-text"><b>A common pool is generated for the company demanding loan where investors across India can invest owning a share of company's profit.</b></p>
                        </div>
                      </div>
                    </div>
                </div>   
                </div>        
                        <div className="page-foot" id="login">
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
                </div>
                                 
            </>
            
        )
    }
}
export default Home;