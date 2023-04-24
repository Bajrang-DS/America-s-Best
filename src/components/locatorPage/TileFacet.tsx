import {
    // Matcher and NumberRangeValue will be used in step 3
    Matcher,
    NumberRangeValue,
    useSearchActions,
    useSearchState,
} from "@yext/search-headless-react";
import classNames from "classnames";
import * as React from "react";

interface TileFacetProps {
    fieldId: string;
    displayName?: string;
}

const TileFacet = ({ fieldId, displayName }: TileFacetProps) => {
    const searchActions = useSearchActions();
    const facet = useSearchState((state) =>
        state.filters.facets?.find((f) => f.fieldId === fieldId)
    );

    const handleFacetClick = (
        value: string | number | boolean | NumberRangeValue,
        selected: boolean,
        matcher = Matcher.Equals
    ) => {
        searchActions.setFacetOption(fieldId, { matcher, value }, selected);
        searchActions.executeVerticalQuery();
    };

    const [FacetValue, setFacetValues] = React.useState('off');
    const [FacetValue1, setFacetValues1] = React.useState('transform rotate-180');

    const myFunction = (x: any) => {
        if (FacetValue == "off") {
            setFacetValues("on");
        } else {
            setFacetValues("off");
        }
        if (FacetValue1 == "transform rotate-180") {
            setFacetValues1("");
        } else {
            setFacetValues1("transform rotate-180");
        }

    }


    // component returns null if the facet isn't found in the search state or has no options for a partiaular set of results
    return facet && facet.options.length > 0 ? (
        <>

            <button onClick={myFunction} className="font-bold facet-heading">
                {displayName ?? facet.displayName}
                <svg viewBox="0 0 12 8" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className={"w-3 text-gray-400  float-right " + FacetValue1}><path d="M1.33341 6.5L6.00008 1.83333L10.6667 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button><br />

            <div style={{}} className={"custom-facets mb-4 " + FacetValue}>

                <div key={facet.fieldId} className="w-72 mt-6 flex flex-wrap">

                    {facet.options.map((o, i) => (

                        <div
                            key={`${fieldId}_${i}`}
                            className={classNames(
                                "mr-3 mb-3 border border-toast-orange md:hover:bg-[#FFB563]",
                                // styling to change the background color of the tile based on if it's selected or not
                                {
                                    "bg-[#FFB563]": o.selected,
                                    "bg-[#FFEEDB]": !o.selected,
                                }
                            )}
                            // handleFacetClick will trigger on click to reverse the selected state of the facet option
                            onClick={() => handleFacetClick(o.value, !o.selected)}
                        >

                            <input type="checkbox" id={`${fieldId}_${i}`} className="w-3.5 h-3.5 form-checkbox cursor-pointer border border-gray-300 rounded-sm text-primary focus:ring-primary" />
                            <label className="facet-label cursor-pointer" htmlFor={`${fieldId}_${i}`}>
                                <div className="px-3 text-sm inline-block">
                                    {/* Each facet option contains a display name and count */}
                                    <span className="mr-0.5">{o.displayName}</span>
                                    <span className="text-xs">{`(${o.count})`}</span>
                                </div></label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    ) : null;
};

export default TileFacet;