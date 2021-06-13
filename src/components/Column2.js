import React, { useEffect, useState } from "react";
import axios from "axios";
import loadinganimation from "./assets/Spinner.svg";

export default function Column2(props) {
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
        url: "https://gnews.io/api/v4/top-headlines?",
        params: props.config.column2,
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
  function randomimage(element, index) {
    if (index === 0) {
      return <img alt="" src={element.image} width="100%" />;
    }
    let rand = Math.floor(Math.random() * 20);
    if (index === rand || index === rand + 1 || index === rand - 1) {
      return <img alt="" src={element.image} width="100%" />;
    }
  }
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
          data-id="SB11469827668353884216304587517390791213140"
        >
          {randomimage(element, index)}
          <div className="WSJTheme--headline--7VCzo7Ay ">
            <h3 className="WSJTheme--headline--unZqjb45 reset WSJTheme--heading-3--2z_phq5h typography--serif-display--ZXeuhS5E ">
              <a className="" href={element.url}>
                <span className="WSJTheme--headlineText--He1ANr9C ">
                  {element.title}
                </span>
              </a>
            </h3>
          </div>
          <p className="WSJTheme--summary--lmOXEsbN typography--serif--1CqEfjrc ">
            <span className="WSJTheme--summaryText--2LRaCWgJ ">
              {element.description}
            </span>
            <span className="WSJTheme--stats--2HBLhVc9 ">
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
          </p>
        </article>
      );
    });
  }
  if (loader === true) {
    return (
      <div className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-5--3ObF0ws7 style--border-left--1FbHaAV_ style--border-right--3pLIaDzb ">
        <div style={{ width: "100%", textAlign: "center" }}>
          <img alt="" src={loadinganimation} style={{ width: "100px" }} />
        </div>
      </div>
    );
  } else
    return (
      <div className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-5--3ObF0ws7 style--border-left--1FbHaAV_ style--border-right--3pLIaDzb ">
        {printnews()}
      </div>
    );
}
