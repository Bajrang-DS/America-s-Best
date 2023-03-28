import * as React from "react";
import Footer from "../components/layouts/footer";
import { apikey_for_entity, baseuRL, stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import getDirectionUrl from "../components/commons/GetDirection";
import Header from "../../src/components/layouts/header";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import { Link } from "@yext/pages/components";
import "../index.css";
var currentUrl = "";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

import { JsonLd } from "react-schemaorg";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import GetDirection from "../components/commons/GetDirection";
import OpenClose from "../components/commons/openClose";
import Address from "../components/commons/Address";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "city",
    filter: {
      entityTypes: ["ce_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      // "c_addressRegionDisplayName",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.id",
      "dm_directoryParents.dm_baseEntityCount",
      "dm_directoryChildren.dm_baseEntityCount",
      "dm_directoryChildren.address",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.mainPhone",
      // "dm_directoryChildren.what3WordsAddress",
      "dm_directoryChildren.yextDisplayCoordinate"
      // "c_globalData.c_headerLinks1",
      // "c_globalData.c_footerLinks",
      // "c_globalData.facebookPageUrl",
      // "c_globalData.twitterHandle",
      // "c_globalData.instagramHandle",
      // "c_globalData.address",
      // "c_globalData.c_phoneNumber",
      // "c_globalData.c_companyrn",
      // "c_globalData.c_tikTok",
      //seo section
      // "c_canonical",
      // "c_metaDescription",
      // "c_metaTitle",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

let slugString = "";
// export const getPath: GetPath<TemplateProps> = ({ document }) => {
//   document.dm_directoryParents.forEach((e: any) => {
//     if (e.sulg != "location" && e.slug != "gb") {
//       slugString += e.slug + "/";
//       slugString = slugString.replace("location", "");
//     }
//   });

//   currentUrl = slugString + document.slug + ".html";

//   return slugString + document.slug + ".html";
// };
export const getPath: GetPath<TemplateProps> = ({ document }) => {

  // return `${document.slug.toString()}.html`;

  var url: any = ""
  document.dm_directoryParents.map((i: any) => {
    if (i.meta.entityType.id == 'ce_country') {
      url = `${i.slug}`
    }
    else if (i.meta.entityType.id == 'ce_region') {
      url = `${url}/${i.slug}/${document.slug.toString()}.html`
    }
  })
  return url;
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
}): HeadConfig => {

  let metaDescription = "Find your nearest America's Best store and which services are available." + document.name;
  let metaTitle = `America's Best Store in ${document.name} | Find a Local Store`;
  let canonicalURL = document._site ? document._site + document.dm_directoryParents[1].name.toLowerCase() + "/" + document.dm_directoryParents[2].slug + "/" + document.slug + ".html" : stagingBaseurl + document.dm_directoryParents[1].name.toLowerCase() + "/" + document.dm_directoryParents[2].slug + "/" + document.slug + ".html"
  let ogmetaImage = document._site.url ? document._site.url : "https://cdn.vodafone.co.uk/en/assets/images/large/IMG_10480.jpg"

  return {
    title: metaTitle,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${metaDescription}`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: " America's Best",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: ` ${canonicalURL}`,
        },
      },
      ///og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `${canonicalURL}`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "og:image",
          content: `${ogmetaImage}`
        },
      },

      /// twitter tag

      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: `${canonicalURL}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: `https://companieslogo.com/img/orig/WTB.L-13ed7054.png?t=1652332938`
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${metaDescription}`,
        },
      },
    ],
  };
};

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    c_addressRegionDisplayName,
    dm_directoryParents,
    dm_directoryChildren,
    c_globalData,
    c_canonical,
    c_metaDescription,
    c_metaTitle,
    _site,
    __meta,
  } = document;
  var address;
  var c_companyrn;
  var c_footerLinks;
  var c_headerLinks1;
  var c_phoneNumber;
  var facebookPageUrl;
  var instagramHandle;
  var twitterHandle;
  var c_tikTok;
  var sortedChildren = dm_directoryChildren.sort(function (a: any, b: any) {
    var a = a.name;
    var b = b.name;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  let slugString = "";
  document.dm_directoryParents.forEach((e: any) => {
    slugString += e.slug + "/";
  });
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const childrenDivs = dm_directoryChildren.map((entity: any) => {
    var origin: any = null;
    if (entity.address.city) {
      origin = entity.address.city;
    } else if (entity.address.region) {
      origin = entity.address.region;
    } else {
      origin = entity.address.country;
    }
    let key: any = Object.keys(entity.hours)[0];
    let detailPageUrl = '';
    var name: any = entity.name.toLowerCase();
    var string: any = name.toString();
    let removeSpecialCharacters = string.replace(
      /[&\/\\#^+()$~%.'":*?<>{}!@]/g,
      "");
    let result: any = removeSpecialCharacters.replaceAll(" ", "-");
    if (!entity.slug || entity.slug == "undefined") {
      detailPageUrl = `${entity.id}-${result}`
    }
    else {
      // detailPageUrl = `${entity.slug.toString()}`
      let countrycode = `${entity?.address?.countryCode?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
      let statecode = `${entity?.address?.region?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
      let citycode = `${entity?.address?.city?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
      detailPageUrl = `${countrycode + "/" + statecode + "/" + citycode + "/" + entity.slug?.toString()}`;
    }

    return (
      <>


        {/* <SplideSlide > */}
        <div style={{ width: "23rem" }} className="nearby-card">
          <div className="location-name-miles icon-row">
            <h2><Link className="inline-block notHighlight" href={`/${detailPageUrl}`}
              data-ya-track={`${entity.name}`}
              eventName={`${entity.name}`}
              rel="noopener noreferrer"><b> {entity.name}</b></Link></h2>

          </div>

          <div className="icon-row closeing-div">
            {entity.hours ?
              <div className="flex open-now-string items-center " data-id={`main-shop-${entity.id}`} >
                <OpenClose timezone={entity.timezone} hours={entity.hours} deliveryHours={entity.hours}></OpenClose>
              </div> :
              <div className="closeddot notHighlight red-dot">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <circle id="Ellipse_5" data-name="Ellipse 5" cx="4" cy="4" r="4" fill="#ad1e1f" />
                </svg>
                <div className="hours-info text-lg font-second-main-font closeddot">
                  Closed
                </div>
              </div>
            }
          </div>
          <div className="icon-row content-col">
            <Address address={entity.address} />
          </div>
          <div className="button-bx direction">
            <GetDirection buttonText={document.c_getDirectionsCTAText ? document.c_getDirectionsCTAText : "Get directions"} address={entity.address} latitude={entity.displayCoordinate ? entity.displayCoordinate.latitude : entity.yextDisplayCoordinate.latitude} longitude={entity.displayCoordinate ? entity.displayCoordinate.longitude : entity.yextDisplayCoordinate.longitude} />
          </div>
          <div className="button-bx">
            <Link className="btn hover:border-[1px]" href="#"
              data-ya-track={`viewstore-${entity.name}`}
              eventName={`viewstore-${entity.name}`}
              rel="noopener noreferrer">
              {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
              SCHEDULE EXAM</Link>


          </div>
        </div>
        {/* </SplideSlide> */}


      </>
    );


  });

  c_globalData &&
    c_globalData.map((i: any) => {
      address = i.address ? i.address : [];
      c_companyrn = i.c_companyrn ? i.c_companyrn : "";
      c_footerLinks = i.c_footerLinks ? i.c_footerLinks : [];
      c_headerLinks1 = i.c_headerLinks1 ? i.c_headerLinks1 : [];
      c_phoneNumber = i.phoneNumber ? i.phoneNumber : "";
      facebookPageUrl = i.facebookPageUrl ? i.facebookPageUrl : "";
      instagramHandle = i.instagramHandle ? i.instagramHandle : "";
      twitterHandle = i.twitterHandle ? i.twitterHandle : "";
      c_tikTok = i.c_tikTok ? i.c_tikTok : "";
    });

  let templateData = { document: document, __meta: __meta };
  let breadcrumbScheme: any = [];
  let currentIndex: any = 0;
  dm_directoryParents &&
    dm_directoryParents.map((i: any, index: any) => {
      currentIndex = index;
      if (index != 0) {
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": `${stagingBaseurl}/${i.slug}.html`,
            name: i.name,
          },
        });
      }
    });
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 1,
    item: {
      "@id": `${stagingBaseurl}${dm_directoryParents[1].slug}.html`,
      name: dm_directoryParents[1].name,
    },
  });
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 2,
    item: {
      "@id": `${stagingBaseurl}${dm_directoryParents[1].slug}/${dm_directoryParents[2].slug}.html`,
      name: dm_directoryParents[2].name,
    },
  });
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 3,
    item: {
      "@id": `${stagingBaseurl}${dm_directoryParents[1].slug}/${dm_directoryParents[2].slug}/${document.slug.toString()}.html`,
      name: document.name,
    },
  });
  return (
    <>
      {/* <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Whitbread UK",
          "url": "https://www.whitbread.co.uk/",
          "logo": favicon,
          "sameAs": [
            "https://www.twitter.com/WhitbreadUK",
            "https://www.facebook.com/WhitbreadUK"
          ],
        }}
      /> */}

      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        <AnalyticsScopeProvider name={""}>

          <Header _site={_site} />
          <div className="city-breadcrumb">
            <BreadCrumbs
              name={name}
              parents={dm_directoryParents}
              baseUrl={relativePrefixToRoot}
              address={{}}
            ></BreadCrumbs>
          </div>
          {/* <PhotoSlider _site={_site} /> */}
          <h1 className="sec_heading m-4" style={{ textAlign: "center", color: "Highlight" }}>
            Available Stores in {name}, {document.dm_directoryParents[2].name},{" "}
            {document.dm_directoryParents[1].name}{" "}
          </h1>
          <div className="directory-country nearby-sec">
            <div className="container">
              <div className="splide-slide">
                {childrenDivs}
              </div>
            </div>
          </div>
          <Footer _site={_site} />

        </AnalyticsScopeProvider>
      </AnalyticsProvider>

    </>
  );
};
export default City;
