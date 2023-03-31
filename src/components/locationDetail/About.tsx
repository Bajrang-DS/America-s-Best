import { Link } from "@yext/pages/components";
import * as React from "react";
import CustomMap from "./CustomMap";


const About = (props: any) => {
  const { yextDisplayCoordinate, c_aboutheading, c_aboutdatas } = props;
  return (
    <>
      <div className="About Anchor js-about">
        <div className="About-container">
          <div className="About-mapContainer">
            <div className="location-map-wrapper js-location-map-wrapper">

              <CustomMap prop={yextDisplayCoordinate} />

            </div>

          </div>
          <div className="About-infoContainer">
            <h2 className="About-title">{props.c_aboutheading.heading}</h2>
            <div className="About-description">
              {props.c_aboutdatas.map((item: any) =>

                <p>
                  {item.strongtext ? 
                  <>
                  <strong>
                    {item.strongtext}
                  </strong>
                  <br /></>
                   : ""}
                  {item.destext}
                </p>
              )}

            </div>
            <div className="About-ctaWrapper">
              <a className="About-cta" href="#" data-ya-track="cta">{props.c_aboutheading.cta.label}</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )


};
export default About;