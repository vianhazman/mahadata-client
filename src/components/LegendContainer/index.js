import React from "react";
import { StyledWrapper, WrapperBox, Color } from "./styled";

const LEGEND = [
  { range: "< -70", color: "rgb(3, 200, 252)" },
  { range: "-70 sampai -59", color: "rgb(3, 175, 252)" },
  { range: " -60 sampai -49", color: "rgb(3, 150, 252)" },
  { range: " -50 sampai -39", color: "rgb(3, 125, 252)" },
  { range: " -40 sampai -29", color: "rgb(3, 100, 252)" },
  { range: " -30 sampai -19", color: "rgb(3, 75, 252)" },
  { range: "-20 sampai -9", color: "rgb(3, 50, 252)" },
  { range: " -10 sampai-4", color: "rgb(3, 25, 252)" },
  { range: " -5 sampai -1", color: "rgb(252, 150, 3)" },
  { range: " 0 sampai 10", color: "rgb(252, 100, 3)" },
  { range: ">10", color: "rgb(252, 50, 3)" },
];

const LegendContainer = () => {
  return (
    <StyledWrapper>
      <h3>Legend</h3>
      {LEGEND.map((el, idx) => (
        <WrapperBox>
          <Color key={idx} color={el.color} />
          <h6>: {el.range}</h6>
        </WrapperBox>
      ))}
    </StyledWrapper>
  );
};

export default LegendContainer;
