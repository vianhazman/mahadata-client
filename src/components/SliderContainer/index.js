import React, { Fragment } from "react";

import { StyledWrapper } from "./styled";
import TimeLegend from "../../components/TimeLegend";
import TimeSeriesChart from "../TimeSeriesChart";
import TimeSlider from "../TimeSlider";

const SliderContainer = ({
  data,
  selectedRegion,
  setSelectedRegion,
  index,
  setIndex,
  toggle,
  toggleData,
  provinceCaseData,
  annotations,
}) => {
  return (
    <StyledWrapper isOpen={selectedRegion}>
      <TimeLegend date={data[index]?.date ?? ""} toggleData={toggleData} />
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
            setSelectedRegion={setSelectedRegion}
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
