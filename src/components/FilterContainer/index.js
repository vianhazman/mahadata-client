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
      <div>
        <p>
          Peta menampilkan pergerakan masyarakat Indonesia di tingkat
          kabupaten/kota dan provinsi serta penambahan harian kasus COVID-19 di
          tingkat provinsi. Pergerakan dapat dilihat berupa (1) mobilitas
          masyarakat dibandingkan pada bulan Februari, dan (2) persentase
          penduduk yang patuh untuk di rumah saja.
        </p>
      </div>
      <h5>Pilih tingkat agregasi</h5>
      <ToggleButtonGroup
        value={toggle}
        size="small"
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
      <h5>Pilih jenis data pergerakan</h5>
      <ToggleButtonGroup
        value={toggleData}
        size="small"
        exclusive
        onChange={onClickToggleData}
        aria-label="text alignment"
      >
        <ToggleButton
          value={TOGGLE.MOBILITY}
          aria-label="left aligned"
          onMouseOver={() => hoverIn("mobility")}
          onMouseOut={hoverOut}
          className="button-toggle"
        >
          {TOGGLE.MOBILITY.TITLE_1}
          {hoverObject.mobility && <HoverToggle type="mobility" />}
        </ToggleButton>
        <ToggleButton
          value={TOGGLE.RATIO}
          aria-label="right aligned"
          onMouseOver={() => hoverIn("ratio")}
          onMouseOut={hoverOut}
          className="button-toggle"
        >
          {TOGGLE.RATIO.TITLE_1}
          {hoverObject.ratio && <HoverToggle type="ratio" />}
        </ToggleButton>
      </ToggleButtonGroup>
      <br></br>
      <h5>Pilih {toggle}</h5>
      <RegionFilter
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        data={data}
      ></RegionFilter>
    </StyledWrapper>
  );
};

export default FilterContainer;
