import {
  BarChart,
  Baseline,
  ChartContainer,
  ChartRow,
  Charts,
  EventMarker,
  LineChart,
  Resizable,
  YAxis,
} from "react-timeseries-charts";
import React, { useState } from "react";
import {
  baselineStyle,
  getAnnotationColor,
  getAnnotationTimeSeries,
  getCasesChartTimeSeries,
  getChartTimeSeries,
} from "./utils";

import { ANNOTATION_TYPE } from "../../constants/MapConstants";
import EventChartModified from "../EventChartModified/index";

const TimeSeriesChart = ({
  data,
  selectedRegion,
  toggleData,
  toggle,
  provinceCaseData,
  annotations,
}) => {
  const mobility = getChartTimeSeries(data, selectedRegion, toggleData);
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
        // timeAxisTickCount={mobility.count()}
        onTrackerChanged={handleTrackerChanged}
        showGrid={true}
        showGridPosition="under"
      >
        <ChartRow height="30">
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
        <ChartRow height="30">
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
              label={"Kasus (%)"}
              // format=".2f"
              min={provinceCase.min("case")}
              max={provinceCase.max("case")}
              type="linear"
            />
            <Charts>
              {/* <EventChartModified
                series={rangeAnnotation}
                style={getAnnotationColor}
                label={(e) => e.get("title")}
                isHover={true}
              />
              <EventChartModified
                series={eventAnnotation}
                style={getAnnotationColor}
                label={(e) => e.get("title")}
              /> */}
              <BarChart
                axis="case"
                columns={["case"]}
                series={provinceCase}
                onMouseNear={(p) => this.handleMouseNear(p)}
              />

              <EventMarker
                type="flag"
                axis="case"
                event={caseTracker.event}
                infoTimeFormat="%d-%m-%Y"
                info={[{ label: "Kasus", value: `${caseTracker.value}` }]}
                column="case"
                markerLabelAlign="left"
                markerRadius={3}
              />
            </Charts>
          </ChartRow>
        ) : (
          ""
        )}

        <ChartRow height="80">
          <YAxis
            id="mobility"
            label={toggleData + " (%)"}
            min={mobility.min("ratio")}
            max={mobility.max("ratio")}
            type="linear"
          />
          <Charts>
            {toggleData === "Mobilitas" ? (
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

            <Baseline
              axis="mobility"
              style={baselineStyle}
              value={0}
              label={`${toggleData} sebelum pandemi`}
              position="right"
            />
            <EventMarker
              type="flag"
              axis="mobility"
              event={tracker.event}
              infoTimeFormat="%d-%m-%Y"
              info={[{ label: toggleData, value: `${tracker.value}%` }]}
              column="ratio"
              markerLabelAlign="left"
              markerRadius={3}
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default TimeSeriesChart;
