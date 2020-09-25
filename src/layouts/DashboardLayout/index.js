import React, { useEffect, useState } from "react";

import FilterContainer from "../../components/FilterContainer";
import LayeredMap from "../../components/LayeredMap";
import LegendContainer from "../../components/LegendContainer";
import PulseLoader from "react-spinners/PulseLoader";
import SliderContainer from "../../components/SliderContainer";
import { TOGGLE } from "../../constants/MapConstants";
import axios from "axios";
import districtGeo from "../../services/GeoJson/district";
import provincesGeo from "../../services/GeoJson/provinces";
import TimeLegend from "../../components/TimeLegend";

const DashboardLayout = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [toggle, setToggle] = useState(TOGGLE.CITY);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

      const result = await axios("http://localhost:5000/data/daily");

      setData(result.data);
      console.log(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={style}>
        <PulseLoader loading={isLoading} />
      </div>
      {!isLoading && (
        <div>
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
            setToggle={setToggle}
            resetSelected={resetSelected}
          ></FilterContainer>
          <LayeredMap
            data={toggle === TOGGLE.CITY ? districtGeo : provincesGeo}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            toggle={toggle}
            heatData={data[index]}
          ></LayeredMap>
        </div>
      )}
      {!isLoading && (
        <SliderContainer
          selectedRegion={selectedRegion}
          data={data}
          index={index}
          setIndex={setIndex}
        />
      )}
      {!isLoading && <LegendContainer />}
      {!isLoading && <TimeLegend date={data[index]?.date ?? ""} />}
    </div>
  );
};

export default DashboardLayout;
