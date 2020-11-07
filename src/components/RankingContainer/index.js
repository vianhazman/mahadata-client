import { RANKING_TITLE, TOGGLE } from "../../constants/MapConstants";
import React, { useEffect, useState } from "react";
import { StyledWrapperRanking, WrapperRanking } from "./styled";

const RankingContainer = ({
  toggle,
  toggleData,
  provinceRankData,
  districtRankData,
  index,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const data = toggle === TOGGLE.CITY ? districtRankData : provinceRankData;
  const type = toggleData === TOGGLE.MOBILITY ? "change" : "ratio";
  useEffect(() => {
    if (provinceRankData.length > 0 && districtRankData.length > 0) {
      setIsLoading(false);
    }
  }, [provinceRankData, districtRankData, data, index, toggleData, type]);

  return (
    <StyledWrapperRanking>
      {isLoading ? (
        "Loading..."
      ) : (
        <WrapperRanking>
          <h5>Peringkat {toggleData.TITLE_2}</h5>
          <div className="highest">
            <h5>Terbaik ({RANKING_TITLE[type].TOP})</h5>
            <ol>
              {data[index][type].top.map((el, idx) => {
                const name = Object.keys(el)[0];
                idx = idx + 1;
                return <li seq={idx}>{`${name} ${el[name]}%`}</li>;
              })}
            </ol>
          </div>
          <div className="lowest">
            <h5>Terburuk ({RANKING_TITLE[type].BOTTOM})</h5>
            <ol>
              {data[index][type].bottom.map((el, idx) => {
                const name = Object.keys(el)[0];
                idx = toggle === TOGGLE.PROVINCE ? idx + 32 : idx + 513;
                return <li seq={idx}>{`${name} ${el[name]}%`}</li>;
              })}
            </ol>
          </div>
        </WrapperRanking>
      )}
      <h5 style={{ fontWeight: "normal", fontSize: "11px" }}>
        Data mobilitas diperoleh dari{" "}
        <span style={{ fontWeight: "bold" }}>
          {" "}
          <a href="https://dataforgood.fb.com/">Facebook Data for Good.</a>
        </span>
      </h5>
    </StyledWrapperRanking>
  );
};

export default RankingContainer;
