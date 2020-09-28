import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { Box, Typography } from "@material-ui/core";
export const getChangeCaption = (hoverInfo, heatData, toggleData) => {
  let change = heatData.data[hoverInfo.object.properties.kab].change;
  if (change <= 0) {
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
            {Math.abs(change)}%
          </Box>
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        {toggleData === "Mobilitas" && <TrendingUpIcon />}
        <Typography variant="h4" fontStyle="oblique">
          <Box fontWeight="bold" ml={1}>
            {change}%
          </Box>
        </Typography>
      </Box>
    );
  }
};
