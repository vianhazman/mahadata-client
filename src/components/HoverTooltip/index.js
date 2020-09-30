import { Box, Grid, Paper, Typography } from "@material-ui/core";

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
        <Grid container spacing={1}>
          <Grid item xs={6}>
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
          </Grid>
          {/* {toggle === TOGGLE.PROVINSI && (
            <Grid item sm={toggle === TOGGLE.PROVINSI ? 6 : 12}>
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
            </Grid>
          )} */}
        </Grid>
      )}
    </Paper>
  );
};

export default HoverTooltip;
