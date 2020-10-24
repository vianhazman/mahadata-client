import React, { useMemo } from "react";
import { WrapperHover } from "./styled";
const HoverToggle = ({ type }) => {
  const returnText = (type) => {
    if (type === "district") {
      return "Pergerakan masyarakat Indonesia di tingkat kabupaten/kota.";
    } else if (type === "province") {
      return "Pergerakan masyarakat Indonesia di tingkat provinsi.";
    } else if (type === "mobility") {
      return "Mobilitas masyarakat dibandingkan pada bulan Februari.";
    } else if (type === "ratio") {
      return "Tingkat kepatuhan untuk di rumah saja.";
    }
  };
  const memoizedText = useMemo(() => returnText(type), [type]);
  return <WrapperHover>{memoizedText}</WrapperHover>;
};
export default HoverToggle;
