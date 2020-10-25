import { DeckGL, FlyToInterpolator } from "deck.gl";
import { MAP_STYLE, MAP_TOKEN, TOGGLE } from "../../constants/MapConstants";
import React, { useCallback, useEffect, useState } from "react";
import { getGeoJsonProperties, randomRgba } from "./utils";

import { GeoJsonLayer } from "@deck.gl/layers";
import HoverTooltip from "../HoverTooltip";
import { INITIAL_VIEW_STATE } from "../../constants/MapConstants";
import { StaticMap } from "react-map-gl";
import { StyledMapContainer } from "./styled";

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
  const [initialViewState, setInitialViewState] = useState(INITIAL_VIEW_STATE);

  useEffect(() => {
    if (!selectedRegion) {
      setInitialViewState(INITIAL_VIEW_STATE);
    }
  }, [setInitialViewState, selectedRegion]);

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

  const getRegionName = useCallback(
    (obj, setFunction, toggle, setInitialViewState) => {
      if (obj.object) {
        if (toggle === TOGGLE.CITY) {
          setFunction(obj.object.properties.kab);
        } else {
          setFunction(obj.object.properties.Propinsi);
        }
        goToPolygon(
          obj.object.geometry.type === "MultiPolygon"
            ? obj.object.geometry.coordinates[0][0][0]
            : obj.object.geometry.coordinates[0][0],
          setInitialViewState
        );
      }
    },
    []
  );

  const layer = [
    new GeoJsonLayer({
      id: "provinces",
      data: data,
      pickable: true,
      opacity: 0.5,
      stroked: true,
      filled: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 1,
      getRadius: 100,
      getLineWidth: 1,
      getElevation: 30,
      getLineColor: [255, 255, 255],
      lineWidthMaxPixels: 1,
      autoHighlight: true,
      getFillColor: (info) => randomRgba(info, toggleData, heatData),
      updateTriggers: {
        getFillColor: (info) => randomRgba(info, toggleData, heatData),
      },
      onHover: (info) => getGeoJsonProperties(info, setHoverInfo),
      onClick: (info) =>
        getRegionName(info, setSelectedRegion, toggle, setInitialViewState),
    }),
  ];
  return (
    <StyledMapContainer>
      {hoverInfo.object && (
        <HoverTooltip
          hoverInfo={hoverInfo}
          heatData={heatData}
          toggle={toggle}
          toggleData={toggleData}
          caseData={caseData}
        ></HoverTooltip>
      )}
      <DeckGL
        initialViewState={initialViewState}
        height="100%"
        width="100%"
        controller={true}
        layers={layer}
      >
        <StaticMap mapStyle={MAP_STYLE} mapboxApiAccessToken={MAP_TOKEN} />
      </DeckGL>
    </StyledMapContainer>
  );
};
export default LayeredMap;
