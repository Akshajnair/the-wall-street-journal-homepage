import React, { useEffect, useState } from "react";
import axios from "axios";
import loadinganimation from "./assets/Spinner.svg";

export default function Column3(props) {
  const [news, setNews] = useState(() => {
    return {};
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let cancel = () => {
      return null;
    };
    // avoiding making request multiple time on every render
    if (loader === true) {
      //fetching from Gnews API
      axios({
        method: "GET",
        url: "https://gnews.io/api/v4/top-headlines?",
        params: props.config.column3,
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
    // useEffect cleanup
    return () => {
      cancel();
    };
  });

  function printnews() {
    return news.articles.map((element, index) => {
      let time =
        new Date(element.publishedAt).getHours() +
        " : " +
        new Date(element.publishedAt).getMinutes();
      return (
        <article
          key={index}
          className="WSJTheme--story--XB4V2mLz WSJTheme--story-padding--1gRL3tuf WSJTheme--media-margin-bottom--1bIRFuDR WSJTheme--border-bottom--s4hYCt0s "
          data-id="SB11469827668353884216304587518810029303608"
        >
          <div
            className="WSJTheme--image--1RvJrX_o WSJTheme--media--2zsLCB98 WSJTheme--image-above--pBsXD1hr "
            style={{ width: "220px", maxHeight: "150px" }}
          >
            <a
              className=""
              href="https://www.wsj.com/articles/biden-meets-with-g-7-leaders-in-england-hoping-to-repair-frayed-ties-11623413082?mod=hp_lead_pos10"
              tabIndex="0"
            >
              <img
                alt={element.title}
                title={element.title}
                width="100%"
                className="WSJTheme--image--At42misj "
                src={element.image}
              />
            </a>
          </div>
          <div className="WSJTheme--headline--7VCzo7Ay ">
            <h3 className="WSJTheme--headline--unZqjb45 reset WSJTheme--heading-4--2dw6NZJL typography--serif-display--ZXeuhS5E ">
              <a className="" href={element.url}>
                <span className="WSJTheme--headlineText--He1ANr9C ">
                  <span className="">{element.title}</span>
                  <span className="WSJTheme--time-to-read--1uVnDiZs ">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="WSJTheme--clock-icon--1pt56K8O "
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
                        fill="#555"
                      ></path>
                      <path d="M9 9H5V8h3V4h1v5z" fill="#555"></path>
                    </svg>
                    <span className="WSJTheme--mins-to-read--3baxNBNG ">
                      {time}
                    </span>
                  </span>
                </span>
              </a>
            </h3>
          </div>
        </article>
      );
    });
  }
  //showing spinning animation while fetching
  if (loader === true) {
    return (
      <div className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-3--1XQk-WJX ">
        <div style={{ width: "100%", textAlign: "center" }}>
          <img alt="" src={loadinganimation} style={{ width: "100px" }} />
        </div>
      </div>
    );
  } else
    return (
      <div className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-3--1XQk-WJX ">
        {printnews()}
      </div>
    );
}
