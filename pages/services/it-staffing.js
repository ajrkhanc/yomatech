import Link from "next/link";
import Head from "next/head";

export default function StaffAugmentation() {
     
    return (
      <>
  
      
        <Head>
        <title>IT Staffing - YOMA Technologies</title>
        <meta name="description" content="Yoma, one of the leading IT staffing companies, enables you to achieve and optimize the most strategic and transformational components of business success - the right people with the right skills, competence, and attitude."/>
        </Head>
        
        <section class="hero-section-two bgs-cover overlay pt-40 rpt-80 itstaffing">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 col-sm-11">
                    <div class="hero-content text-white pt-100 pb-100">                   
                    <h1 class="wow fadeInUp delay-0-4s mt-20 animated animateUP">IT Staffing</h1>
                    <div class="hero-btns mt-35 wow fadeInUp delay-0-6s animated animateUP">
                        <a href="/contact-us" class="theme-btn mr-25">Contact Us</a>                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section className="about-section pt-50 pb-20">
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-6">
                        <div className="section-title text-left mb-0">
                            <h2 className="mainh1"><span>IT </span>Staffing </h2> 
                        </div>
                        <div className="about-content wow fadeInRight delay-0-2s animated animateright">                        
                        <p className="text-justify">
                        <b>Yoma,</b> one of the leading IT staffing companies, enables you to achieve and optimize the most strategic and transformational components of business success - the right people with the right skills, competence, and attitude. As one of the industry's most respected IT staffing companies, we offer a wide range of temporary staffing services, including IT Staff Augmentation, and Permanent Recruitment.
                        </p>                        
                        <p className="text-justify">
                        We take pride in our combined experience of decades to  find the best talents that meet your organization’s specific needs. We create the most amiable platform for you to meet the best candidates who deliver on your requirements.
                        </p>
                        {/* <h5>We help you optimize your project costs by enabling you to:</h5>
                        <ul className="list-style-three mt-15">
                            <li>Lock the budget of corporate staffing.</li>
                            <li>Have the flexibility of increasing or decreasing the number of candidates.</li>
                            <li>Work as per your seasonal or cost requirements.</li>                                                                                   
                        </ul>                         */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wow fadeInLeft delay-0-2s animated animateleft text-center">
                        <img src="/assets/img/staff-augmentation.png" alt="About"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         

        <section className="about-section pt-50 pb-20 bgdarkyoma">
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-6">
                        <div className="about-content wow fadeInRight delay-0-2s animated animateright">                        
                        <div className="section-title text-left mb-0">
                            <h2 className="mainh1"><span>Staff </span>augmentation</h2> 
                        </div>
                        <p className="text-justify">
                        Staff augmentation is an outsourcing strategy that helps recruit talents across all profiles and verticals. With YOMA’s staff augmentation solution, businesses can personally select candidates according to your budget and optimize recruiting costs seamlessly.
                        </p>
                        <p className="text-justify">
                        YOMA  uses fixed and pre-defined budgets for projects and outsourced teams and provide selected manpower within the required budget. We ensure that staff augmentation services fully comply with regulatory and statutory requirements of labor law.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wow fadeInLeft delay-0-2s animated animateleft text-center">
                        <img src="/assets/img/dedicated-development-team.png" alt="About"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-50 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-6 coleql1">
                         <div className="pt-20">
                             <h3 className="h3themecolor">Why opt YOMA for staff augmentation services?</h3>
                             <p className="text-justify">
                             A company must upgrade and expand its IT departments and have well-versed people on board. The global staffing business is one of the most potent sources of staff augmentation talent, with an estimated annual expenditure of nearly *US$490 billion, and YOMA makes an ideal choice to outsource your staff augmentation efforts to as we demonstrate experience, customer acknowledgement and authorization to push on.
                             </p>
                             
                         </div>
                     </div>
                     <div className="col-sm-6 coleql2">
                     <div className="pt-20">
                             <h3 className="h3themecolor">Permanent recruitment</h3>
                             <p className="text-justify">
                             Talented employees are an asset to any organization. Therefore, it is imperative to select the right candidates for the right jobs through a systematic recruitment process and a good employer brand.
                             </p>
                            
                             <p className="text-justify">
                             While your HR department may be focused on attracting and retaining employees, a company like ours with long-term staffing experience can be the best partner for matching a candidate's skills and attitudes to job requirements and company culture.    
                            </p>                             
                         </div>
                     </div>
                  </div>
               </div>
            </section>
 
      </>
    )
  }