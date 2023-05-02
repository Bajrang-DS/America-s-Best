import * as React from "react";
import Header from "../../src/components/layouts/header";
import Footer from "../components/layouts/footer";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import { apikey_for_entity, baseuRL, stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import "../index.css";
import {

  AnalyticsScopeProvider,
} from "@yext/pages/components";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "root",
    filter: {
      entityTypes: ["ce_root"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "description",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
       "dm_baseEntityCount"
      // "c_globalData.c_headerLinks1",
      // "c_globalData.c_footerLinks",
      // "c_globalData.facebookPageUrl",
      // "c_globalData.twitterHandle",
      // "c_globalData.instagramHandle",
      // "c_globalData.address",
      // "c_globalData.c_phoneNumber",
      // "c_globalData.c_companyrn",
      // "c_globalData.c_tikTok",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  currentUrl = document.slug.toString() + ".html";
  return document.slug.toString() + ".html";
  //    return 'index.html'
};

const Root: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { description, dm_directoryParents, dm_directoryChildren, _site } = document;

  const { name, slug, c_globalData } = document;

  return (
    <>

      <Header _site={_site} />
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
        address={{}}
      ></BreadCrumbs>
      {/* <PhotoSlider _site={_site} /> */}
      <div className="header-title ">
        <div className="directory-root py-5 lg:py-[60px]">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              {dm_directoryChildren.map((child: any) => {
                return (
                  <>
                    <div className="w-full md:w-full lg:w-fi px-4 text-center">
                      <a
                        href={slug + "/" + child.slug + ".html"}
                        key={child.slug}
                        className="hover:text-red"
                      >
                        {child.name} {child.dm_baseEntityCount}
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer _site={_site} />
    </>

  );
};

export default Root;
