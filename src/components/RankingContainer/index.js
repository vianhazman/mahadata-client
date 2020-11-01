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
  const [rankingData, setRankingData] = useState({});
  const data = toggle === TOGGLE.CITY ? districtRankData : provinceRankData;
  const type = toggleData === TOGGLE.MOBILITY ? "change" : "ratio";
  useEffect(() => {
    if (provinceRankData.length > 0 && districtRankData.length > 0) {
      setIsLoading(false);
      var ranking = {
        highest:
          toggleData === TOGGLE.MOBILITY
            ? data[index][type].bottom
            : data[index][type].top.reverse(),
        lowest:
          toggleData === TOGGLE.MOBILITY
            ? data[index][type].top
            : data[index][type].bottom.reverse(),
      };
      setRankingData(ranking);
    }
  }, [provinceRankData, districtRankData, data, index, toggleData, type]);

  return (
    <StyledWrapperRanking>
      {isLoading ? (
        "Loading..."
      ) : (
        <WrapperRanking>
          <h4>Peringkat {RANKING_TITLE[type].MAIN}</h4>
          <div className="highest">
            <h5>Terbaik ({RANKING_TITLE[type].TOP})</h5>
            <ol>
              {rankingData.highest.map((el, idx) => {
                const name = Object.keys(el)[0];
                idx = idx + 1;
                return <li seq={idx}>{`${name} ${el[name]}%`}</li>;
              })}
            </ol>
          </div>
          <div className="lowest">
            <h5>Terburuk ({RANKING_TITLE[type].BOTTOM})</h5>
            <ol>
              {rankingData.lowest.map((el, idx) => {
                const name = Object.keys(el)[0];
                idx = toggle === TOGGLE.PROVINCE ? idx + 32 : idx + 513;
                return <li seq={idx}>{`${name} ${el[name]}%`}</li>;
              })}
            </ol>
          </div>
        </WrapperRanking>
      )}
      <h5 style={{ fontWeight: "normal" }}>
        Data pergerakan diperoleh dari{" "}
        <span style={{ fontWeight: "bold" }}>Facebook Data for Good</span>
      </h5>
    </StyledWrapperRanking>
  );
};

export default RankingContainer;
