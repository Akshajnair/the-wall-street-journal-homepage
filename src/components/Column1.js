import React, { useEffect, useState } from "react";
import axios from "axios";
import loadinganimation from "./assets/Spinner.svg";

export default function Column1(props) {
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
        params: props.config.column1,
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
  // 1st element of coloumn 1
  function headline() {
    let time =
      new Date(news.articles[0].publishedAt).getHours() +
      " : " +
      new Date(news.articles[0].publishedAt).getMinutes();
    return (
      <article
        className="WSJTheme--story--XB4V2mLz WSJTheme--story-padding--1gRL3tuf WSJTheme--border-bottom--s4hYCt0s "
        data-id="SB11469827668353884216304587518362400154578"
      >
        <div className="WSJTheme--headline--7VCzo7Ay ">
          <h3 className="WSJTheme--headline--unZqjb45 reset WSJTheme--heading-1--38k38q8O typography--serif-display--ZXeuhS5E ">
            <a className="" href={news.articles[0].url}>
              <span className="WSJTheme--headlineText--He1ANr9C ">
                {news.articles[0].title + " | " + news.articles[0].source.name}
              </span>
            </a>
          </h3>
        </div>
        <p className="WSJTheme--summary--lmOXEsbN typography--serif--1CqEfjrc ">
          <span className="WSJTheme--summaryText--2LRaCWgJ ">
            {news.articles[0].description}
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
              <span className="WSJTheme--timestamp--22sfkNDv WSJTheme--red-timestamp--3XXMCEqD WSJTheme--red-timestamp--3XXMCEqD ">
                {time}
              </span>
            </span>
          </span>
        </p>
      </article>
    );
  }
  //below the 1st elemnet in 1st column
  function subheadline() {
    return news.articles.map((element, index) => {
      let time =
        new Date(element.publishedAt).getHours() +
        " : " +
        new Date(element.publishedAt).getMinutes();
      if (index !== 0)
        return (
          <article
            key={index}
            className="WSJTheme--story--XB4V2mLz WSJTheme--story-padding--1gRL3tuf WSJTheme--border-bottom--s4hYCt0s "
            data-id="SB11469827668353884216304587518553178919214"
          >
            <div className="WSJTheme--headline--7VCzo7Ay ">
              <h3 className="WSJTheme--headline--unZqjb45 reset WSJTheme--heading-3--2z_phq5h typography--serif-display--ZXeuhS5E ">
                <a className="" href={element.url}>
                  <span className="WSJTheme--headlineText--He1ANr9C ">
                    {element.title + " | " + element.source.name}
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
      return null;
    });
  }
  //showing spinning animation while fetching
  if (loader === true) {
    return (
      <div className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-4--2Ng-GQLy ">
        <div style={{ width: "100%", textAlign: "center" }}>
          <img alt="" src={loadinganimation} style={{ width: "100px" }} />
        </div>
      </div>
    );
  } else
    return (
      <div className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-4--2Ng-GQLy ">
        {headline()}
        {subheadline()}
      </div>
    );
}
