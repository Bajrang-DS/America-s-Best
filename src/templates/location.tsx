import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Cta from "../components/commons/cta";
import Contact from "../components/locationDetail/contact";
import ApiCall from "../Apis/ApiCall";
import Nearby from "../components/locationDetail/Nearby";
import { CustomFieldDebuggerReactProvider } from '@yext/custom-field-debugger';
import { JsonLd } from "react-schemaorg";
import Opening from "../components/commons/openClose";
import { nearByLocation } from "../types/nearByLocation";
// import Logo from "../images/logo-header.svg"
// import offerBanner from "../images/offer-banner.jpg"
import IframeMap from "../components/locationDetail/IframeMap";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/footer";
import Menu from "../components/locationDetail/Menu";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import About from "../components/locationDetail/About";
import Breadcrumb from "../components/layouts/Breadcrumb";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";
import OpenClose from "../components/commons/openClose";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";

import { apikey_for_entity, baseuRL, stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import FeaturesBrand from "../components/locationDetail/FeaturesBrand";
import { Fade, Slide } from "react-awesome-reveal";
import MgmTimber from "../components/locationDetail/MgmTimber";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";
import StickHeader from "../components/locationDetail/StickHeader";
import Brands from "../components/locationDetail/Brands";
import Offers from "../components/locationDetail/offers";
import Faqs from "../components/locationDetail/Faqs";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "closed",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "displayCoordinate",
      "cityCoordinate",
      "c_bannerImage",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.dm_baseEntityCount",
      "dm_directoryParents.meta.entityType",
      "c_galleryimage",
      "c_galleryitems",
      "c_aboutheading",
      "c_aboutdatas",
      "c_branddata",
      "c_offers",
      "c_offerheading",
      "c_faqs.question",
      "c_faqs.answer",
      "c_faqtitle",
      "c_faqsubtitle"

    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ['location']

    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  var url = "";
  var name: any = document.name.toLowerCase();
  var string: any = name.toString();;
  let result: any = string.replaceAll(" ", "-");
  document.dm_directoryParents?.map((result: any, i: number) => {
    if (i > 0) {
      url += result.slug + "/"
    }
  })
  if (!document.slug) {
    url += `${result.slug}`;
  } else {
    url += `${document.slug.toString()}`;
  }
  return url + ".html";
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.c_meta_title ? document.c_meta_title : `${document.name} Store of America's Best`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name} Plaza Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },


      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
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
          href: `${document._site.c_canonical ? document.c_canonical : stagingBaseurl

            }${document.slug ? document.slug : `${document.name.toLowerCase()}`}.html`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name} America's Best Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
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
          content: document.c_meta_title ? document.c_meta_title : `${document.name} Store of America's Best`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name} America's Best Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      /// twitter tag






    ],

  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {

  var location = `${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.latitude : data.document.displayCoordinate.latitude},${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.longitude : data.document.displayCoordinate.longitude}`;

  const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${AnswerExperienceConfig.experienceKey}&api_key=${AnswerExperienceConfig.apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${AnswerExperienceConfig.verticalKey}&limit=5&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;

  // const url = "https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?api_key=b88e27af2c8b5d5b7fe52d29786f3b57&v=20230111&location=usa&radius=1000"
  // console.log(url)
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()

  )) as nearByLocation;
  return { ...data, externalApiData };
};



type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    _site,
    address,
    slug,
    hours,
    mainPhone,
    photoGallery,
    c_banner_image,
    c_canonical,
    description,
    additionalHoursText,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    name,
    c_bannerImage,
    dm_directoryParents,
    c_galleryitems,
    c_galleryimage,
    c_aboutheading,
    c_aboutdatas,
    c_branddata,
    c_offerheading,
    c_offers,
    c_faqs,
    c_faqtitle,
    c_faqsubtitle
  } = document;

  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
    document.dm_directoryParents.map((i: any, index: any) => {
      if (i.meta.entityType.id == "ce_country") {
        document.dm_directoryParents[index].name =
          document.dm_directoryParents[index].name;
        document.dm_directoryParents[index].slug =
          document.dm_directoryParents[index].slug;

        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +

              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_region") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_region" &&
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url + "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_city") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + "/" + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url + "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      }
    });

  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 4,
    item: {
      "@id": stagingBaseurl + path,
      name: document.name,
    },
  });
  let imageurl = photoGallery ? photoGallery.map((element: any) => {
    return element.image.url
  }) : null;
  console.log(document)
  let bannerimage = c_banner_image && c_banner_image.image.url;


  return (

    <>

      <JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          image: imageurl,
          telephone: mainPhone,
          url: `${c_canonical ? c_canonical : stagingBaseurl}${slug ? slug : `${name}`}.html`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />



      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <PageLayout _site={_site}>


            <div className="hero-banner">
              <div className="hero-image hero-image2">
                <img className="ObjectFit-image" src={c_bannerImage?.url} alt="" />
              </div>
              <BreadCrumbs
                name={name}
                parents={dm_directoryParents}
                baseUrl={relativePrefixToRoot}
                address={{}}
              ></BreadCrumbs>
              <div className="location-information">
                <div className="container">
                  <div className='banner-text banner-dark-bg justify-center text-left'>
                    <h1 className="entity-name">{name}</h1>
                    <div className="openClosestatus detail-page closeing-div">
                      <OpenClose timezone={timezone} hours={hours} />
                    </div>
                  </div>
                </div>
                <div className="hero-container">
                  <Contact address={address}
                    phone={mainPhone} latitude={yextDisplayCoordinate ? yextDisplayCoordinate.latitude : displayCoordinate?.latitude}
                    yextDisplayCoordinate={yextDisplayCoordinate} longitude={yextDisplayCoordinate ? yextDisplayCoordinate.longitude : displayCoordinate?.longitude} hours={hours} additionalHoursText={additionalHoursText} ></Contact>

                </div>

              </div>

            </div>

            <StickHeader _site={_site} />
            <PhotoGallery c_galleryitems={c_galleryitems} c_galleryimage={c_galleryimage} />

            <Offers c_offerheading={c_offerheading} c_offers={c_offers} />

            <About
              c_aboutheading={c_aboutheading} c_aboutdatas={c_aboutdatas} latitude={yextDisplayCoordinate ? yextDisplayCoordinate.latitude : displayCoordinate?.latitude}
              longitude={yextDisplayCoordinate ? yextDisplayCoordinate.longitude : displayCoordinate?.longitude} yextDisplayCoordinate={yextDisplayCoordinate} />

            <Brands c_branddata={c_branddata} />

            <Faq c_faqs={c_faqs} c_faqtitle={c_faqtitle} c_faqsubtitle={c_faqsubtitle} />

            <div className="nearby-sec">
              <div className="container">
                <div className="sec-title"><h2 className="">{StaticData.NearStoretext}</h2></div>
                <div className="nearby-sec-inner">
                  {yextDisplayCoordinate || cityCoordinate || displayCoordinate ?
                    <Nearby externalApiData={externalApiData} />
                    : ''}
                </div>
              </div>

            </div>

          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Location;