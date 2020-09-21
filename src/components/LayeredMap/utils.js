export const getGeoJsonProperties = (obj, setFunction) => {
  if (obj.object) {
    setFunction(obj);
  }
};

export const randomRgba = (tile, heatData) => {
  let dataDate = heatData.data;
  if (dataDate[tile.properties.name]) {
    let i = JSON.parse(dataDate[tile.properties.name].color);
    return i;
  }
  return [255, 255, 255];
};
