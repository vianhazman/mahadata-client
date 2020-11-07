import {
  Color,
  StyledWrapper,
  WrapperBox,
  WrapperLegend,
  WrapperTitle,
} from "./styled";

import React from "react";
import { TOGGLE } from "../../constants/MapConstants";

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
  { range: "-50%", color: "rgb(5, 5, 255)" },
  { range: "", color: "rgb(75, 75, 255)" },
  { range: "", color: "rgb(3, 150, 252)" },
  { range: "", color: "rgb(202, 218, 237)" },
  { range: "", color: "rgb(240, 243, 254)" },
  { range: "0%", color: "rgb(255, 255, 255)" },
  { range: "", color: "rgb(255, 135, 135)" },
  { range: "10%", color: "rgb(255, 15, 15)" },
];
const LEGEND_RATIO = [
  { range: "0%", color: "rgb(255, 255, 255)" },
  { range: "", color: "rgb(215, 215, 255)" },
  { range: "", color: "rgb(180, 180, 255)" },
  { range: "", color: "rgb(145, 145, 255)" },
  { range: "", color: "rgb(110, 110, 255)" },
  { range: "", color: "rgb(75, 75, 255)" },
  { range: "", color: "rgb(30, 30, 255)" },
  { range: "40%", color: "rgb(5, 5, 255)" },
];

const LegendContainer = ({ toggleData }) => {
  let toggleLegend =
    toggleData === TOGGLE.MOBILITY ? LEGEND_MOBILITY : LEGEND_RATIO;
  return (
    <StyledWrapper>
      <WrapperTitle>
        <h6>{toggleData.TITLE_2}</h6>
      </WrapperTitle>
      <WrapperLegend>
        {toggleLegend.map((el, idx) => (
          <WrapperBox key={idx} toggleData={toggleData}>
            <Color color={el.color} />
            <h6>{el.range}</h6>
          </WrapperBox>
        ))}
      </WrapperLegend>
      <p>
        Data ini menunjukan perubahan
        {toggleLegend === LEGEND_MOBILITY
          ? " mobilitas penduduk dalam 24 jam dibandingkan pada bulan Februari."
          : " persentase penduduk yang menetap dalam area 0,6 km^2 dalam 24 jam."}
      </p>
    </StyledWrapper>
  );
};

export default LegendContainer;
