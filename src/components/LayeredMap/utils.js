import { TOGGLE } from "../../constants/MapConstants";

export const getGeoJsonProperties = (obj, setFunction) => {
  if (obj.object !== undefined) {
    setFunction(obj);
  } else if (obj.properties !== undefined) {
    obj = { object: obj };
    setFunction(obj);
  } else {
    setFunction({});
  }
};

export const getSelectedLine = (tile, toggle, selectedRegion) => {
  if (toggle === TOGGLE.CITY) {
    if (tile.properties.kab === selectedRegion) {
      return true;
    }
  } else {
    if (tile.properties.Propinsi === selectedRegion) {
      return true;
    }
  }
  return false;
};

export const randomRgba = (tile, toggleData, heatData) => {
  let dataDate = heatData.data;
  if (dataDate[tile.properties.kab]) {
    let i =
      toggleData === "Mobilitas"
        ? JSON.parse(dataDate[tile.properties.kab].change_color)
        : JSON.parse(dataDate[tile.properties.kab].ratio_color);
    return i;
  } else if (dataDate[tile.properties.Propinsi]) {
    let i =
      toggleData === "Mobilitas"
        ? JSON.parse(dataDate[tile.properties.Propinsi].change_color)
        : JSON.parse(dataDate[tile.properties.Propinsi].ratio_color);
    return i;
  }
  return [255, 255, 255];
};
