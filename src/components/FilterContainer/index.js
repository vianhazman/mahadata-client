import React from "react";
import RegionFilter from "../../components/RegionFilter";
import { StyledWrapper } from "./styled";
import { TOGGLE } from "../../constants/MapConstants";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const FilterContainer = ({
  data,
  selectedRegion,
  setSelectedRegion,
  toggle,
  setToggle,
  toggleData,
  setToggleData,
  resetSelected,
}) => {
  const onClickToggle = (event, newValue) => {
    if (newValue) {
      setToggle(newValue);
      resetSelected();
    }
  };
  const onClickToggleData = (event, newValue) => {
    if (newValue) {
      setToggleData(newValue);
      // resetSelected();
    }
  };
  return (
    <StyledWrapper>
      <h3>Dashboard Tim Sinergi Mahadata UI</h3>
      <ToggleButtonGroup
        value={toggle}
        exclusive
        onChange={onClickToggle}
        aria-label="text alignment"
      >
        <ToggleButton value={TOGGLE.CITY} aria-label="left aligned">
          {TOGGLE.CITY}
        </ToggleButton>
        <ToggleButton value={TOGGLE.PROVINCE} aria-label="right aligned">
          {TOGGLE.PROVINCE}
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={toggleData}
        exclusive
        onChange={onClickToggleData}
        aria-label="text alignment"
        style={{ marginLeft: "2rem" }}
      >
        <ToggleButton value={TOGGLE.MOBILITY} aria-label="left aligned">
          {TOGGLE.MOBILITY}
        </ToggleButton>
        <ToggleButton value={TOGGLE.RATIO} aria-label="right aligned">
          {TOGGLE.RATIO}
        </ToggleButton>
      </ToggleButtonGroup>
      <RegionFilter
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        data={data}
        title={toggle}
      ></RegionFilter>
    </StyledWrapper>
  );
};

export default FilterContainer;
