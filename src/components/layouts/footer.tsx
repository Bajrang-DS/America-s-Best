import * as React from "react";

const Footer = (props: any) => {

  return (
    <>
      <footer className="Footer" data-ya-scope="footer">
        <div className="Footer-container">
          <div className="Footer-row Footer-row--main">
            <div className="Footer-col Footer-col--sloganAndSocials">
              <div className="Footer-slogan">
                {props._site?.c_footersocials.line1}
                <br />
                {props._site?.c_footersocials.line2}
              </div>
              <div className="Footer-socials">
                <div className="SocialLinks Socials-socialLinks" data-ya-scope="social">
                  {props._site?.c_footersocials.icons.map((icon: any) =>

                    <div className="SocialLinks-linkWrapper">
                      <a className="Link SocialLinks-link Link--facebook" href="#">
                        <img className="footer-social-icons" src={icon.url} alt="" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {props._site?.c_footerlinks.map((item: any) =>
              <>
                <div className="Footer-col Footer-col--links">

                  <div className="Footer-colHeading">{item.heading}
                  </div>
                  <div className="Footer-links">
                    {item.cta.map((link: any) =>
                      <div className="Footer-linkWrapper Footer-linkWrapper--main">
                        <a className="Footer-link Footer-link--main" href="#" data-ya-track="link#">
                          <span className="Footer-linktext">{link.label}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="Footer-row Footer-row--utility">
            <div className="Footer-col Footer-col--utility">
              <div className="Footer-links Footer-links--utility">
              {props._site?.c_middlefooter.map((links:any)=>
                <div className="Footer-linkWrapper Footer-linkWrapper--utility">
                 
                 
                  <a className="Footer-link Footer-link--utility" href="#" data-ya-track="link#">
                    <span className="Footer-linktext">{links.label}</span>
                  </a>
                 
                </div>
                  )}
              </div>
            </div>
          </div>
          <div className="Footer-row Footer-row--copyright">
            <div className="Footer-col">{props._site?.c_footerpolicy.text1}
              <br />
              {props._site?.c_footerpolicy.text2}
              <a className="Footer-copyrightLink" href="https://www.americasbest.com/state-legal-disclosures" data-ya-track="copyrightlink">{props._site?.c_footerpolicy.cta.label}</a>
              {props._site?.c_footerpolicy.text3}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
