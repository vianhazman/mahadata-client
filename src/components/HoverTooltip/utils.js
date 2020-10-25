import { Box, Typography } from "@material-ui/core";

import React from "react";
import { TOGGLE } from "../../constants/MapConstants";

export const getChangeCaption = (hoverInfo, heatData, toggle, toggleData) => {
  const toggleType = toggleData === "Mobilitas" ? "change" : "ratio";
  const isDistrict = toggle === TOGGLE.CITY;
  const isProvince = toggle === TOGGLE.PROVINCE;
  const isMobility = toggleData === TOGGLE.MOBILITY;
  const isRatio = toggleData === TOGGLE.RATIO;
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
        {isMobility}

        <Typography variant="h4" fontStyle="oblique">
          <Box fontWeight="bold" ml={1}>
            - {Math.abs(data)}%
          </Box>
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        {isRatio}
        <Typography variant="h4" fontStyle="oblique">
          <Box fontWeight="bold" ml={1}>
            + {data}%
          </Box>
        </Typography>
      </Box>
    );
  }
};
