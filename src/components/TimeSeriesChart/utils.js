import { ANNOTATION_TYPE, TOGGLE } from "../../constants/MapConstants";
import { Index, TimeRange, TimeRangeEvent, TimeSeries } from "pondjs";
import moment from "moment";

export const getAnnotationTimeSeries = (
  data,
  seriesName,
  type,
  selectedRegion
) => {
  let events = [];
  try {
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
  if (seriesName === TOGGLE.MOBILITY) {
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

export const getTimeRange = (data, index) => {
  return new TimeRange(
    moment(data[0].date, "YYYY-MM-DD"),
    moment(data[index].date, "YYYY-MM-DD")
  );
};

export const yAxisStyle = {
  line: {
    stroke: "rgb(0, 0, 0)",
    strokeWidth: 1,
    opacity: 1,
    strokeDasharray: "none",
  },
  label: {
    fill: "rgb(0, 0, 0)",
    opacity: 1,
    fontWeight: "bold",
  },
  ticks: { fill: "none", stroke: "rgb(0, 0, 0)" },
  values: { fill: "rgb(0, 0, 0)" },
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
    opacity: 0.5,
    fontWeight: "bold",
  },
};

export const labelStyle = {
  label: {
    fontSize: 10,
    textAnchor: "right",
    fill: "#000000",
    paddingRight: "20px",
    left: 0,
  },
};

export const chartContainerStyle = {
  position: "absolute",
  yAxisStyle,
};

export const timeAxisStyle = {
  label: {
    fill: "rgb(0, 0, 0)",
    opacity: 1,
    fontWeight: "bold",
  },
  values: { fill: "rgb(0, 0, 0)" },
};

export const markerStyle = {
  line: {
    stroke: "#2a3eb1",
    strokeWidth: "2px",
    cursor: "crosshair",
    pointerEvents: "none",
  },
};

export const timeRangeMarkerStyle = { fill: "rgba(200, 200, 200, 0.25)" };
