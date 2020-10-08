import React, { useEffect, useState } from "react";

import FilterContainer from "../../components/FilterContainer";
import LayeredMap from "../../components/LayeredMap";
import LegendContainer from "../../components/LegendContainer";
import PulseLoader from "react-spinners/PulseLoader";
import SliderContainer from "../../components/SliderContainer";
import { StyledMapLayoutContainer } from "./styled";
import { TOGGLE } from "../../constants/MapConstants";
import TimeLegend from "../../components/TimeLegend";
import axios from "axios";
import districtGeo from "../../services/GeoJson/district";
import provincesGeo from "../../services/GeoJson/provinces";
import RankingContainer from "../../components/RankingContainer";

const DashboardLayout = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [toggle, setToggle] = useState(TOGGLE.CITY);
  const [toggleData, setToggleData] = useState(TOGGLE.MOBILITY);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [districtData, setDistrictData] = useState([]);
  const [provinceData, setProvinceData] = useState([]);
  const [provinceCaseData, setProvinceCaseData] = useState([]);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const resetSelected = () => {
    setSelectedRegion("");
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result1 = await axios(
          "http://localhost:5000/data/daily/district"
        );
        setData(result1.data);
        setDistrictData(result1.data);
        const result2 = await axios(
          "http://localhost:5000/data/daily/province"
        );
        setProvinceData(result2.data);
        const result3 = await axios("http://localhost:5000/data/case/province");
        setProvinceCaseData(result3.data);
      } catch (error) {
        alert("Oops, terdapat sebuah masalah.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    switch (toggle) {
      case TOGGLE.CITY:
        setData(districtData);
        break;
      case TOGGLE.PROVINCE:
        setData(provinceData);
        break;
      default:
        break;
    }
  }, [toggle, districtData, provinceData]);

  return (
    <div>
      <div style={style}>
        <PulseLoader loading={isLoading} />
      </div>
      {!isLoading && (
        <StyledMapLayoutContainer>
          <FilterContainer
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            data={
              toggle === TOGGLE.CITY
                ? districtGeo.map((x) =>
                    x.properties.kab ? x.properties.kab : ""
                  )
                : provincesGeo.map((x) => x.properties.Propinsi)
            }
            toggle={toggle}
            toggleData={toggleData}
            setToggleData={setToggleData}
            setToggle={setToggle}
            resetSelected={resetSelected}
          ></FilterContainer>
          <LayeredMap
            data={toggle === TOGGLE.CITY ? districtGeo : provincesGeo}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            toggle={toggle}
            toggleData={toggleData}
            heatData={data[index]}
            // If current date has no case send null instead
            caseData={index >= 17 ? provinceCaseData[index - 17] : null}
          ></LayeredMap>
        </StyledMapLayoutContainer>
      )}
      {!isLoading && (
        <SliderContainer
          selectedRegion={selectedRegion}
          data={data}
          toggle={toggle}
          toggleData={toggleData}
          provinceCaseData={provinceCaseData}
          index={index}
          setIndex={setIndex}
        />
      )}
      {!isLoading && <RankingContainer toggleData={toggleData} />}
      {!isLoading && <LegendContainer toggleData={toggleData} />}
      {!isLoading && (
        <TimeLegend date={data[index]?.date ?? ""} toggleData={toggleData} />
      )}
    </div>
  );
};

export default DashboardLayout;
