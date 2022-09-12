import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <meta name="description" content="" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>Manpower Company | Recruitment Comapnies | YOMA</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="google-site-verification" content="NLt2fLY-Zv4a3CTFZkpB45Mag6Muyi-aKAfBhzjAGKU" />

            {/* Global site tag (gtag.js) - Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-29994810-1"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-29994810-1');
          `,
            }}
          />

          {/* Global site tag (gtag.js) - Google Ads: 369687005 */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-369687005"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-369687005');
          `,
            }}
          />

          <script type="text/javascript" src="https://web-in21.mxradon.com/t/Tracker.js"></script>
          <script type="text/javascript">
                pidTracker('53539');
          </script>
          {/* LeadSquared Tracking Code End */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.__lo_site_id = 314178;
              (function() {
              var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
              wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
              })();

          `,
            }}
          />


            <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon"/>
          
            <link rel="stylesheet" href="/assets/css/font-awesome-5.9.0.css"/>
           
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
            
            <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
           
            <link rel="stylesheet" href="/assets/css/flaticon.css"/>
           
            <link rel="stylesheet" href="/assets/css/animate.css"/>
            
            <link rel="stylesheet" href="/assets/css/slick.css"/>
            
            <link rel="stylesheet" href="/assets/css/style.css"/>
            <link rel="stylesheet" href="/assets/css/globals.css"/>
            
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      
        </Head>
        <body>
          <Main />
          <NextScript />
           <script src="/assets/js/jquery-3.6.0.min.js"></script>   
            <script src="/assets/js/bootstrap.min.js"></script>        
            <script src="/assets/js/appear.min.js"></script>        
            <script src="/assets/js/slick.min.js"></script>
            <script src="/assets/js/jquery.magnific-popup.min.js"></script>            
            <script src="/assets/js/isotope.pkgd.min.js"></script>            
            <script src="/assets/js/wow.js"></script>        
            <script src="/assets/js/script.js"></script>


            <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,v3){
                w.chaportConfig = {
                appId : '6262821a98b80e842ef3087c'
                };
                
                if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
          `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument