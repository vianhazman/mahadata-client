import { Box, Paper, Typography } from "@material-ui/core";

import React from "react";
import { TOGGLE } from "../../constants/MapConstants";
import { getChangeCaption } from "./utils";

const HoverTooltip = ({
  hoverInfo,
  heatData,
  toggle,
  toggleData,
  caseData,
}) => {
  let dataExist;
  try {
    dataExist =
      heatData.data[hoverInfo.object.properties.kab] !== undefined ||
      heatData.data[hoverInfo.object.properties.Propinsi] !== undefined;
    if (!dataExist) {
      console.log(heatData.data[hoverInfo.object.properties.kab]);
    }
  } catch (error) {
    dataExist = false;
  }

  return (
    <Paper
      style={{
        position: "absolute",
        zIndex: 1,
        width: "fit-content",
        pointerEvents: "none",
        padding: "0.5%",
        left: hoverInfo.x ? hoverInfo.x : 10,
        top: hoverInfo.y ? hoverInfo.y : 10,
      }}
    >
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="caption">
          <Box fontWeight="bold" mr={2}>
            {toggle === TOGGLE.CITY
              ? `${hoverInfo.object.properties.kab}, ${hoverInfo.object.properties.provinsi}`
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
              {getChangeCaption(hoverInfo, heatData, toggle, toggleData)}
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
                    <Box fontWeight="bold">
                      {caseData
                        ? caseData.data[hoverInfo.object.properties.Propinsi]
                        : "-"}
                    </Box>
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
