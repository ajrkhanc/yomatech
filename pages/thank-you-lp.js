import Link from "next/link"
import Head from "next/head"

export default function ThankU(){
    return(
        <>
         <Head>
        <title>Thank You LP - Blanchard International</title>
        <meta name="description" content="Like us on FACEBOOK @blanchardresearchandtrainingindia Connect with us on LINKEDIN Blanchard Research and Training India Follow us on TWITTER @Blanchard_India A confirmation email will be sent to your email. In case you do not find it in your inbox, check your SPAM folder to access the same."/>
        <script
            dangerouslySetInnerHTML={{
              __html: `
              gtag('event', 'conversion', {'send_to': 'AW-369687005/BVv2CJ2Q28ECEN3zo7AB'});
          `,
            }}
          />
        </Head>
            <div className="terms-area pb-70">
                <div className="container">            
                    <div className="row pt-45">
                    <div className="col-lg-12">
                        <img src="/assets/img/thank-you-lp.jpg"/>
                    </div>                     
                    </div>
                </div>
            </div>
        </>
    )
}
 