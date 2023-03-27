import * as React from "react";
// import gallerybg from "../../images/bg-service.jpg"

const PhotoGallery = (props: any) => {
  const { c_galleryitems, c_galleryimage } = props;

  // console.log(props.c_galleryimage,"bajrang")

  return (
    <>

      <div className="Categories Anchor">
        <div className="Categories-container">
          <h2 className="Categories-title">{props.c_galleryitems?.title}</h2>
          <ul className="Categories-list l-row">
            {props.c_galleryimage.map((items: any) => {
              return (
                <>
                  <li className="Categories-listItem l-col-sm-6-down l-col-md-3-up">
                    <div className="Category">
                      <a className="Category-link" href="#">
                        <div className="Category-imageWrapper">
                          <img className="shop-gallery" src={items.image?.url} alt="" />
                        </div>
                        <span className="Category-name">{items.cta?.label}</span>
                      </a>
                    </div>
                  </li>
                </>
              )
            }
            )}
          </ul>
          <div className="Categories-ctaWrapper"><a className="Categories-cta" href="#" data-ya-track="cta">{props.c_galleryitems?.shopcta?.label}</a></div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;