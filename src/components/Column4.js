import React, { useEffect, useState } from "react";
import axios from "axios";
import loadinganimation from "./assets/Spinner.svg";

export default function Column4(props) {
  const [news, setNews] = useState(() => {
    return {};
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let cancel = () => {
      return null;
    };
    if (loader === true) {
      axios({
        method: "GET",
        url: "https://newsapi.org/v2/everything?q=opinion",
        params: props.config.column4,
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          setNews(res.data);
          setLoader(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
        });
    }
    return () => {
      cancel();
    };
  });
  function popularopinion() {
    if (loader === true)
      return (
        <div style={{ width: "100%", textAlign: "center" }}>
          <img alt="" src={loadinganimation} style={{ width: "100px" }} />
        </div>
      );
    else
      return news.articles.map((element, index) => {
        return (
          <li key={index} className="WSJTheme--popular--3OI9isfz ">
            <a href={element.url} className="WSJTheme--link--c8R_c_Vx ">
              <div className="WSJTheme--thumb--DOohBjR2 ">
                <div className="">
                  <img
                    src={element.urlToImage}
                    alt=""
                    height="62"
                    width="110"
                    className="WSJTheme--image--At42misj "
                  />
                </div>
              </div>
              <div className="WSJTheme--text--2yLVyzUM ">
                <h3 className="">
                  <span>Opinion: {element.title} </span>
                </h3>
              </div>
            </a>
          </li>
        );
      });
  }
  return (
    <div
      className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-4--2Ng-GQLy style--border-left--1FbHaAV_ "
      style={{ height: "1px" }}
    >
      <div className="" style={{ height: "100%" }}>
        <div
          className=""
          id="most-popular-opinion-articles"
          role="complementary"
          aria-label="Most Popular"
          tabIndex="-1"
        >
          <a
            className="style--strap--ND8Cuaip style--align-left--3iZ8c-pm "
            href="/"
            style={{ pointerEvents: "none" }}
          >
            <h2 className="style--label--13MlcFOP typography--sans-serif-narrow--tQEgavy2 style--size-small--1mrJTuBn style--icon-position-right--Sm9pTJ3p style--popular--1tPwo3ys style--opinion--331Kkovj style--padding-top--2IaMnkRi styles--padding-top--2WzISCk5 style--padding-bottom--1wuuBfkb styles--padding-bottom--DQ6elYpe ">
              <span className="style--label-text--2t4HDvAB ">
                Most Popular Opinion
              </span>
              <span className="style--icon--1WxxxS-r style--icon-position-right--Sm9pTJ3p "></span>
            </h2>
          </a>
          <ol className="WSJTheme--list-reset--3pR-r52l ">
            {popularopinion()}
          </ol>
        </div>
        <div className="" style={{ top: "80px", position: "sticky" }}>
          <div
            className="WSJTheme--adWrapper--39BAjA82 "
            style={{ minHeight: "250px", minWidth: "300px" }}
            id="wrapper-AD_RAIL3"
          >
            <div>
              <div
                id="AD_RAIL3"
                className="WSJTheme--adContainer--pp5ga5XN  "
                style={{ width: "300px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
