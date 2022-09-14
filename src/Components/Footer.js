import React from 'react'
import './Footer.css'
import * as Icon from 'react-bootstrap-icons';
import * as LogoImage from '../Resources/WorldEconomyIndex.png'


function Footer() {


    return(
        <div>
            <footer class="mainfooter" role="contentinfo">
                <div class="footer-middle">
                <div class="container">
                    <div class="row">
                    <div class="col-md-3 col-sm-6">

                        <div class="footer-pad">
                            <h4>World Economy Index, Inc.</h4>
                            <img id='logo' alt='logo' src={LogoImage.default} />                        
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">

                        <div class="footer-pad">
                        <h4>Deep In</h4>
                        <ul class="list-unstyled">
                            <li><a href="/#">Forum</a></li>
                            <li><a href="/#">Researches</a></li>
                            <li><a href="/#">Academy</a></li>
                            <li><a href="/#">Investments</a></li>
                            <li><a href="/#">Sign Up</a></li>
                            <li><a href="/#">Login</a></li>
                            <li><a href="/#">Privacy</a></li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">

                        <div class="footer-pad">
                        <h4>Latest</h4>
                        <ul class="list-unstyled">
                            <li><a href="/#">Economics</a></li>
                            <li><a href="/#">Industry</a></li>
                            <li><a href="/#">Market</a></li>
                            <li><a href="/#">Politics</a></li>
                            <li><a href="/#">Technology</a></li>
                            <li><a href="/#">Currency</a></li>
                            <li><a href="/#">Country</a></li>
                        </ul>
                        </div>
                    </div>
                        <div class="col-md-3">
                            <h4>Follow Us</h4>
                            <ul class="social-network social-circle">
                            <li><a href="/#" ><Icon.Facebook color='white' size={32}/></a></li>
                            <li><a href="/#" ><Icon.Twitter color='white' size={32}/></a></li>
                            <li><a href="/#" ><Icon.Youtube color='white' size={32}/></a></li>
                            <li><a href="/#" ><Icon.Whatsapp color='white' size={32}/></a></li>
                            <li><a href="/#" ><Icon.Instagram color='white' size={32}/></a></li>
                            </ul>
                            
                            <div id='space'></div>

                            <h4>Download The App</h4>
                            <ul class="social-network social-circle">
                            <li><a href="/#" ><Icon.Google color='white' size={32}/></a></li>
                            <li><a href="/#" ><Icon.Apple color='white' size={32}/></a></li>
                            </ul>				
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 copy">
                            <p class="text-center">&copy; Copyright 2018 - World Economy Index.  All rights reserved.</p>
                        </div>
                    </div>


                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer