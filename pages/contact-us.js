import Link from "next/link"
import Head from "next/head"

const ContactUs = () => {
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://bmelectrician.com/yoma/wp-json/contact-form-7/v1/contact-forms/634/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/thank-you-lp"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("Name=" + event.target.name.value +
            "&email-243=" + event.target.email.value +
            "&tel=" + event.target.phone_number.value +
            "&location=" + event.target.locations.value +
            "&CompanyName=" + event.target.leadsquared_Company.value +
            "&designation=" + event.target.designation.value +
            "&Message=" + event.target.Message.value)

    }
    return (
        <>

       <Head>
         <title>CONTACT US - YOMA Technologies</title>
         <meta name="description" content="1800 102 1345 yoma.info@byldgroup.com Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers … Continue reading CONTACT US"/>
      </Head>

      

      <section className="contact-page py-50">
                <div className="container">
                        <div className="section-title text-center pb-20">                            
                            <h2 className="mainh1"><span>Contact</span> Us</h2>
                        </div>
                    <div className="contact-info-area mb-80">

                        <div className="contact-info-item wow fadeInUp delay-0-2s padding-c">
                            <i className="far fa-map"></i>
                            
                            <p>BYLD Group: 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</p>
                          
                        </div>

                        <div className="contact-info-item wow fadeInUp delay-0-2s">
                            <i className="far fa-envelope"></i>
                           
                            <p><a href="mailto:yoma.info@byldgroup.com">yoma.info@byldgroup.com</a></p>
                            
                        </div>

                        <div className="contact-info-item wow fadeInUp delay-0-2s">
                            <i className="fas fa-phone-alt"></i>
                            
                            <p><a href="tel:+918448188503">1800-102-1345</a></p>
                        </div>
                        

                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-form-left bgs-cover h-100 wow fadeInLeft delay-0-2s contactbg">
                                <h2>Leave A Message</h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form ml-40 rml-0 rmt-55 wow fadeInRight delay-0-2s">
                                <h3 className="comment-title mb-35">Get in touch with Us.</h3>                                
                                <form id="contactForm" onSubmit={registerUser}>
                                    <div className="row clearfix justify-content-center">
                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email*" required />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="phone_number" id="phone_number" required="" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <select name="locations" className="form-control" required>
                                            <option value="">Select States*</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                            <option value="Daman and Diu">Daman and Diu</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Puducherry">Puducherry</option>
                                            <option value="Others">Others</option>
                                        </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="designation" id="designation" className="form-control" placeholder="Designation" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Company Name*" required />
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group">                                                
                                            <textarea name="Message" className="form-control" id="Message" cols="30" rows="3" placeholder="Your Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                        <div className="form-group mb-0">
                                            <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Send Message"/>
                                        </div>
                                        <div className="clearfix"></div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
        
        </>
    )
}

export default ContactUs