import * as React from "react";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "../../types/search/locations";
import GetDirection from "../commons/GetDirection";
import timesvg from "../../images/watch-icn.svg"
import Address from "../commons/Address";
import OpenClose from "../commons/openClose";
import { StaticData } from "../../../sites-global/staticData";
import { Link } from "@yext/pages/components";
import Model from "../locationDetail/Model";
import { formatPhoneNumber } from "react-phone-number-input";


const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}

const LocationCard: CardComponent<Location> = ({ result }) => {
  function opentime(e: any) {
    //console.log(e.target);
    var closethis = e.target.closest(".lp-param-results");
    if (closethis.querySelector('.storelocation-openCloseTime').classList.contains("hidden")) {
      closethis.querySelector('.storelocation-openCloseTime').classList.remove("hidden")
    }
    else {
      closethis.querySelector('.storelocation-openCloseTime').classList.add("hidden")
    }
  }

  const { address, mainPhone, hours, additionalHoursText, c_specific_day, index } = result.rawData;
  const phone = formatPhoneNumber(mainPhone);

  let countrycode = `${result.rawData.address?.countryCode?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
  let statecode = `${result.rawData.address?.region?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
  let citycode = `${result.rawData?.address?.city?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
  let url = `${countrycode + "/" + statecode + "/" + citycode + "/" + result.rawData.slug?.toString()}`;


  var els = document.querySelectorAll('.countnumber');
  for (var i = 0; i < els.length; i++) {
    els[i].index = i;
    els[i].innerHTML = i + 1;
  }

  // console.log(els, "bajrang")
  return (
    <div className={`location result-list-inner-${result.id} result`} id={`result-${result.id}`} key={`result-${result.rawData.id}`}>
      <div className="result-inner ">
        <div className="center-column">
          <div className="lp-param-results lp-subparam-hours">
            <div className="location-name-miles icon-row">
              <div className="icon text-black relative">

                <span className="map-count countnumber">
                  {/* {result.index} */}
                </span></div>
              <h2><Link className="inline-block notHighlight"
                data-ya-track={`viewDetail -${result.rawData.name}`}
                eventName={`viewDetail -${result.rawData.name}`}
                rel="noopener noreferrer"
                href={`/${url + ".html"}`}>{result.rawData.name}
              </Link></h2>
              {typeof result.distance != "undefined" ?
                <div className="distance">
                  {metersToMiles(result.distance)} <span>{StaticData.miles}</span>
                </div>
                : ''}
            </div>
            <div style={{ float: "right" }} className="">
              {result.rawData.displayCoordinate ?
                <GetDirection buttonText={StaticData.getDirection} address={address} latitude={result.rawData.displayCoordinate?.latitude} longitude={result.rawData.displayCoordinate?.longitude} />
                : <GetDirection buttonText={StaticData.getDirection} address={address} latitude={result.rawData.yextDisplayCoordinate?.latitude} longitude={result.rawData.yextDisplayCoordinate?.longitude} />}
            </div>
            <div className="hours">
              {result.rawData.hours ? <>
                <div className="mt-2">
                  {/* <h6>Opening Hours</h6> */}
                  {result.rawData.hours?.reopenDate ? <>
                    <div className="icon"> <img className=" " src={timesvg} width="20" height="20" alt="" /> </div>
                    <div className=" flex open-now-string items-center " data-id={`main-shop-${result.rawData.id}`} onClick={opentime}>
                      {StaticData.tempClosed}
                    </div>
                  </>
                    : <>
                      <div className=" flex open-now-string items-center" data-id={`main-shop-${result.rawData.id}`} >
                        <OpenClose timezone={result.rawData.timezone} hours={result.rawData.hours} deliveryHours={result.rawData.hours}></OpenClose>
                      </div></>}
                </div></> : <div className="closeddot notHighlight red-dot">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <circle id="Ellipse_5" data-name="Ellipse 5" cx="4" cy="4" r="4" fill="#ad1e1f" />
                </svg>
                <div className="hours-info text-lg font-second-main-font closeddot">
                  Closed
                </div>
              </div>}
            </div>

            {hours?.holidayHours ?
              <b>
                <Model name={StaticData.Holdiay}
                  holidayHours={hours?.holidayHours}
                  c_specific_day={c_specific_day}
                /></b> : alert("hello")}

            <div className="icon-row content-col address-with-availablity notHighlight">
              <Address address={address} />


            </div>
            <div>
              {mainPhone ? (
                <div className="icon-row">
                  <div className="content-col">
                    <a id="address" className=" location-phn" href={`tel:${mainPhone}`}>
                      {phone}
                    </a>
                    <div style={{ float: "right" }} className="Hero-ctaWrapper Hero-ctaWrapper--locator">
                      <a className="Hero-cta Hero-cta--locator" href="#" data-ya-track="cta">Schedule Exam</a>
                    </div>
                  </div>

                </div>
              ) : (
                ""
              )}


            </div>

            <div className="button-bx">
              <div style={{ paddingRight: "1rem", fontSize: "12px" }}>
                <h4>Eye exams provided by: Doctors Exchange of Alabama, P.C.</h4>
              </div>

              <Link type="button" href={`/${url + ".html"}`} className=" btn notHighlight "
                data-ya-track={`viewStore -${result.rawData.name}`}
                eventName={`viewStore -${result.rawData.name}`}
                rel="noopener noreferrer"
              >
                {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                {StaticData.StoreDetailbtn}
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>

  );

}

export default LocationCard;