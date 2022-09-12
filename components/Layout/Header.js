import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
<header className="main-header header-six">
            <div className="header-top-wrap bg-blue py-10">
                <div className="container">
                    <div className="header-top text-white ">
                        <div className="top-left">
                            <ul>
                                <li><i className="fas fa-phone-alt"></i> <a href="tel:18001021345"> 1800 102 1345</a></li>
                                <li><i className="fas fa-envelope"></i> <a href="mailto:yoma.info@byldgroup.com">yoma.info@byldgroup.com</a></li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <div className="office-time">
                                <i className="far fa-clock"></i><span>09:30 am - 06:30 pm</span>
                            </div>
                            <div className="social-style-one">
                                <a target="_blank" href="https://www.facebook.com/YOMABusinessSolutions"><i className="fab fa-facebook-f"></i></a>
                                <a target="_blank" href="https://twitter.com/YomaSolutions"><i className="fab fa-twitter"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/company/yoma-multinational-solutions/"><i className="fab fa-linkedin-in"></i></a>
                                <a target="_blank" href="https://www.youtube.com/user/yomamultinational"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
            <div className="header-upper">
                <div className="container clearfix">
                    <div className="header-inner d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo">
                                <a href="/"><img src="/assets/img/logo/yoma-logo.png" alt="Logo" title="Logo"/></a>
                            </div>
                        </div>

                        <div className="nav-outer clearfix d-flex align-items-center">
                           
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo py-15">                                   
                                       <a href='/'><img src="/assets/img/logo/yoma-logo.png" alt="Logo" title="Logo"/></a>                                    
                                    </div>

                                    
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix">
                                <ul className="navigation clearfix">
                                        <li className="">
                                            <a href="/">HOME</a>                                            
                                        </li>
                                        <li className="dropdown">
                                            <a href="/about-us">ABOUT US</a>                                            
                                        </li>
                                        <li className="dropdown"><a href="#">SOLUTIONS</a>
                                            <ul>
                                                <li className='d-none'><a href="/services/cloud-and-devops">Cloud and Devops</a></li>
                                                <li><a href="/services/custom-software-development">Custom Software Development</a></li>
                                                <li><a href="/services/mobile-app-development">Mobile App Development</a></li>
                                                <li className='d-none'><a href="/services/testing-and-qa">Testing and QA</a></li>
                                                <li className='d-none'><a href="/services/dedicated-development-team">Dedicated Development Team</a></li>
                                                <li  className='d-none'><a href="/services/delivering-the-right-solution">Delivering The Rright Solution</a></li>
                                                <li><a href="#">IT Staff Augmentation</a></li>                                                
                                                <li><a href="/services/software-product-development-services">Software Product Development Services</a></li>
                                                <li className='d-none'><a href="/services/testing-and-qa">Testing and QA</a></li>
                                                <li className='d-none'><a href="/services/web-development">Web Development</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/why-yoma-tech">WHY YOMA TECH</a></li>                                  
                                        <li  className='d-none'><a href="/why-india">WHY INDIA</a></li>
                                        <li><a href="/blogs">BLOG</a></li>
                                        <li><a href="/contact-us">CONTACT US</a></li>
                                    </ul>
                                </div>

                            </nav>                        
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    </>
  )
}
