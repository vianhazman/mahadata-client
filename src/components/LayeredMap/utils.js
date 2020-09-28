export const getGeoJsonProperties = (obj, setFunction) => {
  if (obj.object) {
    setFunction(obj);
  } else {
    setFunction({});
  }
};

export const randomRgba = (tile, toggleData, heatData) => {
  let dataDate = heatData.data;
  if (dataDate[tile.properties.kab]) {
    let i =
      toggleData === "Mobilitas"
        ? JSON.parse(dataDate[tile.properties.kab].change_color)
        : JSON.parse(dataDate[tile.properties.kab].ratio_color);
    return i;
  }
  return [255, 255, 255];
};
