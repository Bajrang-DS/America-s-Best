// src/template/404.tsx
import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";
import * as React from "react";
import { favicon } from "../../sites-global/global";
import { StaticData } from "../../sites-global/staticData";
import PageLayout from "../components/layouts/PageLayout";
import "../index.css";
export const config: TemplateConfig = {
  stream: {
    $id: "404",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "name",

    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["globaldata"]
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Page Not Found",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
    ]
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = ({
  document,
}) => {
  const {
    _site
  } = document;
  //   const array = [{ name: "John" }, { name: "bajrang" }, { name: "bajrang" }, { name: "bajrang" }];

  //   let pp = array.filter( (ele, ind) => ind === array.findIndex( elem => elem.name === ele.name))

  // console.log(pp,"gggggggggg")
  return (
    <>
      <PageLayout _site={_site}>
        <div className="content-list">
          <div className="container flex">
            <div className="FourOhFour-image">
              {/* <img src={_site.c_404image.url} alt="" /> */}
              <video width="320" height="272" autoPlay loop controls={false}>
                <source src="https://www.americasbest.com/medias/blinky.mp4?context=bWFzdGVyfHJvb3R8MjA0OTYyMHx2aWRlby9tcDR8aDZiL2hmNy85MzUzOTExNTMzNTk4L2JsaW5reS5tcDR8ZGU4ZWYwMTMyMDNlMTBkOGQyODZlMjIwMzM3Yjg1ZjRkNDA2ZDBmZTE5MTg4M2U4MDQ1NWI0MTAxZTIzMTZmMw" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>
            <div className="sec-title text-center float-right w-[77%]">
              <h1 className="" style={{ textAlign: "center" }}>
                {StaticData.PagenotFound}
              </h1>
              <p style={{ color: "crimson" }}>{StaticData.cantfind_page}.</p>
              <p style={{ color: "blue" }}>{StaticData.Youcouldtry}</p>
              <div className="button-bx max-w-[45rem] !mx-auto !mt-5">
                <a className="btn border-[1px]" href="javascript:history.back()">{StaticData.Previuspage} &gt;</a>
                <a className="btn border-[1px]" href="/">{StaticData.homePage} &gt;</a>
              </div>
            </div>
            {/* <div>
              {pp.map((name: any) =>

                <h1>{name.name}</h1>

              )}
            </div> */}

          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default FourOhFour;
