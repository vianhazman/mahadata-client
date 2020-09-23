import React, { Fragment } from "react";
import { StyledWrapper } from "./styled";
import TimeSeriesChart from "../TimeSeriesChart";
import TimeSlider from "../TimeSlider";

const SliderContainer = ({ data, selectedRegion, index, setIndex }) => {
  return (
    <StyledWrapper isOpen={selectedRegion}>
      {selectedRegion && (
        <Fragment>
          <h4>Grafik Mobilitas di {selectedRegion}</h4>
          <TimeSeriesChart
            data={data}
            selectedRegion={selectedRegion}
          ></TimeSeriesChart>
        </Fragment>
      )}
      <TimeSlider data={data} index={index} setIndex={setIndex}></TimeSlider>
    </StyledWrapper>
  );
};

export default SliderContainer;
