import React, { Fragment } from "react";

import { StyledWrapper } from "./styled";
import TimeLegend from "../../components/TimeLegend";
import TimeSeriesChart from "../TimeSeriesChart";
import TimeSlider from "../TimeSlider";
import { Box } from "@material-ui/core";

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
      {!selectedRegion && (
        <TimeLegend date={data[index]?.date ?? ""} toggleData={toggleData} />
      )}
      {selectedRegion && (
        <Fragment>
          <Box className="title">
            <h5>
              Grafik {toggleData.TITLE_2} di <b>{selectedRegion}</b>
            </h5>
            <TimeLegend
              date={data[index]?.date ?? ""}
              toggleData={toggleData}
            />
          </Box>

          <TimeSeriesChart
            toggleData={toggleData}
            data={data}
            toggle={toggle}
            provinceCaseData={provinceCaseData}
            selectedRegion={selectedRegion}
            annotations={annotations}
            setSelectedRegion={setSelectedRegion}
            index={index}
          ></TimeSeriesChart>
        </Fragment>
      )}
      <TimeSlider
        data={data}
        index={index}
        setIndex={setIndex}
        toggle={toggle}
      ></TimeSlider>
      <h6 style={{ fontWeight: "normal", paddingLeft: "8rem", margin: "0" }}>
        Geser <span style={{ fontStyle: "italic" }}>slider</span> di atas untuk
        memilih tanggal atau tekan tombol &nbsp;
        <span style={{ fontStyle: "italic" }}>play</span> berwarna merah
      </h6>
    </StyledWrapper>
  );
};

export default SliderContainer;
