import {
  Matcher,
  SelectableFilter,
} from "@yext/search-headless-react";
import { useSearchActions } from "@yext/search-headless-react";
import { useEffect, useState, useRef } from 'react';
import * as React from "react";
import { LocationBias, Pagination } from "@yext/search-ui-react";
import {
  googleMapsConfig,
} from "../../config/answersHeadlessConfig";
import { Location } from "../../types/search/locations";
import LocationCard from "./LocationCard";
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import { GoogleMaps } from "./GoogleMaps";
import { useSearchState, Result } from "@yext/search-headless-react";
import Geocode from "react-geocode";
import Address from "../commons/Address";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import $ from "jquery";
import Banner from "../locationDetail/banner";
import LoadingSpinner from "../commons/LoadingSpinner";
import { breadcrumbhome, center_latitude, center_longitude, googleApikey, search_icn, UseMylocationsvg } from "../../../sites-global/global";
import { StaticData } from "../../../sites-global/staticData";
import { Wrapper } from "@googlemaps/react-wrapper";
import FilterSearch from "../locatorPage/FilterSearch";
import ViewMore from "./ViewMore";
import VerticalResults from "../VerticalResults";
import ResultsCount from "./ResultsCount";
import useFetchResults from "../../hooks/useFetchResults";
// import { Link } from "@mui/material";
import { AnswerExperienceConfig } from "../../config/answersHeadlessConfig";
import Footer from "../layouts/footer";
import {
  StandardFacets,
} from "@yext/search-ui-react";

var params1: any = { latitude: center_latitude, longitude: center_longitude }
var mapzoom = 8;
var centerLatitude = center_latitude;
var centerLongitude = center_longitude;

const SearchLayout = (props: any): JSX.Element => {
  const [zoomlevel, setZoomlevel] = React.useState(7);
  const [modelopen, setModelOpen] = useState(false);
  const [userShareLocation, setUserShareLocation] = useState(false);
  const [isUserLocation, setIsUserLocation] = React.useState<boolean>(false);
  const [isLoading, setIsloading] = React.useState(true);
  const [check, setCheck] = useState(false);
  type FilterHandle = React.ElementRef<typeof FilterSearch>;
  const filterRef = useRef<FilterHandle>(null);
  const locationResults = useFetchResults() || [];
  const locationinbuit = useSearchState(state => state.vertical?.results) || [];
  const alternateresult = useSearchState(state => state.vertical?.results?.length) || 0;
  const [displaymsg, setDisplaymsg] = useState(false);
  const [filterValue, setFilterValue] = useState([]);
  const [facetData, setFacetData] = useState("");
  let googleLib = typeof google !== "undefined" ? google : null;
  const [inputvalue, setInputValue] = React.useState('');
  // const [inputvalue, setInputValue] = React.useState('');
  const [allowlocation, setallowLocation] = React.useState('');
  const [newparam, SetNewparam] = React.useState({
    latitude: 0,
    longitude: 0
  });
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [offset, setOffset] = React.useState(0);
  const searchActions = useSearchActions();
  const state = useSearchState(s => s) || [];
  const [optionclick, setOptionClick] = useState(true);

  const loading = useSearchState(s => s.searchStatus.isLoading);

  var searchKey: any;
  var target;
  // var {_site} =document;
  var firstTimeRunners = true;

  const [FacetValue, setFacetValues] = useState('off');
  const myFunction = (x: any) => {
    if (FacetValue == "off") {
      setFacetValues("on");
    } else {
      setFacetValues("off");
    }
  }

  const FirstLoad = () => {


    setCheck(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const params: any = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          params1 = params;
          SetNewparam(params1);

          mapzoom = 3;
          const locationFilter: SelectableFilter = {
            selected: true,
            fieldId: "builtin.location",
            value: {
              lat: params.latitude,
              lng: params.longitude,
              radius: 100000000000,
            },

            matcher: Matcher.Near,
          };

          // searchActions.setOffset(0)
          searchActions.setStaticFilters([locationFilter]);
          searchActions.setUserLocation(params1);
          searchActions.setVerticalLimit(AnswerExperienceConfig.limit);
          searchActions.executeVerticalQuery();
        },
        function (error) {
          if (error.code == error.PERMISSION_DENIED) {
          }
        }
      );
    }
    params1 = {
      latitude: 38.573936,
      longitude: -92.603760,
    };
    SetNewparam(params1); // to bound result in 100 km
    // mapzoom=8;
    const locationFilter: SelectableFilter = {
      selected: true,
      fieldId: "builtin.location",
      value: {
        lat: params1.latitude,
        lng: params1.longitude,
        radius: 10000000,
      },

      matcher: Matcher.Near,
    };

    // searchActions.setOffset(0)
    searchActions.setStaticFilters([locationFilter]);
    searchActions.setUserLocation(params1);
    searchActions.setVerticalLimit(AnswerExperienceConfig.limit);
    searchActions.executeVerticalQuery();
    setTimeout(() => {
      setIsloading(false);
      $("body").removeClass("overflow-hidden");
    }, 3100);
  };


  // const onClick = () => {
  //   setZoomlevel(4);
  //   if (navigator.geolocation) {
  //     const error = (error: any) => {
  //       if (error.code == 1) {
  //         setallowLocation(props.allowYourLocationMessage);
  //         setModelOpen(true);
  //       }
  //       setUserShareLocation(false);
  //     };
  //     navigator.geolocation.getCurrentPosition(
  //       function (position) {
  //         setIsUserLocation(true);
  //         Geocode.setApiKey(googleMapsConfig.googleMapsApiKey);
  //         Geocode.fromLatLng(
  //           position.coords.latitude,
  //           position.coords.longitude
  //         ).then(
  //           (response: any) => {
  //             if (response.results[0]) {
  //               if (inputRef.current) {
  //                 inputRef.current.value =
  //                   response.results[0].formatted_address;
  //               }

  //               let pacInput: any = document?.getElementById("pac-input");
  //               if (pacInput) {
  //                 pacInput.value = response.results[0].formatted_address;
  //                 pacInput.focus();
  //               }

  //               setallowLocation("");
  //               searchActions.setUserLocation({
  //                 latitude: position.coords.latitude,
  //                 longitude: position.coords.longitude,
  //               });
  //             }
  //           },
  //           (error: any) => {
  //             console.error(error);
  //             setCheck(false);
  //           }
  //         );
  //         searchActions.setUserLocation({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //         searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //         searchActions.setOffset(0);
  //         searchActions.setVerticalLimit(AnswerExperienceConfig.limit);
  //         searchActions.executeVerticalQuery();
  //       },
  //       error,
  //       {
  //         timeout: 10000,
  //       }
  //     );
  //   }
  // };


  const onClick = () => {
    
    getCoordinates('');
    if (navigator.geolocation) {
      const error = (error: any) => {

        if (error.code == 1) {
          setallowLocation('Please allow your Location')

        }
      };
      navigator.geolocation.getCurrentPosition(function (position) {
        Geocode.setApiKey(googleApikey);
        var inputformat = '';

        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude).then(
            (response: any) => {
              if (response.results[0]) {

                filterRef.current && filterRef.current.setInputValue(response.results[0].formatted_address);

                let pacInput: any = document?.getElementById("pac-input");
                if (pacInput) {
                  pacInput.value = response.results[0].formatted_address;
                  pacInput.focus();
                }

                setallowLocation('');
              }
            },
            (error: any) => {
              console.error(error);
              setCheck(false);
            }
          );

        let params = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };

        mapzoom = 3;
        searchActions.setVertical('locations');
        searchActions.setUserLocation(params);
        searchActions.setOffset(0);
        searchActions.executeVerticalQuery();

      }
        ,
        error, {
        timeout: 10000,
      }
      );
    }
 

    // let searchKey = document.getElementsByClassName('FilterSearchInput');
    // let Search = (searchKey[0].value);
    // searchActions.setOffset(0);
   
    // if (Search?.length) {
    //   setInputValue('');
    //   getCoordinates('');

    // }
  }

  const Findinput = () => {
    let searchKey = document.getElementsByClassName('FilterSearchInput');
    let Search = (searchKey[0].value);

    setInputValue('');
    if (searchKey[0].value != "") {
      getCoordinates(Search);

    }
    // if (locationinbuit.length == 0) {
    //   setDisplaymsg(true)

    // } else {
    //   setDisplaymsg(false);

    // }
  }
  // const Demoinput = (index: number) => {        //to search from any button
  //   getCoordinates("arnold");
  //   var target =
  //     document.querySelector('#react-collapsed-panel-1:nth-of-type(2)').click();


  // }



  const Findinput2 = () => {
    let Search = inputRef.current?.value || "";
    let locationHub: any = []
    // alert("hello")
    if (Search.length == 0) {
      console.log("bajrang")
      const bounds = new google.maps.LatLngBounds();
      bounds.extend({
        lat: googleMapsConfig.centerLatitude,
        lng: googleMapsConfig.centerLongitude,
      });
      searchActions.setVertical("locations");
      searchActions.setQuery("");

      if (filterValue.length > 0) {
        // setShowFilterEmptyMsg(true);
        let location: SelectableFilter = {
          selected: true,
          fieldId: "c_relatedAdvantages.name",
          value: filterValue[0],
          matcher: Matcher.Equals,
        };
        locationHub.push(location);

        if (filterValue.length > 1) {
          let location2: SelectableFilter = {
            selected: true,
            fieldId: "c_glassdriveAdvantages",
            value: filterValue[1],
            matcher: Matcher.Equals,
          };
          locationHub.push(location2);
        }

        if (facetData != "") {
          let facet_core: SelectableFilter = {
            selected: false,
            fieldId: "c_typesDeVéhicules",
            value: facetData,
            matcher: Matcher.Equals,
          };
          locationHub.push(facet_core);
        }
      } else {
        locationHub = []
      }
      searchActions.setStaticFilters(locationHub);

      searchActions.setOffset(0);
      searchActions.setVerticalLimit(AnswerExperienceConfig.limit);
      searchActions.executeVerticalQuery();
      getCoordinates(Search);
    }
  };

  const handleInputValue = () => {
    setInputValue('');
  }
  const handleSetUserShareLocation = (value: any, userShareStatus: boolean) => {
    console.log(value, center_latitude, center_longitude, "value");
    setInputValue(value);
    if (userShareStatus) {
      setCenterLatitude(center_latitude);
      setCenterLongitude(center_longitude);
    }
  }


  function getCoordinates(address: String) {
    setInputValue('');


    setCheck(true);
    // console.log(searchActions,"searchActions")
    searchActions.setQuery(address);
    searchActions.setUserLocation(params1);
    searchActions.setOffset(0);
    searchActions.executeVerticalQuery();

  }

  const addClass = () => {

    document.body.setAttribute("class", "mapView");
    // setActive('')


  }

  useEffect(() => {
    if (locationinbuit.length > 0) {
      setDisplaymsg(false);
    }
  }, [locationinbuit])


  useEffect(() => {
    // console.log("yes rerender")
    locationResults.map((result: any, index: number) => {
      const resultelement = document.querySelectorAll(
        `.result-list-inner-${index + 1}`
      );
      for (let index = 0; index < resultelement.length; index++) {
        if (resultelement[index].classList.contains("active") || resultelement[index].classList.contains("fixed-hover")) {
          resultelement[index].classList.remove("active", "fixed-hover");
        }
      }
    });
  }, [loading])


  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete>();


  useEffect(() => {

    // to set value header search input value to locator search while google suggestion.
    let params = (new URL(window.location.href)).searchParams;
    let addresssearch = params.get("inputStoreValue");
    if (addresssearch) {
      getCoordinates(addresssearch);
      document.getElementById("pac-input")?.setAttribute("value", addresssearch);
    }


    if (googleLib && typeof google.maps === "object") {
      let pacInput: any = document?.getElementById("pac-input");
      let options: any = {
        options: {
          types: ["geocode"],
          componentRestrictions: { country: params1 },
          strictBounds: false,
          fields: ["address_components", "geometry", "icon", "name"],
        },
      };
      const autoComplete = new google.maps.places.Autocomplete(
        pacInput,
        options
      );
      if (autoComplete) {
        function pacSelectFirst(input: HTMLInputElement) {
          var _addEventListener = input.addEventListener;

          function addEventListenerWrapper(type: string, listener: any) {
            if (type == "keydown") {
              var orig_listener = listener;

              listener = function (event: { which: number }) {
                var suggestion_selected = $(".pac-item-selected").length > 0;

                if (
                  (event.which == 13 || event.which == 9) &&
                  !suggestion_selected
                ) {
                  var simulated_downarrow = $.Event("keydown", {
                    keyCode: 40,
                    which: 40,
                  });
                  orig_listener.apply(input, [simulated_downarrow]);
                }

                orig_listener.apply(input, [event]);
              };
            }

            _addEventListener.apply(input, [type, listener]);
          }

          if (input.addEventListener) {
            input.addEventListener = addEventListenerWrapper;
          }
        }

        setAutocomplete(autoComplete);
        pacSelectFirst(pacInput);
        $("#search-location-button")
          .off("click")
          .on("click", function () {
            var keydown = document.createEvent("HTMLEvents");
            keydown.initEvent("keydown", true, false);
            Object.defineProperty(keydown, "keyCode", {
              get: function () {
                return 13;
              },
            });
            Object.defineProperty(keydown, "which", {
              get: function () {
                return 13;
              },
            });
            pacInput.dispatchEvent(keydown);
          });

        google.maps.event.addListener(
          autoComplete,
          "place_changed",
          function () {
            const searchKey: any = pacInput.value;
            if (searchKey) {
              getCoordinates(searchKey);
            }
          }
        );
      }
    }
    return () => {
      if (autocomplete) {
        autocomplete.unbindAll();
      }
    };
  }, [googleLib]);


  useEffect(() => {
    if (firstTimeRunners) {
      firstTimeRunners = false;
      FirstLoad();
    }
    // let params = (new URL(window.location.href)).searchParams;
    // let addresssearch = params.get("inputStoreValue");
    // // getCoordinates(addresssearch);
    // if (addresssearch) {
    //   setInputValue(addresssearch);
    //   getCoordinates(addresssearch);
    //   document.getElementById("pac-input")?.setAttribute("value", addresssearch);
    // }

    // function to set value header search input value to locator search while google suggestion.

    // function updateVal() {
    //   if (addresssearch != null) {
    //     document.getElementById("pac-input").setAttribute("value", addresssearch);
    //   }
    // }
    // setTimeout(updateVal, 1000)
  }, [])

  return (
    <>
      <Wrapper
        apiKey={googleMapsConfig.googleMapsApiKey}
        libraries={["places", "geometry"]}
      >
        {/* {loader} */}
        <div className="city-breadcrumb">
          <div className="breadcrumb">
            <div className="container-custom">
              <ul>
                <li>
                  <a href="#" className="home"> Home</a>
                </li>
                <li>{StaticData.locator_breadcrumb}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="locator-main">
          {allowlocation.length > 0 ?
            <div className="for-allow">{allowlocation}</div>
            : ''}
          <div className="search-bx">
            <div className="location-with-filter">
              <h1 className="">{StaticData.FindLocationtext}</h1>
            </div>
            {/* <button onClick={Demoinput} className="btn">    
            Demo
          </button><br /> */}

            <div className="search-field">

              <input
                id="pac-input"
                type="text"
              
                ref={inputRef}
                placeholder="Search with Yext or enter address..."
                className="text-sm bg-white outline-none h-9 w-full p-2 rounded-md border border-gray-300 focus:border-blue-600 FilterSearchInput"
                onChange={() => Findinput2()}
               
                onKeyDown={(evt) => {
                  if (
                    evt.key === "Backspace" ||
                    evt.key === "x" ||
                    evt.key === "Delete"
                  ) {
                    Findinput2();
                  }
                }}

              />
              <button
                className="search-btn"
                aria-label="Search bar icon"
                id="search-location-button" onClick={Findinput}>
                <span><b>
                  GO</b>
                </span>
              </button>


              <FilterSearch
                ref={filterRef}
                displaymsg={displaymsg}
                setDisplaymsg={setDisplaymsg}
                customCssClasses={{
                  filterSearchContainer: "m-2 w-full",
                  inputElement: "FilterSearchInput pr-[90px]",
                  optionsContainer: "options"
                }}
                inputvalue={inputvalue}
                setSearchInputValue={setInputValue}
                params={params1}
                searchOnSelect={true}
              // searchFields={[
              //   {
              //     entityType: "location",
              //     fieldApiName: "address.line1",

              //   },
              //   {
              //     entityType: "location",
              //     fieldApiName: "address.postalCode",

              //   },
              //   {
              //     entityType: "location",
              //     fieldApiName: "name",

              //   },
              //   {
              //     entityType: "location",
              //     fieldApiName: "address.city",

              //   },
              //   {
              //     entityType: "location",
              //     fieldApiName: "address.region",

              //   },
              //   {
              //     entityType: "location",
              //     fieldApiName: "address.countryCode",

              //   },
              // ]}

              // handleInputValue={handleInputValue}
              // handleSetUserShareLocation={handleSetUserShareLocation}
              />
            </div>
            <div className="fliter-sec">
              <button className="useMyLocation" title="Search using your current location!" id="useLocation" onClick={onClick}>
                <span style={{ color: "blue" }} className="icon" dangerouslySetInnerHTML={{ __html: UseMylocationsvg }} />

                <span style={{ color: "blue" }} className="underline hover:no-underline"> {StaticData.Usemylocation}</span>
              </button>


              <ResultsCount
                customCssClasses={{ container: "mx-2 text-dark-gray text-right w-[50%]" }}
              />

            </div>
            <div className="facet-data">


              <div className="facet-button-class" onClick={myFunction}>
                Apply Filter
              </div>
              <div className={"fliter-sec filter-facet " + FacetValue} id="bg-search">
                <StandardFacets
                  customCssClasses={{ container: "filter-items" }}
                  defaultExpanded={false}
                  collapsible={true}

                ></StandardFacets>
              </div>

            </div>


          </div>
          <div className="mobile-btns">
            <div className="button-bx">

              <a className="btn listBtn" href="javascript:void(0);" onClick={() => {
                document.body.classList.remove('mapView')

              }}> List View</a>
              <a className="btn mapBtn" href="javascript:void(0);" onClick={addClass}> Map View</a>
            </div>
          </div>
          <div className=" map-section ">
            <GoogleMaps
              apiKey={googleApikey}
              centerLatitude={centerLatitude}
              centerLongitude={centerLongitude}
              check={true}
              defaultZoom={mapzoom}
              showEmptyMap={true}
            />
          </div>

          <div className="left-listing">

            <PerfectScrollbar >

              <div>

                <VerticalResults
                  displayAllOnNoResults={false}
                  CardComponent={LocationCard}
                  locationResults={locationResults}


                //  CardComponent={LocationCard}
                />


                {/* {locationinbuit && locationinbuit.length <= 0 ?
                <div className="browse-dir">
                  <a className="underline " href='/us.html'>Use the search above or <span className="font-second-main-font"> browse our directory</span></a>
                </div> : ''} */}
                <div className="button-bx">
                  {/* <ViewMore className={" btn notHighlight lg:!w-[132%] !mb-2 button view-more"} idName={"view-more-button"} buttonLabel={"View More"} /> */}
                  <div className="pagination-bottom"> <Pagination /> </div>
                </div>

              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SearchLayout;


