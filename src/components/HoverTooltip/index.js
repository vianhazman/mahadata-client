import { Paper, Typography } from "@material-ui/core";

import React from "react";
import { TOGGLE } from "../../constants/MapConstants";
import { getChangeCaption } from "./utils";

const HoverTooltip = ({ hoverInfo, heatData, toggle }) => {
  return (
    <Paper
      style={{
        position: "absolute",
        zIndex: 1,
        pointerEvents: "none",
        padding: "0.5%",
        left: hoverInfo.x,
        top: hoverInfo.y,
      }}
    >
      <Typography variant="caption">
        {toggle === TOGGLE.CITY
          ? hoverInfo.object.properties.KABKOT
          : hoverInfo.object.properties.Propinsi}
        {toggle === TOGGLE.CITY
          ? `, ${hoverInfo.object.properties.PROVINSI}`
          : ""}
      </Typography>
      <Typography variant="h6" fontStyle="oblique">
        {getChangeCaption(hoverInfo, heatData)}
      </Typography>
    </Paper>
  );
};

export default HoverTooltip;
