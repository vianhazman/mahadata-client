import {
  ChartContainer,
  ChartRow,
  Charts,
  EventChart,
  EventMarker,
  LineChart,
  Resizable,
  YAxis,
  Baseline,
  BarChart,
} from "react-timeseries-charts";
import React, { useState } from "react";
import {
  getAnnotationColor,
  getAnnotationTimeSeries,
  getChartTimeSeries,
  baselineStyle,
} from "./utils";

import { ANNOTATION_TYPE } from "../../constants/MapConstants";
import Annotation from "../../services/HeatMap/annotation";

const TimeSeriesChart = ({ data, selectedRegion, toggleData }) => {
  const mobility = getChartTimeSeries(data, selectedRegion, toggleData);

  const rangeAnnotation = getAnnotationTimeSeries(
    Annotation,
    "Annotations",
    ANNOTATION_TYPE.RANGE,
    selectedRegion
  );
  const eventAnnotation = getAnnotationTimeSeries(
    Annotation,
    "Annotations",
    ANNOTATION_TYPE.EVENT,
    "Global"
  );

  const [tracker, setTracker] = useState({ value: null, event: null });

  const handleTrackerChanged = (t) => {
    if (t) {
      const e = mobility.atTime(t);
      // const eventTime = new Date(
      //   e.begin().getTime() + (e.end().getTime() - e.begin().getTime()) / 2
      // );
      const eventValue = e.get("ratio");
      setTracker({
        value: eventValue.toFixed(2),
        event: e,
      });
    } else {
      setTracker({ value: null, event: null });
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
        <ChartRow height="35">
          <Charts>
            <EventChart
              series={rangeAnnotation}
              style={getAnnotationColor}
              label={(e) => e.get("title")}
            />
          </Charts>
        </ChartRow>
        <ChartRow height="35">
          <Charts>
            <EventChart
              series={eventAnnotation}
              style={getAnnotationColor}
              label={(e) => e.get("title")}
            />
          </Charts>
        </ChartRow>
        <ChartRow>
          <YAxis
            id="mobility"
            label={toggleData}
            format=".2f"
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
