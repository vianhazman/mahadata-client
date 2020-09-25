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

const LEGEND = [
  { range: "Kurang dari -70%", color: "rgb(3, 200, 252)" },
  { range: "-70% sampai -59%", color: "rgb(3, 175, 252)" },
  { range: " -60% sampai -49%", color: "rgb(3, 150, 252)" },
  { range: " -50% sampai -39%", color: "rgb(3, 125, 252)" },
  { range: " -40% sampai -29%", color: "rgb(3, 100, 252)" },
  { range: " -30% sampai -19%", color: "rgb(3, 75, 252)" },
  { range: "-20% sampai -9%", color: "rgb(3, 50, 252)" },
  { range: " -10% sampai -4%", color: "rgb(3, 25, 252)" },
  { range: " -5% sampai -1%", color: "rgb(252, 150, 3)" },
  { range: " 0% sampai 10%", color: "rgb(252, 100, 3)" },
  { range: "Lebih dari 10%", color: "rgb(252, 50, 3)" },
];

const LegendContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        {LEGEND.map((el, idx) => (
          <WrapperBox>
            <Color key={idx} color={el.color} />
            <h6>: {el.range}</h6>
          </WrapperBox>
        ))}
        <small>
          Persentase merepresentasikan perubahan mobilitas pada suatu daerah
          dibandingkan dengan Bulan Februari
        </small>
      </WrapperLegend>
    </StyledWrapper>
  );
};

export default LegendContainer;
