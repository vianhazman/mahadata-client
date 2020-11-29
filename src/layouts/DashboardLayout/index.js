import { LayoutWrapper, StyledMapLayoutContainer } from "./styled";
import React, { useEffect, useState } from "react";

import { BASE_PATH } from "../../constants/Api";
import DescriptionContainer from "../../components/DescriptionContainer";
import EventService from "../../services/EventService";
import FilterContainer from "../../components/FilterContainer";
import Grid from "@material-ui/core/Grid";
import LayeredMap from "../../components/LayeredMap";
import LegendContainer from "../../components/LegendContainer";
import PulseLoader from "react-spinners/PulseLoader";
import RankingContainer from "../../components/RankingContainer";
import SliderContainer from "../../components/SliderContainer";
import { TOGGLE } from "../../constants/MapConstants";
import axios from "axios";
import districtGeo from "../../services/GeoJson/district";
import provincesGeo from "../../services/GeoJson/provinces";

const DashboardLayout = () => {
  const [selectedRegion, _setSelectedRegion] = useState("");
  const [toggle, setToggle] = useState(TOGGLE.PROVINCE);
  const [toggleData, setToggleData] = useState(TOGGLE.MOBILITY);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [districtData, setDistrictData] = useState([]);
  const [provinceData, setProvinceData] = useState([]);
  const [provinceCaseData, setProvinceCaseData] = useState([]);
  const [rankDistrictData, setRankDistrictData] = useState([]);
  const [rankProvinceData, setRankProvinceData] = useState([]);
  const [annotations, setAnnotations] = useState([]);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const containerStyle = {
    maxHeight: "30%",
  };

  const setSelectedRegion = (region) => {
    if (!data[0].data[region] && region !== "" && region) {
      alert("Mohon maaf, data untuk wilayah "+region+" belum tersedia.")
    } else {
      _setSelectedRegion(region);
    }
  }

  const resetSelected = () => {
    setSelectedRegion("");
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result1 = await axios(`${BASE_PATH}/data/daily/district`);
        setData(result1.data);
        setDistrictData(result1.data);
        const result2 = await axios(`${BASE_PATH}/data/daily/province`);
        setProvinceData(result2.data);
        const result3 = await axios(`${BASE_PATH}/data/case/province`);
        setProvinceCaseData(result3.data);
        const rankDistrict = await axios(`${BASE_PATH}/data/rank/district`);
        setRankDistrictData(rankDistrict.data);
        const rankProvince = await axios(`${BASE_PATH}/data/rank/province`);
        setRankProvinceData(rankProvince.data);
        const eventData = new EventService();
        const event = await eventData.get(0);
        setAnnotations(event);
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
    <LayoutWrapper>
      <div style={style}>
        <PulseLoader loading={isLoading} />
      </div>
      <Grid container style={containerStyle}>
        <Grid sm={3} xs={12}>
          {!isLoading && (
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
          )}
          {!isLoading && (
            <RankingContainer
              toggle={toggle}
              toggleData={toggleData}
              districtRankData={rankDistrictData}
              provinceRankData={rankProvinceData}
              index={index}
            />
          )}
        </Grid>
        <Grid sm={9} xs={12}>
          {!isLoading && (
            <StyledMapLayoutContainer>
              {!isLoading && <LegendContainer toggleData={toggleData} />}
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
              setSelectedRegion={setSelectedRegion}
              data={data}
              toggle={toggle}
              toggleData={toggleData}
              provinceCaseData={provinceCaseData}
              index={index}
              setIndex={setIndex}
              annotations={annotations}
            />
          )}
        </Grid>
        <Grid xs={12}>
          {!isLoading && <DescriptionContainer></DescriptionContainer>}
        </Grid>
      </Grid>
    </LayoutWrapper>
  );
};

export default DashboardLayout;
