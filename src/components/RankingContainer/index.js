import { StyledWrapperRanking, WrapperTitle, WrapperRanking } from "./styled";

import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const RankingContainer = ({ toggleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  // let toggleLegend =
  //   toggleData === "Mobilitas" ? LEGEND_MOBILITY : LEGEND_RATIO;
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
      <WrapperRanking isOpen={isOpen}>
        <div className="highest">
          <h5>Tertinggi</h5>
          <ol>
            <li>DKI Jakarta - 30.00%</li>
            <li>DKI Jakarta - 30.00%</li>
            <li>DKI Jakarta - 30.00%</li>
          </ol>
        </div>
        <div className="lowest">
          <h5>Terendah</h5>
          <ol>
            <li>Banten - 5.22%</li>
            <li>Banten - 5.22%</li>
            <li>Banten - 5.22%</li>
          </ol>
        </div>
      </WrapperRanking>
    </StyledWrapperRanking>
  );
};

export default RankingContainer;
