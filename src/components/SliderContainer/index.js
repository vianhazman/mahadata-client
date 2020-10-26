import React, { Fragment } from "react";

import { StyledWrapper } from "./styled";
import TimeSeriesChart from "../TimeSeriesChart";
import TimeSlider from "../TimeSlider";

const SliderContainer = ({
  data,
  selectedRegion,
  index,
  setIndex,
  toggle,
  toggleData,
  provinceCaseData,
  annotations,
}) => {
  return (
    <StyledWrapper isOpen={selectedRegion}>
      {selectedRegion && (
        <Fragment>
          <h5>
            Grafik {toggleData} di <b>{selectedRegion}</b>
          </h5>
          <TimeSeriesChart
            toggleData={toggleData}
            data={data}
            toggle={toggle}
            provinceCaseData={provinceCaseData}
            selectedRegion={selectedRegion}
            annotations={annotations}
          ></TimeSeriesChart>
        </Fragment>
      )}
      <TimeSlider
        data={data}
        index={index}
        setIndex={setIndex}
        toggle={toggle}
      ></TimeSlider>
    </StyledWrapper>
  );
};

export default SliderContainer;
