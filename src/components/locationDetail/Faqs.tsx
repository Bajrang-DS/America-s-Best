import * as React from "react";
import { useState, useEffect } from "react";
import AccordionItem from "./AccordianItem";



export default function Faq(props: any) {
  const [current, setCurrent] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [faqId, setFaqId] = useState(null);
  const [faqClass, setFaqClass] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  let preExpandedarr = [];

  if (props.c_faqs?.length > 0) {
    props.c_faqs.map((e: any, i: Number) => {
      if (i == 0) {
        preExpandedarr = [e];
      }
    });
  }
  const isShowContent = (e: any) => {
    setFaqId(e.currentTarget.id);

    if (isShow) {
      setIsShow(false);
      setFaqClass("");
    } else {
      setIsShow(true);
      setFaqClass("opened");
    }
  };
  function setclass(e: any) {
    setCurrent(e.target.id);
  }
  const renderedQuestionsAnswers = props.c_faqs?.map((item: any, index: any) => {
    const showDescription = index === activeIndex ? "current" : "hidden";
    const background = index === activeIndex ? "active" : "";
    const fontWeightBold = index === activeIndex ? " font-weight-bold  py-0 mt-2" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        background={background}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <>
      <div className="FAQ FAQ--ace Anchor">

        <div className="FAQ-container">
          <div className="FAQ-titleContainer">
            <h2 className="FAQ-title">
              {props.c_faqtitle}
            </h2>
            <div className="FAQ-subtitle">
              {props.c_faqsubtitle}
            </div>
          </div>
          <div className="FAQ-list">
            {renderedQuestionsAnswers}
            </div>
        </div>
      </div>
    </>
  );
}