import React from "react";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";
import Column4 from "./Column4";
import { newsconfig } from "./config";

export default function NewsBody() {
  return (
    <div className="style--grid--SxS2So51 style--full-width--105xgnPD style--large-grid--1Aj55Y0D ">
      <div className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-16--3PkqkhOO style--padding-left--2oKDp1LY style--padding-right--3ZOC7BEg ">
        <div className="style--grid--SxS2So51 style--full-width--105xgnPD style--padding-top--Nd9rJJR- styles--padding-top--2WzISCk5 style--margin-bottom--3uv3Nt9X style--border-top--2OfxgF4l styles--border-top--2GqG75pE ">
          <div className="style--column--1p190TxH style--column-top--3Nm75EtS style--column-12--1x6zST_y ">
            <main className="" id="main" role="main">
              <div className="style--grid--SxS2So51 style--margin-bottom--3uv3Nt9X ">
                <Column1 config={newsconfig} />
                <Column2 config={newsconfig} />
                <Column3 config={newsconfig} />
              </div>
              <div></div>
            </main>
          </div>
          <Column4 config={newsconfig} />
        </div>
      </div>
    </div>
  );
}
