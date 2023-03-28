import * as React from "react";


const Brands = (props: any) => {
    const {c_branddata } = props;


    return (
        <>
            <div className="Brands Anchor" data-ya-scope="brands">

                <div className="Brands-container">
                    <h2 className="Brands-title">{props.c_branddata?.heading}</h2>
                    <ul className="Brands-list l-row">
                    {props.c_branddata.images.map((item:any)=>
                        <li className="Brands-listItem l-col-xs-6-down l-col-sm-4 l-col-md-3-up">
                      
                            <div className="Brand">
                              
                               
                                <a className="Brand-imageWrapper" href="#" data-ya-track="link#">
                                    <img className="Brand-image js-lazy-loaded" src={item.url}/>
                                </a>
                                
                            </div>

                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Brands;