import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { Box, Typography } from "@material-ui/core";
import { TOGGLE } from "../../constants/MapConstants";
export const getChangeCaption = (hoverInfo, heatData, toggle, toggleData) => {
  const toggleType = toggleData === "Mobilitas" ? "change" : "ratio";
  const isDistrict = toggle === TOGGLE.CITY;
  const isProvince = toggle === TOGGLE.PROVINCE;
  const isMobility = toggleData === "Mobilitas";
  const isRatio = toggleData === "Ratio";
  const district = heatData.data[hoverInfo.object.properties.kab];
  const province = heatData.data[hoverInfo.object.properties.Propinsi];
  if (
    (isDistrict && typeof district === "undefined") ||
    (isProvince && typeof province === "undefined")
  )
    return "";
  const data = isDistrict ? district[toggleType] : province[toggleType];
  if (data <= 0) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="bold"
      >
        {isMobility && <TrendingDownIcon />}

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
        {isRatio && <TrendingUpIcon />}
        <Typography variant="h4" fontStyle="oblique">
          <Box fontWeight="bold" ml={1}>
            {data}%
          </Box>
        </Typography>
      </Box>
    );
  }
};
