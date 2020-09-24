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
  resetSelected,
}) => {
  const onClickToggle = (event, newValue) => {
    setToggle(newValue);
    resetSelected();
  };
  return (
    <StyledWrapper>
      <h1>Dashboard Tim Sinergi Mahadata UI</h1>
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
