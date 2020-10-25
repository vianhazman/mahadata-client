import React, { useState } from "react";
import {
  StyledWrapper,
  WrapperHeader,
  WrapperLogo,
  WrapperTitle,
} from "./styled";

import HoverToggle from "../HoverToggle";
import LogoInovasiId from "../../assets/img/logo-inovasi-id.webp";
import LogoLpdp from "../../assets/img/logo-lpdp.webp";
import LogoRistekBrin from "../../assets/img/logo-ristek-brin.webp";
import LogoTim from "../../assets/img/logo-tim-mahadata.webp";
import LogoUi from "../../assets/img/logo-ui.webp";
import RegionFilter from "../../components/RegionFilter";
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
  const [hoverObject, setHoverObject] = useState({
    province: false,
    district: false,
    mobility: false,
    ratio: false,
  });

  const hoverIn = (param) => {
    setHoverObject((prev) => ({ ...prev, [param]: true }));
  };
  const hoverOut = () => {
    setHoverObject({
      province: false,
      mobility: false,
      district: false,
      ratio: false,
    });
  };

  return (
    <StyledWrapper>
      <WrapperLogo>
        <img src={LogoUi} alt="Logo Universitas Indonesia" />
        <img src={LogoRistekBrin} alt="Logo Ristek Brin" />
        <img src={LogoLpdp} alt="Logo LPDP" />
        <img
          src={LogoInovasiId}
          alt="Logo Inovasi Indonesia"
          style={{ maxHeight: "30px" }}
        />
      </WrapperLogo>
      <WrapperHeader>
        <WrapperTitle>
          <h3>Peta Pergerakan Masyarakat dan Kasus COVID-19 Indonesia</h3>
          <h5>Tim Sinergi Mahadata UI Tanggap COVID-19</h5>
        </WrapperTitle>
        <img className="logo-tim" src={LogoTim} alt="Logo Tim Mahadata"></img>
      </WrapperHeader>

      <ToggleButtonGroup
        value={toggle}
        exclusive
        onChange={onClickToggle}
        aria-label="text alignment"
      >
        <ToggleButton
          value={TOGGLE.CITY}
          aria-label="left aligned"
          onMouseOver={() => hoverIn("district")}
          onMouseOut={hoverOut}
          className="button-toggle"
        >
          {TOGGLE.CITY}
          {hoverObject.district && <HoverToggle type="district" />}
        </ToggleButton>
        <ToggleButton
          value={TOGGLE.PROVINCE}
          aria-label="right aligned"
          onMouseOver={() => hoverIn("province")}
          onMouseOut={hoverOut}
          className="button-toggle"
        >
          {TOGGLE.PROVINCE}
          {hoverObject.province && <HoverToggle type="province" />}
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={toggleData}
        exclusive
        onChange={onClickToggleData}
        aria-label="text alignment"
        style={{ marginLeft: "2rem" }}
      >
        <ToggleButton
          value={TOGGLE.MOBILITY}
          aria-label="left aligned"
          onMouseOver={() => hoverIn("mobility")}
          onMouseOut={hoverOut}
          className="button-toggle"
        >
          {TOGGLE.MOBILITY}
          {hoverObject.mobility && <HoverToggle type="mobility" />}
        </ToggleButton>
        <ToggleButton
          value={TOGGLE.RATIO}
          aria-label="right aligned"
          onMouseOver={() => hoverIn("ratio")}
          onMouseOut={hoverOut}
          className="button-toggle"
        >
          {TOGGLE.RATIO}
          {hoverObject.ratio && <HoverToggle type="ratio" />}
        </ToggleButton>
      </ToggleButtonGroup>
      <RegionFilter
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        data={data}
        title={toggle}
      ></RegionFilter>
      <h5 style={{ fontWeight: "normal" }}>
        Data pergerakan diperoleh dari{" "}
        <span style={{ fontWeight: "bold" }}>Facebook Data for Good</span>
      </h5>
    </StyledWrapper>
  );
};

export default FilterContainer;
