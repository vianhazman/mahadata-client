import {
  BarChart,
  Baseline,
  ChartContainer,
  ChartRow,
  Charts,
  LineChart,
  Resizable,
  LabelAxis,
  YAxis,
  TimeMarker,
  TimeRangeMarker,
} from "react-timeseries-charts";
import React, { useState } from "react";
import {
  baselineStyle,
  getAnnotationColor,
  getAnnotationTimeSeries,
  getCasesChartTimeSeries,
  getChartTimeSeries,
  getTimeRange,
  labelStyle,
  yAxisStyle,
  timeAxisStyle,
  markerStyle,
  timeRangeMarkerStyle,
} from "./utils";
import EventMarkerModified from "../EventMarkerModified";
import { ANNOTATION_TYPE } from "../../constants/MapConstants";
import EventChartModified from "../EventChartModified/index";
import { TOGGLE } from "../../constants/MapConstants";

const TimeSeriesChart = ({
  data,
  selectedRegion,
  setSelectedRegion,
  toggleData,
  toggle,
  provinceCaseData,
  annotations,
  index,
}) => {
  const mobility = getChartTimeSeries(
    data,
    selectedRegion,
    toggleData,
    setSelectedRegion
  );
  const provinceCase =
    toggle === "Provinsi"
      ? getCasesChartTimeSeries(provinceCaseData, selectedRegion)
      : "";
  const rangeAnnotation = getAnnotationTimeSeries(
    annotations,
    "Annotations",
    ANNOTATION_TYPE.RANGE,
    selectedRegion
  );

  const eventAnnotation = getAnnotationTimeSeries(
    annotations,
    "Annotations",
    ANNOTATION_TYPE.EVENT,
    "GLOBAL"
  );

  const [tracker, setTracker] = useState({ value: null, event: null });
  const [caseTracker, setCaseTracker] = useState({ value: null, event: null });

  const handleTrackerChanged = (t) => {
    if (t) {
      const e = mobility.atTime(t);
      const c = toggle === "Provinsi" ? provinceCase.atTime(t) : "";
      // const eventTime = new Date(
      //   e.begin().getTime() + (e.end().getTime() - e.begin().getTime()) / 2
      // );
      const eventValue = e.get("ratio");
      const caseValue = toggle === "Provinsi" ? c.get("case") : "";
      setTracker({
        value: eventValue.toFixed(2),
        event: e,
      });
      setCaseTracker({
        value: caseValue,
        event: c,
      });
    } else {
      setTracker({ value: null, event: null });
      setCaseTracker({ value: null, event: null });
    }
  };
  return (
    <Resizable>
      <ChartContainer
        timeRange={mobility.range()}
        onTrackerChanged={handleTrackerChanged}
        showGrid={true}
        showGridPosition="under"
        style={{ position: "absolute", yAxisStyle }}
        timeAxisStyle={timeAxisStyle}
      >
        <ChartRow height="25">
          <Charts>
            <EventChartModified
              series={rangeAnnotation}
              style={getAnnotationColor}
              label={(e) => e.get("title")}
              isHover={true}
              size={20}
            />
          </Charts>
        </ChartRow>
        <ChartRow height="25">
          <LabelAxis
            id="event"
            label="Tanggal Penting"
            values={[]}
            min={0}
            max={1}
            width={130}
            type="linear"
            style={labelStyle}
            hideScale
          />
          <Charts>
            <EventChartModified
              series={eventAnnotation}
              style={getAnnotationColor}
              label={(e) => e.get("title")}
              size={20}
            />
          </Charts>
        </ChartRow>
        {toggle === "Provinsi" ? (
          <ChartRow height="80">
            <YAxis
              id="case"
              label={"Kasus Harian"}
              min={provinceCase.min("case")}
              max={provinceCase.max("case")}
              type="linear"
              style={yAxisStyle}
            />
            <Charts>
              <TimeMarker
                time={Date.parse(data[index].date)}
                infoStyle={markerStyle}
              ></TimeMarker>
              <TimeRangeMarker
                timerange={getTimeRange(data, index)}
                style={timeRangeMarkerStyle}
              ></TimeRangeMarker>
              <BarChart
                axis="case"
                columns={["case"]}
                series={provinceCase}
                onMouseNear={(p) => this.handleMouseNear(p)}
              />
              <EventMarkerModified
                type="flag"
                axis="case"
                event={caseTracker.event}
                infoTimeFormat="%d-%m-%Y"
                info={[{ label: "Kasus", value: `${caseTracker.value}` }]}
                column="case"
                markerLabelAlign="left"
                markerRadius={3}
                infoStyle={{
                  box: {
                    fill: "white",
                    stroke: "#999",
                    pointerEvents: "none",
                    opacity: 1,
                    color: "black",
                  },
                  label: {
                    fill: "unset",
                  },
                }}
                infoWidth={120}
              />
            </Charts>
          </ChartRow>
        ) : (
          ""
        )}

        <ChartRow height="80">
          <YAxis
            id="mobility"
            label={toggleData.TITLE_1 + " (%)"}
            min={mobility.min("ratio")}
            max={mobility.max("ratio")}
            type="linear"
            style={yAxisStyle}
          />
          <Charts>
            <TimeMarker
              time={Date.parse(data[index].date)}
              infoStyle={markerStyle}
            ></TimeMarker>
            <TimeRangeMarker
              timerange={getTimeRange(data, index)}
              style={timeRangeMarkerStyle}
            ></TimeRangeMarker>
            <Baseline
              axis="mobility"
              style={baselineStyle}
              value={0}
              label={`${toggleData.TITLE_1} Februari 2020`}
              position="right"
              vposition="above"
            />
            {toggleData === TOGGLE.MOBILITY ? (
              <LineChart
                axis="mobility"
                columns={["ratio"]}
                series={mobility}
                onMouseNear={(p) => this.handleMouseNear(p)}
              />
            ) : (
              <BarChart
                axis="mobility"
                columns={["ratio"]}
                series={mobility}
                onMouseNear={(p) => this.handleMouseNear(p)}
              />
            )}
            <EventMarkerModified
              type="flag"
              axis="mobility"
              event={tracker.event}
              infoTimeFormat="%d-%m-%Y"
              info={[{ label: toggleData.TITLE_1, value: `${tracker.value}%` }]}
              column="ratio"
              markerLabelAlign="left"
              markerRadius={3}
              infoStyle={{
                box: {
                  fill: "white",
                  stroke: "#999",
                  pointerEvents: "none",
                  opacity: 1,
                  color: "black",
                },
                label: {
                  fill: "unset",
                },
              }}
              infoWidth={120}
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default TimeSeriesChart;
