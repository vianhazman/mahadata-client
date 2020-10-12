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
}) => {
  return (
    <StyledWrapper isOpen={selectedRegion}>
      {selectedRegion && (
        <Fragment>
          <h4>
            Grafik {toggleData} di {selectedRegion}
          </h4>
          <TimeSeriesChart
            toggleData={toggleData}
            data={data}
            toggle={toggle}
            provinceCaseData={provinceCaseData}
            selectedRegion={selectedRegion}
          ></TimeSeriesChart>
        </Fragment>
      )}
      <TimeSlider data={data} index={index} setIndex={setIndex}></TimeSlider>
    </StyledWrapper>
  );
};

export default SliderContainer;
