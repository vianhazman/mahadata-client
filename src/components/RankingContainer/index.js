import React, { useEffect, useState } from "react";
import { StyledWrapperRanking, WrapperRanking } from "./styled";

import { TOGGLE } from "../../constants/MapConstants";

const RankingContainer = ({
  toggle,
  toggleData,
  provinceRankData,
  districtRankData,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const data = toggle === TOGGLE.CITY ? districtRankData : provinceRankData;
  const type = toggleData === TOGGLE.MOBILITY ? "change" : "ratio";

  useEffect(() => {
    if (provinceRankData.length > 0 && districtRankData.length > 0) {
      setIsLoading(false);
    }
  }, [provinceRankData, districtRankData]);

  return (
    <StyledWrapperRanking isOpen={isOpen}>
      {/* <WrapperTitle>
        <h4>Peringkat</h4>
      </WrapperTitle> */}

      {isLoading ? (
        "Loading..."
      ) : (
        <WrapperRanking isOpen={isOpen}>
          <h4>Peringkat</h4>
          <div className="highest">
            <h5>Tertinggi</h5>
            <ol>
              {data[index][type].top.map((el, idx) => {
                const name = Object.keys(el)[0];
                return <li key={idx}>{`${name} ${el[name]}%`}</li>;
              })}
            </ol>
          </div>
          <div className="lowest">
            <h5>Terendah</h5>
            <ol>
              {data[index][type].bottom.map((el, idx) => {
                const name = Object.keys(el)[0];
                return <li key={idx}>{`${name} ${el[name]}%`}</li>;
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
