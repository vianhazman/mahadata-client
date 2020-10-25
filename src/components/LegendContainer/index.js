import {
  Color,
  StyledWrapper,
  WrapperBox,
  WrapperLegend,
  WrapperTitle,
} from "./styled";
import React, { useState } from "react";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// COLOR_RANGE_CHANGE = {
//   -pd.np.inf: "[3, 250, 252]",  # BASE
//   -70: "[26, 70, 143]",  # <= 70
//   -60: "[56, 113, 176]",  # -69 - -60
//   -50: "[86, 145, 193]",  # -59 - -50
//   -40: "[121, 173, 210]",  # -49 - 40
//   -30: "[167, 201, 222]",  # -39 - -30
//   -20: "[202, 218, 237]",  # -29 - -20
//   -10: "[240, 243, 254]",  # -19 - -10
//   0: "[250, 231, 209]",  # -4 - 0
//   10: "[242, 176, 118]",  # 1-10
// }

// COLOR_RANGE_RATIO = {
//   0: "[232, 246, 245]",  # BASE
//   10: "[232, 246, 245]",  # BASE
//   15: "[194, 222, 220]",  # 6-10
//   20: "[162, 204, 200]",  # 11-15
//   25: "[111, 179, 173]",  # 16-20
//   30: "[53, 124, 119]",  # 21-25
//   35: "[34, 86, 82]",  # 26-30
// }
const LEGEND_MOBILITY = [
  { range: "-70%", color: "rgb(26, 70, 143)" },
  { range: "", color: "rgb(56, 113, 176)" },
  { range: "", color: "rgb(3, 150, 252)" },
  { range: "", color: "rgb(86, 145, 193)" },
  { range: "", color: "rgb(121, 173, 210)" },
  { range: "-30%", color: "rgb(167, 201, 222)" },
  { range: "", color: "rgb(202, 218, 237)" },
  { range: "", color: "rgb(240, 243, 254)" },
  { range: "0%", color: "rgb(250, 231, 209)" },
  { range: "", color: "rgb(242, 176, 118)" },
  { range: "di atas 10%", color: "rgb(105, 166, 135)" },
];
const LEGEND_RATIO = [
  { range: "0%", color: "rgb(232, 246, 245)" },
  { range: "", color: "rgb(232, 246, 245)" },
  { range: "", color: "rgb(194, 222, 220)" },
  { range: "20%", color: "rgb(162, 204, 200)" },
  { range: "", color: "rgb(111, 179, 173)" },
  { range: "", color: "rgb(53, 124, 119)" },
  { range: "35%", color: "rgb(34, 86, 82)" },
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
          suatu daerah{" "}
          {toggleData === "Mobilitas"
            ? "dibandingkan dengan Bulan Februari"
            : ""}
        </small>
      </WrapperLegend>
    </StyledWrapper>
  );
};

export default LegendContainer;
