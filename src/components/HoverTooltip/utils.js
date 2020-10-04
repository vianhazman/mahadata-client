import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { Box, Typography } from "@material-ui/core";
import { TOGGLE } from "../../constants/MapConstants";
export const getChangeCaption = (hoverInfo, heatData, toggle, toggleData) => {
  const toggleType = toggleData === "Mobilitas" ? "change" : "ratio";

  const data =
    toggle === TOGGLE.CITY
      ? heatData.data[hoverInfo.object.properties?.kab][toggleType]
      : heatData.data[hoverInfo.object.properties?.Propinsi][toggleType];
  if (data <= 0) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="bold"
      >
        {toggleData === "Mobilitas" && <TrendingDownIcon />}
        <Typography variant="h4" fontStyle="oblique">
          <Box fontWeight="bold" ml={1}>
            {Math.abs(data)}%
          </Box>
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        {toggleData === "Ratio" && <TrendingUpIcon />}
        <Typography variant="h4" fontStyle="oblique">
          <Box fontWeight="bold" ml={1}>
            {data}%
          </Box>
        </Typography>
      </Box>
    );
  }
};
