import React from 'react'

export default function Footer() {
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://bmelectrician.com/yoma/wp-json/contact-form-7/v1/contact-forms/13645/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/thank-you-lp"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.fmail.value)

    }
  return (
    <>
    <footer className="main-footer footer-two bgs-cover text-white footerbg">
            <div className="container">
               
                <div className="footer-widget-area pt-85 pb-20">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="footer-logo mb-35">
                                    <a href="/"><img src="/assets/img/logo/yoma-logo.png" alt="Logo"/></a>
                                </div>
                                <div className="text">
                                YOMA was founded in 2012 and is part of the BYLD Group, backed by three decades of experience where Technology drives our business, and we have a team to make it work. <a href="/about-us">Read more</a>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget link-widget ml-20 rml-0">
                                <h4 className="footer-title">OUR SOLUTIONS</h4>
                                <ul className="list-style-three">                                    
                                    <li><a href="/services/custom-software-development">Custom Software Development</a></li>
                                    <li><a href="/services/mobile-app-development">Mobile App Development</a></li>
                                    <li><a href="/services/it-staffing">IT Staffing</a></li>
                                    <li><a href="/services/saas-solutions">SaaS Solutions</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget contact-widget mr-30 rmr-0">
                                <h4 className="footer-title">CONTACT US</h4>                                
                                <ul className="list-style-two">
                                    <li><i className="fas fa-map-marker-alt"></i>BYLD Group: 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</li>
                                    <li><i className="fas fa-envelope"></i> <a href="mailto:yoma.info@byldgroup.com">yoma.info@byldgroup.com</a></li>
                                    <li><i className="fas fa-globe"></i><a href="/">www.yomatechnologies.in</a></li>
                                    <li><i className="fas fa-phone-alt"></i> <a href="tel:1800-102-1345">Toll Free No.: 1800-102-1345</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h4 className="footer-title">NEWSLETTER</h4>
                                <p>Subscribe to our monthly newsletter to receive important updates, suitable for your company and people.</p>
                                <form id="footerformreset" method="post" onSubmit={registerUser}>
                                    <input type="email" name="fmail" placeholder="Email Address" required/>
                                    <button type="submit" value="submit"><i className="fas fa-arrow-right"></i></button>
                                    <label id="submitbuttonform"></label>
                                </form>
                                <p id="showlabel" style={{ display: "none" }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-inner pt-15">
                        <div className="social-style-one mb-10">
                            <a target="_blank" href="https://www.facebook.com/YOMABusinessSolutions"><i className="fab fa-facebook-f"></i></a>
                            <a target="_blank" href="https://twitter.com/YomaSolutions"><i className="fab fa-twitter"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/company/yoma-multinational-solutions/"><i className="fab fa-linkedin-in"></i></a>
                            <a target="_blank" href="https://www.youtube.com/user/yomamultinational"><i className="fab fa-youtube"></i></a>
                        </div>
                        <p>Copyright 2022 YOMA Technologies All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
