import { Index, TimeRange, TimeRangeEvent, TimeSeries } from "pondjs";

import { ANNOTATION_TYPE } from "../../constants/MapConstants";

export const getAnnotationTimeSeries = (
  data,
  seriesName,
  type,
  selectedRegion
) => {
  let events = [];
  try {
    console.log(data);
    data = data
      .filter((x) => x.areaName === selectedRegion)
      .filter((x) => x.eventType === type);
    events = data.map(
      ({ startTime, endTime, ...data }) =>
        new TimeRangeEvent(
          new TimeRange(new Date(startTime), new Date(endTime)),
          data
        )
    );
  } finally {
    return new TimeSeries({ name: seriesName, events });
  }
};

export const getChartTimeSeries = (data, selectedRegion, seriesName) => {
  data.sort(function (a, b) {
    var keyA = new Date(a.date),
      keyB = new Date(b.date);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  if (seriesName === "Mobilitas") {
    return new TimeSeries({
      name: seriesName,
      columns: ["time", "ratio"],
      points: data.map((data) => [
        new Date(data.date).setHours(0, 0, 0, 0),
        data.data[selectedRegion].change,
      ]),
    });
  } else {
    return new TimeSeries({
      name: seriesName,
      columns: ["index", "ratio"],
      points: data.map((data) => [
        Index.getIndexString("24h", new Date(data.date)),
        data.data[selectedRegion].ratio,
      ]),
    });
  }
};

export const getCasesChartTimeSeries = (data, selectedRegion) => {
  data.sort(function (a, b) {
    var keyA = new Date(a.date),
      keyB = new Date(b.date);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  console.log(selectedRegion);
  return new TimeSeries({
    name: "Kasus",
    columns: ["index", "case"],
    points: data.map((data) => [
      Index.getIndexString("24h", new Date(data.date)),
      parseInt(data.data[selectedRegion]),
    ]),
  });
};

export const getAnnotationColor = (event, state) => {
  const color =
    event.get("eventType") === ANNOTATION_TYPE.EVENT ? "#ff0000" : "#f1a340";
  return {
    fill: color,
    opacity: 1,
  };
};

export const yAxisStyle = {
  line: {
    stroke: "rgb(0, 0, 0)",
    strokeWidth: 1,
    opacity: 0.6,
    strokeDasharray: "none",
  },
  label: {
    fill: "rgb(0, 0, 0)",
    opacity: 1,
    fontWeight: "bold",
  },
};

export const baselineStyle = {
  line: {
    stroke: "rgb(0, 0, 0)",
    strokeWidth: 1,
    opacity: 0.4,
    strokeDasharray: "none",
  },
  label: {
    fill: "rgb(0, 0, 0)",
    opacity: 1,
    fontWeight: "bold",
  },
};
