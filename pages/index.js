import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";
import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

export default function Home() {
   useCountUp({ ref: 'counter', end: 10, duration: 2 });
   const [loading, setLoading] = React.useState(false);
 
   const onStart = () => {
     setLoading(true);
   };
 
   const onEnd = () => {
     setLoading(false);
   };
 
   const containerProps = {
     'aria-busy': loading,
   };

   const registerUser = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          console.log(this.responseText);
      }
      xhttp.open("Post", 'https://bmelectrician.com/yoma/wp-json/contact-form-7/v1/contact-forms/1641/feedback');
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
      xhttp.send("leadsquared-FirstName=" + event.target.name.value +
          "&leadsquared-EmailAddress=" + event.target.email.value +
          "&leadsquared-Mobile=" + event.target.number.value +
          "&leadsquared-Notes=" + event.target.message.value +
          "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

  }

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
      };

      var settings1 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
      };

      var settings2= {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
      };

  return (
    <>
      <Head>
         <title>YOMA Technologies Pvt. Ltd.</title>
         <meta name="description" content="Looking for a manpower company or best recruitment companies in India? YOMA is your one-stop-destination for all HR needs."/>
      </Head>
      
      
 <section className="hero-section paddingb">
 <Slider {...settings}>
      <div>
      <img src="/assets/img/banner/yoma-it.jpg"/>
      </div>
      <div>
      <img src="/assets/img/banner/yoma-software.jpg"/>
      </div>
     
    </Slider>
</section>

<section className="featured-section bgs-cover pt-40 pb-50 homeservicebg programbox">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="section-title text-center mb-35">
               <h2 className="mainh1"><span>OUR</span> SOLUTIONS</h2>
            </div>
         </div>
      </div>
      <div className="row align-items-center icon70">
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-2s">
               <div className="icon">
                  <img src="/assets/img/icon/general-staffing.png"/>                                
               </div>
               <div className="feature-content">
                  <h5>Custom Software development</h5>
                  <p>Develop a custom software application following the changing needs of business and cutting-edge technologies...</p>
                  <a href="/services/custom-software-development" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6 d-none">
            <div className="feature-item wow fadeInUp delay-0-4s">
               <div className="icon">
                  <img src="/assets/img/icon/industrial-staffing.png"/>
               </div>
               <div className="feature-content">
                  <h5>Web Development</h5>
                  <p>Expand your business by creating custom web applications tailored to your specific needs. Utilize our software developers' expertise...</p>
                  <a href="/services/web-development" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-6s">
               <div className="icon">
                  <img src="/assets/img/icon/staff-augmentation.png"/>
               </div>
               <div className="feature-content">
                  <h5>Mobile App Development</h5>
                  <p>Mobility in app development has proven to be a compelling reason for businesses to hire a software development firm...</p>
                  <a href="/services/mobile-app-development" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6 d-none">
            <div className="feature-item wow fadeInUp delay-0-8s">
               <div className="icon">
                  <img src="/assets/img/icon/manage-services.png"/>
               </div>
               <div className="feature-content">
                  <h5>Dedicated Development Team</h5>
                  <p>We provide businesses with contractual engagement methods that allow them to flex software outsourcing as needed, ensuring higher...</p>
                  <a href="/services/dedicated-development-team" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6 d-none">
            <div className="feature-item wow fadeInUp delay-1-0s">
               <div className="icon">
                  <img src="/assets/img/icon/shared-resource-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>Software Product Development</h5>
                  <p>Benefit from our expanded capacities of start to finish item designing administrations...</p>
                  <a href="/services/software-product-development-services" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6 d-none">
            <div className="feature-item wow fadeInUp delay-1-2s">
               <div className="icon">
                  <img src="/assets/img/icon/apprenticeship-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>Testing & QA</h5>
                  <p>Maintain Quality Assurance by correcting faults and debugging apps to ensure high performance...</p>
                  <a href="/services/testing-and-qa" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>

         <div className="col-xl-4 col-md-6 d-none">
            <div className="feature-item wow fadeInUp delay-1-2s">
               <div className="icon">
                  <img src="/assets/img/icon/apprenticeship-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>Cloud and DevOps</h5>
                  <p>Apply automation to a conventional business system to seamlessly manage operations and development processes...</p>
                  <a href="/services/cloud-and-devops" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>

         <div className="col-xl-4 col-md-6 d-none">
            <div className="feature-item wow fadeInUp delay-1-2s">
               <div className="icon">
                  <img src="/assets/img/icon/apprenticeship-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>Delivering the right solution</h5>
                  <p>We have expertise in understanding the most critical challenges and then provide the best suited as per custom needs, be it...</p>
                  <a href="/services/delivering-the-right-solution" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>

         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-1-2s">
               <div className="icon">
                  <img src="/assets/img/icon/apprenticeship-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>IT Staff Augmentation</h5>
                  <p>Staff augmentation is an outsourcing strategy that YOMA provides to our corporate clients that enables them to hire talent across profiles and verticals...</p>
                  <a href="/services/it-staff-augmentation" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
  
      </div>
   </div>
</section>
<section className="about-two pt-40 rpt-80 pb-120 rpb-100">
   <div className="container">
      <div className="about-wrap pt-20">
         <div className="row">
            <div className="col-lg-6">
               <div className="about-two-image rmb-70 wow fadeInLeft delay-0-2s animated animateleft">
                  <img src="/assets/images/about/about-two.jpg" alt="About"/>
               </div>
            </div>
            <div className="col-lg-6 align-self-end">
               <div className="about-content pt-75 rpt-20 pr-70 rpr-0 wow fadeInRight delay-0-2s animated animateright">
                  <div className="section-title mb-35">
                     <h2 className="mainh1"><span>About</span> Us</h2>
                  </div>
                  <p className='text-justify'>
                  YOMA was founded in 2012 and is part of the BYLD Group, backed by three decades of experience where Technology drives our business, and we have a team to make it work.
                  </p>
                  <p className='text-justify'>
                  As a leading IT staffing company, Yoma Technologies focuses on creating more relevant platforms to provide the right resource based on the client's requirements but also helps manage the workforce without any hassle.
                  </p>
                  <p className='text-justify'>
                  When we talk about workforce hiring, retention, and management, it takes more than one’s hands-on experience and knowledge. Today’s fast-paced IT industry requires your human resource department to be agile and robust, and this is where YOMA Technologies offers you our SaaS-based IT staff augmentation and Permanent Recruitment solutions.
                  </p>
                 
                  <a href="/about-us" className="theme-btn style-three mt-25">Read More →</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

 

<section className="cournter-section-three bg-lighter text-center pt-65 rpt-95 pb-70 rpb-50">
   <div className="container">
      <div className="section-title mb-55">
         <h2 className="mainh1">OUR <span>STRENGTHS</span></h2>
      </div>
      <div className="row">
         <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-2s color-one counted animated animateUP">
               <span className="count-text plus" data-speed="5000" data-stop="150"><CountUp
        end={150}
        duration="3"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps}
      /></span>
               <span>Clients served</span>
            </div>
         </div>
         <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-4s color-two counted animated animateUP">
               <span className="count-text plus" data-speed="5000" data-stop="100,000">
               <CountUp
        end={100000}
        duration="3"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps}
      />
                  </span>
               <span>Access to profiles</span>
            </div>
         </div>
         <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-6s color-one counted animated animateUP">
               <span className="count-text plus" data-speed="5000" data-stop="12"><CountUp
        end={12}
        duration="3"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps}
      /></span>
               <span>Presence across major cities</span>
            </div>
         </div>
         <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-8s color-two counted animated animateUP">
               <span className="count-text plus" data-speed="5000" data-stop="450"><CountUp
        end={450}
        duration="3"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps}
      /></span>
               <span>Deployment locations</span>
            </div>
         </div>
      </div>
      <div className="testimonial-wrap1 row d-none">

         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj"> 
            <h3 className="h3themecolor">Clients speak</h3>
            <div className="testimonial-two-active"> 
            <Slider {...settings1}>
               <div>
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Deepak Chauhan</h5>
                        <span>Halonix Technologies Pvt.Ltd. (Human Resources)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>We want you to know that we are very pleased with the quality of service your company provides and appreciate the constant support. We sincerely appreciate your responsiveness and the way you conduct business. We look forward to a successful working relationship with you.</p>
               </div>

               <div>
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Varun Kaushik</h5>
                        <span>Livepure (Manager - Key Accounts)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>We really appreciate all of your support in the process of managing the off-role manpower for MT- Livpure. You’ve been right there, helping out wherever and whenever needed for these past few months. I am very appreciative of your assistance and am looking forward to continuing to work together.</p>
               </div>

               <div>
                  <div className="author-description">                    
                     <div className="designation">
                        <h5>Rahul Jha</h5>
                        <span>WaterAid India (Program Coordinator)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>YOMA has been an excellent aid for our recruitment needs. Brilliant communication and strong talent are the hallmarks of the service that they provide, and it is a pleasure to have such an asset available to us. I appreciate their quick response, efficiency, and prompt follow-up to my requests.</p>
               </div>
             </Slider>

            </div>
            </div>
         </div>

         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj"> 
            <h3 className="h3themecolor">Associates speak</h3>
            <div className="testimonial-two-active">
                <Slider {...settings2}>

               <div className="testimonial-two-item">
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Surendra Kumar</h5>
                        <span>Halonix Technologies Pvt. Ltd.</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>I am Surendra Kumar working in Halonix Technologies Pvt. Ltd through YOMA. I have been associated with YOMA since April 2018. My experience of working with YOMA has been good. Through YOMA's Proanto app, I get my payslip every month easily. I would like to be in connection with YOMA in the future as well.</p>
               </div>

               <div className="testimonial-two-item">
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Harpreet Singh</h5>
                        <span>Halonix technologies Pvt. Ltd.</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>I am Harpreet Singh working in Halonix Technologies Pvt. Ltd through YOMA Business. I have been associated with YOMA since 2018. My experience with YOMA has been great. I do not face any problem as they resolve it at the right time. I would like to remain connected with YOMA in the coming times.</p>
               </div>
               </Slider>
            </div>
            </div>
         </div>

         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj"> 
            <h3 className="h3themecolor">Success story</h3>
            <div className="testimonial-two-active">            
               <div className="testimonial-two-item">
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>FMCG industry</h5>                        
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>One of the leading cosmetic brands was facing a high attrition rate in a project. They were facing problems such as decreased productivity, declining profits, increased expense and so on.</p>
                  <p>We helped them identify the concerned areas of the SSRs and the working model. We proposed them the complete managed services which resulted in higher productivity, 15% reduction in attrition rates and more.</p>
               </div>

                
            </div>
            </div>
         </div>

      </div>
   </div>
</section>
<section className="contact-four pt-70 rpt-50 pb-70 rpb-70">
   <div className="container">
      <div className="contact-inner-four box-shadow p-35 rpx-25 br-5 bg-white">
         <div className="row">
            <div className="col-lg-7">
               <div className="contact-section-form px-15 rpx-0 rmb-50 wow fadeInLeft delay-0-2s animated animateleft">
                  <div className="section-title mb-20">
                     <h2>REQUEST A CALL BACK</h2>
                  </div>
                  
                  <form id="contactForm" className="contact-form" onSubmit={registerUser}>
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="form-group">
                              
                              <input type="text" id="name" name="name" className="form-control" placeholder="Name*" required=""/>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              
                              <input type="email" id="email" name="email" className="form-control" placeholder="Email*" required=""/>
                           </div>
                        </div>
                        <div className="col-sm-12">
                           <div className="form-group">
                              
                              <input type="text" id="number" name="number" className="form-control" placeholder="Phone No.*" required=""/>
                           </div>
                        </div>
                        <div className="col-sm-12">
                                            <div className="form-group">                                                
                                            <textarea name="Message" className="form-control" id="Message" cols="30" rows="3" placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                        <div className="col-sm-12 d-none">
                           <div className="form-group">
                              <label htmlFor="service">Business Entity*</label>
                              <select id="service" name="leadsquared_mx_Business_Entity">
                                 <option value="YOMA Business Solutions" selected="">YOMA Business Solutions</option>
                              </select>
                           </div>
                        </div>
                        <div className="col-sm-12">
                           <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Send Message"/>
                           <div className="clearfix"></div>
                           <p id="showlabel" style={{ display: "none" }}></p>
                        </div>
                        
                     </div>
                  </form>
               </div>
            </div>
            <div className="col-lg-5">
               <div className="contact-image-number style-two bgs-cover overlay wow fadeInRight delay-0-2s animated homecontactbg">
                  <div className="contact-informations text-white">
                     <h3>Don't hesitate to contact us</h3>
                     <ul className="contact-info">
                        <li>
                           <i className="fas fa-phone-alt"></i>
                           <div className="content">
                              <span>Call Us</span>
                              <h5><a href="tel:+91 844 8188 503">+91 844 8188 503</a></h5>
                           </div>
                        </li>
                        <li>
                           <i className="fas fa-envelope"></i>
                           <div className="content">
                              <span>Write to Us</span>
                              <h5><a href="mailto:yoma.info@byldgroup.com">yoma.info@byldgroup.com</a></h5>
                           </div>
                        </li>
                        <li>
                           <i className="fas fa-clock"></i>
                           <div className="content">
                              <span>Office hours</span>
                              <h5>Mon-Fri:- 9:30 AM  - 6:30 PM</h5>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  )
}
