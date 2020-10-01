import { Box, Paper, Typography } from "@material-ui/core";

import React from "react";
import { TOGGLE } from "../../constants/MapConstants";
import { getChangeCaption } from "./utils";

const HoverTooltip = ({ hoverInfo, heatData, toggle, toggleData }) => {
  let dataExist =
    heatData.data[hoverInfo.object.properties.kab] !== undefined ||
    heatData.data[hoverInfo.object.properties.Propinsi] !== undefined;

  return (
    <Paper
      style={{
        position: "absolute",
        zIndex: 1,
        width: "fit-content",
        pointerEvents: "none",
        padding: "0.5%",
        left: hoverInfo.x,
        top: hoverInfo.y,
      }}
    >
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="caption">
          <Box fontWeight="bold" mr={2}>
            {toggle === TOGGLE.CITY
              ? `${hoverInfo.object.properties.KABKOT}, ${hoverInfo.object.properties.PROVINSI}`
              : hoverInfo.object.properties.Propinsi}
          </Box>
        </Typography>
        <Typography variant="caption">{heatData.date ?? ""}</Typography>
      </Box>
      {dataExist && (
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box mr={1}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              {getChangeCaption(hoverInfo, heatData, toggleData)}
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="caption">{toggleData}</Typography>
            </Box>
          </Box>
          {toggle === TOGGLE.PROVINCE && (
            <Box ml={1}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h4" fontStyle="oblique">
                    <Box fontWeight="bold">1000</Box>
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="caption">Kasus</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Paper>
  );
};

export default HoverTooltip;
