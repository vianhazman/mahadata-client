export const getChangeCaption = (hoverInfo, heatData) => {
  let dataDate = heatData.data;

  if (dataDate[hoverInfo.object.properties.name]) {
    let change = heatData.data[hoverInfo.object.properties.name].change;
    if (change <= 0) {
      return `Mobilitas berkurang ${Math.abs(change)}%`;
    } else {
      return `Mobilitas bertambah ${change}%`;
    }
  }
  return "";
};
