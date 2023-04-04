import * as React from "react";



const Header = (props: any) => {
  const { c_middleHeader, c_topbar, c_leftheader } = props;


  return (
    <>
      <header>
        <div className="header" id="header">

          {/* topper  */}
          <div className="Header-topper">
            <div className="Header-topper-wrap">
              <div className="Header-bannerText">{props._site?.c_topbar.text}</div>
              <a className="topper-bannerlink" href="#">
                <span className="Header-linktext">{props._site?.c_topbar.cta.label}</span>
              </a>
            </div>
          </div>
          {/* middle header */}
          <div className="Header-containerWrapper Header-containerWrapper---middle">
            <div className="Header-container">
              <div className="Header-wrapper Header-wrapper--middle">
                <div className="Header-logoWrapper">
                  <a className="Header-logoLink" href="#" data-ya-track="logo" id="brand-logo">
                    <img className="Header-logo" src={props?._site?.c_middleHeader.image.url} alt="" />
                  </a>
                </div>
                <div className="Header-searchBarAndCtasWrapper">
                  <div className="Header-searchBarWrapper">
                    <a className="Header-searchLabelText" href="search"><img className="location-logo" src={props?._site?.c_middleHeader.icon.url} alt="" /></a>
                    <form method="get" id="HeaderSearchForm" className="search Header-form" action="https://master-almost--alive--badger-sbx-pgsdemo-com.sbx.preview.pagescdn.com/">
                      <div className="Header-searchBar">
                        <input placeholder="Search by City, State, or ZIP code" className="search-input Header-input" type="text" name="inputStoreValue" id="HeaderSearchInput" required />
                        <button type="submit" className="search-button Header-submit" data-ya-track="search">
                          <span className="Header-submitLabel">FIND A STORE</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="Header-links Header-links--ctas">
                    <div className="Header-linkWrapper Header-linkWrapper--ctas">
                      <a className="Header-link Header-link--ctas" href="#" data-ya-track="cta1">
                        <span className="Header-linktext">SCHEDULE AN EXAM</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Header-containerWrapper Header-containerWrapper--bottom">
            <div className="Header-container">
              <div className="Header-wrapper Header-wrapper--bottom">

                <div className="l-hidden-xs l-hidden-sm flex gap-[30rem]">
                  <div className="Header-links Header-links--main">
                    {props._site?.c_lowerHeader.menus.map((item: any) =>
                      <div className="Header-linkWrapper Header-linkWrapper--main">
                        <a className="Header-link Header-link--main" href="#" data-ya-track="mainLink1">
                          <span className="Header-linktext">{item.label}</span>
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="c-main-nav__utility">
                    <div className="m-nav-search m-icon-dropdown dropdown js-autocomplete-search">
                      {props._site?.c_leftheader.map((image: any) =>

                        <a href="#" type="button" className="border-0 m-nav-search__trigger a-icon m-icon-dropdown__icon d-none d-lg-flex open" aria-haspopup="true" aria-expanded="false">
                          <span className="icon-search a-icon_icon icon"></span>
                          <img src={image.icon.url} alt="" className="icon-search-image" width="20" height="20" />
                          <span className="label-text">{image.text}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
