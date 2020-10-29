import { DeckGL, FlyToInterpolator } from "deck.gl";
import { MAP_STYLE, MAP_TOKEN, TOGGLE } from "../../constants/MapConstants";
import React, { useCallback, useEffect, useState } from "react";
import { getGeoJsonProperties, getSelectedLine, randomRgba } from "./utils";

import { GeoJsonLayer } from "@deck.gl/layers";
import HoverTooltip from "../HoverTooltip";
import { INITIAL_VIEW_STATE } from "../../constants/MapConstants";
import { StaticMap } from "react-map-gl";
import { StyledMapContainer } from "./styled";
import districtIndex from "../../services/GeoJson/districtIndex";
import provincesIndex from "../../services/GeoJson/provinceIndex";

const LayeredMap = ({
  data,
  toggle,
  toggleData,
  selectedRegion,
  setSelectedRegion,
  heatData,
  caseData,
}) => {
  const [hoverInfo, setHoverInfo] = useState({});
  const [selectedInfo, setSelectedInfo] = useState({});
  const [initialViewState, setInitialViewState] = useState(INITIAL_VIEW_STATE);

  const getRegionName = useCallback((obj, setFunction, toggle) => {
    if (obj.object) {
      if (toggle === TOGGLE.CITY) {
        setFunction(obj.object.properties.kab);
      } else {
        setFunction(obj.object.properties.Propinsi);
      }
    }
  }, []);

  useEffect(() => {
    if (!selectedRegion) {
      setInitialViewState(INITIAL_VIEW_STATE);
      setSelectedInfo({});
    } else {
      try {
        var obj =
          toggle === TOGGLE.CITY
            ? data[districtIndex[selectedRegion]]
            : data[provincesIndex[selectedRegion]];
        var coordinates =
          obj.geometry.type === "MultiPolygon"
            ? obj.geometry.coordinates[0][0][0]
            : obj.geometry.coordinates[0][0];
        goToPolygon(coordinates, setInitialViewState);
        getGeoJsonProperties(obj, setSelectedInfo);
      } catch (error) {}
    }
  }, [setInitialViewState, selectedRegion, data, toggle]);

  const goToPolygon = (coordinate, setInitialViewState) => {
    setInitialViewState({
      longitude: coordinate[0],
      latitude: coordinate[1],
      zoom: 7,
      pitch: 0,
      bearing: 0,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
    });
  };

  const layer = [
    new GeoJsonLayer({
      id: "provinces",
      data: data,
      pickable: true,
      opacity: 0.75,
      stroked: true,
      filled: true,
      lineWidthScale: 200,
      lineWidthMinPixels: 1,
      getRadius: 100,
      getLineWidth: 100,
      getLineColor: [255, 255, 255],
      lineWidthMaxPixels: 1,
      autoHighlight: true,
      getFillColor: (info) => randomRgba(info, toggleData, heatData),
      updateTriggers: {
        getFillColor: (info) => randomRgba(info, toggleData, heatData),
      },
      onHover: (info) => getGeoJsonProperties(info, setHoverInfo),
      onClick: (info) => getRegionName(info, setSelectedRegion, toggle),
    }),
  ];
  return (
    <StyledMapContainer toggle={toggle} selectedRegion={selectedRegion}>
      {hoverInfo.object && (
        <HoverTooltip
          hoverInfo={hoverInfo}
          heatData={heatData}
          toggle={toggle}
          toggleData={toggleData}
          caseData={caseData}
        ></HoverTooltip>
      )}
      {selectedInfo.object && (
        <HoverTooltip
          hoverInfo={selectedInfo}
          heatData={heatData}
          toggle={toggle}
          toggleData={toggleData}
          caseData={caseData}
        ></HoverTooltip>
      )}
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layer}
      >
        <StaticMap mapStyle={MAP_STYLE} mapboxApiAccessToken={MAP_TOKEN} />
      </DeckGL>
    </StyledMapContainer>
  );
};
export default LayeredMap;
