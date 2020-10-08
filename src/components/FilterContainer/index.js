import React from "react";
import RegionFilter from "../../components/RegionFilter";
import { StyledWrapper, WrapperLogo } from "./styled";
import { TOGGLE } from "../../constants/MapConstants";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import LogoInovasiId from "../../assets/img/logo-inovasi-id.png";
import LogoLpdp from "../../assets/img/logo-lpdp.png";
import LogoRistekBrin from "../../assets/img/logo-ristek-brin.png";
import LogoUi from "../../assets/img/logo-ui.png";

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
      <WrapperLogo>
        <img src={LogoUi} alt="Logo Universitas Indonesia" />
        <img src={LogoLpdp} alt="Logo LPDP" />
        <img src={LogoRistekBrin} alt="Logo Ristek Brin" />
        <img src={LogoInovasiId} alt="Logo Inovasi Indonesia" />
      </WrapperLogo>
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
