import Link from "next/link";
import Head from "next/head";

export default function WhyIndia() {
     
    return (
      <>
  
      
        <Head>
        <title>Why YOMA tech</title>
        <meta name="description" content=""/>
        </Head>

        <section class="hero-section bg-dark-blue pt-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="hero-content text-white pt-100 pb-200 rpt-40 rpb-100">                            
                            <h1 class="wow fadeInUp delay-0-4s mt-20 animated animateUP">Why India</h1>
                            <div class="hero-btn mt-35 wow fadeInUp delay-0-6s animated">
                                <a href="/contact-us" class="theme-btn">meet with us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="hero-image">
                            <img src="assets/images/hero/hero-two.jpg" alt="Hero"/>
                            <div class="circle-one"></div>
                            <div class="circle-two"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="left-circle"></div>
        </section>


        <section class="about-section style-four pt-50 pb-60">
            <div class="container rpb-95">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-content wow fadeInLeft delay-0-2s animated">
                            <div class="section-title">                                
                                <h2 class="mainh1"><span>Why </span> India</h2>                               
                            </div>
                            <p className="text-justify">Technology is evolving every day, encouraging businesses to perform better by harnessing the power of cutting-edge technologies and stand through disruptions. Software Outsourcing in India is a favorable option for businesses and the reason are extremely relevant.</p>
                            <p className="text-justify">Technology is evolving every day, encouraging businesses to perform better by harnessing the power of cutting-edge technologies and stand through disruptions. Software Outsourcing in India is a favorable option for businesses and the reason is extremely relevant The cost of software development in India is lower compared to other destinations for the same quality</p>
                            <i className="text-justify">Business models are extremely flexible and Indian companies work 24*7 round the clock to cater to different geographies.</i>
                            <ul className="list-style-three mt-15">
                                <li>Special access to a talented pool of knowledgeable resources</li>
                                <li>Downsize business but expand the line of business offerings</li>
                                <li>Maximize profitability with minimal investment cost.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-four-images text-center wow fadeInRight delay-0-2s animated">
                            <div class="row">
                                <div class="col-6">
                                    <img src="/assets/images/about/about-four.jpg" alt="About"/>
                                    <img class="about-bg-circle d-block mx-auto" src="/assets/images/about/about-circle-dots.png" alt="About"/>
                                </div>
                                <div class="col-6">
                                    <img class="bg-circle-dtos mb-35 d-block mx-auto" src="/assets/img/logo/yoma-logo.png" alt="Logo"/>
                                    <img src="/assets/images/about/about-four-2.jpg" alt="About"/>
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