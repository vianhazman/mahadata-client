import { StyledWrapperRanking, WrapperTitle, WrapperRanking } from "./styled";
import { TOGGLE } from "../../constants/MapConstants";
import React, { useState, useEffect } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
      <WrapperTitle>
        <h3>Peringkat</h3>
        {isOpen ? (
          <ExpandLessIcon onClick={() => setIsOpen(false)} />
        ) : (
          <ExpandMoreIcon onClick={() => setIsOpen(true)} />
        )}
      </WrapperTitle>
      {}

      {isLoading ? (
        "Loading..."
      ) : (
        <WrapperRanking isOpen={isOpen}>
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
    </StyledWrapperRanking>
  );
};

export default RankingContainer;
