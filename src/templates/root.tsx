import * as React from "react";
import Header from "../../src/components/layouts/header";
import Footer from "../components/layouts/footer";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
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
};

const Root: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { dm_directoryParents, dm_directoryChildren, _site } = document;
  const { name, slug } = document;

  return (
    <>

      <Header _site={_site} />
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
        address={{}}
      ></BreadCrumbs>
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
