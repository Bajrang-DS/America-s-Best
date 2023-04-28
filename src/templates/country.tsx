import * as React from "react";
import Header from "../../src/components/layouts/header";
import Footer from "../components/layouts/footer";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
  Link,
} from "@yext/pages/components";
import { stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import BreadCrumbs from "../components/layouts/Breadcrumb";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "country",
    filter: {
      entityTypes: ["ce_country"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_baseEntityCount",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryParents.dm_baseEntityCount",
      "dm_directoryChildren.dm_directoryChildren.name",
      "dm_directoryChildren.dm_directoryChildren.id",
      "dm_directoryChildren.dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.dm_directoryChildren.name",
      "dm_directoryChildren.dm_directoryChildren.dm_directoryChildren.id",
      "dm_directoryChildren.dm_directoryChildren.dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.dm_directoryChildren.meta.entityType"
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  currentUrl = "/" + document.slug.toString() + ".html";
  return `${document.slug.toString()}` + ".html";
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {

  let metaDescription = "Find your nearest America's Best store and which services are available." + document.name;
  let metaTitle = `America's Best Store in ${document.name} | Find a Local Store`;
  let canonicalURL = document._site ? document._site + document.slug + ".html" : stagingBaseurl + document.slug + ".html"
  let ogmetaImage = document._site.url ? document._site.url : "https://cdn.Whitbread.co.uk/en/assets/images/large/IMG_10480.jpg"
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
          name: "twitter:card",
          content: "summary",
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

const Country: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    slug,
    dm_directoryChildren,
    dm_directoryParents,
    _site,
    __meta,
  } = document;

  const childrenDivs = dm_directoryChildren ? dm_directoryChildren.map((entity: any) => {
    var detlslug1 = "";
    var detlslug = "";
    if (entity.dm_baseEntityCount == 1) {
      entity.dm_directoryChildren ? entity.dm_directoryChildren.map((link: any) => {
        link.dm_directoryChildren ? link.dm_directoryChildren.map((detl: any) => {

          if (!detl.slug) {
            let slugString = detl.id + " " + detl.name;
            let slug = slugify(slugString);
            detlslug1 = `${slug}`;
          } else {
            detlslug1 = `${slug + "/" + entity.slug + "/" + entity?.dm_directoryChildren[0]?.slug + "/" + detl.slug.toString()}`;
          }
          detlslug = detlslug1;
        }) : detlslug = detlslug1;
      }) : "";
    }
    else {
      detlslug = slug + "/" + entity.slug;
    }
    return (
      <>
        <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
          <Link
            eventName="Region"
            key={entity.slug}
            href={detlslug + ".html"}
            className="hover:text-red"
          >
            {entity.name} ({entity.dm_baseEntityCount})
          </Link>
        </div>
      </>
    );
  }) : "";

  let templateData = { document: document, __meta: __meta };
  let breadcrumbScheme = [];
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 1,
    item: {
      "@id": `${stagingBaseurl}${document.slug.toString()}.html`,
      name: document.name,
    },
  });
  return (
    <>
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
          <h1 className="sec_heading m-4" style={{ textAlign: "center", color: "Highlight" }}>
            All Regions of {name}{" "}
          </h1>
          <div className="directory-country nearby-sec py-5 lg:py-[60px]">
            <div className="container">
              <div className="flex flex-wrap justify-center -mx-4">
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

export default Country;
