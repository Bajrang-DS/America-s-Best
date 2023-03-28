import * as React from "react";


const Offers = (props: any) => {
    const {c_offerheading,c_offers } = props;


    return (
        <>
            <div className="Offers Anchor" data-ya-scope="offers">
                <div className="Anchor-position" id="offers"></div>
                <div className="Offers-container">
                    <h2 className="Offers-title">
                       {c_offerheading?.heading}
                    </h2>
                    <ul className="Offers-list l-row">
                        {c_offers.map((item:any)=>
                      
                        <li className="Offers-listItem l-col-xs-12-down l-col-sm-6-up">
                            <div className="Offer">
                                <div className="Offer-row">
                                    <div className="Offer-info">
                                        <div className="Offer-title">
                                            {item.heading}
                                        </div>
                                        <div className="Offer-description">
                                           {item.description}
                                        </div>
                                        <div className="Offer-ctaWrapper">
                                            <a className="Offer-cta" href="#" data-ya-track="link#">
                                               {item.cta.label}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                          )}
                    </ul>
                    <div className="Offers-ctaWrapper">
                        <a className="Offers-cta" href="#" data-ya-track="cta">
                           {c_offerheading?.cta.label}
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Offers;