import {
  Color,
  StyledWrapper,
  WrapperBox,
  WrapperTitle,
  WrapperLegend,
} from "./styled";

import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const LEGEND_MOBILITY = [
  { range: "70%", color: "rgb(3, 200, 252)" },
  { range: "", color: "rgb(3, 175, 252)" },
  { range: "", color: "rgb(3, 150, 252)" },
  { range: "", color: "rgb(3, 125, 252)" },
  { range: "", color: "rgb(3, 100, 252)" },
  { range: "", color: "rgb(3, 75, 252)" },
  { range: "", color: "rgb(3, 50, 252)" },
  { range: "", color: "rgb(3, 25, 252)" },
  { range: "0%", color: "rgb(252, 150, 3)" },
  { range: "", color: "rgb(252, 100, 3)" },
  { range: "10%", color: "rgb(252, 50, 3)" },
];
const LEGEND_RATIO = [
  { range: "0-5", color: "rgb(252, 50, 50)" },
  { range: "", color: "rgb(252, 100, 50)" },
  { range: "", color: "rgb(252, 100, 50)" },
  { range: "", color: "rgb(252, 150, 3)" },
  { range: "", color: "rgb(252, 200, 3)" },
  { range: "", color: "rgb(252, 250, 3)" },
  { range: "", color: "rgb(252, 180, 3)" },
  { range: "", color: "rgb(15, 250, 250)" },
  { range: "", color: "rgb(15, 200, 250)" },
  { range: "46-50", color: "rgb(15, 150, 250)" },
];

const LegendContainer = ({ toggleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  let toggleLegend =
    toggleData === "Mobilitas" ? LEGEND_MOBILITY : LEGEND_RATIO;
  return (
    <StyledWrapper isOpen={isOpen}>
      <WrapperTitle>
        <h3>Legend</h3>
        {isOpen ? (
          <ExpandMoreIcon onClick={() => setIsOpen(false)} />
        ) : (
          <ExpandLessIcon onClick={() => setIsOpen(true)} />
        )}
      </WrapperTitle>
      <WrapperLegend isOpen={isOpen}>
        {toggleLegend.map((el, idx) => (
          <WrapperBox key={idx}>
            <Color color={el.color} />
            <h6>{el.range}</h6>
          </WrapperBox>
        ))}
        <small>
          Persentase merepresentasikan perubahan {toggleData.toLowerCase()} pada
          suatu daerah dibandingkan dengan Bulan Februari
        </small>
      </WrapperLegend>
    </StyledWrapper>
  );
};

export default LegendContainer;
